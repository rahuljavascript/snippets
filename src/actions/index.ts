"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  revalidatePath("/");
  redirect("/");
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData,
) {
  const title = formData.get("title");
  const code = formData.get("code");

  // Type & empty checks
  if (typeof title !== "string" || title.trim().length === 0) {
    return { message: "Title is required" };
  }
  if (title.trim().length < 3) {
    return { message: "Title must be at least 3 characters long" };
  }
  if (title.length > 100) {
    return { message: "Title must be less than 100 characters" };
  }

  if (typeof code !== "string" || code.trim().length === 0) {
    return { message: "Code is required" };
  }
  if (code.trim().length < 3) {
    return { message: "Code must be at least 3 characters long" };
  }
  if (code.length > 10000) {
    return { message: "Code must be less than 10,000 characters" };
  }

  try {
    await db.snippet.create({
      data: {
        title: title.trim(),
        code,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { message: err.message };
    }
    return { message: "Something went wrong while saving the snippet" };
  }

  revalidatePath("/");
  redirect("/");
}

