const InMemoryDB = require("./InMemoryDB")

let inmemoryDB = new InMemoryDB();

// Should return null because "A" doesn’t exist in the DB yet
console.log(inmemoryDB.get("A"));

// Should throw an error because a transaction is not in progress
try {
    inmemoryDB.put("A", 5);
} catch (e) {
    console.error(e.message);
}

// Starts a new transaction
inmemoryDB.begin_transaction();

// Sets value of "A" to 5 but it's not committed yet
inmemoryDB.put("A", 5);

// Should return null because updates to "A" are not committed yet
console.log(inmemoryDB.get("A"));

// Update "A"’s value to 6 within the transaction
inmemoryDB.put("A", 6);

// Commits the open transaction
inmemoryDB.commit();

// Should return 6, the last value of "A" to be committed
console.log(inmemoryDB.get("A"));

// Throws an error because there is no open transaction
try {
    inmemoryDB.commit();
} catch (e) {
    console.error(e.message);
}

// Throws an error because there is no ongoing transaction
try {
    inmemoryDB.rollback();
} catch (e) {
    console.error(e.message);
}

// Should return null because "B" does not exist in the database
console.log(inmemoryDB.get("B"));

// Starts a new transaction
inmemoryDB.begin_transaction();

// Set key "B"’s value to 10 within the transaction
inmemoryDB.put("B", 10);

// Rollback the transaction - revert any changes made to "B"
inmemoryDB.rollback();

// Should return null because changes to "B" were rolled back
console.log(inmemoryDB.get("B"));
