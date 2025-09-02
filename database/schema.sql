CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    class INT,
    interest VARCHAR(50)
);

CREATE TABLE colleges (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    location VARCHAR(100),
    courses TEXT,
    facilities TEXT
);

CREATE TABLE quiz_results (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    recommended_stream VARCHAR(50)
);
