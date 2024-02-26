\c village_mock

INSERT INTO users (name, password_hash, email, phone_number) VALUES
('John Doe', 'h@shed_password', 'john@example.com', '123-456-7890'),
('Jane Smith', 'hash3d_password', 'jane@example.com', '987-654-3210');

INSERT INTO contacts (name, password_hash, email, phone_number, user_id) VALUES
('Contact 1', 'password_hash_1', 'contact1@example.com', '1234567890', 1),
('Contact 2', 'password_hash_2', 'contact2@example.com', '9876543210', 1),
('Contact 3', 'password_hash_3', 'contact3@example.com', '5555555555', 3),
('Contact 4', 'password_hash_4', 'contact4@example.com', '1111111111', 2),
('Contact 5', 'password_hash_5', 'contact5@example.com', '2222222222', 2);