// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const nodemailer = require('nodemailer');
// // require('dotenv').config();

// // const Enquiry = require('./models/Enquiry');

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // MongoDB Database Connection
// // const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/swastik_db';
// // mongoose
// //   .connect(MONGO_URI)
// //   .then(() => console.log('✅ MongoDB connected successfully!'))
// //   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // // Nodemailer Transporter Setup
// // const transporter = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: process.env.EMAIL_USER,
// //     pass: process.env.EMAIL_PASS,
// //   },
// // });

// // // Test Route
// // app.get('/', (req, res) => {
// //   res.send('Swastik Electrotech API is running smoothly.');
// // });

// // // Contact / Enquiry API Route
// // app.post('/api/enquiry', async (req, res) => {
// //   try {
// //     const { name, phone, email, purpose } = req.body;

// //     // 1. Validation
// //     if (!name || !phone || !email || !purpose) {
// //       return res.status(400).json({
// //         success: false,
// //         message: 'All fields (Name, Phone, Email, Purpose) are required.',
// //       });
// //     }

// //     // 2. Save Enquiry to MongoDB
// //     const newEnquiry = new Enquiry({
// //       name,
// //       phone,
// //       email,
// //       purpose,
// //     });
// //     await newEnquiry.save();

// //     // 3. Email Template
// //     const mailOptions = {
// //       from: `"Swastik Website Enquiry" <${process.env.EMAIL_USER}>`,
// //       to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
// //       subject: `🚨 New Enquiry from ${name} - Swastik Electrotech`,
// //       html: `
// //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
// //           <h2 style="color: #0f52ba; border-bottom: 2px solid #0f52ba; padding-bottom: 8px;">New Client Enquiry Received</h2>
// //           <p style="color: #475569; font-size: 14px;">A visitor submitted an enquiry on your website with the following details:</p>
          
// //           <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
// //             <tr>
// //               <td style="padding: 10px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0; width: 35%;">Client Name:</td>
// //               <td style="padding: 10px; border: 1px solid #e2e8f0;">${name}</td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 10px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0;">Contact Number:</td>
// //               <td style="padding: 10px; border: 1px solid #e2e8f0;"><a href="tel:${phone}">${phone}</a></td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 10px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0;">Email Address:</td>
// //               <td style="padding: 10px; border: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
// //             </tr>
// //             <tr>
// //               <td style="padding: 10px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0; vertical-align: top;">Enquiry Purpose:</td>
// //               <td style="padding: 10px; border: 1px solid #e2e8f0; white-space: pre-wrap;">${purpose}</td>
// //             </tr>
// //           </table>

// //           <div style="margin-top: 24px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
// //             Swastik Electrotech Automation &bull; Automated System Notification
// //           </div>
// //         </div>
// //       `,
// //     };

// //     // 4. Send Email via Nodemailer
// //     if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
// //       await transporter.sendMail(mailOptions);
// //     } else {
// //       console.log('⚠️ Email credentials not set in .env. Email sending skipped.');
// //     }

// //     return res.status(201).json({
// //       success: true,
// //       message: 'Enquiry submitted successfully and email notification sent!',
// //       data: newEnquiry,
// //     });
// //   } catch (error) {
// //     console.error('API Error:', error);
// //     return res.status(500).json({
// //       success: false,
// //       message: 'Server Error: Could not process enquiry.',
// //       error: error.message,
// //     });
// //   }
// // });

// // // Start Server
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on port http://localhost:${PORT}`);
// // });

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const Enquiry = require('./models/Enquiry');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB Database Connection
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/swastik_db';
// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log('✅ MongoDB connected successfully!'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // Nodemailer Transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Enquiry API Route
// app.post('/api/enquiry', async (req, res) => {
//   try {
//     const { name, phone, email, purpose } = req.body;

//     // Validation
//     if (!name || !phone || !email || !purpose) {
//       return res.status(400).json({
//         success: false,
//         message: 'All fields (Name, Phone, Email, Purpose) are required.',
//       });
//     }

//     // 1. Save to MongoDB
//     const newEnquiry = new Enquiry({
//       name,
//       phone,
//       email,
//       purpose,
//     });
//     await newEnquiry.save();

//     // 2. Email 1: User ko Confirmation Email (Jaiswal Pratik ki taraf se)
//     const userMailOptions = {
//       from: `"Pratik Jaiswal | Swastik Electrotech" <${process.env.EMAIL_USER}>`,
//       to: email, // Form me bhare gaye email par
//       subject: `Thank You for Contacting Swastik Electrotech, ${name}!`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
//           <h2 style="color: #0f52ba; margin-bottom: 8px;">Hello ${name},</h2>
//           <p style="color: #475569; font-size: 15px; line-height: 1.6;">
//             Thank you for reaching out to <strong>Swastik Electrotech Automation</strong>. We have successfully received your enquiry regarding:
//           </p>
//           <div style="background-color: #f1f5f9; padding: 14px; border-left: 4px solid #0f52ba; border-radius: 4px; font-style: italic; color: #1e293b; margin: 16px 0;">
//             "${purpose}"
//           </div>
//           <p style="color: #475569; font-size: 14px; line-height: 1.6;">
//             Our technical engineering team is reviewing your requirements and will contact you via phone (<strong>${phone}</strong>) or email shortly.
//           </p>
//           <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
//           <p style="font-size: 13px; color: #64748b; margin: 0;">
//             <strong>Warm Regards,</strong><br />
//             <strong>Pratik Jaiswal</strong><br />
//             Swastik Electrotech Automation<br />
//             Pune, Maharashtra | +91 9112233188
//           </p>
//         </div>
//       `,
//     };

//     // 3. Email 2: Admin (Aapko) Alert Email with details
//     const adminMailOptions = {
//       from: `"Website Enquiry Alert" <${process.env.EMAIL_USER}>`,
//       to: process.env.RECEIVER_EMAIL, // Aapke inbox me
//       subject: `🚨 New Enquiry from ${name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
//           <h2 style="color: #0f52ba;">New Enquiry Details</h2>
//           <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
//             <tr>
//               <td style="padding: 8px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0;">Name:</td>
//               <td style="padding: 8px; border: 1px solid #e2e8f0;">${name}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0;">Contact Number:</td>
//               <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="tel:${phone}">${phone}</a></td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0;">Client Email:</td>
//               <td style="padding: 8px; border: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
//             </tr>
//             <tr>
//               <td style="padding: 8px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0;">Enquiry Purpose:</td>
//               <td style="padding: 8px; border: 1px solid #e2e8f0;">${purpose}</td>
//             </tr>
//           </table>
//         </div>
//       `,
//     };

//     // Send both emails
//     if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
//       await Promise.all([
//         transporter.sendMail(userMailOptions),
//         transporter.sendMail(adminMailOptions),
//       ]);
//       console.log(`✉️ Emails sent successfully to ${email} and Admin!`);
//     }

//     return res.status(201).json({
//       success: true,
//       message: 'Enquiry submitted successfully and email sent!',
//       data: newEnquiry,
//     });
//   } catch (error) {
//     console.error('API Error:', error);
//     return res.status(500).json({
//       success: false,
//       message: 'Server Error: Could not process enquiry.',
//       error: error.message,
//     });
//   }
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port http://localhost:${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Routes Import
const enquiryRoutes = require('./routes/enquiryRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Database Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/swastik_db';
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Test Route
app.get('/', (req, res) => {
  res.send('Swastik Electrotech API is running smoothly.');
});

// Mounting Enquiry Routes
app.use('/api/enquiry', enquiryRoutes);

// Server Listen
app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});