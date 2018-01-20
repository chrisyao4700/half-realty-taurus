var express = require('express');
var router = express.Router();
var cymail = require('../modules/mails/CYMail');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Half-Realty Taurus'
    });
});

router.post('/', function (req, res, next) {
    cymail.sendEmail(req.body, function (data) {
        res.render('thankyou', {
            title: 'Half-Realty Taurus'
        });
    });
});

module.exports = router;
