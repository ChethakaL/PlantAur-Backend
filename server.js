const express = require("express");
const connectDB = require("./db");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require('cors');


// Routes
const userRouter = require("./routes/userRoute");
const plantRouter = require("./routes/plantRoute");
const workDataRouter = require("./routes/workDataRoute");

// Middleware
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


dotenv.config();
connectDB()

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
  origin: ['http://192.168.1.5:4000', 'http://localhost:5000'] // Replace this with the origin you want to allow
}));

app.get("/", (req, res) => {
    res.send('API is running');
});


// Routes
app.use('/api/user', userRouter)
app.use('/api/plant', plantRouter)
app.use('/api/workdata', workDataRouter);

// Error
app.use(notFound)
app.use(errorHandler)


// Set the listening port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// const express = require('express');
// const multer = require('multer');
// const { google } = require('googleapis');
// const mongoose = require('mongoose');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// // Connect to MongoDB (Make sure MongoDB is running on your system)
// mongoose.connect('mongodb+srv://aurelio:py9KWY8tIh9F9Jmd@plantcluster.lef3ppa.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define a schema for the image links
// const imageSchema = new mongoose.Schema({
//   imageUrl: String,
// });

// const Image = mongoose.model('Image', imageSchema);

// // Google Drive API setup
// const auth = new google.auth.GoogleAuth({
//   keyFile: '../planteria-393604-13d41bb22e14.json',
//   scopes: ['https://www.googleapis.com/auth/drive'],
// });

// const drive = google.drive({ version: 'v3', auth });

// // Upload image to Google Drive
// app.post('/upload', upload.single('image'), async (req, res) => {
//   try {
//     const fileMetadata = {
//       name: req.file.originalname,
//     };

//     const media = {
//       mimeType: req.file.mimetype,
//       body: require('fs').createReadStream(req.file.path),
//     };

//     const response = await drive.files.create({
//       resource: fileMetadata,
//       media: media,
//       fields: 'webViewLink', // Get the link to the image
//     });

//     const imageUrl = response.data.webViewLink;

//     // Save the image link to MongoDB
//     const newImage = new Image({
//       imageUrl,
//     });

//     await newImage.save();

//     res.json({ imageUrl });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to upload image.' });
//   }
// });

// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });
