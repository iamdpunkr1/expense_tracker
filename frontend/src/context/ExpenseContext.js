import { createContext, useState} from "react";

export const ExpenseContext = createContext()

export const expenseProvider = ({children}) =>{
 const [userName, setUserName]= useState('');
 const [selfExpenses, setSelfExpenses]= useState('');
 const [groups, setGroups]= useState([]);
 
}