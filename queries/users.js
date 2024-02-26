const db = require('../db/dbConfig')
const bcrypt = require('bcrypt')

const getUsers = async () => {
    try {
        const users = await db.any("SELECT * FROM users")
        return users
    } catch (err) {
        return err
    }
}

const getUser = async (id) => {
    try {
        const user = await db.one("SELECT * FROM users WHERE user_id=$1", id)
        return user
    } catch (err) {
        return err
    }
}

const createUser = async (user) => {
    try {
        const { name, password_hash, email, phone_number, profile_picture_url } = user
        const salt = 10
        const hash = await bcrypt.hash(password_hash, salt)
        const profilePic = profile_picture_url ? profile_picture_url : '/static/default_profile_pic.webp'
        const newUser = await db.one("INSERT INTO users (name, password_hash, email, phone_number, profile_picture_url) VALUES ($1, $2, $3, $4, $5) RETURNING *", [name, hash, email, phone_number, profilePic])
        return newUser
    } catch (err) {
        return err
    }
}

const logInUser = async (user) => {
    try {
        const loggedInUser = await db.oneOrNone("SELECT * FROM users WHERE name=$1", user.name)
        if (!loggedInUser) return false
        const passwordMatch = await bcrypt.compare(user.password_hash, loggedInUser.password_hash)
        if (!passwordMatch) return false
        return loggedInUser
    } catch (err) {
        return err
    }
}

module.exports = { getUsers, getUser, createUser, logInUser }