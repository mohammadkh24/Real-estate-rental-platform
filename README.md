# 🏡 **Real Estate Rental Platform** 🌍

## Overview 🧐

The **Real Estate Rental Platform** is an online marketplace where users can browse, book, and manage properties listed by landlords. The platform supports **3 user roles**: **User**, **Landlord**, and **Admin**. Users can explore the available properties, make bookings, and even request to become landlords. Landlords can list and manage their properties, and admins have full control of the platform.

---

## 🚀 **Features** 🌟

### 1. **Property Listings 🏠**
- Landlords can **add and manage** their properties with details like title, description, price, and availability status.
- Properties can be filtered by **city** and **price**.

### 2. **User Roles 🎭**
- **User:** Browse and book properties, view property details.
- **Landlord:** List and manage their own properties, approve/reject bookings.
- **Admin:** Have complete control over the platform, including managing users and property listings.

### 3. **Bookings 📅**
- Users can **book properties** and check the **total price** for the rental.
- Landlords can **accept or reject bookings**.

### 4. **User Authentication 🔑**
- **Secure login** and **sign-up** using **JWT tokens** for safe access to platform features based on user roles.

### 5. **Request for Role Change 📝**
- **Users** can request to become **Landlords**.
- **Admins** can approve or deny these requests.

### 6. **Notifications (Coming Soon 📲)**
- Get **notifications** for booking updates, property status changes, and role request statuses.

---

## 🔧 **Tech Stack** ⚙️

- **Backend Framework:** Node.js with Express
- **Database:** MongoDB (NoSQL Database)
- **Authentication:** JSON Web Tokens (JWT)
- **Validation:** Express Validator
- **File Uploads (Optional):** Multer (for property images)

---

## 🛠️ **Installation** 🧑‍💻

### **Prerequisites 📝**
1. Node.js and npm installed on your machine.
2. A running **MongoDB instance** (local or cloud via MongoDB Atlas).

### **Steps to Run Locally 💻**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mohammadkh24/Real-estate-rental-platform.git
   cd real-estate-rental-platform
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables 🛠️:**

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=4001
   MONGO_URI=mongodb://localhost:27017/Property
   JWT_SECRET=300f5657132c3e83eeb68dce0af1cbc274bcb5ccc46008bd2ca81196b834bfe7
   NODE_ENV=development
   ```

4. **Run the development server 🚀:**

   ```bash
   npm run dev
   ```

   The server will be running on `http://localhost:4001`.

---

## 🛣️ **API Document** 📡
🔗 [View API Documentation on Postman](https://www.postman.com/teamwork-4920/workspace/my-workspace/collection/38477852-b0a8e641-a795-44c1-a42c-48272ccfe15c?action=share&creator=38477852)  

---

## 🔗 **Contribute** 💡

Feel free to **open issues** and **submit pull requests** to contribute to the project!
