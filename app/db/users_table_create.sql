CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(180),
    img TEXT,
    auth_id TEXT 
)