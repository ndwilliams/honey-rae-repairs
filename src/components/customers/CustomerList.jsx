import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService"

export const CustomerList = () => {
	const [allCustomers, setAllCustomers] = useState([])

	const getAndSetAllCustomers = () => {
		getNonStaffUsers().then((customerArray) => setAllCustomers(customerArray))
	}

	useEffect(() => {
		getAndSetAllCustomers()
	}, [])
}
