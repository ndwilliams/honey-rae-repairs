import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService.js"
import "./Customers.css"

export const CustomerList = () => {
	const [allCustomers, setAllCustomers] = useState([])

	const getAndSetAllCustomers = () => {
		getNonStaffUsers().then((customerArray) => setAllCustomers(customerArray))
	}

	useEffect(() => {
		getAndSetAllCustomers()
	}, [])

	return (
		<div className="customers">
			{allCustomers.map((customerObj) => {
				return (
					<div key={customerObj.id}>
						<div>
							<div>Name</div>
							<div>{customerObj.fullName}</div>
						</div>
						<div>
							<div>Email</div>
							<div>{customerObj.email}</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
