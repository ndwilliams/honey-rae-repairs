import { Route, Routes } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import "./App.css"
import { Authorized } from "./views/Authorized"
import { ApplicationViews } from "./views/ApplicationViews"

export const App = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />

			<Route
				path="*"
				element={
					// check if the user is authorized
					<Authorized>
						{/* ApplicationViews is the Child component of Authorized */}
						<ApplicationViews />
					</Authorized>
				}
			/>
		</Routes>
	)
}
