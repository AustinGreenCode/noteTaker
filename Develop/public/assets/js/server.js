
const express = require('express')
const path = require('path');
const fs = require('fs');
const reviews = require('./db/db.json');

const PORT = 3001;
const app = express();