# 🏕️ Wanderlust

**Wanderlust** is a full-stack web application inspired by **Airbnb**, built during the **Delta Web Development Course**.  
It allows users to list, review, and manage travel accommodations with secure authentication, image uploads, and map integration.  

![Wanderlust Banner](#) <!-- Optional: add a project banner or screenshot link -->

---

## 🚀 Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Authentication** | Passport.js (Local Strategy) |
| **Frontend** | EJS Templates, Bootstrap, Custom CSS/JS |
| **File Storage** | Cloudinary (via Multer & Multer-Storage-Cloudinary) |
| **Geocoding / Maps** | Mapbox API |

---

## ✨ Core Features

### 🏠 Listings
- Create, edit, view, and delete travel listings.
- Each listing includes title, description, image, price, location, and geolocation data.
- Listings appear on the homepage and detailed listing pages.

### 💬 Reviews
- Authenticated users can add and delete reviews.
- Each review includes a star rating and a comment.
- Displayed dynamically on the listing detail page.

### 🔐 Authentication
- Sign up, log in, and log out using Passport.js.
- Only logged-in users can create or modify listings/reviews.
- Session management handled via `express-session`.

### 🖼️ Image Uploads
- Upload and store listing images on **Cloudinary**.
- File handling with **Multer** and **Multer-Storage-Cloudinary**.

### 🗺️ Maps & Geolocation
- Uses **Mapbox API** to geocode locations.
- Interactive maps show listing locations.

### ⚡ Flash Messages
- Interactive success/error feedback via **connect-flash**.

---

## 🧩 Project Structure

```
Wanderlust/
  │
  ├── app.js                 # Main Express setup
  ├── models/                # Mongoose schemas (Listing, Review, User)
  ├── controllers/           # Logic for listings, reviews, users
  ├── routes/                # Express routers
  ├── middlewares.js         # Auth, validation, and authorization middleware
  ├── schema.js              # Joi validation schemas
  ├── utils/                 # Async wrapper & error classes
  ├── init/                  # Database seeding scripts
  ├── public/                # Static assets (CSS, JS)
  ├── views/                 # EJS templates
  └── cloudConfig.js         # Cloudinary setup
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
```

### 2️⃣ Install Dependencies
```
npm install

```

### 3️⃣ Configure Environment Variables
Create a .env file in the root directory:
```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloud_key
CLOUDINARY_SECRET=your_cloud_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=your_mongodb_url
SECRET=your_session_secret
```

### 4️⃣ Run the App
```
npm start

```
The app will run at: http://localhost:8080

---

## 🗃️ Database Initialization

To seed the database with sample data:
```
node init/index.js

```

---

## 🧠 Key Learnings

- Building RESTful APIs using Express and MongoDB
- Implementing authentication with Passport.js
- Handling image uploads using Cloudinary
- Integrating maps using Mapbox
- Structuring large projects with MVC pattern

---

## 👤 Author

Abhinandan

🔗 [Portfolio](https://app.makemyaisite.com/abhirajput_19) • [LinkedIn](https://www.linkedin.com/in/abhirajput19) • [GitHub](https://github.com/abhirajput-19)

---

## ⭐ Acknowledgments

This project was developed as part of the Delta Web Development by Apna College Course to strengthen backend development, authentication, and database management skills.

---

## 📄 License

This project is licensed under the **MIT License**.  You are free to use, modify, and distribute this project with proper attribution.

See the full license in the [LICENSE](LICENSE) file.
