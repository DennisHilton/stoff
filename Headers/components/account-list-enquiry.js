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
import CustomerOtherDetails from "./customer-other-details";


function AccountListEnquiry() {
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
                        <InputField label={"Customer Number"} labelWidth={"40%"} inputWidth={"55%"}/>
                        <InputField label={"Customer Name"} labelWidth={"35%"} inputWidth={"60%"} disabled/>
                        <InputField label={"Customer Type"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Customer Category"} labelWidth={"35%"} inputWidth={"60%"} disabled/>
                        <InputField label={"Address 1"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <InputField label={"Address 2"} labelWidth={"35%"} inputWidth={"60%"} disabled/>
                        <InputField label={"ARM"} labelWidth={"40%"} inputWidth={"55%"} disabled/>
                        <div style={{display:"flex",justifyContent:"flex-end"}}>
                        <ButtonComponent buttonName={"Other Details"} buttonWidth={"150px"} onClick={handleOpen}/>
                        </div>
                    </div>
                    </div>
                    <div style={{flex:0.05}}></div>
                </div>
            </div>
            <br></br>
            <DataTable title={"CURRENT/SAVING ACCOUNT (CASA) LISTING"} columns={["Account No.","Account Description","Product","Currency","Cleared Balance","Local Equivalent"]}/>
            <br></br>
            <Tabs defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab value="gallery">LOANS</Tabs.Tab>
        <Tabs.Tab value="messages">INVESTMENTS</Tabs.Tab>
        <Tabs.Tab value="laterr">TRADE FINANCE</Tabs.Tab>
        <Tabs.Tab value="former">GOVERNMENT SECURITIES</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="gallery" pt="xs">
      <DataTable title={"LOANS"} columns={["Account Number","Account Description","Product","CCY","Principal Balance","Facility Number"]}/>
      </Tabs.Panel>
      <Tabs.Panel value="messages" pt="xs">
      <DataTable title={"INVESTMENTS"} columns={["Account Number","Account Description","Product","CCY","Investment Balance","Deal Number"]}/>
      </Tabs.Panel>
      <Tabs.Panel value="laterr" pt="xs">
      <DataTable title={"TRADE FINANCE"} columns={["Contact Ref Number","Cust Name","Product","Expiry Date","CCY","Contract Amount","O/S Contingent Amount"]}/>
      </Tabs.Panel>
      <Tabs.Panel value="former" pt="xs">
      <DataTable title={"GOVERNMENT SECURITIES"} columns={["Investment ID","Product","Face Value","Cost Price","Unearned Discount","Amortised","Unamortised","Effective Date","Maturity Date","Tenor Left"]}/>
      </Tabs.Panel>
      </Tabs>
      <Modal show={open} onHide={handleClose} size="xl">
      <Modal.Header closeButton>
      <Modal.Title>Customer Other Details</Modal.Title>
        </Modal.Header>
    <Modal.Body>
    <CustomerOtherDetails/>
    </Modal.Body>
  </Modal>
    </div>

  );
}

export default AccountListEnquiry;
