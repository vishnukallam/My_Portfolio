import { useState, useEffect } from 'react';
import './CRUD.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export default function CRUD() {
    const [employees, setEmployees] = useState([]);
    const [updateId, setUpdateId] = useState("");
    const [status, setStatus] = useState("add");
    const [myForm, setMyForm] = useState({
        empId: '',
        fullName: '',
        department: 'SELECT',
        salary: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMyForm({
            ...myForm,
            [name]: value
        });
    };

    const getEmployees = async () => {
        const res = await axios.get('http://localhost:8055/api/get-employees');
        const resData = res.data;
        if (resData.status) {
            setEmployees(resData.message);
        }
    };

    const deleteEmployee = async (id) => {
        const res = await axios.delete(`http://localhost:8055/api/delete-employee/${id}`);
        const resData = res.data;
        if (resData.status) {
            toast.success('Employee deleted !!');
            getEmployees();
        } else {
            toast.error('Internal server error');
        }
    };

    const onUpdate = (employee) => {
        setStatus("edit");
        setMyForm(employee);
        setUpdateId(employee._id);
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();
        if (status === "add") {
            const res = await axios.post('http://localhost:8055/api/add-employee', myForm);
            const resData = res.data;
            if (resData.status) {
                toast.success('Employee added !!');
                getEmployees();
                setMyForm({ empId: '', fullName: '', department: 'SELECT', salary: '' });
            } else {
                toast.error('Internal server error');
            }
        } else {
            const res = await axios.put(`http://localhost:8055/api/update-employee/${updateId}`, myForm);
            const resData = res.data;
            if (resData.status) {
                toast.success('Employee updated !!');
                getEmployees();
                setMyForm({ empId: '', fullName: '', department: 'SELECT', salary: '' });
                setStatus("add");
            } else {
                toast.error('Internal server error');
            }
        }
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <>
            <div className="form-container">
                <div className="box">
                    <form onSubmit={onFormSubmit}>
                        <h2>{status === 'add' ? 'Add Employee' : 'Update Employee'}</h2>
                        <div className="input-field">
                            <label>Employee ID</label>
                            <input type='text' value={myForm.empId} name='empId' onChange={handleChange} />
                        </div>
                        <div className="input-field">
                            <label>Full Name</label>
                            <input type='text' value={myForm.fullName} name='fullName' onChange={handleChange} />
                        </div>
                        <div className="input-field">
                            <label>Department</label>
                            <select name='department' value={myForm.department} onChange={handleChange}>
                                <option value=''>SELECT</option>
                                <option value='HR'>HR</option>
                                <option value='Finance'>Finance</option>
                                <option value='Engineering'>Engineering</option>
                            </select>
                        </div>
                        <div className="input-field">
                            <label>Salary</label>
                            <input type='number' value={myForm.salary} name='salary' onChange={handleChange} step='0.01' />
                        </div>
                        <button type='submit'>{status === 'add' ? 'Add Employee' : 'Update Employee'}</button>
                    </form>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                <th>Department</th>
                                <th>Salary</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.length === 0 ? (
                                <tr>
                                    <td colSpan="5">No employees available.</td>
                                </tr>
                            ) : (
                                employees.map((employee, index) => (
                                    <tr key={index}>
                                        <td>{employee.empId}</td>
                                        <td>{employee.fullName}</td>
                                        <td>{employee.department}</td>
                                        <td>{employee.salary}</td>
                                        <td className='actions'>
                                            <i onClick={() => onUpdate(employee)} className="fa-solid fa-user-pen"></i>
                                            <i onClick={() => deleteEmployee(employee._id)} className="fa-solid fa-trash"></i>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <Toaster position="top-center" reverseOrder={false} />
        </>
    );
}
