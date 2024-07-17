import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService.js"
import { User } from "../user/User.jsx"
import "./Customers.css"
import { Link } from "react-router-dom"

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
					<Link key={customerObj.id} to={`/customers/${customerObj.id}`}>
						<User user={customerObj} />
					</Link>
				)
			})}
		</div>
	)
}
