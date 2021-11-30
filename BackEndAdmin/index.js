const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const app = express();
const https = require("https");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(cors())
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        cb(null, req.params.namagambar + path.extname(file.originalname).toLowerCase());
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('foto');

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Invalid File Extension');
    }
}

app.get('/', function (req, res) {
    res.send('GET request to the homepage')
})

app.post('/upload/:namagambar', upload, async (req, res) => {
    res.send('/uploads/'+req.params.namagambar+path.extname(req.file.originalname).toLowerCase())
});

//https.createServer(app).listen(3000, () => console.log("Running on port 3002"));
app.listen(3002, () => console.log('Running on port 3002'));