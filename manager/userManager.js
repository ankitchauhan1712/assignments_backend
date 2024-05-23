//Import---------------------------------------------------------------------------------------------
import mongoose from 'mongoose'
import UserModel from "../models/userModel.js";
import SendEmail from '../utils/nodemailer.js'
//END------------------------------------------------------------------------------------------------

/**
 * FUNCTION STARTS FROM HERE
 */

/**
 * save user data
 * @param body
 * @createdBy Ankit
 */
const saveUserData = async function (body) {
  try {
    console.log("saveUserData request body :", body);

    const userDetails = await new UserModel(body).save();

    if(!userDetails){
        return {error:true , message:"Internal Server Error"}
    }   

    // send email   
    let subject = "Email"
    let name = userDetails.name  
    let email = userDetails.email
    let resMail = await SendEmail.sendEmail(email , subject , name); 

    return userDetails;
  } catch (err) {
    console.log("register", err);
    return { error: true, message: err };
  }
};

/**
 * get user data
 * @param body
 * @createdBy Ankit
 */
const getUserData = async function () {
    try {    
  
      const usersList = await UserModel.find();
  
      if(!usersList){
          return {error:true , message:"Internal Server Error"}
      }   
        
      return usersList;
    } catch (err) {
      console.log("register", err);
      return { error: true, message: err };
    }
  };

/**
 * EXPORT MODULE
 */

export default {
saveUserData,
getUserData
};
