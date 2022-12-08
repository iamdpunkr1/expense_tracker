const express = require('express')
const {addSelfExpense, getSelfExpenses} = require('../controller/selfExpenseController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

router.get('/dashboard',getSelfExpenses)

router.post('/dashboard',addSelfExpense)

module.exports=router