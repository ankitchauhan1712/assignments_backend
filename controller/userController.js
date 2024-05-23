//Import------------------------------------------------------------------
import ResponseUtil from "../utils/response.utils.js";
import userManager from "../manager/userManager.js";

//End----------------------------------------------------------------------

/**
 * FUNCTION STARTS FROM HERE
 */

/**
 * User Data
 * @createdBy Ankit
 */
export function saveUserData(request, response) {

    userManager.saveUserData(request.body)
    .then((result) => {
      if (result.error) {
        response.send(ResponseUtil.error(500, result));
      } else {
        response.send(ResponseUtil.success(result));
      }
    })
    .catch((err) => response.send(ResponseUtil.error(500, err)));
}

/**
 * Get Data
 * @createdBy Ankit
 */
export function getUserData(request, response) {

    userManager.getUserData()
    .then((result) => {
      if (result.error) {
        response.send(ResponseUtil.error(500, result));
      } else {
        response.send(ResponseUtil.success(result));
      }
    })
    .catch((err) => response.send(ResponseUtil.error(500, err)));
}
