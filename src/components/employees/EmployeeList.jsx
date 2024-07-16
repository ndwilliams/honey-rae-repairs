import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService"

export const EmployeeList = () => {
	const [employees, setEmployees] = useState([])

	const getAndSetEmployees = () => {
		getAllEmployees().then((employeesArray) => setEmployees(employeesArray))
	}
	useEffect(() => {
		getAndSetEmployees()
	}, [])
}
