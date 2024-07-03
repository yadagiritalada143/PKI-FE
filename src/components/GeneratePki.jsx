import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {toast } from "react-toastify";

const GeneratePki = () => {
    // const [allpki,setAllpki] = useState([]);
    // const [secret,setSecret] = useState("");

    let allpki = [1];

    
    
  return (
    <>
      <div className=" secret w-100  d-flex justify-content-around align-item-center">
        <p className=" my-1">Add your Secret</p>
        <input  type="text" name="secret" id="secret" placeholder="secret"  />
      </div>
      <div className=" w-100 text-end">
        <Button className=" btn-success my-3 mx-3 outline-none" >Generate</Button>
      </div>
      {allpki.length > 0 && <div className="keyscontainer text-center ">
        <h3 className=" mx-5">Below Are your Public and Private Keys</h3>
        <div className="keys my-4">
          <div className="public border"></div>
          <div className="private border"></div>
        </div>

        <div className="save d-flex justify-content-around align-items-center my-2">
          <span>Do you want to save your Keys for future reference ?</span>
          <Button className="btn-success saveBtn">Yes</Button>
          <Button className="btn-danger saveBtn">No</Button>
        </div>
      </div>}
    </>
  );
};

export default GeneratePki;
