const express = require('express');
const Controller = require('./controller');

const router = express.Router();

function addUsers(req, res) {
    const { email, password, displayName } = req.body;
    const { auth } = req;
    Controller.addUser({ auth, email, password, displayName })
        .then((data) => res.status(201).send(data))
        .catch((error) => res.send(error))
}

function getUsers(req, res) {
    const { email } = req.query;
    const { auth } = req;
    Controller.getUser({ auth, email })
        .then ((data) => res.status(200).send(data))
        .catch((error) => res.send(error))
}

router.post("/", addUsers)
router.get("/", getUsers)

module.exports = router;