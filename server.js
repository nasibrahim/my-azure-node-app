const express = require("express");
const app = express();

// Azure sets PORT automatically, so we must use it
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Your Node.js app is running on Azure!");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is healthy",
    time: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});