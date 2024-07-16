import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.js"
import { Ticket } from "./Ticket.jsx"
import "./Tickets.css"
import { TicketFilterBar } from "./TicketFilterBar.jsx"

export const TicketList = () => {
	const [allTickets, setAllTickets] = useState([])
	const [filteredTickets, setFilteredTickets] = useState([])
	const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)

	useEffect(() => {
		if (showEmergencyOnly) {
			const emergencyTickets = allTickets.filter((ticket) => ticket.emergency)
			setFilteredTickets(emergencyTickets)
		} else {
			setFilteredTickets(allTickets)
		}
	}, [showEmergencyOnly, allTickets])

	useEffect(() => {
		getAllTickets().then((ticketsArray) => {
			setAllTickets(ticketsArray)
			console.log("tickets set")
		})
	}, []) // function = what we want to happen, array = when we want it to happen

	return (
		<div className="tickets-container">
			<h2>Tickets</h2>
			<TicketFilterBar
				allTickets={allTickets}
				setShowEmergencyOnly={setShowEmergencyOnly}
				setFilteredTickets={setFilteredTickets}
			/>
			<article className="tickets">
				{filteredTickets.map((ticketObj) => {
					return <Ticket ticket={ticketObj} key={ticketObj.id} />
				})}
			</article>
		</div>
	)
}
