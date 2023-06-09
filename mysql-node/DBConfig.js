function getDBConfig() {
  return {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mdb',
    database: 'kerwin_test',
    connectLimit: 1 // pools
  }
}

module.exports = getDBConfig