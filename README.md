# 🛒 PRODUCT MANAGEMENT REST API

A RESTful API built using Node.js, Express.js, and CORS for managing products.

This API supports:
- Product creation
- Full product updates
- Stock updates
- Price updates
- Category-based filtering
- Product retrieval

---

# 🔗 PROJECT LINKS

### 📂 GitHub Repository
https://github.com/amankumarb778-crypto/server-2.git

### 🚀 Live Deployment (Render)
https://server-2-d63m.onrender.com

### 📘 Postman API Documentation
https://documenter.getpostman.com/view/50839281/2sBXcGFfni

---

# 🚀 TECH STACK

- Node.js
- Express.js
- CORS
- ES Modules (import/export)

---

# 🌍 BASE URL

### Local
http://localhost:3002

### Production
https://server-2-d63m.onrender.com

---

# 📌 API ENDPOINTS

---

## 1️⃣ GET ALL PRODUCTS
GET /products

Example:
https://server-2-d63m.onrender.com/products

---

## 2️⃣ GET PRODUCT BY ID
GET /products/:id

Example:
https://server-2-d63m.onrender.com/products/1

---

## 3️⃣ GET PRODUCTS BY CATEGORY
GET /products/category/:categoryName

Example:
https://server-2-d63m.onrender.com/products/category/Electronics

---

## 4️⃣ CREATE NEW PRODUCT
POST /products

---

## 5️⃣ UPDATE FULL PRODUCT
PUT /products/:id

---

## 6️⃣ UPDATE PRODUCT STOCK
PUT /products/:id/stock

---

## 7️⃣ UPDATE PRODUCT PRICE
PUT /products/:id/price

---

# 📦 PRODUCT DATA STRUCTURE

```json
{
  "id": Number,
  "name": String,
  "category": String,
  "price": Number,
  "stock": Number,
  "rating": Number
}
```

---

# 🛠 INSTALLATION (LOCAL SETUP)

```bash
npm install
node server.js
```

Server runs at:
http://localhost:3002
