CREATE TYPE roleEnum AS enum ('regular', 'admin', 'master');

CREATE TABLE users(
id BIGSERIAL PRIMARY KEY NOT NULL,
name VARCHAR(200) NOT NULL,
email VARCHAR(200) UNIQUE NOT NULL,
salt VARCHAR NOT NULL,
hash VARCHAR NOT NULL,
role roleEnum DEFAULT 'regular'
);


CREATE TABLE categories (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL
);

CREATE TABLE subcategories (
id SERIAL PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL
);

CREATE TYPE unitEnum AS enum ('kpl', 'cm');

CREATE TABLE listings(
id BIGSERIAL PRIMARY KEY NOT NULL,
name VARCHAR(50) NOT NULL,
brand VARCHAR(50),
photo VARCHAR,
length INT NOT NULL,
unit unitEnum,
color VARCHAR(30),
description VARCHAR NOT NULL,
price INT NOT NULL,
fk_categories_id INT not NULL,
fk_subcategories_id INT not NULL,
fk_users_id INT not NULL,
CONSTRAINT fk_categories_id
	FOREIGN KEY(fk_categories_id)
		REFERENCES categories(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
CONSTRAINT fk_subcategories_id
	FOREIGN KEY(fk_subcategories_id)
		REFERENCES subcategories(id)
		ON DELETE CASCADE 
		ON UPDATE CASCADE,
CONSTRAINT fk_users_id
	FOREIGN KEY(fk_users_id)
		REFERENCES users(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

CREATE TABLE bids (
id BIGSERIAL PRIMARY KEY NOT NULL,
fk_listings_id INT,
fk_users_id INT,
bid_time TIMESTAMPTZ DEFAULT NOW(),
CONSTRAINT fk_listings_id
	FOREIGN KEY(fk_listings_id)
		REFERENCES listings(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE,
CONSTRAINT fk_users_id
	FOREIGN KEY(fk_users_id)
		REFERENCES users(id)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

CREATE TABLE messages (
id BIGSERIAL PRIMARY KEY NOT NULL,
subject VARCHAR(100) NOT NULL,
message VARCHAR(500) NOT NULL,
fk_listings_id INT NOT NULL,
fk_sender_id INT NOT NULL,
fk_recipient_id INT NOT NULL,
created TIMESTAMPTZ,
CONSTRAINT fk_listings_id
	FOREIGN KEY(fk_listings_id)
		REFERENCES listings(id)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
CONSTRAINT fk_sender_id
	FOREIGN KEY(fk_sender_id)
		REFERENCES users(id)
		ON DELETE SET NULL
		ON UPDATE CASCADE,
CONSTRAINT fk_recipient_id
	FOREIGN KEY(fk_recipient_id)
		REFERENCES users(id)
		ON DELETE SET NULL
		ON UPDATE CASCADE
);