const nodemailer = require("nodemailer");
const { smtp_email, mailSenderKey } = require("../secrete");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: smtp_email,
    pass: mailSenderKey,
  },
});

const sendEmailByNodeMailer = async (data) => {
    try {
        const info = await transporter.sendMail({
            from: smtp_email, // sender address
            to: data.email, // list of receivers
            subject: data.subject, // Subject line
            html: data.html, // html body
          });
          console.log("Message sent: %s", info.messageId);
    } catch (error) {
        throw error
    }
 
};

module.exports=sendEmailByNodeMailer
