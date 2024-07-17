import { Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import { CustomerList } from "./components/customers/CustomerList"
import { EmployeeList } from "./components/employees/EmployeeList"
import { TicketList } from "./components/tickets/TicketList"
import { Navbar } from "./components/nav/Navbar"
import { Welcome } from "./components/welcome/Welcome"

export const App = () => {
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
				<Route path="tickets" element={<TicketList />} />
				<Route path="customers" element={<CustomerList />} />
				<Route path="employees" element={<EmployeeList />} />
			</Route>
		</Routes>
	)
}
