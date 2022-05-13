const express = require("express");
const router = express();
const stateController = require("../../controllers/stateController");

router
  .route("/")
  .get(stateController.getStates)
  .post(stateController.createNewFunfact)
  .delete(stateController.deleteFunfact);

router.route("/:code").get(stateController.getState);
router.route("/:code/capital").get(stateController.getCapital);
router.route("/:code/nickname").get(stateController.getNickname);
router.route("/:code/population").get(stateController.getPopulation);
router.route("/:code/admission").get(stateController.getAdmission);


module.exports = router;