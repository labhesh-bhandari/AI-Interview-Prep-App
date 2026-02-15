# AI Interview Prep – Backend

Backend API for the AI Interview Preparation platform that allows users to generate AI-powered interview questions, manage sessions, and track learning progress.

---

## Features

- JWT Authentication (Register / Login)
- User Profile Management
- Session Management (Create, View, Delete)
- Question Management (Pin, Add Notes)
- AI-generated Interview Questions using Gemini API
- Concept Explanation Generator
- Profile Image Upload (Multer)
- MongoDB Database Integration
- Protected Routes with Middleware

---

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt Password Hashing
- Multer (file uploads)
- Google Gemini AI (`@google/genai`)
- Cors (Cross Origin Resource Sharing)

---

## AI Integration

The backend uses **Google Gemini API** to:

- Generate interview Q&A
- Generate concept explanations
