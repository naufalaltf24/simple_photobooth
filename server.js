const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const app = express();
const port = 3000;

// Configure multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Middleware to parse form data
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "akinmonsan@gmail.com",
        pass: "knrvkblolzxkbigb",
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

// Route to handle email sending
app.post("/send-email", upload.single("photo"), (req, res) => {
    const { email } = req.body;
    const photo = req.file;

    const mailOptions = {
        from: "sekital@ub.ac.id",
        to: email,
        subject: "SEKITA Photobooth Photos",
        text: "Thank you for using our photobooth! Your photos are attached.",
        attachments: [
            {
                filename: "photobooth.png",
                content: photo.buffer,
            },
        ],
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: "Error sending email" });
        }
        res.json({ message: "Email sent successfully!" });
    });
});

// Serve the frontend
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
