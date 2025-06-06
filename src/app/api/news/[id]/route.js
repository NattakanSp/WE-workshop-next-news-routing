import { updateNews, deleteNews } from "@/data/news";

export async function PUT(req, { params }) {
  try {
    const form = await req.formData();
    const news = {
      id: (await params).id,
      slug: form.get("slug"),
      title: form.get("title"),
      content: form.get("content"),
      date: form.get("date"),
    };
    const file = form.get("image");

    const result = await updateNews(news, file);
    return Response.json(result);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(_, { params }) {
  const { id } = await params;
  try {
    await deleteNews(id);
    return new Response(null, { status: 204 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
