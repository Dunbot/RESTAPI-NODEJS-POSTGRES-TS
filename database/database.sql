CREATE DATABASE node_pg_ts;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    description TEXT,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

);
