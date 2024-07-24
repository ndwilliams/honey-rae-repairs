import { Outlet, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/nav/Navbar"
import { Welcome } from "../components/welcome/Welcome"

export const CustomerViews = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						{/* <Navbar /> */}
						<Outlet />
					</>
				}>
				<Route index element={<Welcome />} />
			</Route>
		</Routes>
	)
}
