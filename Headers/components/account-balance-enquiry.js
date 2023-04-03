import React from "react";
import { useState, useEffect} from 'react';

import { Tabs } from "@mantine/core";

import ButtonComponent from "../../others/Button/ButtonComponent";
import Header from "../../others/Header/HeaderComponent";
import DataTable from "../../others/Datatable/DataTable";
import InputField from "../../others/Fields/InputField";
import Modal from 'react-bootstrap/Modal';
import ButtonType from "../../others/Button/ButtonType";
import SelectField from "../../others/Fields/SelectField";
import AccountDetails from "./account-details";



function AccountBalanceEnquiry() {
  const [open,setOpen] = useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
       <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <div style={{display:"flex"}}>
                    <div style={{flex:0.05}}></div>
                    <div style={{flex:0.9}}>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",columnGap:"80px",rowGap:"10px",paddingTop:"10px",paddingBottom:"10px"}}>
                        <InputField label={"Account Number"} labelWidth={"40%"} inputWidth={"55%"}/>
                        <InputField label={"Currency"} labelWidth={"35%"} inputWidth={"60%"} disabled/>
                        <InputField label={"Product"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Branch"} labelWidth={"35%"} inputWidth={"60%"} disabled/>
                        <InputField label={"Description"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Number Of Holders"} labelWidth={"35%"} inputWidth={"60%"} disabled/>
                        <InputField label={"Risk Code"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Account Status"} labelWidth={"35%"} inputWidth={"60%"} disabled/>
                        </div>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",columnGap:"50px",rowGap:"10px",paddingTop:"10px",paddingBottom:"10px"}}>
                        <InputField label={"Debit Limit"} labelWidth={"45%"} inputWidth={"50%"}/>
                        <InputField label={"Credit Limit"} labelWidth={"45%"} inputWidth={"50%"}/>
                        <InputField label={"Blocked Amount"} labelWidth={"45%"} inputWidth={"50%"}/>
                        </div>
                    </div>
                    <div style={{flex:0.05}}></div>
                </div>
            </div>
            <br></br>
            <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                <div style={{display:"flex"}}>
                    <div style={{flex:0.05}}></div>
                    <div style={{flex:0.9}}>
                        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",columnGap:"50px",rowGap:"10px",paddingTop:"10px",paddingBottom:"10px"}}>
                        <InputField label={"Uncleared Balance"} labelWidth={"45%"} inputWidth={"50%"}/>
                        <InputField label={"CR Accrued Interest"} labelWidth={"45%"} inputWidth={"50%"} disabled/>
                        <InputField label={"Interest In Suspense"} labelWidth={"45%"} inputWidth={"50%"} disabled/>
                        <InputField label={"Ledger Balance"} labelWidth={"45%"} inputWidth={"50%"} disabled/>
                        <InputField label={"DB Accrued Interest"} labelWidth={"45%"} inputWidth={"50%"} disabled/>
                        <InputField label={"Penalty In Suspense"} labelWidth={"45%"} inputWidth={"50%"} disabled/>
                        <InputField label={"Cleared Balance"} labelWidth={"45%"} inputWidth={"50%"} disabled/>
                        <InputField label={"DB Accrued Penalty"} labelWidth={"45%"} inputWidth={"50%"} disabled/>
                        <InputField label={"Arrears Int. Suspense"} labelWidth={"45%"} inputWidth={"50%"} disabled/>
                        <InputField label={"Available Balance"} labelWidth={"45%"} inputWidth={"50%"} disabled/>
                        <InputField label={"Arrears Interest"} labelWidth={"45%"} inputWidth={"50%"} disabled/>
                        <InputField label={"Total Arrears"} labelWidth={"45%"} inputWidth={"50%"} />
                    </div>
                    </div>
                    <div style={{flex:0.05}}></div>
                </div>
            </div>
            <br></br>
            <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <div style={{display:"flex",paddingTop:"10px",paddingBottom:"10px",alignItems:"center"}}>
            <div style={{flex:0.05}}></div>
            <div style={{flex:0.4}}>
            <div style={{display:"flex",justifyContent:"space-between",flex:0.5}}>
                <InputField label={"Start Date"} labelWidth={"37%"} inputWidth={"57%"} type={"date"}/>
                <InputField label={"End Date"} labelWidth={"37%"} inputWidth={"57%"} type={"date"}/>
            </div>
            </div>
            <div style={{flex:0.15}}></div>
            <div style={{display:"flex",justifyContent:"space-between",flex:0.36}}>
            <ButtonComponent buttonName={"Account Details"} onclick={handleOpen} buttonWidth={"130px"}/>
            <ButtonComponent buttonName={"Signature Verification"} buttonWidth={"170px"}/>
            </div>
            <div style={{flex:0.04}}></div>
            </div>
            </div>
            <br></br>
            <DataTable title={"Transaction Details"} columns={["Posting Date","Value Date","Transaction Details","Document Ref","Batch No.","Debit","Credit","Balance"]}/>
            
      <Modal show={open} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
      <Modal.Title>Account Details</Modal.Title>
        </Modal.Header>
    <Modal.Body>
    <AccountDetails/>
    </Modal.Body>
  </Modal>
    </div>

  );
}

export default AccountBalanceEnquiry;
