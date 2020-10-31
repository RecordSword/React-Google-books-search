const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const server = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
}
// Add routes, both API and view
server.use(routes);

server.get("*", function (request, response) {
  response.sendFile(path.join(__dirname, "./client/build/index.html"));
})

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Start the API server
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
