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


function CustomerOtherDetails() {
 
  return (
    <div>
       <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
            <DataTable columns={["Relation Number","Relation Name","Address Line 1","Start Name","Location","Contact"]}/>
        </div>
    </div>

  );
}

export default CustomerOtherDetails;
