import { Outlet, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/nav/Navbar"
import { Welcome } from "../components/welcome/Welcome"
import { TicketList } from "../components/tickets/TicketList"
import { CustomerList } from "../components/customers/CustomerList"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { EmployeeList } from "../components/employees/EmployeeList"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { useEffect, useState } from "react"

export const ApplicationViews = () => {
	const [currentUser, setCurrentUser] = useState({})

	useEffect(() => {
		const localHoneyUser = localStorage.getItem("honey_user")
		const honeyUserObject = JSON.parse(localHoneyUser)
		setCurrentUser(honeyUserObject)
	}, [])

	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<Navbar />
						<Outlet />
					</>
				}>
				<Route index element={<Welcome />} />
				<Route
					path="tickets"
					element={<TicketList currentUser={currentUser} />}
				/>
				<Route path="customers">
					<Route index element={<CustomerList />} />
					<Route path=":userId" element={<CustomerDetails />} />
				</Route>
				<Route path="employees">
					<Route index element={<EmployeeList />} />
					<Route path=":userId" element={<EmployeeDetails />} />
				</Route>
				<Route path="/profile" element={<>Profile</>} />
			</Route>
		</Routes>
	)
}
