import Layout from "../../components/Layout";
import StoryCard from "../../components/StoryCard";

export default async function Stories() {
  const res = await fetch("/api/stories");
  const stories = await res.json();

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Our Stories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            title={story.title}
            description={story.description}
            imageUrl={story.imageUrl}
            href={`/stories/${story.id}`}
          />
        ))}
      </div>
    </Layout>
  );
}
