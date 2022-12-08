const SelfExpense = require('../model/selfExpenseModel')

//add a self expense
const addSelfExpense = async(req, res) => {
    const {title,amount,category,date} = req.body
      
    // add doc to db
  try {
    const user_id = req.user._id
    const expense = await SelfExpense.create({title,amount,category,date, user_id})
    res.status(200).json(expense)
  } catch (error) {
    res.status(400).json({error: error.message})
  }

}

//get all selfExpense
const getSelfExpenses = async(req, res)=>{
 
    // add doc to db
  try {
    const user_id = req.user._id
    const expenses = await SelfExpense.find({user_id}).sort({createdAt: -1})
    res.status(200).json(expenses)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports={
    addSelfExpense,
    getSelfExpenses
}