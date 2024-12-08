-- Drop and recreate the root user with the default authentication plugin
DROP USER IF EXISTS 'root'@'%';
CREATE USER 'root'@'%' IDENTIFIED BY 'my-secret-pw';

-- Grant necessary privileges
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;



-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS testdb;

USE testdb;

-- Create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
