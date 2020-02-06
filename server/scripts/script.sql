CREATE DATABASE plexxisdb
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1

CREATE TABLE employees (
	id SERIAL PRIMARY KEY,
	name TYPE text,
	code varchar(10),
	profession varchar(20),
	color varchar(10),
	city TYPE text,
	branch TYPE text,
	assigned boolean
);

