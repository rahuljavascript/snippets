import { db } from "@/db";
import { notFound } from "next/navigation";

export async function getSnippet(id: number) {
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    notFound();
  }

  return snippet;
}

