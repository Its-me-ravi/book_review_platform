import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext

const RatingStars = ({ onRate }) => {
  const { user } = useContext(AuthContext); // Get logged-in user data
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState(""); // Success or login message

  const handleClick = (value) => {
    if (!user) {
      setMessage("Please log in to add a rating!");
      return;
    }

    setRating(value);
    onRate(value);
    setMessage("Review added successfully!"); // Success message
  };

  return (
    <div className="flex flex-col">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={24}
            className={star <= rating ? "text-yellow-500" : "text-gray-400"}
            onClick={() => handleClick(star)}
          />
        ))}
      </div>
      {message && <p className="text-sm mt-2 text-red-500">{message}</p>}
    </div>
  );
};

export default RatingStars;
