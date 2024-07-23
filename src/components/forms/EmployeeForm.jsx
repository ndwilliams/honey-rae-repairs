import { useEffect, useState } from "react"
import {
	getEmployeeByUserId,
	updateEmployee,
} from "../../services/employeeService"
import { useNavigate } from "react-router-dom"
import "./Form.css"

export const EmployeeForm = ({ currentUser }) => {
	// Want to be able to edit the specialty and the rate
	// Can get current values through userId in local storage
	// and fetching corresponding employee object/data
	const [employee, setEmployee] = useState({
		specialty: "",
		rate: 0,
	})

	const navigate = useNavigate()

	useEffect(() => {
		getEmployeeByUserId(currentUser.id).then((employeeArray) => {
			const employeeObj = employeeArray[0]
			setEmployee(employeeObj)
		})
	}, [currentUser])

	const handleInputChange = (event) => {
		const stateCopy = { ...employee }
		stateCopy[event.target.name] = event.target.value
		setEmployee(stateCopy)
	}

	const handleSave = (event) => {
		event.preventDefault()
		console.log("clicked")

		const editedEmployee = {
			id: employee.id,
			specialty: employee.specialty,
			rate: employee.rate,
			userId: employee.userId,
		}

		updateEmployee(editedEmployee).then(() => {
			navigate(`/employees/${currentUser.id}`)
		})
	}

	return (
		<form className="profile">
			<h2>Update Profile</h2>
			<fieldset>
				<div className="form-group">
					<label>Specialty:</label>
					<input
						type="text"
						name="specialty"
						value={employee?.specialty ? employee.specialty : ""}
						onChange={handleInputChange}
						required
						className="form-control"
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label>Hourly Rate:</label>
					<input
						type="number"
						name="rate"
						value={employee?.rate ? employee.rate : ""}
						onChange={handleInputChange}
						required
						className="form-control"
					/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<button className="form-btn btn-primary" onClick={handleSave}>
						Save Profile
					</button>
				</div>
			</fieldset>
		</form>
	)
}
