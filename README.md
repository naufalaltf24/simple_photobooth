# 📸 SEKITA Photobooth – Built 2 Hours Before the Exhibition, Became the Crowd Favorite

## 🌟 The Story Behind This Project

This project was born out of pressure — and maybe a little desperation.

It was just two hours before our capstone exhibition began. Every team had something to showcase: flashy banners, fancy prototypes, colorful decorations. Meanwhile, our booth felt... too empty.

So we thought:  
**"What if we build a photobooth that instantly emails people their pictures?"**

With less than two hours on the clock, I opened my laptop and started coding — webcam capture, countdown, canvas drawing, image composition, and email delivery. No frameworks, no overengineering, just a quick and dirty solution that works.

We launched it just as the event started. People began lining up. They laughed, smiled, and posed for the camera.  
And by the end of the day, our booth was voted **"Most Favorite Booth"**.

All thanks to a simple idea that turned into something memorable.

---

## 🎯 What It Does

- Captures 3 photos from the webcam with a countdown timer  
- Automatically composes them into a vertical photostrip with custom frames  
- Shows a live preview of the final image  
- Sends the photo via email instantly — no download required

All in the browser. No mobile app needed.

---

## ⚙️ Tech Stack

- **Frontend:** HTML, TailwindCSS, Vanilla JavaScript  
- **Backend:** Node.js with Express  
- **Email Delivery:** Nodemailer (SMTP via Gmail)  
- **File Handling:** Multer (in-memory storage)  
- **Image Composition:** Canvas API

---

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start the server
node server.js

# Open in browser
http://localhost:3000
