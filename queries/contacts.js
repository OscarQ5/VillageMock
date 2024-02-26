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
module.exports = { getContacts }