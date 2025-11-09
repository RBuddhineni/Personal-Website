# Personal-Website
Personal Portfolio — MERN Stack

Welcome to my personal portfolio, built end-to-end on the MERN stack: MongoDB, Express, React, and Node.js. This site is my living resume—projects, experience, and things I’m learning—designed to be fast, clean, and easy to extend as I grow.

What’s inside

- MongoDB: Stores dynamic content like projects, blog posts, and contact messages. Simple schemas (e.g., Projects, Posts, Messages) with indexes for quick lookups, connected via Mongoose using ‎`MONGODB_URI`.

- Express: Lightweight REST API serving the frontend. Routes like ‎`/api/projects` and ‎`/api/contact`, with middleware for JSON parsing, CORS, and basic validation/error handling.

- React: Component-based UI for pages like Home, Projects, About, and Contact. Client-side routing, reusable cards and layout components, and responsive styling for a smooth experience.

- Node.js: App runtime and server setup. Boots Express, connects Mongo, provides a ‎`/health` check, and handles environment config for local and production.

Run locally

- Backend: ‎`cd server && npm install && npm run dev`

- Frontend: ‎`cd client && npm install && npm run dev`

- Env: ‎`server/.env` needs ‎`MONGODB_URI` and ‎`PORT`; ‎`client/.env` can set ‎`VITE_API_URL`.

Deploy

Host React on Vercel/Netlify and the Node/Express API on Render/Railway, with MongoDB Atlas for the database.
