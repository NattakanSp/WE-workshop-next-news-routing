import NewsList from "@/component/NewsList";
import { getAllNews } from "@/data/news";

export default async function NewsPage() {
  const news = await getAllNews();
  return (
    <>
      <h1>หน้ารายการข่าว</h1>
      <NewsList news={news} />
    </>
  );
}
