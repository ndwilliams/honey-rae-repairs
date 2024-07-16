import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
	return (
		<ul className="navbar">
			<li className="navbar-item">
				<Link to="/tickets">Tickets</Link>
			</li>
			<li className="navbar-item">
				<Link to="/customers">Customers</Link>
			</li>
			<li className="navbar-item">
				<Link to="/employees">Employees</Link>
			</li>
		</ul>
	)
}
