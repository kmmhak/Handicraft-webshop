CREATE TYPE roleEnum AS enum ('regular', 'admin', 'master');

CREATE TABLE users(
id BIGSERIAL PRIMARY KEY NOT NULL,
username VARCHAR(50) NOT NULL,
email VARCHAR(50) UNIQUE NOT NULL,
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

CREATE TYPE unitEnum AS enum ('pcs', 'cm');

CREATE TABLE listings(
id BIGSERIAL PRIMARY KEY NOT NULL,
title VARCHAR(50) NOT NULL,
brand VARCHAR(50),
img VARCHAR,
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
created TIMESTAMPTZ DEFAULT NOW(),
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

INSERT INTO users (username, email, salt, hash)
VALUES
('Minnie', 'minnie@example.com', 'f71b158ffcbb0cdc0d11ad0ba60e6587db029677e5eee324ae7a494b1259315d', '505d15987c9c8990c2011c44a575caac2f6288b27b4b6bb53716ef2590f9350cb75215936374a4f2b631b582e8299f1c5f06dda1ef6db014f9b24d2c06ed4d44'),
('Pluto', 'pluto@example@com', '78927e832e517eed08fc5aab5f98b3b6c18dcf46c5840beb02c748a40b42b1b1', 'ba2aecf270e9c07a2290fdf919d132b78d855b8fab18d57470f9d6bee5e53a0ade3454abbbe4ec0d29d68422e678acd3b76bc1d62747f8e2f530e1b521c1ebc3'),
('Donald', 'donald@example.com', '88e13f02a3d921f8d30074843de282c9617c21a4711a51eeb201240aa47860e4', 'dbbf3407a1ea811803a8927fb5b0e437653fa7d30e8882fcc26fb81d81152772fafdb246efed8f7683f3ea264cf05504480912805dd64dfb8fb7cd729eb86f6d'),
('Scrooge', 'scrooge@example.com', '93c10976a3353f2243c5beb02345d5deb2a45c2297c348a3a33d680f2480dcb3', '5055864450e90ac9a1a179dd3ac09534e475985a7efb3d65d1822bff96cc7d9c24a21b533184bb45d5b4d1848409c6731b9402fec2109191541f13192dff683e')
;

INSERT INTO categories (name)
VALUES
('Fabrics'), 
('Yarns'),
('Bobbin lace'),
('Hobby crafts')
;

INSERT INTO subcategories (name)
VALUES
('Stretch'),
('College'),
('Wool'),
('Cotton'),
('Bobbin pillows'),
('Bobbins'),
('Card supplies'),
('Decorations')
;