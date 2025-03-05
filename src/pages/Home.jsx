import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";

const Home = () => {
  const { books, loading } = useContext(BookContext);

  if (loading) return <p className="text-center text-lg font-semibold text-gray-700">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Welcome to the Book Review Platform
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Discover, browse, and review your favorite books!
        </p>
      </header>

      {/* Book List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books?.length > 0 ? (
          books.map((book) => (
            <div
              key={book.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-5 hover:shadow-xl transition-all duration-300"
            >
              <BookCard book={book} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
