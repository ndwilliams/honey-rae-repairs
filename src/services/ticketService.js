export const getAllTickets = async () => {
	const response = await fetch(
		`http://localhost:8088/serviceTickets?_embed=employeeTickets`
	)
	return response.json()
}

export const getEmployeeTicketsByEmployeeId = async (employeeId) => {
	const response = await fetch(
		`http://localhost:8088/employeeTickets?employeeId=${employeeId}`
	)
	return response.json()
}

export const assignTicket = async (employeeTicket) => {
	const response = await fetch(`http://localhost:8088/employeeTickets`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(employeeTicket),
	})
	return response
}

export const updateTicket = async (ticket) => {
	const response = await fetch(
		`http://localhost:8088/serviceTickets/${ticket.id}`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(ticket),
		}
	)
	return response
}

export const deleteTicket = async (ticket) => {
	const response = await fetch(
		`http://localhost:8088/serviceTickets/${ticket.id}`,
		{ method: "DELETE" }
	)
	return response
}
