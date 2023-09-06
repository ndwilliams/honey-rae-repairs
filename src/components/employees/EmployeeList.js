import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService";
import { getStaffUsers } from "../../services/userService";
import "./Employees.css";
import { User } from "../../users/User";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getStaffUsers().then((staffArray) => {
      setEmployees(staffArray);
    });
  }, []);

  return (
    <div className="employees">
      {employees.map((employeeObj) => {
        return <User user={employeeObj} key={employeeObj.id} />;
      })}
    </div>
  );
};
