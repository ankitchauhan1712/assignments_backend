//Import---------------------------------------------------------------------------------------------------
import express from "express";
const Routes = express.Router();
 import {saveUserData , getUserData} from '../controller/userController.js'
//END-----------------------------------------------------------------------------------------------------


//Routes Declearation-------------------------------------------------------------------------------------
Routes.post("/saveUserData" , saveUserData);
Routes.get("/getUserData"  , getUserData);

/**
   * EXPORT MODULE
   */
export default Routes;