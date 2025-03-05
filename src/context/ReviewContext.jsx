// // import { createContext, useState, useEffect } from "react";

// // export const ReviewContext = createContext();

// // export const ReviewProvider = ({ children }) => {
// //   const [reviews, setReviews] = useState([]);

// //   useEffect(() => {
// //     // ✅ Load reviews from localStorage
// //     const storedReviews = localStorage.getItem("reviews");
// //     if (storedReviews) {
// //       setReviews(JSON.parse(storedReviews));
// //     }
// //   }, []);

// //   const addReview = (newReview) => {
// //     const updatedReviews = [...reviews, newReview];
// //     setReviews(updatedReviews);
// //     localStorage.setItem("reviews", JSON.stringify(updatedReviews)); // ✅ Save reviews
// //   };

// //   return (
// //     <ReviewContext.Provider value={{ reviews, addReview }}>
// //       {children}
// //     </ReviewContext.Provider>
// //   );
// // };



// import { createContext, useState, useEffect } from "react";

// export const ReviewContext = createContext();

// export const ReviewProvider = ({ children }) => {
//   const [reviews, setReviews] = useState({});

//   useEffect(() => {
//     const storedReviews = localStorage.getItem("reviews");
//     if (storedReviews) {
//       setReviews(JSON.parse(storedReviews));
//     }
//   }, []);

//   const addReview = (bookId, newReview) => {
//     const updatedReviews = {
//       ...reviews,
//       [bookId]: [...(reviews[bookId] || []), newReview],
//     };
//     setReviews(updatedReviews);
//     localStorage.setItem("reviews", JSON.stringify(updatedReviews));
//   };

//   // ✅ **New Delete Function**
//   const deleteReview = (bookId, reviewIndex) => {
//     if (!reviews[bookId]) return;

//     const updatedReviews = { ...reviews };
//     updatedReviews[bookId].splice(reviewIndex, 1); // Remove review from the array

//     // If no reviews left for this book, remove the key
//     if (updatedReviews[bookId].length === 0) {
//       delete updatedReviews[bookId];
//     }

//     setReviews(updatedReviews);
//     localStorage.setItem("reviews", JSON.stringify(updatedReviews));
//   };

//   return (
//     <ReviewContext.Provider value={{ reviews, addReview, deleteReview }}>
//       {children}
//     </ReviewContext.Provider>
//   );
// };


import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext"; 

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState({});

  // ✅ Load reviews for logged-in user
  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || {};
    if (user && user.email) {
      setUserReviews(storedReviews); // Load all users' reviews
    } else {
      setUserReviews({});
    }
  }, [user]);

  // ✅ Add Review (per user)
  const addReview = (bookId, newReview) => {
    if (!user || !user.email) return;

    const allReviews = JSON.parse(localStorage.getItem("reviews")) || {};
    const userSpecificReviews = allReviews[user.email] || {}; 

    const updatedReviews = {
      ...userSpecificReviews,
      [bookId]: [...(userSpecificReviews[bookId] || []), newReview],
    };

    allReviews[user.email] = updatedReviews;
    setUserReviews(allReviews);
    localStorage.setItem("reviews", JSON.stringify(allReviews)); // ✅ Save all users' reviews
  };

  // ✅ Delete Review (per user)
  const deleteReview = (bookId, reviewIndex) => {
    if (!user || !user.email) return;

    const allReviews = JSON.parse(localStorage.getItem("reviews")) || {};
    const userSpecificReviews = allReviews[user.email] || {}; 

    if (!userSpecificReviews[bookId]) return;

    const updatedReviews = { ...userSpecificReviews };
    updatedReviews[bookId].splice(reviewIndex, 1);

    if (updatedReviews[bookId].length === 0) {
      delete updatedReviews[bookId];
    }

    allReviews[user.email] = updatedReviews;
    setUserReviews(allReviews);
    localStorage.setItem("reviews", JSON.stringify(allReviews)); // ✅ Save all users' reviews
  };

  return (
    <ReviewContext.Provider value={{ userReviews, addReview, deleteReview }}>
      {children}
    </ReviewContext.Provider>
  );
};
