# 📝 React Blog Application

A modern and stylish **Blog Application** built with React.js, Node.js, Express, and MongoDB. This app allows users to register, login, publish, edit, and read blog posts — all within a sleek, responsive UI that supports **light/dark mode** toggling.

---

## 🚀 Features

- 🔐 User Authentication (Register / Login / Logout)
- 🖋️ Create, Read, Update, and Delete (CRUD) blog posts
- 🌗 Light and Dark Theme Toggle
- 🧾 Public Blog Feed
- 🧑‍💻 Private Dashboard for managing your posts
- 💬 Responsive design for all devices
- 🎨 Clean and gradient-based UI for a modern look

---

## 🛠️ Tech Stack

| Frontend            | Backend             | Database      |
|---------------------|---------------------|---------------|
| React + React Router | Node.js + Express.js | MongoDB       |

---

## 📸 Screenshots

![{EB0FB407-98A0-426A-B8F9-A7A8A7993B22}](https://github.com/user-attachments/assets/eba5c516-40eb-47cb-9895-188a3760732f)

*Public blog feed with light theme*

![{5BEC1B3C-35E9-4ECB-A435-8331CABF3AD3}](https://github.com/user-attachments/assets/1666c097-783f-4ed2-89b7-dc9d240106cc)

*Private dashboard with post editor in dark mode*

---

## 📂 Folder Structure

├── client/ # React frontend
│ ├── components/ # Reusable components (Header, PostList, etc.)
│ ├── pages/ # Login, Register, Dashboard, etc.
│ ├── context/ # Theme & Auth context
│ └── App.jsx
├── server/ # Node.js + Express backend
│ ├── routes/ # Auth and Post APIs
│ ├── models/ # Mongoose models
│ └── server.js





---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js (v18 or later)
- MongoDB (local or cloud via MongoDB Atlas)

### 🔧 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/react-blog-app.git
cd react-blog-app

# 2. Install server dependencies
cd server
npm install

# 3. Install client dependencies
cd ../client
npm install



⚙️ Configuration
Create a .env file in server/:

ini
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/blogApp
JWT_SECRET=yourSecretKey



▶️ Run the Application
bash
Copy
Edit
# Terminal 1 - Run backend
cd server
npm start

# Terminal 2 - Run frontend
cd client
npm start
Visit http://localhost:5173/ (or your configured port).

📦 Features You Can Add Next
💾 Save posts as drafts

🗃️ Categories & tags for posts

📸 Image uploads with Cloudinary or Firebase

🔍 Full-text search

💬 Comment system

💡 Author
Made with ❤️ by Prity
