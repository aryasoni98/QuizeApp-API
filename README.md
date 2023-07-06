# Quiz App API

Quiz App API is a RESTful API for creating and managing quizzes. Users can create quizzes with multiple choice questions, share the quizzes with others, and view the participants' scores. 

## Features

- User authentication (Login/Signup)
- Quiz creation and update
- Quiz participation
- View scores

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/aryasoni98/QuizeApp-API.git
2. Create a .env file in the root directory and add your MongoDB connection string:
   ```sh
   MONGODB_URI=your_mongodb_uri
3. Run the server
   ```sh
   node server.js

### Usage
You can use tools like Postman or Curl to send HTTP requests to the API.

- POST /api/auth/signup: Register a new user.
- POST /api/auth/login: Login a user.
- POST /api/quizzes: Create a new quiz.
- GET /api/quizzes: Get all quizzes created by the logged-in user.
- GET /api/quizzes/:quizId: Get the details of a specific quiz.
- PUT /api/quizzes/:quizId: Update a specific quiz.
- DELETE /api/quizzes/:quizId: Delete a specific quiz.
- POST /api/quizzes/:quizId/participants: A participant takes a quiz.
- GET /api/quizzes/:quizId/participants: Get the list of participants and their scores for a specific quiz.
- GET /api/quizzes/:quizId/participants/:participantId/score: Get the score of a specific participant.
