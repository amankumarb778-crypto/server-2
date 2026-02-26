
import express from "express"
import cors from 'cors'

const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.json());

app.use(cors());
app.use(express.json());
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];



app.get("/products", (req, res) => {
  res.status(202).json(products)
})

app.get("/products/:id", (req, res) => {
  const productsid = Number(req.params.id);
  const product = products.find((u) => u.id === productsid)

  if (!products) {
    return res.status(404).json({ message: "products not found" })
  }

  res.status(200).json(product)

})


app.get("/products/category/:categoryName", (req, res) => {
  const categoryname = req.params.categoryName.toLowerCase();
  const filteredProducts = products.filter((check) => check.category.toLowerCase() === categoryname)

  if (!filteredProducts) {
    res.status(202).json({ message: "product not found" })
  }

  res.status(404).json(filteredProducts)

})
app.post("/products", (req, res) => {

  console.log(req.body); 

  const { id, name, category, price, stock, rating } = req.body;

  const newProduct = { id, name, category, price, stock, rating };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created successfully",
    product: newProduct
  });

});


app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  // replace full product except ID
 products[index] = {
  id: id,
  name: req.body.name,
  category: req.body.category,
  price: req.body.price,
  stock: req.body.stock,
  rating: req.body.rating
};

  res.status(200).json({
    message: "Product updated successfully",
    product: products[index]
  });

  console.log(req.body);
});



app.put("/products/:id/stock", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.stock = req.body.stock;

  res.status(200).json({
    message: "Stock updated successfully",
    product: product
  });
});



app.put("/products/:id/price", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.price = req.body.price;

  res.status(200).json({
    message: "Price updated successfully",
    product: product
  });
});


app.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);

})