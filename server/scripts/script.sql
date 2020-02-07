-- Create DATABASE
CREATE DATABASE plexxisdb
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1

-- Create TABLE
CREATE TABLE employees
(
)
;
ALTER TABLE employees
    OWNER to postgres;

-- Adding COLUMNS
ALTER TABLE employees
ADD id SERIAL PRIMARY KEY;

ALTER TABLE employees
ADD name text;

ALTER TABLE employees
ADD code varchar(10);

ALTER TABLE employees
ADD profession varchar(20);

ALTER TABLE employees
ADD color varchar(10);

ALTER TABLE employees
ADD city text;

ALTER TABLE employees
ADD branch text;

ALTER TABLE employees
ADD assigned boolean;


