const router=require("express").Router();
const { requireSignin,attendeemiddleware } = require('../middleware/index')
const { payment } = require('../controller/payment');


//requireSignin,attendeemiddleware,

router.post('/payment/create',payment);
router.post('/payment/conference/create',requireSignin,attendeemiddleware,payment);




 module.exports = router;  