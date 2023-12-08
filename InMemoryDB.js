class InMemoryDB {
    constructor() {
        this.store = {};
        this.transaction = null;
    }

    begin_transaction() {
        if (this.transaction) {
            throw new Error("Transaction already in progress");
        }
        this.transaction = { ...this.store };
    }

    put(key, value) {
        if (typeof(key) != typeof("A") || typeof(value) != typeof(5)) {
            throw new Error("Incorrect key or value type")
        }
        if (this.transaction === null) {
            throw new Error("No transaction in progress");
        }
        this.transaction[key] = value;
    }

    get(key) {
        return this.store[key] || null;
    }

    commit() {
        if (this.transaction === null) {
            throw new Error("No transaction in progress");
        }
        this.store = { ...this.transaction };
        this.transaction = null;
    }

    rollback() {
        if (this.transaction === null) {
            throw new Error("No transaction in progress");
        }
        this.transaction = null;
    }
}

module.exports = InMemoryDB;