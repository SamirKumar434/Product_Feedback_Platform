import { STATUS_ORDER } from "@/app/data/status-data";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }, // params are always strings
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Admin access required" },
        { status: 403 },
      );
    }

    const { status } = await request.json();
    const { id } = await params;
    const postId = Number(id); // convert to number for Prisma

    if (Number.isNaN(postId)) {
      return NextResponse.json({ error: "Invalid post id" }, { status: 400 });
    }

    if (!STATUS_ORDER.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const updatePost = await prisma.post.update({
      where: { id: postId },
      data: { status },
      include: {
        author: true,
        votes: true,
      },
    });
    return NextResponse.json(updatePost);
  } catch (error) {
    console.error("Error updating post status:", error); // was silently swallowed
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
