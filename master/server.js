const express = require('express');
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
// const multer = require('multer');
const db = require("./db");
const path = require("path");
require('./auth');
require("dotenv").config();
const app = express();
const paymentRoute = require('./Route/paymentRoute');
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS
const authController = require("./controllers/authControllers");
const userController = require('./controllers/usercontrllers');
const foundControllers = require('./controllers/foundControllers');
const retreveControllers = require('./controllers/retrevControllers');
const lostControllers = require('./controllers/lostControllers');
const commentController = require('./controllers/commentControllers');
const contactusControllers = require('./controllers/contactusControlletr');
const profileController = require('./controllers/profileControllers');
const foundModel = require('./models/foundModels');
const lostModel = require('./models/lostModels');

// const multer = require('./middleware/multer')
// Routes
app.post('/register', userController.registerUser);
app.post('/login', userController.loginUser);
app.get('/found', foundControllers.getAllProducts);
app.get('/retreve', retreveControllers.getAllProductss);
app.get('/retreve2', retreveControllers.getAllProducts);
app.post('/itemfound',foundControllers.additem);
app.get('/lost', lostControllers.getAllProducts);
app.post('/itemlost',lostControllers.additem);
app.post('/addComment',commentController.addComment);
app.get('/getAllComments',commentController.getAllComments);
app.post('/contactus',contactusControllers.addMessage);
app.put('/user/:userId', profileController.updateUser);
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.get('/signinbygoogle', (req, res) => {
  res.send('<a href="/google">Authenticate with Google</a>');
});

app.get('/google', passport.authenticate('google', { scope: [ 'email', 'profile' ] }));

app.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/protected',
  failureRedirect: '/google/failure'
}));

app.get('/protected', authController.isLoggedIn, authController.handleProtectedRoute);

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('Goodbye!');
});

























const { upload, uploadMultiple } = require('./middleware/multer')
const { getStorage, ref ,uploadBytesResumable } = require('firebase/storage')
const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");
const { auth } = require('./config/firebase.config')



async function uploadImage(file, quantity) {
    const storageFB = getStorage();

    await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH)

    if (quantity === 'single') {
        const dateTime = Date.now();
        const fileName = `images/${dateTime}`
        const storageRef = ref(storageFB, fileName)
        const metadata = {
            contentType: file.type,
        }
        await uploadBytesResumable(storageRef, file.buffer, metadata);
        return fileName
    }

    if (quantity === 'multiple') {
        for(let i=0; i < file.images.length; i++) {
            const dateTime = Date.now();
            const fileName = `images/${dateTime}`
            const storageRef = ref(storageFB, fileName)
            const metadata = {
                contentType: file.images[i].mimetype,
            }

            const saveImage = await Image.create({imageUrl: fileName});
            file.item.imageId.push({_id: saveImage._id});
            await file.item.save();

            await uploadBytesResumable(storageRef, file.images[i].buffer, metadata);

        }
        return
    }

}
// Import necessary Firebase Storage functions
const { getDownloadURL} = require('firebase/storage');

// Function to get the download URL of an image
async function getImageURL(imagePath) {
    const storageFB = getStorage();
    const storageRef = ref(storageFB, imagePath);

    try {
        const url = await getDownloadURL(storageRef);
        return url;
    } catch (error) {
        // Handle any potential errors
        console.error("Error getting download URL:", error);
        throw error;
    }
}





// Your Express route

app.post('/test-upload', upload, async (req, res) => {
    
    const file = {
        type: req.file.mimetype,
        buffer: req.file.buffer
    }

    try {
        // Upload image to Firebase Storage and get the URL
        const imagename = await uploadImage(file, 'single');

        // Get the download URL of the uploaded image
        const imageUrl = await getImageURL(imagename);

        // Add item details to PostgreSQL including the image URL
        const foundItem = await foundModel.additem(
            req.body.title,
            req.body.description,
            req.body.category,
            req.body.location,
            req.body.date_found,
            req.body.contact_name,
            req.body.contact_email,
            req.body.contact_phone,
            imagename,  // Assuming 'buildImage' is the image name
            imageUrl
        );
      
        res.send({
            status: "SUCCESS",
            imageName: imagename,
            imageUrl: imageUrl
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Failed to upload image and store in the database' });
    }
});
app.post('/test-uploaded', upload, async (req, res) => {
    const file = {
        type: req.file.mimetype,
        buffer: req.file.buffer
    }

    try {
        // Upload image to Firebase Storage and get the URL
        const imagename = await uploadImage(file, 'single');

        // Get the download URL of the uploaded image
        const imageUrl = await getImageURL(imagename);

        // Add item details to PostgreSQL including the image URL
        const lostitem = await lostModel.additem(
            req.body.title,
            req.body.description,
            req.body.category,
            req.body.location,
            req.body.date_lost,
            req.body.contact_name,
            req.body.contact_email,
            req.body.contact_phone,
            imagename,  // Assuming 'buildImage' is the image name
            imageUrl
        );
        res.send({
            status: "SUCCESS",
            imageName: imagename,
            imageUrl: imageUrl
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Failed to upload image and store in the database' });
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});