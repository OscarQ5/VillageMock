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
    profile_picture_url VARCHAR(255) DEFAULT '/public/default_profile_pic.webp'
);