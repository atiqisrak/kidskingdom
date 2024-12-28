// pages/api/stories.js
export default function handler(req, res) {
  // Replace this with your actual data fetching logic
  // (e.g., from a database, a CMS, or a static JSON file)
  const stories = [
    {
      id: 1,
      title: "The Little Red Riding Hood",
      description:
        "A classic fairytale about a girl who meets a wolf in the woods.",
      imageUrl: "/images/story1.jpg",
    },
    // ... more stories
  ];

  res.status(200).json(stories);
}
