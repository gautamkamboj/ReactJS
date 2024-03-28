import React, { useReducer } from 'react';

const employees = [
    {"id":1,"first_name":"Jaymee","last_name":"Imm","email":"jimm0@craigslist.org","gender":"Genderqueer","age":80},
    {"id":2,"first_name":"Jody","last_name":"Themann","email":"jthemann1@skyrock.com","gender":"Agender","age":29},
    {"id":3,"first_name":"Cece","last_name":"Carlet","email":"ccarlet2@jalbum.net","gender":"Male","age":69},
    {"id":4,"first_name":"Elton","last_name":"Allinson","email":"eallinson3@jugem.jp","gender":"Male","age":31},
    {"id":5,"first_name":"Garvy","last_name":"Shaddick","email":"gshaddick4@rediff.com","gender":"Male","age":32},
    {"id":6,"first_name":"Fin","last_name":"Realy","email":"frealy5@unc.edu","gender":"Male","age":26},
    {"id":7,"first_name":"Minnaminnie","last_name":"Fransseni","email":"mfransseni6@aboutads.info","gender":"Agender","age":52},
    {"id":8,"first_name":"Fernando","last_name":"Pagon","email":"fpagon7@blogs.com","gender":"Male","age":40},
    {"id":9,"first_name":"Tiphanie","last_name":"Fenny","email":"tfenny8@sakura.ne.jp","gender":"Female","age":52},
    {"id":10,"first_name":"Nerti","last_name":"Try","email":"ntry9@shareasale.com","gender":"Female","age":43},
    {"id":11,"first_name":"Abagael","last_name":"Beadell","email":"abeadella@unc.edu","gender":"Female","age":76},
    {"id":12,"first_name":"Morten","last_name":"McNamee","email":"mmcnameeb@sun.com","gender":"Male","age":38},
    {"id":13,"first_name":"Domenico","last_name":"Shearman","email":"dshearmanc@seesaa.net","gender":"Male","age":66},
    {"id":14,"first_name":"Rodolphe","last_name":"Bittlestone","email":"rbittlestoned@51.la","gender":"Male","age":33},
    {"id":15,"first_name":"Merv","last_name":"Watterson","email":"mwattersone@storify.com","gender":"Male","age":37},



];

const initialState = {
    employees,
    teamMembers: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(emp => emp.id !== action.payload.id),
                teamMembers: [...state.teamMembers, action.payload],
            };
        case 'REMOVE_EMPLOYEE':
            return {
                ...state,
                employees: [...state.employees, action.payload],
                teamMembers: state.teamMembers.filter(emp => emp.id !== action.payload.id),
            };
        case 'SORT_BY_AGE':
            return {
                ...state,
                teamMembers: [...state.teamMembers].sort((a, b) => a.age - b.age),
            };
        default:
            return state;
    }
};

const Main = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addEmployeeToTeam = (employee) => {
        dispatch({ type: 'ADD_EMPLOYEE', payload: employee });
    };

    const removeEmployeeFromTeam = (employee) => {
        dispatch({ type: 'REMOVE_EMPLOYEE', payload: employee });
    };

    const sortByAge = () => {
        dispatch({ type: 'SORT_BY_AGE' });
    };

    const { employees, teamMembers } = state;

    const totalAge = teamMembers.reduce((acc, curr) => acc + curr.age, 0);
    const averageAge = teamMembers.length > 0 ? totalAge / teamMembers.length : 0;

    return (
        <div className="container" style={{display:'flex', justifyContent:'center', gap:'100px'}}>
            <div className="box" style={{border:'5px solid black', width:'25vw'}}>
                <h2>Employees</h2>
                <ul>
                    {employees.map(employee => (
                        <li key={employee.id} style={{display:'flex', justifyContent:'space-between' ,paddingRight:'20px', background:'lightgrey', margin:'10px 10px'}}>
                            {`${employee.first_name} ${employee.last_name} -  ${employee.age}`}
                            <button onClick={() => addEmployeeToTeam(employee)}>Add</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="box" style={{border:'5px solid black' , width:'25vw'}}>
                <h2>Team</h2>
                <button onClick={sortByAge}>Sort by Age</button>
                
                <ul>
                    {teamMembers.map(employee => (
                        <li key={employee.id} style={{ display:'flex', justifyContent:'space-between' ,paddingRight:'20px',  background:'lightgrey', margin:'10px 10px'}}>
                            {`${employee.first_name} ${employee.last_name} -  ${employee.age}`}
                            <button onClick={() => removeEmployeeFromTeam(employee)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <p>Average Age: {averageAge}</p>
            </div>
        </div>
    );
};

export default Main;
