
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const Service=()=>{ 
    const [mydata,setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:3000/employees";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data)
        });
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=mydata.map((key)=>{


return(
    <>
    <tr>
        <td>{key.id}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.salary}</td>
    </tr>
   </>
)    
})
return(

<>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>city</th>
          <th>salary</th>
          </tr>
 </thead>
 <tbody>
    {ans}
 </tbody>
 </Table>
 </>
)
}
export default Service;
