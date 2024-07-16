import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.js"
import { Ticket } from "./Ticket.jsx"
import "./Tickets.css"
import { TicketFilterBar } from "./TicketFilterBar.jsx"

export const TicketList = () => {
	const [allTickets, setAllTickets] = useState([])
	const [filteredTickets, setFilteredTickets] = useState([])
	const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
	const [searchTerm, setSearchTerm] = useState("")

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

	useEffect(() => {
		const foundTickets = allTickets.filter((ticket) =>
			ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
		)
		setFilteredTickets(foundTickets)
	}, [searchTerm, allTickets])

	return (
		<div className="tickets-container">
			<h2>Tickets</h2>
			<TicketFilterBar
				setSearchTerm={setSearchTerm}
				setShowEmergencyOnly={setShowEmergencyOnly}
			/>
			<article className="tickets">
				{filteredTickets.map((ticketObj) => {
					return <Ticket ticket={ticketObj} key={ticketObj.id} />
				})}
			</article>
		</div>
	)
}
