export const TicketFilterBar = ({
	setShowEmergencyOnly,
	setSearchTerm,
	currentUser,
}) => {
	return (
		<div className="filter-bar">
			{currentUser.isStaff ? (
				<>
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
				</>
			) : (
				<>
					<button className="filter-btn btn-primary">Create Ticket</button>
					<button className="filter-btn btn-info">Open Tickets</button>
					<button className="filter-btn btn-secondary">All My Tickets</button>
				</>
			)}
		</div>
	)
}
