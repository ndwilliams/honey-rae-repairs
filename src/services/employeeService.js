export const getAllEmployeesWhoAreAlsoUsers = async () => {
	const response = await fetch(`http://localhost:8088/employees?_expand=user`)
	return response.json()
}

export const getAllEmployees = async () => {
	const response = await fetch(`http://localhost:8088/users?isStaff=true`)
	return response.json()
}

export const getEmployeeByUserId = async (userId) => {
	const response = await fetch(
		`http://localhost:8088/employees?userId=${userId}&_expand=user`
	)
	return response.json()
}

export const updateEmployee = async (employee) => {
	const response = await fetch(
		`http://localhost:8088/employees/${employee.id}`,
		{
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(employee),
		}
	)
	return response
}

// export const getEmployeeById = async (employeeId) => {
// 	const response = await fetch(
// 		`http://localhost:8088/employees/${employeeId}?_expand=user`
// 	)
// 	return response.json()
// }
