import "./Form.css"

export const CreateTicketForm = ({ currentUser }) => {
	return (
		<form>
			<h2>New Service Ticket</h2>
			<fieldset>
				<div className="form-group">
					<label>Description</label>
					<input
						type="text"
						className="form-control"
						placeholder="Brief description of problem"
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label>
						Emergency:
						<input type="checkbox" />
					</label>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<button className="form-btn btn-info">Submit Ticket</button>
				</div>
			</fieldset>
		</form>
	)
}
