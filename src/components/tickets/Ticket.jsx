import { useEffect, useState } from "react"
import { getAllEmployeesWhoAreAlsoUsers } from "../../services/employeeService.js"
import {
	assignTicket,
	deleteTicket,
	updateTicket,
} from "../../services/ticketService.js"

export const Ticket = ({ ticket, currentUser, getAndSetAllTickets }) => {
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

	const handleClaim = () => {
		// find currentUser's employeeId
		const currentEmployee = employees.find(
			(employee) => employee.userId === currentUser.id
		)
		// create employee ticket object
		const newEmployeeTicket = {
			employeeId: currentEmployee.id,
			serviceTicketId: ticket.id,
		}

		assignTicket(newEmployeeTicket).then(() => {
			getAndSetAllTickets()
		})
	}

	const handleClose = () => {
		const closedTicket = {
			id: ticket.id,
			userId: ticket.userId,
			description: ticket.description,
			emergency: ticket.emergency,
			dateCompleted: new Date(),
		}

		updateTicket(closedTicket).then(() => {
			getAndSetAllTickets()
		})
	}

	const handleDelete = async () => {
		await deleteTicket(ticket)
		getAndSetAllTickets()
	}

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
				<div className="btn-container">
					{/* If the logged in user is an employee and 
					there's no employee ticket associated with the service ticket,
					we want to render a button to claim the ticket */}
					{currentUser.isStaff && !assignedEmployee ? (
						<button className="btn btn-secondary" onClick={handleClaim}>
							Claim
						</button>
					) : (
						""
					)}

					{/* If the logged in user is the assigned employee for the ticket,
					and there is not dateCompleted, then we want to render a button to 
					close the ticket */}

					{assignedEmployee?.userId === currentUser.id &&
					!ticket.dateCompleted ? (
						<button className="btn btn-warning" onClick={handleClose}>
							Close
						</button>
					) : (
						""
					)}
					{!currentUser.isStaff ? (
						<button className="btn btn-warning" onClick={handleDelete}>
							Delete
						</button>
					) : (
						""
					)}
				</div>
			</footer>
		</section>
	)
}
