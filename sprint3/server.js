const express = require("express");
const app = express();
const videoRoutes = require('./routes/videos')
const uploadRoutes = require('./routes/upload')
const cors = require('cors')

//Adding the built-in express middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Allowing cross origin requests
app.use(cors());

//Routes ton handle video related requests
app.use('/videos', videoRoutes)

//Routes to handle upload related requests
app.use('/upload', uploadRoutes)

// start Express on port 8000
app.listen(8000, () => {
  console.log("Server Started on http://localhost:8000");
  console.log("Press CTRL + C to stop server");
});
