import Layout from "../../components/Layout";
import VideoCard from "../../components/VideoCard";

export default async function Videos() {
  const res = await fetch("/api/youtube");
  const videos = await res.json();

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Our Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <VideoCard
            key={video.id.videoId}
            title={video.snippet.title}
            thumbnailUrl={video.snippet.thumbnails.medium.url}
            videoId={video.id.videoId}
          />
        ))}
      </div>
    </Layout>
  );
}
