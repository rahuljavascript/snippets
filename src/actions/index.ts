'use server';

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

export async function createSnippet(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  revalidatePath("/");
  redirect("/");
}