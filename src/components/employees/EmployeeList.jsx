import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService"
import { User } from "../user/User"
import "./Employees.css"

export const EmployeeList = () => {
	const [employees, setEmployees] = useState([])

	const getAndSetEmployees = () => {
		getAllEmployees().then((employeesArray) => setEmployees(employeesArray))
	}
	useEffect(() => {
		getAndSetEmployees()
	}, [])

	return (
		<div className="employees">
			{employees.map((employeeObj) => {
				return <User key={employeeObj.id} user={employeeObj} />
			})}
		</div>
	)
}
