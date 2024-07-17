import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getEmployeeByUserId } from "../../services/employeeService"
import { getEmployeeTicketsByEmployeeId } from "../../services/ticketService"

export const EmployeeDetails = () => {
	const { userId } = useParams()
	const [employee, setEmployee] = useState({})
	const [employeeTickets, setEmployeeTickets] = useState(0)

	useEffect(() => {
		getEmployeeByUserId(userId).then((employeeArray) => {
			const employeeObj = employeeArray[0]
			setEmployee(employeeObj)
		})
	}, [userId])

	useEffect(() => {
		getEmployeeTicketsByEmployeeId(employee.id).then((employeeTicketsArray) => {
			if (employeeTicketsArray) {
				const numberOfEmployeeTickets = employeeTicketsArray.length
				setEmployeeTickets(numberOfEmployeeTickets)
			} else {
				setEmployeeTickets(0)
			}
		})
	}, [employee.id])

	return (
		<section className="employee">
			<div className="employee-header">{employee.user?.fullName}</div>
			<div>
				<span className="employee-info">Email : </span>
				{employee.user?.email}
			</div>
			<div>
				<span className="employee-info">Specialty : </span>
				{employee.specialty}
			</div>
			<div>
				<span className="employee-info">Rate : </span>
				{employee.rate}
			</div>
			<div className="employee-footer">
				Currently working on {employeeTickets} ticket(s)
			</div>
		</section>
	)
}
