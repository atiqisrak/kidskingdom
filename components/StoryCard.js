const StoryCard = ({ title, description, imageUrl, href }) => {
  return (
    <Link href={href}>
      <a className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default StoryCard;
