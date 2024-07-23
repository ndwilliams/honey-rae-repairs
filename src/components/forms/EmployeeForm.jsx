import { useEffect, useState } from "react"
import "./Form.css"
import { getEmployeeByUserId } from "../../services/employeeService"

export const EmployeeForm = ({ currentUser }) => {
	// Want to be able to edit the specialty and the rate
	// Can get current values through userId in local storage
	// and fetching corresponding employee object/data
	const [employee, setEmployee] = useState({})

	useEffect(() => {
		getEmployeeByUserId(currentUser.id).then((employeeArray) => {
			const employeeObj = employeeArray[0]
			setEmployee(employeeObj)
		})
	}, [currentUser])

	return (
		<form className="profile">
			<h2>Update Profile</h2>
			<fieldset>
				<div className="form-group">
					<label>Specialty:</label>
					<input type="text" required className="form-control" />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label>Hourly Rate:</label>
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
