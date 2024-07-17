import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService"
import { User } from "../user/User"
import { Link } from "react-router-dom"
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
				return (
					<Link key={employeeObj.id} to={`/employees/${employeeObj.id}`}>
						<User user={employeeObj} />
					</Link>
				)
			})}
		</div>
	)
}
