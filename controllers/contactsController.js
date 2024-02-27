const express = require('express')
const contacts = express.Router({ mergeParams: true })
const { getContacts, createContact } = require('../queries/contacts')

contacts.get('/', async (req, res) => {
    const userId = req.params.user_id
    try {
        const userContacts = await getContacts(userId)
        res.status(200).json(userContacts)
    } catch (err) {
        res.status(404).json({ error: err })
    }
})

contacts.post('/', async (req, res) => {
    const newContact = req.body
    try {
        const createdContact = await createContact(newContact)
        res.status(201).json(createdContact)
    } catch (err) {
        res.status(404).json({ error: err })
    }
})

module.exports = contacts