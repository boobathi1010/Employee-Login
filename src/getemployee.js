import React, { useEffect, useState } from "react";

export function Employee(){
    const[empdetail,setEmpdetail]=useState([])

    useEffect(()=>{
        fetch('http://localhost:1018/getdata')
        .then(res=>res.json())
        .then(data=>setEmpdetail(data))
    })

    return(
        <>
            <h2 className="text-success">SVJ EMPLOYEE DETAILS</h2>
            {
                empdetail.map((value,index)=>(
                    <>
                        <div className="card mb-3 col-md-4">
                            <div className="card-body">
                                <h2 className="card-text">{value.name}</h2>
                                <h3 className="card-text">{value.phoneno}</h3>
                                <p className="card-text">{value.designation}</p>
                                <p className="card-text">{value.city}</p>
                            </div>
                        </div>
                    </>
                ))
            }
        </>
    );
}