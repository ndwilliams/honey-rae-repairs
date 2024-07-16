import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.js"
import { Ticket } from "./Ticket.jsx"
import "./Tickets.css"

export const TicketList = () => {
	const [allTickets, setAllTickets] = useState([])
	const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
	const [filteredTickets, setFilteredTickets] = useState([])

	useEffect(() => {
		getAllTickets().then((ticketsArray) => {
			setAllTickets(ticketsArray)
			console.log("tickets set")
		})
	}, []) // function = what we want to happen, array = when we want it to happen

	useEffect(() => {
		if (showEmergencyOnly) {
			const emergencyTickets = allTickets.filter((ticket) => ticket.emergency)
			setFilteredTickets(emergencyTickets)
		} else {
			setFilteredTickets(allTickets)
		}
	}, [showEmergencyOnly, allTickets])

	return (
		<div className="tickets-container">
			<h2>Tickets</h2>
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
					type="text"
					placeholder="Search Tickets"
					className="ticket-search"
				/>
			</div>

			<article className="tickets">
				{filteredTickets.map((ticketObj) => {
					return <Ticket ticket={ticketObj} key={ticketObj.id} />
				})}
			</article>
		</div>
	)
}
