import { FaEye, FaStar } from "react-icons/fa";
import { BsBookmark, BsShare } from "react-icons/bs";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-base-200  rounded-xl p-5 shadow-md mb-5 space-y-4">
      {/* Top Author Bar */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3 text-lg text-gray-500">
          <BsBookmark className="cursor-pointer" />
          <BsShare className="cursor-pointer" />
        </div>
      </div>

      {/* Title & Image */}
      <h2 className="text-xl font-bold leading-snug">{title}</h2>
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full max-h-72 object-cover rounded"
      />

      {/* Details */}
      <p className="text-gray-700">
        {details.length > 250 ? (
          <>
            {details.slice(0, 250)}...{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </p>

      {/* Bottom Rating & Views */}
      <div className="flex justify-between items-center border-t pt-3 text-sm text-gray-600">
        <div className="flex items-center gap-2 text-orange-500">


            {Array.from({length:rating.number}).map((_ , i ) =>(
                <FaStar key={i} />
            ))} 
             <span className="text-black">{rating.number}</span>
         
        </div>
        <div className="flex items-center gap-1">
          <FaEye /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
