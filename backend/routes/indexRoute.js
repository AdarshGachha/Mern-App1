const express = require("express");
const {
    homepage,
    createuser,
    allusers,
} = require("../controllers/indexController");
const router = express.Router();

/**@api /api/v1 GET homepage */
router.get("/", homepage);

/**@api /api/v1/create POST creates a user */
router.post("/create", createuser);

/**@api /api/v1/find POST returns all users */
router.get("/find", allusers);
module.exports = router;
