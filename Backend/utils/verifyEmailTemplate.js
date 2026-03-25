const verifyEmailTemplate = (username, otp) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body style="margin:0; padding:0; background:#f4f4f4; font-family:Arial;">

    <div style="max-width:600px; margin:40px auto; background:#fff; border-radius:8px; overflow:hidden;">
      
      <!-- Header -->
      <div style="background:#0d6efd; color:#fff; padding:20px; text-align:center;">
        <h1 style="margin:0;">Your Store</h1>
      </div>

      <!-- Content -->
      <div style="padding:30px; color:#333;">
        <h2>Email Verification</h2>

        <p>Hi <strong>${username}</strong>,</p>

        <p>Use the OTP below to verify your email:</p>

        <div style="margin:20px auto; padding:15px; background:#f1f1f1; text-align:center; font-size:24px; letter-spacing:5px; font-weight:bold; border-radius:6px; width:fit-content;">
          ${otp}
        </div>

        <p>This OTP is valid for <strong>10 minutes</strong>.</p>

        <p>If you didn’t request this, ignore this email.</p>

        <p>Thanks,<br/><strong>Your Fably Team</strong></p>
      </div>

      <!-- Footer -->
      <div style="background:#f1f1f1; padding:15px; text-align:center; font-size:12px; color:#777;">
        © ${new Date().getFullYear()} Fably Store
      </div>

    </div>

  </body>
  </html>
  `;
};

module.exports = verifyEmailTemplate;