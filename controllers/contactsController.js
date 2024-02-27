const express = require('express')
const contacts = express.Router({ mergeParams: true })
const { getContacts, createContact, updateContact } = require('../queries/contacts')

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

contacts.put('/:contactId', async (req, res) => {
    try {
        const contactId = req.params.contactId
        const updatedContact = req.body
        const updated = await updateContact(contactId, updatedContact)
        res.status(200).json(updated)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = contacts