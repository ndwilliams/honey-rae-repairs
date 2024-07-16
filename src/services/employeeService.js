export const getAllEmployeesWhoAreAlsoUsers = async () => {
	const response = await fetch(`http://localhost:8088/employees?_expand=user`)
	return response.json()
}

export const getEmployeeById = async (employeeId) => {
	const response = await fetch(
		`http://localhost:8088/${employeeId}?_expand=user`
	)
	return response.json()
}

export const getAllEmployees = async () => {
	const response = await fetch(`http://localhost:8088/users?isStaff=true`)
	return response.json()
}
