export const getAllTickets = async () => {
	const response = await fetch(`http://localhost:8088/serviceTickets`)
	return response.json()
}
