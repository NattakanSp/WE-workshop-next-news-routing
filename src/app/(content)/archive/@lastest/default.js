import NewsList from "@/component/NewsList";
import { getLatestNews } from "@/data/news";

export default function LatestNewsPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
