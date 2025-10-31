import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 })
    }

    // Configure  transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
      },
    })

    // Define the email
    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${name}: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}

        Message:
        ${message}
      `,
    }

    // Send mail
    await transporter.sendMail(mailOptions)

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    console.error('Email send error:', error)
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 })
  }
}
