const mongoose = require("mongoose")
const mailSender = require("../utils/mailSender")
const emailTemplate = require("../mail/Request")
const RequestsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    message: {
        type: String,
        required : true,
    },
    subject:{
        type : String,
        required : true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 60*5,
    },
})

// Define a function to send email
async function requestEmail(email, name, contactNumber, message, subject){
    try{
        const mailResponse = await mailSender(
            email,
            "Request Recieved!",
            emailTemplate(email, name, contactNumber, message, subject)
        );
        console.log("Email sent successfully: ", mailResponse.response);
    }
    catch (error){
        console.log("Error occured while sending email: ", error)
        throw error;
    }
}

// Define a pre-save hook to send email after the document has been saved.

RequestsSchema.pre("save", async function (next){
    console.log("New document saved to database");
    // Only send an email when a new document is created
    if (this.isNew){
        await requestEmail("ayushsharma3310@gmail.com", this.message, this.contactNumber, this.subject, this.name);
    }
    next();
})

const Requests = mongoose.model("Requests", RequestsSchema)
module.exports = Requests;