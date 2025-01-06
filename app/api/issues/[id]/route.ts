import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// GET Issue by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const issue = await prisma.issue.findUnique({
      where: { id: params.id },
    });

    if (!issue) {
      return NextResponse.json({ error: "Issue not found." }, { status: 404 });
    }

    return NextResponse.json(issue, { status: 200 });
  } catch (error) {
    console.error("Error fetching issue:", error);
    return NextResponse.json(
      { error: "Failed to fetch issue. Please try again later." },
      { status: 500 }
    );
  }
}

// PATCH Issue
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const updatedIssue = await prisma.issue.update({
      where: { id: params.id },
      data: body,
    });

    return NextResponse.json(updatedIssue, { status: 200 });
  } catch (error) {
    console.error("Error updating issue:", error);
    return NextResponse.json(
      { error: "Failed to update issue. Please try again later." },
      { status: 500 }
    );
  }
}

// DELETE Issue
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deletedIssue = await prisma.issue.delete({
      where: { id: params.id },
    });

    return NextResponse.json(deletedIssue, { status: 200 });
  } catch (error) {
    console.error("Error deleting issue:", error);
    return NextResponse.json(
      { error: "Failed to delete issue. Please try again later." },
      { status: 500 }
    );
  }
}
