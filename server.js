const express = require('express')

// use process.env var to keep private vars.
require('dotenv').config()

const helmet = require('helmet') // creates headers that protect from attacks
const bodyParser = require('body-parser') // turns response into usable format
const cors = require(
