const express = require("express");
const app = express();
const videoRoutes = require('./routes/videos')
const uploadRoutes = require('./routes/upload')
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

app.use('/videos', videoRoutes)

app.use('/upload', uploadRoutes)

// start Express on port 8000
app.listen(8000, () => {
  console.log("Server Started on http://localhost:8000");
  console.log("Press CTRL + C to stop server");
});
