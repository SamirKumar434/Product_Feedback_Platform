import { currentUser } from "@clerk/nextjs/server";

export async function syncCurrentUser() {
  try {
    // Get user data from clerk
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return null;
    }

    const email = clerkUser.emailAddresses[0]?.emailAddress;

    if (!email) {
      throw new Error("User email not found");
    }
  } catch (error) {}
}
