import { useAuthContext } from "./useAuthContext"
import { useExpenseContext } from "../context/ExpenseContext"

export const useLogout = () =>{
    const {dispatch} = useAuthContext()
    const {setSelfExpenses,setGroups}= useExpenseContext()

    const logout = () =>{
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({ type: 'LOGOUT' })
        setSelfExpenses([])
        setGroups([])
    }

    return {logout}
}