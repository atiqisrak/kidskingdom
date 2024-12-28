import Layout from "../../components/Layout";

const StoryPage = ({ story }) => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">{story.title}</h1>
      <img
        src={story.imageUrl}
        alt={story.title}
        className="w-full max-h-96 object-cover mb-4"
      />
      <p>{story.description}</p>
      {/* Add more content for the story here */}
    </Layout>
  );
};

export async function getStaticPaths() {
  // Replace this with your actual data fetching logic
  const stories = [
    {
      id: 1,
      title: "The Little Red Riding Hood",
      imageUrl: "/images/story1.jpg",
      description: "...",
    },
    // ... more stories
  ];

  const paths = stories.map((story) => ({
    params: { slug: story.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Replace this with your actual data fetching logic
  // (e.g., from a database or a CMS)
  const stories = [
    {
      id: 1,
      title: "The Little Red Riding Hood",
      imageUrl: "/images/story1.jpg",
      description: "...",
    },
    // ... more stories
  ];

  const story = stories.find((story) => story.id === parseInt(params.slug));

  return { props: { story } };
}

export default StoryPage;
