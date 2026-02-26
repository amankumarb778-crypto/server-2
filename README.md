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

# 🚀 TECH STACK

- Node.js
- Express.js
- CORS
- ES Modules (import/export)

---

# 🌍 BASE URL

http://localhost:3002

---

# 📌 API ENDPOINTS

---

## 1️⃣ GET ALL PRODUCTS

### GET /products

Returns all products.

### Example
http://localhost:3002/products

### Response
```json
[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 799,
    "stock": 25,
    "rating": 4.3
  }
]
```

---

## 2️⃣ GET PRODUCT BY ID

### GET /products/:id

Returns a single product by ID.

### Example
http://localhost:3002/products/1

### Success Response
```json
{
  "id": 1,
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 799,
  "stock": 25,
  "rating": 4.3
}
```

### Error Response
```json
{
  "message": "Product not found"
}
```

---

## 3️⃣ GET PRODUCTS BY CATEGORY

### GET /products/category/:categoryName

Filters products by category.

### Example
http://localhost:3002/products/category/Electronics

---

## 4️⃣ CREATE NEW PRODUCT

### POST /products

Creates a new product.

### Request Body
```json
{
  "id": 6,
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 1999,
  "stock": 15,
  "rating": 4.6
}
```

### Response
```json
{
  "message": "Product created successfully",
  "product": { ... }
}
```

---

## 5️⃣ UPDATE FULL PRODUCT

### PUT /products/:id

Updates complete product details (except ID).

### Request Body
```json
{
  "name": "Gaming Mouse",
  "category": "Electronics",
  "price": 999,
  "stock": 20,
  "rating": 4.7
}
```

---

## 6️⃣ UPDATE PRODUCT STOCK

### PUT /products/:id/stock

Updates only stock value.

### Request Body
```json
{
  "stock": 30
}
```

---

## 7️⃣ UPDATE PRODUCT PRICE

### PUT /products/:id/price

Updates only price value.

### Request Body
```json
{
  "price": 899
}
```

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

# 🛠 INSTALLATION

```bash
npm install
node server.js
```

Server runs at:

http://localhost:3002
