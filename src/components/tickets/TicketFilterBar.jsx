import { useEffect, useState } from "react"

export const TicketFilterBar = ({
	allTickets,
	setShowEmergencyOnly,
	setFilteredTickets,
}) => {
	const [searchTerm, setSearchTerm] = useState("")

	useEffect(() => {
		const foundTickets = allTickets.filter((ticket) =>
			ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
		)
		setFilteredTickets(foundTickets)
	}, [searchTerm, allTickets])

	return (
		<div className="filter-bar">
			<button
				className="filter-btn btn-primary"
				onClick={() => {
					setShowEmergencyOnly(true)
				}}>
				Emergency
			</button>
			<button
				className="filter-btn btn-info"
				onClick={() => {
					setShowEmergencyOnly(false)
				}}>
				Show All
			</button>
			<input
				onChange={(event) => {
					setSearchTerm(event.target.value)
				}}
				type="text"
				placeholder="Search Tickets"
				className="ticket-search"
			/>
		</div>
	)
}
