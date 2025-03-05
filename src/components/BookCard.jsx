import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col items-center w-full max-w-[500px] h-[380px]">
      {/* Clickable Image with Fixed Size */}
      <Link to={`/book/${book.id}`} className="w-full flex justify-center">
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
          alt={book.volumeInfo.title}
          className="w-[120px] h-[180px] object-contain rounded-lg cursor-pointer transition-transform transform hover:scale-105"
        />
      </Link>

      {/* Book Title (Fixed Height for Consistency) */}
      <h3 className="text-lg md:text-xl font-bold mt-3 text-gray-900 dark:text-white text-center line-clamp-2 h-[50px]">
        {book.volumeInfo.title}
      </h3>

      {/* Book Authors (Fixed Height) */}
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 text-center h-[40px]">
        {book.volumeInfo.authors?.join(", ") || "Unknown Author"}
      </p>

      {/* View Details Button */}
      <Link 
        to={`/book/${book.id}`} 
        className="mt-auto py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all"
      >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;
