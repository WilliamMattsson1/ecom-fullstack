PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price INTEGER NOT NULL
);

INSERT INTO products (name, price) VALUES ('T-shirt', 19.99);
INSERT INTO products (name, price) VALUES ('Jeans', 49.99);
INSERT INTO products (name, price) VALUES ('Jacket', 89.99);
INSERT INTO products (name, price) VALUES ('Sneakers', 59.99);


CREATE TABLE IF NOT EXISTS newsletterSubs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
