Product Management REST API

A RESTful API built using Node.js, Express.js, and CORS for managing products.
This API supports product creation, updating, filtering, and category-based retrieval.

🚀 Tech Stack

Node.js

Express.js

CORS

ES Modules (import/export)

🌍 Base URL
http://localhost:3002
📌 API Endpoints
1️⃣ Get All Products
GET /products

Returns all products.

Example

http://localhost:3002/products

Response

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
2️⃣ Get Product By ID
GET /products/:id

Returns a single product by ID.

Example

http://localhost:3002/products/1

Success Response

{
  "id": 1,
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 799,
  "stock": 25,
  "rating": 4.3
}

Error

{
  "message": "Product not found"
}
3️⃣ Get Products By Category
GET /products/category/:categoryName

Filters products by category.

Example

http://localhost:3002/products/category/Electronics
4️⃣ Create New Product
POST /products

Creates a new product.

Request Body

{
  "id": 6,
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 1999,
  "stock": 15,
  "rating": 4.6
}

Response

{
  "message": "Product created successfully",
  "product": { ... }
}
5️⃣ Update Full Product
PUT /products/:id

Updates complete product details (except ID).

Request Body

{
  "name": "Gaming Mouse",
  "category": "Electronics",
  "price": 999,
  "stock": 20,
  "rating": 4.7
}
6️⃣ Update Product Stock
PUT /products/:id/stock

Updates only stock value.

Request Body

{
  "stock": 30
}
7️⃣ Update Product Price
PUT /products/:id/price

Updates only price value.

Request Body

{
  "price": 899
}
📦 Product Data Structure
{
  "id": Number,
  "name": String,
  "category": String,
  "price": Number,
  "stock": Number,
  "rating": Number
}
🛠 Installation
npm install
node server.js

Server runs at:

http://localhost:3002
