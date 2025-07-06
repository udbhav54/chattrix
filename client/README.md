# 📨 Real-Time Chat App (MERN Stack)

A real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) and Socket.IO. Users can register, search for other users, send friend requests, chat one-on-one or in groups, and manage conversations. Includes admin access with secret-key protection to monitor activity.

## 🔧 Features

- User authentication (JWT-based)
- Friend request system with notifications
- Real-time messaging (Socket.IO)
- File and image sharing
- Group chats with admin roles
- Admin dashboard for monitoring (secret key protected)

## 🚀 Tech Stack

- **Frontend**: React, Tailwind CSS / MUI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Real-time**: Socket.IO
- **Auth**: JWT

## 📦 How to Run

```bash
# Clone the repo
git clone https://github.com/your-username/chat-app.git
cd chat-app

# Install dependencies
npm install

# Start both client and server
npm run dev
