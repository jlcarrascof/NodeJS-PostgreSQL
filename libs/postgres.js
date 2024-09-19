const { Client } = require('pg');

async function getConnection() {
    const client = new Client({
        host: '172.18.0.2',
        port: 5432,
        user: 'javier',
        password: '12345',
        database: 'my_store'
    });
    await client.connect();
    return client;
}

module.exports = getConnection;
