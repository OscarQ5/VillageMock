const db = require('../db/dbConfig')
const bcrypt = require('bcrypt')

const getContacts = async (userId) => {
    try {
        const contacts = await db.any("SELECT * FROM contacts WHERE user_id=$1", userId)
        return contacts
    } catch (err) {
        return err
    }
}

const createContact = async (newContact) => {
    const { name, password_hash, email, phone_number, profile_picture_url, user_id } = newContact
    const profilePic = profile_picture_url ? profile_picture_url : '/static/default_profile_pic.webp'
    try {
        const createdContact = await db.one("INSERT INTO contacts (name, password_hash, email, phone_number, profile_picture_url, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [name, password_hash, email, phone_number, profilePic, user_id])
        return createdContact
    } catch (err) {
        return err
    }
}

const updateContact = async (contactId, updatedContact) => {
    const { name, email, phone_number, profile_picture_url } = updatedContact
    const profilePic = profile_picture_url ? profile_picture_url : '/static/default_profile_pic.webp'
    try {
        const updatedContact = await db.one("UPDATE contacts SET name=$1, email=$2, phone_number=$3, profile_picture_url=$4 WHERE contact_id=$5 RETURNING *",
            [name, email, phone_number, profilePic, contactId])
        return updatedContact
    } catch (err) {
        return err
    }
}

const deleteContact = async (contactId) => {
    try {
        await db.none("DELETE FROM contacts WHERE contact_id=$1", contactId)
        return { message: "Contact deleted successfully" }
    } catch (err) {
        return err
    }
}

module.exports = { getContacts, createContact, updateContact, deleteContact }