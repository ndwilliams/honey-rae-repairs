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
