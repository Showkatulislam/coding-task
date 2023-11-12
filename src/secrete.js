require('dotenv').config()

const serverPort=process.env.SERVER_PORT||5000

const monogodb_url=process.env.DATABASE_URL

const default_image=process.env.DEFAULT_IMAGE

const privateKey=process.env.PRIVATE_KEY

const mailSenderKey=process.env.MAILSENDER_KEY

const smtp_email=process.env.SMTP_EMAIL

module.exports={serverPort,monogodb_url,default_image,privateKey,mailSenderKey,smtp_email}