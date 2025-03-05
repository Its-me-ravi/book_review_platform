// import { useParams } from "react-router-dom";
// import { useContext } from "react";
// import { BookContext } from "../context/BookContext";
// import { ReviewContext } from "../context/ReviewContext";
// import ReviewForm from "../components/ReviewForm";

// const BookDetails = () => {
//   const { id } = useParams();
//   const { books } = useContext(BookContext);
//   const { reviews } = useContext(ReviewContext);
//   const book = books.find((b) => b.id === id);

//   if (!book) return <p>Book not found</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold">{book.volumeInfo.title}</h2>
//       <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
//       <p>{book.volumeInfo.description}</p>

//       {/* Review Section */}
//       <h3 className="mt-4 text-lg font-bold">Reviews</h3>
//       {reviews[id] ? (
//         reviews[id].map((review, index) => (
//           <div key={index} className="border p-2 mt-2">
//             <p className="font-semibold">{review.rating} ⭐</p>
//             <p>{review.text}</p>
//           </div>
//         ))
//       ) : (
//         <p>No reviews yet.</p>
//       )}

//       <ReviewForm bookId={id} />
//     </div>
//   );
// };

// export default BookDetails;



import { useParams } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { ReviewContext } from "../context/ReviewContext";
import ReviewForm from "../components/ReviewForm";

const BookDetails = () => {
  const { id } = useParams();
  const { books } = useContext(BookContext);
  const { reviews } = useContext(ReviewContext);

  if (!books || books.length === 0) return <p>Loading books...</p>;

  const book = books.find((b) => b.id === id?.toString());

  if (!book) return <p>Book not found</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{book.volumeInfo.title}</h2>
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <p>{book.volumeInfo.description}</p>

      {/* Review Section */}
      <h3 className="mt-4 text-lg font-bold">Reviews</h3>
      {reviews && reviews[id] && Array.isArray(reviews[id]) ? (
        reviews[id].map((review, index) => (
          <div key={index} className="border p-2 mt-2">
            <p className="font-semibold">{review.rating} ⭐</p>
            <p>{review.text}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}

      <ReviewForm bookId={id} />
    </div>
  );
};

export default BookDetails;
