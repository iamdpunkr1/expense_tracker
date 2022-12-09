const Group = require('../model/groupModel')

//adding a group
const addGroup = async(req,res)=>{
    const {groupTitle, groupCategory,amount,createdBy,
        members:[{memberName, memberEmail, groupBalance}],
        groupExpenses:[]} = req.body

    try{
        const user_id = req.user._id
        const group =await Group.create({groupTitle, groupCategory,amount,createdBy,
            members:[{memberName, memberEmail, groupBalance}],
            groupExpenses:[],user_id})
        res.status(200).json(group)
       
    }catch(error){
        res.status(400).json({error:error.message})
       
    }
   
}

//getting all groups
const getGroups = async (req,res) => {
    try{
        const user_id = req.user._id
        const groups = await Group.find({user_id}).sort({createdAt:-1})
        res.status(200).json(groups)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports={
    addGroup,
    getGroups
}