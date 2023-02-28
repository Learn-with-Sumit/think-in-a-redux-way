const videosdb = require("../videos.json");

// Random One
module.exports = (req, res, next) => {
  // Other Methods are disabled
  if (!req.method === "GET") res.json({ message: "Method not allowed" });

  // If there is a query, skip this middleware
  if (Object.keys(req.query).length > 0) {
    next();
    return;
  }

  const { videos } = videosdb;
  const singleVideo = videos[Math.floor(Math.random() * videos.length)];
  res.json(singleVideo);
};
