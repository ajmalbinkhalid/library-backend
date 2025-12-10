Books World – Backend (NestJS + Prisma + Neon PostgreSQL)

This is the backend service for the Books World application, built using NestJS, Prisma ORM, and PostgreSQL hosted on Neon Cloud.

This service exposes APIs for:

User Authentication (JWT)

CRUD operations for Authors

CRUD operations for Books

Requirements

Ensure the following are installed:

Requirement	Version
Node.js	v18 or above
npm	v8 or above
Neon PostgreSQL database	Required
1️⃣ Environment Setup

Go to backend folder:


cd library-backend

Create .env file :

Copy everything from .env.example and paste into .env you created


Install dependencies:

npm install


Generate Prisma Client:

npx prisma generate


Start the development server:

npm run start:dev


Backend will run on:

http://localhost:3000