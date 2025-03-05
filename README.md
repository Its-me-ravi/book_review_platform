Description

The Book Review Platform is a full-stack web application where users can browse books, read and write reviews, and rate books. The application consists of a React frontend and a Node.js backend using Express and MongoDB.

<a href="https://book-review-platform-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
  <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
    Live Demo
  </button>
</a>

Features

Frontend

Responsive UI with:

Home page displaying featured books

Book listing page with search and filter functionality

Individual book page with details and reviews

User profile page

Review submission form

State management using Redux or React Context

Navigation using React Router

API integration with the backend

Error handling and loading states

Backend

RESTful API with the following endpoints:

GET /books - Retrieve all books (with pagination)

GET /books/:id - Retrieve a specific book

POST /books - Add a new book (admin only)

GET /reviews?bookId=BOOK_ID - Retrieve reviews for a book

POST /reviews - Submit a new review

GET /users/:id - Retrieve user profile

PUT /users/:id - Update user profile

Data validation and error handling

MongoDB for data persistence

Tech Stack

Frontend: React, React Router, Redux/Context API, Axios

Backend: Node.js, Express, MongoDB, Mongoose

API Integration: Google Books API

Installation

Prerequisites

Node.js installed

MongoDB database setup

Clone the Repository

git clone https://github.com/Its-me-ravi/book_review_platform.git
cd book-review-platform

Backend Setup

cd backend
npm install
npm start

Frontend Setup

cd frontend
npm install
npm start

API Integration

The application fetches book details from the Google Books API and stores additional data in MongoDB.

Deployment

(Optional) Deploy the backend using services like Heroku or AWS, and the frontend using Netlify or Vercel.

Contributing

Fork the repository

Create a new branch (git checkout -b feature-branch)

Commit changes (git commit -m 'Add new feature')

Push to the branch (git push origin feature-branch)

Create a Pull Request

License

This project is licensed under the MIT License.