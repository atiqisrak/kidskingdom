const VideoCard = ({ title, thumbnailUrl, videoId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <iframe
        width="300"
        height="169"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
