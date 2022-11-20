import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import data from './data.json'

const empList = data

function App() {

  const [data, setData] = useState(empList)
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "first_name" },
    { title: "Email", field: "email" }, 
    { title: "Gender", field: 'gender', },
    { title: "IP Address", field: "ip_address", }
  ] 
 

  return (
    <div className="App">
      <h4 align='center'>Pagination and filtering</h4>
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default App;
