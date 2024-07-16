import { useEffect, useState } from "react"
import { getAllEmployeesWhoAreAlsoUsers } from "../../services/employeeService.js"

export const Ticket = ({ ticket }) => {
	const [employees, setEmployees] = useState([])
	const [assignedEmployee, setAssignedEmployee] = useState({}) // useState("")

	const getAndSetEmployees = () => {
		getAllEmployeesWhoAreAlsoUsers().then((employeesArray) =>
			setEmployees(employeesArray)
		)
	}

	// useEffect(() => {
	//	if (ticket.employeeTickets.length) {
	//		getEmployeeById(ticket.employeeTickets[0].id).then(
	//  		(employee) => setAssignedEmployee(employee))}
	//	}, [ticket])

	useEffect(() => {
		getAndSetEmployees()
	}, [])

	useEffect(() => {
		const foundEmployee = employees.find(
			(employeeObj) => employeeObj.id === ticket.employeeTickets[0]?.employeeId
		)
		setAssignedEmployee(foundEmployee)
	}, [employees, ticket])

	return (
		<section className="ticket">
			<header className="ticket-info">#{ticket.id}</header>
			<div>{ticket.description}</div>
			<footer>
				<div>
					<div className="ticket-info">assignee</div>
					<div>
						{assignedEmployee ? assignedEmployee.user?.fullName : "None"}
					</div>
				</div>
				<div>
					<div className="ticket-info">emergency</div>
					<div>{ticket.emergency ? "yes" : "no"}</div>
				</div>
			</footer>
		</section>
	)
}
