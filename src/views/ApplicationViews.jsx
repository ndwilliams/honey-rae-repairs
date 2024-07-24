import { useEffect, useState } from "react"

export const ApplicationViews = () => {
	const [currentUser, setCurrentUser] = useState({})

	useEffect(() => {
		const localHoneyUser = localStorage.getItem("honey_user")
		const honeyUserObject = JSON.parse(localHoneyUser)
		setCurrentUser(honeyUserObject)
	}, [])

	return <></>
}
