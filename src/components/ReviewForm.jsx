import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { ReviewContext } from "../context/ReviewContext";

const ReviewForm = ({ bookId }) => {
  const { user } = useContext(AuthContext);
  const { addReview } = useContext(ReviewContext);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      setMessage("⚠️ Please log in to add a review!");
      return;
    }

    if (!reviewText.trim()) {
      setMessage("⚠️ Review cannot be empty!");
      return;
    }

    if (rating === 0) {
      setMessage("⚠️ Please select a rating!");
      return;
    }

    addReview(bookId, { text: reviewText, rating, user: user.name });
    setReviewText(""); // Clear input
    setRating(0); // Reset rating
    setMessage("✅ Review added successfully!"); // Show success message
  };

  return (
    <div className="mt-4 p-4 border rounded">
      <h3 className="font-bold">Add a Review</h3>
      
      {/* Rating Stars */}
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={24}
            className={star <= rating ? "text-yellow-500 cursor-pointer" : "text-gray-400 cursor-pointer"}
            onClick={() => setRating(star)}
          />
        ))}
      </div>

      {/* Review Input */}
      <form onSubmit={handleSubmit} className="mt-2">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Write your review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 rounded text-white bg-blue-500 hover:bg-blue-600"
        >
          Submit Review
        </button>
      </form>

      {message && <p className="text-sm mt-2 text-red-500">{message}</p>}
    </div>
  );
};

export default ReviewForm;
