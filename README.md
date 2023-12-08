# Data Processing and Transactions

## Overview
This project implements an in-memory key-value database with transaction support. It allows basic operations like setting and retrieving values, along with transactional operations such as beginning, committing, and rolling back transactions.

## Features
- **In-Memory Key-Value Store:** Store data in a simple key-value format.
- **Transactions:** Begin, commit, and rollback transactions to manage data changes.
- **Error Handling:** The system throws errors when invalid operations are attempted, such as committing a non-existent transaction.

## Installation
Clone the repository and navigate to the project directory:
```bash
git clone https://github.com/codycoyle/data-processing-assignment.git
cd data-processing-assignment
```

## Usage
To use the database, first import the 'InMemoryDB' from the module:
```javascript
const InMemoryDB = require('./InMemoryDb.js');
```

Create a new instance of the database:
```javascript
let database = new InMemoryDB();
```

Now use the database methods to interact with the data:
- **'begin_transaction()'**: Begin a new transaction
- **'put(key, value)'**: Set the value for a key, must be during a transaction, only (String, Integer) key and pair allowed
- **'get(key)'**: Retrieve the value associated for a key, returns null if no key/value exists
- **'commit()'**: Commit the current transaction to the database, ends transaction and saves changes
- **'rollback()'**: Rollback the current transaction, ends transaction and deletes unsaved changes

Examples of each method are in 'main.js' and to run main for testing purposes using Node (make sure Node.js is installed and up to date at https://nodejs.org/en), make sure you are in the data-processing-assignment directory and run:
```bash
node main
```

## How to improve this assignment
Overall, the assignment is a good basic overview of how transactions work. I think, however, to make this a more fleshed-out assignment, you could add additional requirements to set up an actual database using free online database resources (ElephantSQL is a good free example). Using the real outsourced PostgreSQL (or other) database along with a helper library like Sequelize, have students set up transaction methods. Not only would this help students learn about transactions and their importance, but this could also teach them about some back-end libraries and help them learn how to set up their own databases.
