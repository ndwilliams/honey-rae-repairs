import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.js"
import { Ticket } from "./Ticket.jsx"
import "./Tickets.css"
import { TicketFilterBar } from "./TicketFilterBar.jsx"

export const TicketList = ({ currentUser }) => {
	const [allTickets, setAllTickets] = useState([])
	const [filteredTickets, setFilteredTickets] = useState([])
	const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
	const [showOpenOnly, setShowOpenOnly] = useState(false)
	const [searchTerm, setSearchTerm] = useState("")

	const getAndSetAllTickets = () => {
		getAllTickets().then((ticketsArray) => {
			if (currentUser.isStaff) {
				setAllTickets(ticketsArray)
			} else {
				const customerTickets = ticketsArray.filter(
					(ticket) => ticket.userId === currentUser.id
				)
				setAllTickets(customerTickets)
			}
		})
	}

	useEffect(() => {
		if (showEmergencyOnly) {
			const emergencyTickets = allTickets.filter((ticket) => ticket.emergency)
			setFilteredTickets(emergencyTickets)
		} else {
			setFilteredTickets(allTickets)
		}
	}, [showEmergencyOnly, allTickets])

	useEffect(() => {
		getAndSetAllTickets()
	}, [currentUser]) // function = what we want to happen, array = when we want it to happen

	useEffect(() => {
		const foundTickets = allTickets.filter((ticket) =>
			ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
		)
		setFilteredTickets(foundTickets)
	}, [searchTerm, allTickets])

	useEffect(() => {
		if (showOpenOnly) {
			const openTickets = allTickets.filter((ticket) => !ticket.dateCompleted)
			setFilteredTickets(openTickets)
		} else {
			setFilteredTickets(allTickets)
		}
	}, [allTickets, showOpenOnly])

	return (
		<div className="tickets-container">
			<h2>Tickets</h2>
			<TicketFilterBar
				setSearchTerm={setSearchTerm}
				setShowEmergencyOnly={setShowEmergencyOnly}
				setShowOpenOnly={setShowOpenOnly}
				currentUser={currentUser}
			/>
			<article className="tickets">
				{filteredTickets.map((ticketObj) => {
					return (
						<Ticket
							ticket={ticketObj}
							key={ticketObj.id}
							currentUser={currentUser}
							getAndSetAllTickets={getAndSetAllTickets}
						/>
					)
				})}
			</article>
		</div>
	)
}
