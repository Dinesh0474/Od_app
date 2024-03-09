const requesters = require("../model/schema");

const list = async (req, res) => {
  try {
    const filteredList = await requesters.find({ status: 1 });
    res.status(200).json(filteredList);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { list };