import Image from "next/image";
import localFont from "next/font/local";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import VideoCard from "@/components/VideoCard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [videos, setVideos] = useState([]);
  const fetchVideos = async () => {
    const res = await fetch("/api/youtube");
    const videos = await res.json();
    return videos;
  };

  useEffect(() => {
    fetchVideos().then((videos) => setVideos(videos));
  }, []);

  console.log("Videos", videos);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Welcome to Kids Kingdom!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            thumbnailUrl={video.thumbnailUrl}
            videoId={video.id}
          />
        ))}
      </div>
    </Layout>
  );
}
