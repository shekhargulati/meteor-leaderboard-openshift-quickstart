#!/bin/env node

// Setup env
process.env.MONGO_URL = process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME
process.env.PORT = process.env.OPENSHIFT_INTERNAL_PORT
process.env.IP = process.env.OPENSHIFT_INTERNAL_IP

// Start meteor server
require(require('path').join(__dirname, 'main.js'));