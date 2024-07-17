import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCustomerByUserId } from "../../services/customerService"
import "./Customers.css"

export const CustomerDetails = () => {
	// /customers/3
	// path="/customers/:customerId" --> customerId is the key, 3 is the value
	const { userId } = useParams() // {customerId : 3}
	const [customer, setCustomer] = useState({})

	useEffect(() => {
		getCustomerByUserId(userId).then((customerArray) => {
			const customerObj = customerArray[0]
			setCustomer(customerObj)
		})
	}, [userId])

	return (
		<section className="customer">
			<header className="customer-header">{customer.user?.fullName}</header>
			<div>
				<span className="customer-info">Email : </span>
				{customer.user?.email}
			</div>
			<div>
				<span className="customer-info">Address : </span>
				{customer.address}
			</div>
			<div>
				<span className="customer-info">Phone Number :</span>
				{customer.phoneNumber}
			</div>
		</section>
	)
}
