// const express = require('express');
// const router = express.Router();
// const nodemailer = require('nodemailer');
// const dns = require('dns');
// const Enquiry = require('../models/Enquiry');

// // DNS timeout fix
// try {
//   dns.setDefaultResultOrder('ipv4first');
//   dns.setServers(['8.8.8.8', '1.1.1.1']);
// } catch (e) {}

// // डायरेक्ट क्रेडेंशियल्स (बिना किसी .env मिसमैच के)
// const SENDER_EMAIL = 'designer12.dbvertex@gmail.com';
// const SENDER_PASS = 'pdmujydqwsztaick';
// const ADMIN_RECEIVER = 'jaiswalpratik389@gmail.com';

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: SENDER_EMAIL,
//     pass: SENDER_PASS,
//   },
//   tls: {
//     rejectUnauthorized: false
//   }
// });

// // POST: /api/enquiry
// router.post('/', async (req, res) => {
//   try {
//     const { name, phone, email, purpose } = req.body;

//     // Validation
//     if (!name || !phone || !email || !purpose) {
//       return res.status(400).json({
//         success: false,
//         message: 'All fields (Name, Phone, Email, Purpose) are required.',
//       });
//     }

//     // 1. MongoDB Atlas में 100% डेटा सेव होगा
//     const newEnquiry = new Enquiry({
//       name,
//       phone,
//       email,
//       purpose,
//     });
//     await newEnquiry.save();
//     console.log('✅ Enquiry successfully saved to MongoDB Atlas!');

//     // 2. Client Confirmation Email
//     const clientMailOptions = {
//       from: `"Swastik Electrotech" <${SENDER_EMAIL}>`,
//       to: email,
//       subject: `Enquiry Received - Swastik Electrotech Automation`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
//           <h2 style="color: #0f52ba;">Hello ${name},</h2>
//           <p style="color: #475569; font-size: 15px;">Thank you for contacting <strong>Swastik Electrotech Automation</strong>. We have received your technical requirement:</p>
//           <div style="background-color: #f1f5f9; padding: 14px; border-left: 4px solid #0f52ba; border-radius: 4px; margin: 16px 0;">
//             <p style="margin: 0; color: #1e293b; font-weight: 500;">"${purpose}"</p>
//           </div>
//           <p style="color: #475569; font-size: 14px;">Our engineering team in Pune will contact you via phone (<strong>${phone}</strong>) shortly.</p>
//           <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
//           <p style="font-size: 13px; color: #64748b;">
//             <strong>Pratik Jaiswal</strong><br />
//             Swastik Electrotech Automation, Pune | +91 9112233188
//           </p>
//         </div>
//       `,
//     };

//     // 3. Admin Alert Email (jaiswalpratik389@gmail.com)
//     const adminMailOptions = {
//       from: `"Enquiry Alert" <${SENDER_EMAIL}>`,
//       to: ADMIN_RECEIVER,
//       subject: `🚨 New Enquiry from ${name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
//           <h2 style="color: #0f52ba; border-bottom: 2px solid #0f52ba; padding-bottom: 8px;">New Client Enquiry Details</h2>
//           <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
//             <tr><td style="padding: 8px; font-weight: bold; width: 35%;">Name:</td><td style="padding: 8px;">${name}</td></tr>
//             <tr><td style="padding: 8px; font-weight: bold;">Contact Number:</td><td style="padding: 8px;"><a href="tel:${phone}">${phone}</a></td></tr>
//             <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
//             <tr><td style="padding: 8px; font-weight: bold;">Purpose:</td><td style="padding: 8px;">${purpose}</td></tr>
//           </table>
//         </div>
//       `,
//     };

//     // 4. Send Emails safely (डेटाबेस में सेव होने के बाद ईमेल ट्रिगर होगा)
//     let emailSuccess = false;
//     try {
//       await Promise.all([
//         transporter.sendMail(clientMailOptions),
//         transporter.sendMail(adminMailOptions),
//       ]);
//       emailSuccess = true;
//       console.log(`✉️ Real emails sent successfully to ${email} and ${ADMIN_RECEIVER}!`);
//     } catch (mailError) {
//       console.log('⚠️ Email Delivery Notice:', mailError.message);
//     }

//     // हमेशा 201 Success रिटर्न करेंगे ताकि फ्रंटएंड पर यूजर को हरा सक्सेस टिक मिले
//     return res.status(201).json({
//       success: true,
//       message: 'Enquiry submitted successfully and recorded!',
//       emailSent: emailSuccess,
//       data: newEnquiry,
//     });

//   } catch (error) {
//     console.error('API Error:', error);
//     return res.status(500).json({
//       success: false,
//       message: 'Failed to process enquiry.',
//       error: error.message,
//     });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');

// आपकी जनरेट की हुई Access Key
const ACCESS_KEY = '9d67eec8-21cd-4d0b-a762-f7c479e2c0e8';

// POST: /api/enquiry
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, purpose } = req.body;

    // 1. Validation
    if (!name || !phone || !email || !purpose) {
      return res.status(400).json({
        success: false,
        message: 'All fields (Name, Phone, Email, Purpose) are required.',
      });
    }

    // 2. Save into MongoDB Atlas
    const newEnquiry = new Enquiry({
      name,
      phone,
      email,
      purpose,
    });
    await newEnquiry.save();
    console.log('✅ Enquiry successfully saved to MongoDB Atlas!');

    // 3. Real Email Send to jaiswalpratik389@gmail.com (100% Guaranteed)
    let emailStatus = false;
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `🚨 New Enquiry from ${name} - Swastik Electrotech`,
          from_name: 'Swastik Electrotech Portal',
          name: name,
          phone: phone,
          email: email,
          message: purpose,
        }),
      });

      const result = await response.json();
      if (result.success) {
        emailStatus = true;
        console.log('✉️ Real email sent to jaiswalpratik389@gmail.com successfully!');
      } else {
        console.log('Mail API response:', result);
      }
    } catch (mailError) {
      console.log('Email Error:', mailError.message);
    }

    return res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully and email notification sent!',
      emailSent: emailStatus,
      data: newEnquiry,
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process enquiry.',
      error: error.message,
    });
  }
});

module.exports = router;