const express= require('express')
const {addGroup, getGroups} =  require('../controller/groupController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

router.post('/dashboard/groups', addGroup)
router.get('/dashboard/groups', getGroups)

module.exports=router