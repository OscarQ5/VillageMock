DROP DATABASE IF EXISTS village_mock;

CREATE DATABASE village_mock;

\c village_mock;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    status VARCHAR(10) DEFAULT 'offline',
    profile_picture_url VARCHAR(255) DEFAULT '/static/default_profile_pic.webp'
);

CREATE TABLE contacts (
    contact_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    status VARCHAR(10) DEFAULT 'offline',
    profile_picture_url VARCHAR(255) DEFAULT '/static/default_profile_pic.webp',
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);