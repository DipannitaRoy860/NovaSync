const express = require ("express");
const cors = require ("cors");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");
const groupRoutes= require("./routes/groupRoutes");
const expenseRoutes= require("./routes/expenseRoutes");
const ledgerRoutes= require("./routes/ledgerRoutes");
const settlementRoutes= require("./routes/settlementRoutes");
const app = express();
const port = 5000;

connectDB();
app.use(cors());
app.use(express.json());
// app.post("/api/users/signup", (req, res) => {
//   console.log("Request body", req.body);
//   res.json({ message: "Signup route working!" });
// });

// app.post("/api/users/login", (req, res) => {
//   console.log("Request body", req.body);
//   res.json({ message: "Login route working!" });
// });
app.use("/api/users",userRoutes);
app.use("/api/groups",groupRoutes);
app.use("/api/expenses",expenseRoutes);
//app.use("/api/ledger",ledgerRoutes);
app.use("/api/settlement",settlementRoutes);
  app.listen(port,()=>{
    console.log("Server running on port 5000");
  });

