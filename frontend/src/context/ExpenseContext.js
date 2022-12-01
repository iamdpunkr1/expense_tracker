import { createContext, useState, useContext} from "react";

export const ExpenseContext = createContext()
export const useExpenseContext = ()=> useContext(ExpenseContext)

export const ExpenseContextProvider = ({children}) =>{
//  const [userName, setUserName]= useState('');
 const [selfExpenses, setSelfExpenses]= useState([]);
                                            
 const [groups, setGroups]= useState([]);

//  {
//     groupName:"",
//     createdBy:"",
//     members:[{email:"",name:""},],
//     expenses:[{
//                 category:"",
//                 price:"",
//                 reason:"",
//                 date:""
//                     }]        
//     },

 const value ={selfExpenses, setSelfExpenses,groups, setGroups}
 return (
    <ExpenseContext.Provider value={value}>
    {children}
    </ExpenseContext.Provider>
 )
 
}