const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error("MONGO_URI must be set in the server environment before starting the app.");
}

module.exports = { mongoURI };
