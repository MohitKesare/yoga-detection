const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/model", async (req, res) => {
  try {
    const response = await fetch(
      "https://www.kaggle.com/models/google/movenet/tfJs/singlepose-thunder/4/group1-shard1of3.bin?tfjs-format=file&tfhub-redirect=true"
    );
    const modelData = await response.buffer();
    res.set("Content-Type", "application/octet-stream");
    console.log(modelData);
    res.send(response);
  } catch (error) {
    console.error("Error fetching model:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
