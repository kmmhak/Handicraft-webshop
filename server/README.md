# Handicraft Webshop

A marketplace for selling and buying anything to do with handicrafts. User can search for something to buy (product title, description, minimum and maximum price, colour, minimum and maximum length, category, subcategory) and as logged in users can put products on sale, make bids on items and stay in queue for an item in case the previous buyer changes their mind. Users can send messages to the seller to ask questions about their wares.

# Endpoints

| Root endpoint | Method | Description            |
| ------------- | ------ | ---------------------- |
| /             | GET    | Front page of the shop |

| Root endpoint  | Method | Description   |
| -------------- | ------ | ------------- |
| /auth/register | POST   | Registeration |
| /auth/login    | POST   | Login         |

| Root endpoint | Method | Description             |
| ------------- | ------ | ----------------------- |
| /users/       | GET    | Get all users           |
| /users/{id}   | GET    | Get user by id          |
| /users/change | PATCH  | Change user password    |
| /users/       | PATCH  | Change user information |
| /users/{id}   | DELETE | Delete user account     |
| /users/{id}   | PATCH  | Update user role        |

| Root endpoint  | Method | Description           |
| -------------- | ------ | --------------------- |
| Root endpoint  | Method | Description           |
| /listings/     | GET    | Get all listings      |
| /listings/{id} | GET    | Get a listing by id   |
| /listings/     | POST   | Add a listing         |
| /listings/{id} | GET    | Get a user's listings |
| /listings/{id} | DELETE | Delete a listing      |

| Root endpoint      | Method | Description              |
| ------------------ | ------ | ------------------------ |
| Root endpoint      | Method | Description              |
| /bids/{id}         | GET    | Get a user's bids        |
| /bids/listing/{id} | POST   | Make a bid on a listing  |
| /bids/             | GET    | Get your own bid history |

| Root endpoint | Method | Description                             |
| ------------- | ------ | --------------------------------------- |
| Root endpoint | Method | Description                             |
| /messages/    | GET    | Get a user's sent and received messages |
| /messages/    | POST   | Send a message                          |

# Dependencies

| Dependency     | Version   |
| -------------- | --------- |
| "cors"         | "^2.8.5"  |
| "dotenv"       | "^16.0.0" |
| "express"      | "^4.17.3" |
| "hstore"       | "^0.0.1"  |
| "jsonwebtoken" | "^8.5.1"  |
| "passport"     | "^0.5.2"  |
| "passport-jwt" | "^4.0.0"  |
| "pg"           | "^8.7.3"  |
| "pgtools"      | "^0.3.2"  |
| "psqlformat"   | "^1.16.0" |

# Running

## Test and Deploy

npm i for installing all dependencies and npm run dev for running nodemon.
