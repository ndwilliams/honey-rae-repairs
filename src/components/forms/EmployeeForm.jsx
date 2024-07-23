import "./Form.css"

export const EmployeeForm = () => {
	// Want to be able to edit the specialty and the rate

	return (
		<form className="profile">
			<h2>Update Profile</h2>
			<fieldset>
				<div className="form-group">
					<label>Specialty</label>
					<input type="text" required className="form-control" />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label>Hourly Rate</label>
					<input type="number" required className="form-control" />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<button className="form-btn btn-primary">Save Profile</button>
				</div>
			</fieldset>
		</form>
	)
}
