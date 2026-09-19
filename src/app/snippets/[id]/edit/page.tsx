import { getSnippet } from "@/db/queries";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
  const { id } = await props.params;
  const snippet = await getSnippet(parseInt(id));

  return <SnippetEditForm snippet={snippet} />;
}




