# 🌍 WanderLust

A full-stack Airbnb-inspired web application built using the MERN stack (Node.js, Express.js, MongoDB, and EJS). WanderLust allows users to explore, create, edit, and manage property listings with secure authentication, image uploads, reviews, and category-based filtering.

---

## 🚀 Features

- 🏡 Browse all property listings
- ➕ Create new listings with image upload
- ✏️ Edit and update existing listings
- 🗑️ Delete listings
- 👤 User Authentication (Signup/Login/Logout)
- 🔒 Authorization (Only owners can edit or delete their listings)
- ⭐ Add and delete reviews
- 📂 Category-based property filtering
- ☁️ Cloudinary image storage
- 💬 Flash messages for user actions
- 📱 Responsive UI built with Bootstrap

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- EJS (Embedded JavaScript Templates)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication & Security
- Passport.js
- Passport Local
- Express Session
- Connect Flash
- Joi Validation

### File Uploads
- Multer
- Cloudinary
- Multer Storage Cloudinary

---

## 📂 Project Structure

```text
WanderLust/
│
├── controllers/
├── models/
├── routes/
├── views/
│   ├── includes/
│   ├── layouts/
│   └── listings/
├── public/
│   ├── css/
│   └── js/
├── utils/
├── cloudConfig.js
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/WanderLust.git
```

### Navigate to the project

```bash
cd WanderLust
```

### Install dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
ATLASDB_URL=your_mongodb_connection_string

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

SECRET=your_session_secret
```

---

## ▶️ Run the Project

```bash
npm start
```

or

```bash
node app.js
```

The application will run on:

```
http://localhost:8080
```

---

## 📚 Key Functionalities

### Authentication

- User Registration
- User Login
- Secure Logout
- Session Management

### Listings

- Create Listing
- View Listing
- Edit Listing
- Delete Listing

### Reviews

- Add Reviews
- Delete Reviews
- Rating System

### Categories

- Trending
- Rooms
- Iconic Cities
- Amazing Views
- Mountains
- Castles
- Amazing Pools
- Camping
- Farms
- Arctic

---

## 🔒 Authorization

- Only logged-in users can create listings.
- Only the listing owner can edit or delete their listing.
- Only the review author can delete their review.

---

## 🌟 Future Improvements

- 🔍 Search functionality
- ❤️ Wishlist / Favorites
- 📍 Interactive Maps
- 💳 Online Booking & Payments
- 📅 Availability Calendar
- 📱 Progressive Web App (PWA)
- 🌐 Social Login (Google/GitHub)

---

## 👨‍💻 Author

**Manas Jain**

GitHub: https://github.com/Manasjain84

---

## ⭐ Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub!
