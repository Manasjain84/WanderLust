# 🌍 WanderLust

WanderLust is a full-stack, Airbnb-inspired web application built with Node.js, Express.js, MongoDB, and EJS. It allows users to discover destinations, explore property listings, share reviews, and manage their own listings through a responsive and user-friendly interface.

## ✨ Features

- 🏡 **Browse Listings:** Explore property listings and view detailed information.
- 🔍 **Search Destinations:** Search listings by title, location, or country with case-insensitive matching.
- 📂 **Category Filtering:** Filter properties by categories such as Mountains, Rooms, Castles, Amazing Views, and more.
- ➕ **Create Listings:** Add new property listings with image uploads.
- ✏️ **Edit Listings:** Update listing details and images.
- 🗑️ **Delete Listings:** Remove listings with owner authorization.
- 👤 **User Authentication:** Sign up, log in, and log out.
- 🔒 **Authorization:** Restrict listing management to owners and review deletion to review authors.
- ⭐ **Reviews and Ratings:** Add and delete reviews for listings.
- ☁️ **Cloudinary Integration:** Store and manage listing images.
- 💬 **Flash Messages:** Display success and error notifications.
- 📱 **Responsive Design:** Build a consistent browsing experience using Bootstrap.

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- EJS (Embedded JavaScript Templates)
- Bootstrap 5
- Font Awesome

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication and Validation
- Passport.js
- Passport Local
- Express Session
- Connect Mongo
- Connect Flash
- Joi

### Image Uploads
- Multer
- Cloudinary
- Multer Storage Cloudinary

## 📂 Project Structure

```text
WanderLust/
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
├── middleware.js
├── schema.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Manasjain84/WanderLust.git
```

### 2. Navigate to the project directory

```bash
cd WanderLust
```

### 3. Install dependencies

```bash
npm install
```

If you encounter a dependency-resolution error with the current package versions, try:

```bash
npm install --legacy-peer-deps
```

### 4. Configure environment variables

Create a `.env` file in the root directory and configure the following variables:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD-API-SECRET=your_cloudinary_api_secret
```

Replace the placeholder values with your own credentials. Ensure that your environment variable names match those used in your application code.

**Security note:** Never commit your `.env` file or expose database credentials, API secrets, or session secrets on GitHub. Keep `.env` listed in `.gitignore`.

### 5. Run the application

```bash
node app.js
```

Open your browser and visit:

```text
http://localhost:8080
```

## 🔑 Key Functionalities

### Authentication
- User registration and login
- Logout and session management
- Protected routes for authenticated users

### Listings
- Create, view, edit, and delete property listings
- Upload listing images to Cloudinary
- Restrict listing modifications to listing owners

### Search and Categories
- Search by listing title, location, or country
- Case-insensitive search
- Filter listings by category
- Retain the search query in the search input after submitting

### Reviews
- Add reviews and ratings
- Delete reviews with author authorization

### Available Categories
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

## ☁️ Deployment

WanderLust is deployed using Render, with MongoDB Atlas for database hosting and Cloudinary for image storage.

- **Source Code:** GitHub
- **Application Hosting:** Render
- **Database:** MongoDB Atlas
- **Image Storage:** Cloudinary

The deployed application requires the appropriate environment variables to be configured in the Render dashboard.

## 🚀 Future Improvements

- ❤️ Wishlist and favorites
- 📍 Interactive maps
- 💳 Online booking and payments
- 📅 Property availability calendar
- 🔍 Advanced search and sorting
- 📄 Pagination for listings
- 🌐 Social login

## 👨‍💻 Author

**Manas Jain**

GitHub: [Manasjain84](https://github.com/Manasjain84)

## ⭐ Show Your Support

If you find WanderLust useful or interesting, consider giving the repository a star on GitHub!
