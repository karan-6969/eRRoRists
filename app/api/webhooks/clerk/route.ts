import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";

export async function POST(req: Request) {
  // Get the webhook secret from environment variables
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error("Missing CLERK_WEBHOOK_SECRET");
    return new NextResponse("Webhook secret missing", { status: 500 });
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, return an error
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new NextResponse("Missing svix headers", { status: 400 });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your webhook secret
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the webhook payload
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new NextResponse("Error verifying webhook", { status: 400 });
  }

  // Handle the webhook event
  const { type, data } = evt;

  console.log(`Webhook received: ${type}`);

  // Process different event types
  switch (type) {
    case "user.created":
      // Add user to your database
      await createUserInDatabase(data);
      break;
    case "user.updated":
      // Update user in your database
      await updateUserInDatabase(data);
      break;
    case "user.deleted":
      // Delete user from your database
      await deleteUserFromDatabase(data);
      break;
    // Add more cases as needed
  }

  return NextResponse.json({ success: true });
}

// These functions would connect to your database
async function createUserInDatabase(data: any) {
  // Connect to your database (Prisma, Mongoose, etc.)
  // Create user record with data from Clerk
  console.log("Creating user:", data.id);
  // Example implementation would go here:
  // await prisma.user.create({
  //   data: {
  //     clerkId: data.id,
  //     email: data.email_addresses[0].email_address,
  //     name: `${data.first_name} ${data.last_name}`
  //   }
  // });
}

async function updateUserInDatabase(data: any) {
  console.log("Updating user:", data.id);
  // Example implementation would go here:
  // await prisma.user.update({
  //   where: { clerkId: data.id },
  //   data: {
  //     email: data.email_addresses[0].email_address,
  //     name: `${data.first_name} ${data.last_name}`
  //   }
  // });
}

async function deleteUserFromDatabase(data: any) {
  console.log("Deleting user:", data.id);
  // Example implementation would go here:
  // await prisma.user.delete({ where: { clerkId: data.id } });
}
