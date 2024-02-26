const express = require('express')
const contacts = express.Router()
const { getContacts } = require('../queries/contacts')

contacts.get('/:userId', async (req, res) => {
    const userId = req.params.userId
    try {
        const userContacts = await getContacts(userId)
        res.status(200).json(userContacts)
    } catch (err) {
        res.status(404).json({ error: err })
    }
})

module.exports = contacts