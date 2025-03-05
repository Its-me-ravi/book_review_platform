// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import { ReviewContext } from "../context/ReviewContext";
// import { BookContext } from "../context/BookContext";

// const Profile = () => {
//   const { user } = useContext(AuthContext);
//   const { reviews } = useContext(ReviewContext);
//   const { books } = useContext(BookContext);

//   if (!user) return <Navigate to="/login" />;

//   // Ensure books are an array (in case it's stored as an object)
//   const reviewedBooks = Object.keys(reviews)
//     .map((bookId) => books.find((b) => String(b.id) === String(bookId)))
//     .filter((book) => book); // Remove undefined books

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold">Welcome, {user.name}</h2>
//       <h3 className="mt-4 text-lg font-bold">Your Reviews</h3>

//       {reviewedBooks.length === 0 ? (
//         <p>No reviews yet.</p>
//       ) : (
//         reviewedBooks.map((book) => {
//           const bookReviews = reviews[book.id] || [];

//           return (
//             <div key={book.id} className="border p-4 mt-4 rounded-lg bg-white shadow-md">
//               <h4 className="font-bold text-xl">{book.volumeInfo?.title || "Unknown Book"}</h4>
//               <p className="text-sm text-gray-600 mb-2">
//                 {book.volumeInfo?.authors?.join(", ") || "Author unknown"}
//               </p>

//               {Array.isArray(bookReviews) &&
//                 bookReviews.map((review, index) => (
//                   <div key={index} className="mt-2 p-2 border rounded-lg bg-gray-100">
//                     <p className="font-semibold">{review.rating} ⭐</p>
//                     <p>{review.text}</p>
//                   </div>
//                 ))}
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default Profile;

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ReviewContext } from "../context/ReviewContext";
import { BookContext } from "../context/BookContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { userReviews, deleteReview } = useContext(ReviewContext);
  const { books } = useContext(BookContext);

  if (!user) return <Navigate to="/login" />;

  // ✅ Fetch only the logged-in user's reviews
  const userReviewsForUser = userReviews[user.email] || {}; 

  const reviewedBooks = Object.keys(userReviewsForUser)
    .map((bookId) => books.find((b) => String(b.id) === String(bookId)))
    .filter((book) => book);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Welcome, {user.name}</h2>
      <h3 className="mt-4 text-lg font-bold">Your Reviews</h3>

      {reviewedBooks.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviewedBooks.map((book) => {
          const bookReviews = userReviewsForUser[book.id] || [];

          return (
            <div key={book.id} className="border p-4 mt-4 rounded-lg bg-white shadow-md">
              <h4 className="font-bold text-xl">{book.volumeInfo?.title || "Unknown Book"}</h4>
              <p className="text-sm text-gray-600 mb-2">
                {book.volumeInfo?.authors?.join(", ") || "Author unknown"}
              </p>

              {bookReviews.map((review, index) => (
                <div key={index} className="mt-2 p-2 border rounded-lg bg-gray-100 flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{review.rating} ⭐</p>
                    <p>{review.text}</p>
                  </div>
                  
                  <button
                    onClick={() => deleteReview(book.id, index)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          );
        })
      )}
    </div>
  );
};

export default Profile;
