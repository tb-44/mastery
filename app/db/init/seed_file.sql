DROP TABLE IF EXISTS superheroes;

CREATE TABLE IF NOT EXISTS superheroes (
    id SERIAL PRIMARY KEY,
    name TEXT,
    power TEXT
);

INSERT INTO superheroes (name, power) VALUES
('Superman', 'X-Ray vision'),
('Batman', 'Gadgets')
('Aquaman', 'Controls Water'),
('Wonder Woman', 'God-like'),
