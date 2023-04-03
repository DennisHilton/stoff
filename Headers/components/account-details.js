import React from "react";
import { useState, useEffect} from 'react';
import { Tabs } from "@mantine/core";
import Modal from 'react-bootstrap/Modal';

import ButtonComponent from "../../others/Button/ButtonComponent";
import Header from "../../others/Header/HeaderComponent";
import DataTable from "../../others/Datatable/DataTable";
import CustomerDetails from "./customer-details";
import RelationDetails from "./relation-details";
import InputField from "../../others/Fields/InputField";
// import ListOfValue from '../others/Fields/ListOfValue';
import ButtonType from "../../others/Button/ButtonType";
// import LoV from "../../others/Fields/LoV";
import ListOfValue from "../../others/Fields/ListOfValue";
// import ListOfValue from "../../others/Fields/ListOfValue";


function AccountDetails() {
  const [open,setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [active,setActive] = useState(false);
  const handleActive = () => setActive(true);
  const handleInactive = () => setActive(false);    
  const handleClose = () => setOpen(false)
  return (
    <div className="parent" style={{padding:""}}>
      <div
        className="tops"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          borderRadius: "5px",
          padding: "2px",
          //   display: "flex",
        }}
      >
        <div style={{display:"flex",justifyContent:"flex-start",paddingTop:"5px",paddingBottom:"5px"}}>
            <div style={{flex:0.25,marginLeft:"10px"}}>
          <InputField
            label={"Customer ID"}
            labelWidth={"40%"}
            inputWidth={"55%"}
            disabled
          />    
            </div>
            <div style={{flex:0.35}}>
          <InputField
            inputWidth={"65%"}
            disabled
            />
            </div>
        </div>
      </div>
      <br></br>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: "0.3" }}></div>
        <div
          style={{
            flex: "0.3",
            display: "flex",
            gap:'20px',
          }}
        >
          <ButtonComponent
            buttonName={"CUSTOMER"}
            buttonWidth={"130px"}
            onClick={handleOpen}
          />

          <ButtonComponent
            buttonName={"RELATION"}
            buttonWidth={"130px"}
            onClick={handleActive}
          />

          <ButtonComponent
            buttonName={"ACCOUNTS"}
            buttonWidth={"130px"}
            
          />
        </div>
        <div style={{ flex: "0.3" }}></div>
      </div>
      <br></br>
      <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
          
            <div style={{ marginRight:"10px",marginBottom:"10px",marginLeft:"10px",marginTop:"1px",paddingRight:"10px",paddingLeft:"10px",paddingTop:"2px",paddingBottom:"30px"}}>
              <div style={{marginBottom:"10px"}} >
                <Header title={"ACCOUNT DETAILS"} />
              </div>
              <div style={{ display: "flex",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <div style={{flex:0.04}}></div>
                <div style={{flex:0.92}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"100px",rowGap:"10px",paddingTop:"10px",paddingBottom:"10px"}}>
                    <ListOfValue label={"Account Number"} labelWidth={"35%"} inputWidth={"65%"} required/>
                    <InputField label={"Product"} labelWidth={"40%"} inputWidth={"60%"} disabled/>
                    <InputField label={"Account Name"} labelWidth={"35%"} inputWidth={"65%"} disabled/>
                    <InputField label={"Date Opened"} labelWidth={"40%"} inputWidth={"40%"} type={"date"} disabled/>
                    <InputField label={"Currency Code"} labelWidth={"35%"} inputWidth={"65%"} disabled/>
                    <InputField label={"Date Of Last Activity"} labelWidth={"40%"} inputWidth={"40%"} type={"date"} disabled/>
                    <InputField label={"Source Branch"} labelWidth={"35%"} inputWidth={"65%"} disabled/>
                    <InputField label={"Transaction Count"} labelWidth={"40%"} inputWidth={"40%"} disabled/>
                   <InputField label={"Short Name"} labelWidth={"35%"} inputWidth={"50%"} disabled/>
                    <InputField label={"FX Category"} labelWidth={"40%"} inputWidth={"40%"} disabled/>
                    <InputField label={"View Flag"} labelWidth={"35%"} inputWidth={"50%"} disabled/>
                    <InputField label={"Account Status"} labelWidth={"40%"} inputWidth={"60%"} disabled/>
                </div>
                </div>
                <div style={{flex:0.04}}></div>
            </div>
            <br></br>
            <div style={{ display: "flex",padding:"5px",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <div style={{flex:0.04}}></div>
                <div style={{flex:0.92}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",columnGap:"30px",rowGap:"10px",paddingTop:"5px",paddingBottom:"5px"}}>
                    <InputField label={"Credit Rate"} labelWidth={"35%"} inputWidth={"50%"} disabled/>
                    <InputField label={"Credit Interest Account"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                    <InputField label={"Credit Int. Prod. Code"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                    <InputField label={"Debit Rate"} labelWidth={"35%"} inputWidth={"50%"} disabled/>
                    <InputField label={"Debit Interest Account"} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                    <InputField label={"Debit Int. Prod. Code "} labelWidth={"50%"} inputWidth={"50%"} disabled/>
                </div>
            </div>
                <div style={{flex:0.04}}></div>
            </div> 
            <br></br>
              <div style={{ display:"flex",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <div style={{flex:0.04}}></div>
                <div style={{flex:0.92}}>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"90px",rowGap:"10px",paddingTop:"10px",paddingBottom:"10px"}}>
                    <InputField label={"Account Number"} labelWidth={"35%"} inputWidth={"65%"} required/>
                    <InputField label={"Cash Allowed"} labelWidth={"40%"} inputWidth={"60%"} disabled/>
                    <InputField label={"Sub-Sector"} labelWidth={"35%"} inputWidth={"65%"} disabled/>
                    <InputField label={"Cheque Allowed"} labelWidth={"40%"} inputWidth={"60%"} disabled/>
                    <InputField label={"Delivery Method"} labelWidth={"35%"} inputWidth={"65%"} disabled/>
                    <InputField label={"Int. Statement Frequency"} labelWidth={"40%"} inputWidth={"60%"} disabled/>
                    <InputField label={"Institute Class"} labelWidth={"35%"} inputWidth={"40%"} disabled/>
                    <InputField label={"Next Int. Statement Freq."} labelWidth={"40%"} inputWidth={"40%"} disabled/>
                   <InputField label={"Isic"} labelWidth={"35%"} inputWidth={"40%"} disabled/>
                    <InputField label={"No. Of Statement Required"} labelWidth={"40%"} inputWidth={"40%"} disabled/>
                    <InputField label={"Statement Frequency"} labelWidth={"35%"} inputWidth={"40%"} disabled/>
                    <InputField label={"Copies To Be Printed"} labelWidth={"40%"} inputWidth={"15%"} disabled/>
                    <InputField label={"Last Statement Date"} labelWidth={"35%"} inputWidth={"40%"} type={"date"} disabled/>
                    <InputField label={"Next Statement Date"} labelWidth={"40%"} inputWidth={"40%"} type={"date"} disabled/> 
                </div>
                
                </div>  
                <div style={{flex:0.04}}></div>
            </div>
            
                 
              </div>
     </div>
     <Modal show={open} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
          <Modal.Title>Individual Relationship Amendment</Modal.Title>
        </Modal.Header>
    <Modal.Body>
      <CustomerDetails/>
    </Modal.Body>
  </Modal>
  <Modal show={active} onHide={handleInactive} size="xl">
      <Modal.Header closeButton>
          <Modal.Title>Individual Relationship Amendment</Modal.Title>
        </Modal.Header>
    <Modal.Body>
      <RelationDetails/>
    </Modal.Body>
  </Modal>    
      </div>
      );
}

export default AccountDetails;
