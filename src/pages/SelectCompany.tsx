import React, { useState } from "react";

function SelectCompany() {
  
  const [arr,setarr]=useState([
    { Cname: "THE COCONADA CHAMBER OF COMMERCE", CIN: "U91110AP1" },
    { Cname: " THE MICA CHAMBER OF COMMERCE", CIN: "U91110AP1" },
    { Cname: "METHODIST CHURCH OF INDIA", CIN: "U91110AP1" },
    { Cname: "THE COCONADA CHAMBER OF COMMERCE", CIN: "U91110AP1" },
    { Cname: "KRIYA SOCIAL SERVICES", CIN: "U91110AP1" },
    { Cname: "THE COCONADA CHAMBER OF COMMERCE", CIN: "U91110AP1" },
    { Cname: "NAGARJUNA FOUNDATION", CIN: "U91110AP1" },
  ]);

  return (
    <div>
      <h1>SELECT COMPANY</h1>
      <br />
      <br />
      <input type="text" name="" id="" /> <button>Search</button>
      <br />
      <br />
      <h2>list Of Companies</h2>

      <div className="table">
        <table>
          <tr>
            <th>SN</th>
            <th>Commpany Name</th>
            <th>CIN</th>
          </tr>
          {
            arr.map((arr,index)=>{
              return(
                <>
                <div id={`${index}`}>
                <tr >
                <td>{index+1}</td> 
                <td>{arr.Cname}</td>
                <td>{arr.CIN}</td>
                </tr>
                <button onClick={()=>{
                  const demo=arr;
                  document.getElementById(index).innerHTML=""
                  // alert("its working")
                  console.log("id ",index)

                }}>D</button>
                </div>
                </> 
              )
                
            })
          }
        </table>
      </div>
    </div>
  );
}

export default SelectCompany;
