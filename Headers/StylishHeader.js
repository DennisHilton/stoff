import React, { useState, useEffect } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCard,
  MDBRow,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Row, Col, Container, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API_SERVER } from '../../config/constant';
import { LOGOUT } from '../../store/actions';
import { Menu, Button, Group, Text, Input, Tooltip } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "@ant-design/icons";
import { IconName } from "react-icons/bs";
import { Link } from 'react-router-dom';
//Enquiries Stuff
import { Tabs } from "@mantine/core";
// import LoadingOverlay from 'react-loading-overlay';
import InputField from '../others/Fields/InputField';
import ListOfValue from '../others/Fields/ListOfValue';
import SelectField from '../others/Fields/SelectField';
import ButtonComponent from '../others/Button/ButtonComponent'
import DataTable from "../others/Datatable/DataTable";
import CustomerDetails from './components/customer-details';
import CustomerEnquiry from './components/customer-enquiry';
import AccountDetails from './components/account-details';
// import LoV from '../others/Fields/LoV';
import CustomerSearchDataTable from '../others/Datatable/CustomerSearchDataTable';
import AccountListEnquiry from './components/account-list-enquiry';
import CustomerOtherDetails from './components/customer-other-details';
// import Modal from 'react-bootstrap/Modal';
import { Select } from "@mantine/core";

import { useIsMounted } from "../../hooks/useIsMounted";

import SettingsDrawer from "../SettingsDrawer";
import { isFirefox } from "react-device-detect";
import FacilityEnquiry from './components/facility-enquiry';

export default function StylishHeader ({ headerImage, maximized, setTheme, setCustomTheme, setGlobalModal, setLoading, setCustomLayoutType, setMaximize }) {
  const [showBasic, setShowBasic] = useState(false);
  const [opened, setOpened] = useState(false);

  const [response, setResponse] = useState([]);
  const [value, setValue] = useState("");

  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  useEffect(() => {
    function getMenuIcons() {
      axios
        .post(API_SERVER + "/get-active-menus-by-menu-level", {
          menu_level: 3,
        })
        .then((res) => {
          const arr = [];
          res.data.map((i) => {
            arr.push({
              key: `${i.menu_id}`,
              value: `${i.menu_name}`,
              label: `${i.menu_name}`,
            });
          });
          setResponse(arr);
        });
    }
    getMenuIcons();
  }, []);

  if (!localStorage.getItem("layoutType")) {
    localStorage.setItem("layoutType", 0);
  }

  const layoutType = JSON.parse(localStorage.getItem("layoutType"));

  // console.log(layoutType);

  const [getLayoutType, setLayoutType] = useState(layoutType);

  const isMounted = useIsMounted();

  function minimizeFunc() {
    setMaximize(false);

    document.body.style.zoom = "100%";
    if (isFirefox) {
      document.body.style.transform = "scale(1)";
      document.body.style.transformOrigin = "0 0";
    }
  }

  function maximizeFunc() {
    setMaximize(true);

    document.body.style.zoom = "110%";
    if (isFirefox) {
      document.body.style.transform = "scale(0.95)";
      document.body.style.transformOrigin = "50% 0";
    }
  }

  function openSettingsDrawer() {
    minimizeFunc();
    setOpened(true);
  }

  function setFontSize(fontSize) {
    if (fontSize === "95%") {
      document.body.style.zoom = fontSize;
      if (isFirefox) {
        document.body.style.transform = "scale(0.95)";
        document.body.style.transformOrigin = "50% 0%";
      }
    } else if (fontSize === "100%") {
      document.body.style.zoom = fontSize;
      if (isFirefox) {
        document.body.style.transform = "scale(1)";
        document.body.style.transformOrigin = "0 0";
      }
    } else if (fontSize === "105%") {
      document.body.style.zoom = fontSize;
      if (isFirefox) {
        document.body.style.transform = "scale(1.05)";
        document.body.style.transformOrigin = "0 0";
      }
    } else if (fontSize === "110%") {
      document.body.style.zoom = fontSize;
      if (isFirefox) {
        document.body.style.transform = "scale(1.1)";
        document.body.style.transformOrigin = "0 0";
      }
    } else {
      document.body.style.zoom = fontSize;
    }
  }

  useEffect(() => {
    // console.log(getLayoutType);
    setLayoutType(getLayoutType);
    setCustomLayoutType(getLayoutType);
    localStorage.setItem("layoutType", getLayoutType);
  }, [getLayoutType]);

  const swal = require("sweetalert");

  const dispatcher = useDispatch();

  function logout() {
    minimizeFunc();

    swal({
      title: "Are you sure?",
      text: "You're about to logout from the system",
      icon: "warning",
      confirmButtonColor: "#8CD4F5",
      buttons: ["Cancel", "Yes, Logout"],
      dangerMode: true,
    }).then((result) => {
      if (result) {
        const storeSystemAuditLog = async () => {
          await axios
            .post(API_SERVER + "/store-system-audit-logs", {
              user_id: JSON.parse(localStorage.getItem("userInfo")).id,
              page_accessed: "Logout",
              page_url: "/logout",
            })
            .then(function (response) {
              // console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        };

        storeSystemAuditLog();

        dispatcher({ type: LOGOUT });
        // window.location.href = '/auth/signin';
      }
    });
  }

  const [showScanDocument, setScanDocument] = useState(false);
  const [showOfflineReports, setOfflineReports] = useState(false);
  const [showChangeBranch, setChangeBranch] = useState(false);

  const [showCustomerSearchName, setCustomerSearchName] = useState(false);
  const [showCustomerSearchNumber, setCustomerSearchNumber] = useState(false);
  const [showAccountBalanceEnquiry, setAccountBalanceEnquiry] = useState(false);
  const [showTransactionAnalyser, setTransactionAnalyser] = useState(false);
  const [showAccountGeneralEnquiry, setAccountGeneralEnquiry] = useState(false);
  const [showFacilityEnquiry, setFacilityEnquiry] = useState(false);
  const [showCOAEnquiry, setCOAEnquiry] = useState(false);
  const [showMyApprovals, setMyApprovals] = useState(false);
  const [showInterestCalculation, setInterestCalculation] = useState(false);
  const [showCurrencyConversion, setCurrencyConversion] = useState(false);
  const [showPercentageAmount, setPercentageAmount] = useState(false);
  const [showRateDashboard, setRateDashboard] = useState(false);
  const [showAddition, setAddition] = useState(false);
  const [showRiskCalculator, setRiskCalculator] = useState(false);
  const [showUserProfileEnquiry, setUserProfileEnquiry] = useState(false);
  const [showPrint, setPrint] = useState(false);
  const [showKeys, setKeys] = useState(false);
  const [showShortMails, setShortMails] = useState(false);

  ///////////////////////////////////////////////////
  /////////////// Scan Document MODAL ///////////////
  ///////////////////////////////////////////////////

  const ScanDocumentModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Scan Document</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>

          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  /////////////////////////////////////////////////////
  /////////////// OFFLINE REPORTS MODAL ///////////////
  /////////////////////////////////////////////////////

  const OfflineReportsModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Offline Reports</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  /////////////////////////////////////////////////////
  /////////////// CHANGE BRANCH MODAL /////////////////
  /////////////////////////////////////////////////////

  const ChangeBranchModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Change Branch</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  ////////////////////////////////////////////////////////////
  /////////////// CUSTOMER SEARCH NAME MODAL /////////////////
  ////////////////////////////////////////////////////////////

  const CustomerSearchNameModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [customerName, setCustomerName] = useState("");
    const [customerID, setCustomerID] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [relationshipType, setRelationshipType] = useState("");
    const [branch, setBranch] = useState("");
    const [date, setDate] = useState("");
    const [out, setOuts] = useState([]);
    const [show, setShow] = useState(false);
    const [showw, setShoww] = useState(false);
    const [showww, setShowww] = useState(false);
    const handleShut = () => setShow(false);
    const handleOpen = () => setShow(true);
    const handleClosee = () => setShow(false);
    const handleShoww = () => setShoww(true);
    const handleCloseee = () => setShoww(false);
    const handleShowww = () => setShowww(true);
    const handleCloseeee = () => setShowww(false);
    const [stateLOV, setStateLOV] = useState([]);
    const [loader, setLoader] = useState(false);

    var curr = [];
    let output = [];

    const pageRefresh = () => {
      window.location.reload();
    };

    //  console.log(customerName)
    // useEffect(() => {
    //   const getBranch = () => {
    //     return axios.get(API_SERVER + "/get-branch");
    //   };

    //   Promise.all([getBranch()])
    //   .then((results) => {
    //     const branch = results[0].data;
    //     localStorage.setItem("getBranch", JSON.stringify(branch));
    //   });

    //   (() => {
    //     const DB = JSON.parse(localStorage.getItem("getBranch"));
    //     for (let i = 0; i < DB.length; i++) {
    //       const branch = DB[i][0];
    //       const code = DB[i][1];

    //       curr.push({ label: `${code} - ${branch}`, value: branch });
    //     }
    //     return;
    //   })();

    //   setStateLOV(curr);
    //   console.log(stateLOV, branch, "hjhjj");
    // }, []);

    // console.log(customerName);
    const handleInputs = () => {
      setLoader(true);
      axios
        .post(API_SERVER + "/get-customer-details", {
          customerName: customerName,
          customerID: customerID,
          phoneNumber: phoneNumber,
          branch: branch,
          relationshipType: relationshipType,
        })
        .then((response) => {
          //  output.push(response.data[0]);
          //  console.log(output);
          let results = response.data;
          console.log(results, "yolooooo");

          for (let i = 0; i < results.length; i++) {
            const res = results[i];

            output.push(res);
            console.log(output, "out");
            setOuts(output);
            setLoader(false);
          }
          return;
        })

        .catch((error) => {
          console.log(error);
        });
    };

    return (
      <>
        <Modal
          size="xl"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Customer Search Name</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <div className="motherContainer">
              {/* <Header icon={<FaUserTie/>} label={"Customer Search Enquiry"} handleClose={handleClose}/> */}

              <div className="body" style={{ display: "flex" }}>
                <div style={{ flex: 0.05 }}></div>
                <div style={{ flex: 0.9 }}>
                  <div className="field">
                    <div style={{ flex: 0.45 }}>
                      <InputField
                        label={"Customer Name"}
                        labelWidth={"35%"}
                        inputWidth={"65%"}
                        onChange={(e) => {
                          setCustomerName(e.target.value);
                          handleInputs();
                        }}
                        placeholder={"Enter Customer Name"}
                      />
                    </div>
                    <div></div>
                    <div style={{ flex: 0.45 }}>
                      <InputField
                        label={"Customer ID"}
                        labelWidth={"35%"}
                        inputWidth={"51%"}
                        type={"number"}
                        onChange={(e) => {
                          setCustomerID(e.target.value);
                          handleInputs();
                        }}
                        placeholder={"Enter Customer ID"}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div
                      className="master_dates"
                      style={{ display: "flex", flex: 0.45 }}
                    >
                      <div style={{ flex: 0.65 }}>
                        <InputField
                          label={"Date Of Incorp/Birth"}
                          labelWidth={"54%"}
                          inputWidth={"45%"}
                          type={"date"}
                        />
                      </div>
                      <div style={{ flex: 0.35 }}>
                        <InputField
                          label={"To:"}
                          labelWidth={"13%"}
                          inputWidth={"87%"}
                          type={"date"}
                        />
                      </div>
                    </div>
                    <div></div>
                    <div style={{ flex: 0.45 }}>
                      <InputField
                        label={"Phone Number"}
                        labelWidth={"35%"}
                        inputWidth={"51%"}
                        type={"number"}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          handleInputs();
                        }}
                        placeholder={"Enter Phone Number"}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div style={{ flex: 0.45 }}>
                      <ListOfValue
                        label={"Branch"}
                        labelWidth={"35%"}
                        inputWidth={"65%"}
                        branch={branch}
                        setBranch={setBranch}
                        handleInputs={handleInputs}
                        lovData={stateLOV}
                        placeholder={"Select Branch"}
                      />
                    </div>
                    <div></div>
                    <div style={{ flex: 0.45 }}>
                      <SelectField
                        label={"Relationship Type"}
                        labelWidth={"34.5%"}
                        inputWidth={"51.9%"}
                        relationshipType={relationshipType}
                        setRelationshipType={setRelationshipType}
                        options={["SA - PERSONAL", "SA - CORPORATE"]}
                        placeholder={"Select Relationship Type"}
                        handleInputs={handleInputs}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ flex: 0.05 }}></div>
              </div>
              <div className="buttons">
                <ButtonComponent
                  label="Refresh"
                  onClick={() => pageRefresh()}
                  width={"80px"}
                  buttonColor={'white'}
                />
              </div>
              {/* <LoadingOverlay
                active={loader}
                spinner
                text="Loading your content..."
                styles={{
                  overlay: (base) => ({
                    ...base,
                    background: "rgba(235, 234, 234, 0.481)",
                  }),
                  spinner: (base) => ({
                    ...base,
                    width: "100px",
                    "& svg circle": {
                      stroke: "rgb(21 163 183)",
                    },
                  }),
                  text: (base) => ({
                    ...base,
                    background: "rgb(21 163 183)",
                  }),
                  // wrapper: {
                  //   width: '400px',
                  //   height: '400px',
                  //   overflow: active ? 'hidden' : 'scroll'
                  // }
                }}
              > */}
                <div className="datatable">
                  <CustomerSearchDataTable
                    Data={out}
                    handleShow={handleOpen}
                    onClick={handleShoww}
                    onClickk={handleShowww}
                  />
                </div>
              {/* </LoadingOverlay> */}
              {/* here */}
              <Modal show={show} size="xl">
                <Modal.Header
                  style={{
                    background:
                      `url(` +
                      window.location.origin +
                      `/assets/images/headerBackground/` +
                      headerImage +
                      `)`,
                  }}
                >
                  <div className="w-full -mb-4 flex justify-between ">
                    <Modal.Title
                      style={{
                        fontSize: "14.5px",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <p>Individual Relationship Amendment</p>
                    </Modal.Title>
                    <svg
                      onClick={handleClosee}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      style={{ padding: "10px" }}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </Modal.Header>
                <Modal.Body>
                  <CustomerDetails />
                </Modal.Body>
              </Modal>

              <Modal show={showw} size="xl">
                <Modal.Header
                  style={{
                    background:
                      `url(` +
                      window.location.origin +
                      `/assets/images/headerBackground/` +
                      headerImage +
                      `)`,
                  }}
                >
                  <div className="w-full -mb-4 flex justify-between ">
                    <Modal.Title
                      style={{
                        fontSize: "14.5px",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <p>Customer Enquiry</p>
                    </Modal.Title>
                    <svg
                      onClick={handleCloseee}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      style={{ padding: "10px" }}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </Modal.Header>
                <Modal.Body>
                  <CustomerEnquiry />
                </Modal.Body>
              </Modal>
              <Modal show={showww} size="xl">
                <Modal.Header
                  style={{
                    background:
                      `url(` +
                      window.location.origin +
                      `/assets/images/headerBackground/` +
                      headerImage +
                      `)`,
                  }}
                >
                  <div className="w-full -mb-4 flex justify-between ">
                    <Modal.Title
                      style={{
                        fontSize: "14.5px",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <p>Account List Enquiry</p>
                    </Modal.Title>
                    <svg
                      onClick={handleCloseeee}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      style={{ padding: "10px" }}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </Modal.Header>
                <Modal.Body>
                  <AccountListEnquiry />
                </Modal.Body>
              </Modal>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };

  ////////////////////////////////////////////////////////////
  /////////////// CUSTOMER SEARCH NUMBER MODAL /////////////////
  ////////////////////////////////////////////////////////////

  const CustomerSearchNumberModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClosee = () => setOpen(false);

    return (
      <div style={{ zoom: 0.8 }}>
        <Modal
          size="xl"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Customer Search Number</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <div>
              <div
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 0.05 }}></div>
                  <div style={{ flex: 0.9 }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        columnGap: "80px",
                        rowGap: "10px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <InputField
                        label={"Customer Number"}
                        labelWidth={"40%"}
                        inputWidth={"55%"}
                      />
                      <InputField
                        label={"Customer Name"}
                        labelWidth={"35%"}
                        inputWidth={"60%"}
                        disabled
                      />
                      <InputField
                        label={"Customer Type"}
                        labelWidth={"40%"}
                        inputWidth={"55%"}
                        disabled
                      />
                      <InputField
                        label={"Customer Category"}
                        labelWidth={"35%"}
                        inputWidth={"60%"}
                        disabled
                      />
                      <InputField
                        label={"Address 1"}
                        labelWidth={"40%"}
                        inputWidth={"55%"}
                        disabled
                      />
                      <InputField
                        label={"Address 2"}
                        labelWidth={"35%"}
                        inputWidth={"60%"}
                        disabled
                      />
                      <InputField
                        label={"ARM"}
                        labelWidth={"40%"}
                        inputWidth={"55%"}
                        disabled
                      />
                      <div
                        style={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <ButtonComponent
                          label={"Other Details"}
                          buttonWidth={"150px"}
                          onClick={handleOpen}
                          buttonColor={'white'}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ flex: 0.05 }}></div>
                </div>
              </div>
              <br></br>
              <DataTable
                title={"Current/Saving Account (CASA) Listing"}
                columns={[
                  "Account No.",
                  "Account Description",
                  "Product",
                  "Currency",
                  "Cleared Balance",
                  "Local Equivalent",
                ]}
              />
              <br></br>
              <Tabs defaultValue="gallery">
                <Tabs.List>
                  <Tabs.Tab value="gallery">LOANS</Tabs.Tab>
                  <Tabs.Tab value="messages">INVESTMENTS</Tabs.Tab>
                  <Tabs.Tab value="laterr">TRADE FINANCE</Tabs.Tab>
                  <Tabs.Tab value="former">GOVERNMENT SECURITIES</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="gallery" pt="xs">
                  <DataTable
                    title={"Loans"}
                    columns={[
                      "Account Number",
                      "Account Description",
                      "Product",
                      "CCY",
                      "Principal Balance",
                      "Facility Number",
                    ]}
                  />
                </Tabs.Panel>
                <Tabs.Panel value="messages" pt="xs">
                  <DataTable
                    title={"Investments"}
                    columns={[
                      "Account Number",
                      "Account Description",
                      "Product",
                      "CCY",
                      "Investment Balance",
                      "Deal Number",
                    ]}
                  />
                </Tabs.Panel>
                <Tabs.Panel value="laterr" pt="xs">
                  <DataTable
                    title={"Trade Finance"}
                    columns={[
                      "Contact Ref Number",
                      "Cust Name",
                      "Product",
                      "Expiry Date",
                      "CCY",
                      "Contract Amount",
                      "O/S Contingent Amount",
                    ]}
                  />
                </Tabs.Panel>
                <Tabs.Panel value="former" pt="xs">
                  <DataTable
                    title={"Government Securities"}
                    columns={[
                      "Investment ID",
                      "Product",
                      "Face Value",
                      "Cost Price",
                      "Unearned Discount",
                      "Amortised",
                      "Unamortised",
                      "Effective Date",
                      "Maturity Date",
                      "Tenor Left",
                    ]}
                  />
                </Tabs.Panel>
              </Tabs>
              <Modal show={open} onHide={handleClosee} size="xl">
                <Modal.Header
                  style={{
                    background:
                      `url(` +
                      window.location.origin +
                      `/assets/images/headerBackground/` +
                      headerImage +
                      `)`,
                  }}
                >
                  <div className="w-full -mb-4 flex justify-between ">
                    <Modal.Title
                      style={{
                        fontSize: "14.5px",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      <p>Customer Other Details</p>
                    </Modal.Title>
                    <svg
                      onClick={handleClosee}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      style={{ padding: "10px" }}
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </Modal.Header>
                <Modal.Body>
                  <CustomerOtherDetails />
                </Modal.Body>
              </Modal>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  };

  ///////////////////////////////////////////////////////////////
  /////////////// ACCOUNT BALANCE ENQUIRY MODAL /////////////////
  ///////////////////////////////////////////////////////////////

  const AccountBalanceEnquiryModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const [open, setOpen] = useState(false);
    const [loader, setLoader] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClosee = () => setOpen(false);
    const [show, setShow] = useState(false);
    const handleShoww = () => {
      setShow(true);
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
      }, 1500);
    };
    const handleShut = () => setShow(false);

    return (
      <>
        <Modal
          size="xl"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Account Balance Enquiry</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <div>
              <div
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 0.02 }}></div>
                  <div style={{ flex: 0.96 }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.3fr 0.8fr 0.9fr 1fr",
                        columnGap: "20px",
                        rowGap: "10px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <InputField
                        label={"A/C Number"}
                        labelWidth={"28%"}
                        inputWidth={"66%"}
                      />
                      <div>
                        <InputField
                          label={"Currency"}
                          labelWidth={"65%"}
                          inputWidth={"30%"}
                          disabled
                        />
                      </div>
                      <InputField
                        label={"Product"}
                        labelWidth={"35%"}
                        inputWidth={"60%"}
                        disabled
                      />
                      <InputField
                        label={"Branch"}
                        labelWidth={"30%"}
                        inputWidth={"70%"}
                        disabled
                      />
                      <InputField
                        label={"Description"}
                        labelWidth={"28%"}
                        inputWidth={"66%"}
                        disabled
                      />
                      <ListOfValue
                        label={"Number Of Holders"}
                        labelWidth={"65%"}
                        inputWidth={"30%"}
                        disabled
                      />
                      <InputField
                        label={"Risk Code"}
                        labelWidth={"47%"}
                        inputWidth={"48%"}
                        disabled
                      />
                      <ListOfValue
                        label={"A/C Status"}
                        labelWidth={"30%"}
                        inputWidth={"70%"}
                        disabled
                      />
                      <ListOfValue
                        label={"Debit Limit"}
                        labelWidth={"28%"}
                        inputWidth={"50%"}
                      />
                      <ListOfValue
                        label={"Credit Limit"}
                        labelWidth={"40%"}
                        inputWidth={"55%"}
                      />
                      <ListOfValue
                        label={"Blocked Amount"}
                        labelWidth={"47%"}
                        inputWidth={"48%"}
                      />
                      <div style={{ paddingLeft: "160px" }}>
                        <ButtonComponent
                          label={"Exit"}
                          buttonWidth={"90px"}
                          buttonHeight={"30px"}
                          buttonColor={'white'}
                        />
                      </div>
                    </div>
                  </div>
                  <div style={{ flex: 0.02 }}></div>
                </div>
              </div>
              <br></br>
              <div
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 0.02 }}></div>
                  <div style={{ flex: 0.96 }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        columnGap: "50px",
                        rowGap: "10px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <InputField
                        label={"Uncleared Balance"}
                        labelWidth={"45%"}
                        inputWidth={"50%"}
                      />
                      <InputField
                        label={"CR Accrued Interest"}
                        labelWidth={"45%"}
                        inputWidth={"50%"}
                        disabled
                      />
                      <InputField
                        label={"Interest In Suspense"}
                        labelWidth={"45.7%"}
                        inputWidth={"50%"}
                        disabled
                      />
                      <InputField
                        label={"Ledger Balance"}
                        labelWidth={"45%"}
                        inputWidth={"50%"}
                        disabled
                      />
                      <InputField
                        label={"DB Accrued Interest"}
                        labelWidth={"45%"}
                        inputWidth={"50%"}
                        disabled
                      />
                      <InputField
                        label={"Penalty In Suspense"}
                        labelWidth={"45.7%"}
                        inputWidth={"50%"}
                        disabled
                      />
                      <InputField
                        label={"Cleared Balance"}
                        labelWidth={"45%"}
                        inputWidth={"50%"}
                        disabled
                      />
                      <InputField
                        label={"DB Accrued Penalty"}
                        labelWidth={"45%"}
                        inputWidth={"50%"}
                        disabled
                      />
                      <InputField
                        label={"Arrears Int. Suspense"}
                        labelWidth={"45.7%"}
                        inputWidth={"50%"}
                        disabled
                      />
                      <InputField
                        label={"Available Balance"}
                        labelWidth={"45%"}
                        inputWidth={"50%"}
                        disabled
                      />
                      <InputField
                        label={"Arrears Interest"}
                        labelWidth={"45%"}
                        inputWidth={"50%"}
                        disabled
                      />
                      <ListOfValue
                        label={"Total Arrears"}
                        labelWidth={"45.7%"}
                        inputWidth={"50%"}
                      />
                    </div>
                  </div>
                  <div style={{ flex: 0.02 }}></div>
                </div>
              </div>
              <br></br>
              <div
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ flex: 0.02 }}></div>
                  <div style={{ flex: 0.43 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <InputField
                        label={"Start Date"}
                        labelWidth={"35%"}
                        inputWidth={"59%"}
                        type={"date"}
                      />
                      <InputField
                        label={"End Date"}
                        labelWidth={"35%"}
                        inputWidth={"59%"}
                        type={"date"}
                      />
                      <ButtonComponent
                        label={"Fetch"}
                        buttonWidth={"90px"}
                        buttonHeight={"30px"}
                        buttonColor={'white'}
                      />
                    </div>
                  </div>
                  <div style={{ flex: 0.13 }}></div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flex: 0.4,
                    }}
                  >
                    <ButtonComponent
                      label={"Print Statement"}
                      buttonWidth={"130px"}
                      buttonHeight={"30px"}
                      buttonColor={'white'}
                    />
                    <ButtonComponent
                      label={"Account Details"}
                      onClick={handleOpen}
                      buttonWidth={"130px"}
                      buttonHeight={"30px"}
                      buttonColor={'white'}
                    />
                    <ButtonComponent
                      label={"Signature Verification"}
                      onClick={handleShoww}
                      buttonWidth={"170px"}
                      buttonHeight={"30px"}
                      buttonColor={'white'}
                    />
                  </div>
                  <div style={{ flex: 0.02 }}></div>
                </div>
              </div>
              <br></br>
              <div style={{ zoom: 0.85 }}>
                <DataTable
                  title={"TRANSACTION DETAILS"}
                  columns={[
                    "Posting Date",
                    "Value Date",
                    "Transaction Details",
                    "Document Ref",
                    "Batch No.",
                    "Debit",
                    "Credit",
                    "Balance",
                  ]}
                />
              </div>
            </div>
            <Modal show={open} onHide={handleClosee} size="xl">
              <Modal.Header closeButton>
                <Modal.Title>Account Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AccountDetails />
              </Modal.Body>
            </Modal>

            <Modal
              size="md"
              show={show}
              // onHide={handleClose}
            >
              <Modal.Header
                style={{
                  background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    headerImage +
                    `)`,
                }}
              >
                <div className="w-full -mb-4 flex justify-between ">
                  <Modal.Title
                    style={{
                      fontSize: "14.5px",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    <p>View Photo And Signature</p>
                  </Modal.Title>
                  <svg
                    onClick={handleShut}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    style={{ padding: "10px" }}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </Modal.Header>
              <Modal.Body style={{ background: "white" }}>
                <div style={{ display: "grid", placeItems: "center" }}>
                  {loader ? (
                    <img
                      src={require("../../assets/images/giphy.gif")}
                      style={{ height: 200 }}
                      alt="logo"
                    />
                  ) : (
                    <div>
                      <div
                        style={{
                          color: "red",
                          fontSize: "20px",
                          placeItems: "center",
                          marginLeft: "20px",
                        }}
                      >
                        No Mandate Found
                      </div>
                      <div style={{ backgroundColor: "whitesmoke" }}>
                        <img
                          src={require("../../assets/images/No-Image-Found.png")}
                          alt="logo"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Modal.Body>
            </Modal>
          </Modal.Body>
        </Modal>
      </>
    );
  };

  ///////////////////////////////////////////////////////////////
  /////////////// TRANSACTION ANALYSER MODAL ////////////////////
  ///////////////////////////////////////////////////////////////

  const TransactionAnalyserModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Transaction Analyser</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  //////////////////////////////////////////////////////////
  /////////////// ACCOUNT GENERAL MODAL ////////////////////
  //////////////////////////////////////////////////////////

  const AccountGeneralEnquiryModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Account General Enquiry</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  ///////////////////////////////////////////////////
  /////////////// FACILITY ENQUIRY MODAL ////////////
  ///////////////////////////////////////////////////

  const FacilityEnquiryModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="xl"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Facility Enquiry</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <FacilityEnquiry />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  //////////////////////////////////////////////
  /////////////// COA ENQUIRY MODAL ////////////
  //////////////////////////////////////////////

  const COAEnquiryModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>COA Enquiry</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  //////////////////////////////////////////////
  /////////////// MY APPROVALS MODAL ///////////
  //////////////////////////////////////////////

  const MyApprovalsModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>My Approvals</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  //////////////////////////////////////////////////////
  /////////////// INTEREST CALCULATION MODAL ///////////
  //////////////////////////////////////////////////////

  const InterestCalculationModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Interest Calcuation</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  //////////////////////////////////////////////////////
  /////////////// CURRENCY CONVERSION MODAL ////////////
  //////////////////////////////////////////////////////

  const CurrencyConversionModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Currency Conversion</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  //////////////////////////////////////////////////////
  /////////////// PERCENTAGE AMOUNT MODAL //////////////
  //////////////////////////////////////////////////////

  const PercentageAmountModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Percentage Amount</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  //////////////////////////////////////////////////////
  /////////////// RATE DASHBOARD MODAL /////////////////
  //////////////////////////////////////////////////////

  const RateDashboardModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Rate Dashboard</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  ////////////////////////////////////////////////
  /////////////// ADDITION MODAL /////////////////
  ////////////////////////////////////////////////

  const AdditionModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Addition</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  ///////////////////////////////////////////////////////
  /////////////// RISK CALCULATOR MODAL /////////////////
  ///////////////////////////////////////////////////////

  const RiskCalculatorModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Risk Calculator</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  ///////////////////////////////////////////////////////
  /////////////// USER PROFILE MODAL ////////////////////
  ///////////////////////////////////////////////////////

  const UserProfileEnquiryModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>User Profile Enquiry</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  ///////////////////////////////////////////////////////
  /////////////// PRINT MODAL ////////////////////
  ///////////////////////////////////////////////////////

  const PrintModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Print</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  ////////////////////////////////////////////////
  /////////////// KEYS MODAL /////////////////////
  ////////////////////////////////////////////////

  const KeysModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Keys</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  ////////////////////////////////////////////////
  /////////////// SHORT MAILS MODAL //////////////
  ////////////////////////////////////////////////

  const ShortMailsModal = ({ name, showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <>
        <Modal
          size="lg"
          className="headModal"
          show={showModal}
          // onHide={handleClose}
        >
          <Modal.Header
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                headerImage +
                `)`,
            }}
          >
            <div className="w-full -mb-4 flex justify-between ">
              <Modal.Title
                style={{
                  fontSize: "14.5px",
                  color: "white",
                  padding: "10px",
                }}
              >
                <p>Short Mails</p>
              </Modal.Title>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                style={{ padding: "10px" }}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </Modal.Header>
          <Modal.Body style={{ background: "white" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Modal.Body>
          {/* <Modal.Footer>
               <Button variant="secondary" style={{ marginBottom: "-2px", marginTop: "-2px" }} size='sm' onClick={handleClose}>
                 &nbsp;&nbsp;Close&nbsp;&nbsp;
               </Button>
                <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer> */}
        </Modal>
      </>
    );
  };

  function closeAdditionalInfoFunc() {
    document.getElementById("additionalInfo").style.display = "none";
  }

  function handleSearchClickEvent(formName) {
    if (formName === "" || formName === undefined || formName === null) {
      document.getElementById("listOfValue").required = true;
      document.getElementById("listOfValue").focus();
      return false;
    } else {
      const storeSystemAuditLog = async () => {
        await axios
          .post(API_SERVER + "/store-system-audit-logs", {
            user_id: JSON.parse(localStorage.getItem("userInfo")).id,
            page_accessed: formName,
            page_url: null,
          })
          .then(function (response) {
            // console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      };

      storeSystemAuditLog();

      // alert(formName);
      if (document.getElementById("minimizeContainer")) {
        document.getElementById("minimizeContainer").click();
      }
      localStorage.setItem("formName", formName);

      setLoading(true);
      setTimeout(() => {
        setGlobalModal(true);
        setLoading(false);
      }, 0);
    }
  }

  return (
    <>
      <header
        className="customHeader"
        style={{
          paddingLeft: "130px",
          paddingRight: "65px",
          position: "fixed",
          right: 0,
          left: 0,
          margin: "auto",
          width: "100%",
          zoom: 0.9,
        }}
      >
        <MDBCard
          id="additionalInfo"
          className="bg-transparent"
          style={{
            position: "relative",
            marginBottom: "1px",
            marginTop: "20px",
            zIndex: "99",
            width: "auto",
            height: "10px",
          }}
        >
          <div className="">
            <div
              className="float-left"
              style={{
                marginTop: "-16px",
                width: "50%",
                overflowX: "scroll",
                whiteSpace: "nowrap",
              }}
            >
              <p
                style={{ fontSize: "14px", marginLeft: "0px" }}
                className="topLeftAddInfoStylish"
              >
                Powered By : <b>X100 PLUS</b> &nbsp;&nbsp;|&nbsp;&nbsp; Address
                : <b>Lartebiokorshie; Accra, Ghana</b> &nbsp;&nbsp;|&nbsp;&nbsp;
                Email : <b>info@unionsg.com</b>
              </p>
            </div>

            <div
              className="float-right"
              style={{
                marginTop: "-16px",
                textAlign: "right",
                width: "50%",
                overflowX: "scroll",
                whiteSpace: "nowrap",
              }}
            >
              <p style={{ fontSize: "14px" }}>
                Last Login :{" "}
                <b>{localStorage.getItem("lastLogin").substr(0, 25)}</b>{" "}
                &nbsp;&nbsp;|&nbsp;&nbsp; Login Location :{" "}
                <b>{localStorage.getItem("location")}</b>{" "}
                &nbsp;&nbsp;|&nbsp;&nbsp; Browser :{" "}
                <b>{localStorage.getItem("browser")}</b> &nbsp;&nbsp;&nbsp;
                <MDBIcon
                  onClick={() => closeAdditionalInfoFunc()}
                  fas
                  icon="window-close"
                />
              </p>
            </div>
          </div>
        </MDBCard>

        <div
          className="shadow-0 testMe"
          style={{
            position: "relative",
            top: "0",
            background:
              `url(` +
              window.location.origin +
              `/assets/images/headerBackground/` +
              headerImage +
              `)`,
            zIndex: "0",
            height: "80px",
            width: "100%",
            borderBottomLeftRadius: "0px 0px",
            borderBottomRightRadius: "0px 0px",
          }}
        >
          <div className="pt-4 ml-12 mr-12">
            <div className="float-left">
              <table
                style={{
                  marginTop: "-34px",
                  marginBottom: "-15px",
                  marginLeft: "0px",
                }}
              >
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={
                          window.location.origin +
                          "/assets/images/logo/logo.png"
                        }
                        style={{
                          width: "75px",
                          marginTop: "9px",
                          marginLeft: "0px",
                          height: "auto",
                        }}
                      />
                    </td>
                    <td>
                      <p
                        style={{
                          color: "white",
                          marginTop: "27px",
                          marginLeft: "7px",
                          marginRight: "10px",
                          fontFamily: "",
                          fontSize: "17.5px",
                        }}
                      >
                        {" "}
                        <b>X100 PLUS - Core Banking System</b>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="float-right">
              <p
                style={{
                  color: "white",
                  fontSize: "17.5px",
                  marginRight: "4.5px",
                  fontFamily: "",
                  marginTop: "-6.5px",
                }}
              >
                You're logged in as,
                <MDBIcon
                  style={{
                    fontSize: "15px",
                    color: "white",
                    marginLeft: "9px",
                  }}
                  icon="user"
                />{" "}
                {JSON.parse(localStorage.getItem("userInfo")).username}
              </p>
            </div>
          </div>
        </div>

        <ScanDocumentModal
          name="Scan Document"
          showModal={showScanDocument}
          setShowModal={setScanDocument}
        />
        <OfflineReportsModal
          name="Offline Reports"
          showModal={showOfflineReports}
          setShowModal={setOfflineReports}
        />
        <OfflineReportsModal
          name="Change Branch"
          showModal={showChangeBranch}
          setShowModal={setChangeBranch}
        />

        <CustomerSearchNameModal
          name="Customer Search Name"
          showModal={showCustomerSearchName}
          setShowModal={setCustomerSearchName}
        />
        <CustomerSearchNumberModal
          name="Customer Search Number"
          showModal={showCustomerSearchNumber}
          setShowModal={setCustomerSearchNumber}
        />
        <TransactionAnalyserModal
          name="Transaction Analyser"
          showModal={showTransactionAnalyser}
          setShowModal={setTransactionAnalyser}
        />
        <AccountGeneralEnquiryModal
          name="Account General Enquiry"
          showModal={showAccountGeneralEnquiry}
          setShowModal={setAccountGeneralEnquiry}
        />
        <AccountBalanceEnquiryModal
          name="Account Balance Enquiry"
          showModal={showAccountBalanceEnquiry}
          setShowModal={setAccountBalanceEnquiry}
        />
        <FacilityEnquiryModal
          name="Facility Enquiry"
          showModal={showFacilityEnquiry}
          setShowModal={setFacilityEnquiry}
        />
        <COAEnquiryModal
          name="COA Enquiry"
          showModal={showCOAEnquiry}
          setShowModal={setCOAEnquiry}
        />

        <MyApprovalsModal
          name="My Approvals"
          showModal={showMyApprovals}
          setShowModal={setMyApprovals}
        />

        <InterestCalculationModal
          name="Interest Calculation"
          showModal={showInterestCalculation}
          setShowModal={setInterestCalculation}
        />
        <CurrencyConversionModal
          name="Currency Conversion"
          showModal={showCurrencyConversion}
          setShowModal={setCurrencyConversion}
        />
        <PercentageAmountModal
          name="Percentage Amount"
          showModal={showPercentageAmount}
          setShowModal={setPercentageAmount}
        />
        <RateDashboardModal
          name="Rate Dashboard"
          showModal={showRateDashboard}
          setShowModal={setRateDashboard}
        />
        <AdditionModal
          name="Addition"
          showModal={showAddition}
          setShowModal={setAddition}
        />
        <RiskCalculatorModal
          name="Risk Calculator"
          showModal={showRiskCalculator}
          setShowModal={setRiskCalculator}
        />
        <UserProfileEnquiryModal
          name="User Profile Enquiry"
          showModal={showUserProfileEnquiry}
          setShowModal={setUserProfileEnquiry}
        />

        <PrintModal
          name="Print"
          showModal={showPrint}
          setShowModal={setPrint}
        />
        <KeysModal name="Keys" showModal={showKeys} setShowModal={setKeys} />
        <ShortMailsModal
          name="Short Mails"
          showModal={showShortMails}
          setShowModal={setShortMails}
        />

        <MDBCard
          className="p-4 shadow-5 bg-light ml-12 mr-12 -mt-4"
          style={{
            position: "relative",
            zIndex: "99",
            width: "auto",
            height: "20px",
          }}
        >
          <div className="">
            <div
              className="float-left testME head1"
              style={{
                marginTop: "-13px",
                overflowX: "scroll",
                whiteSpace: "nowrap",
              }}
            >
              <Link
                to="/"
                className="useMe cursor-pointer"
                style={{
                  textDecoration: "none",
                  fontWeight: "20px",
                  fontSize: "17px",
                  fontFamily: "",
                }}
              >
                <MDBIcon icon="tachometer-alt" /> Dashboard
              </Link>

              {/* Utilities Menu */}

              <Menu
                shadow="md"
                width={215}
                trigger="hover"
                openDelay={50}
                closeDelay={100}
              >
                <Menu.Target>
                  <a
                    className="cursor-pointer"
                    style={{
                      textDecoration: "none",
                      color: "",
                      fontSize: "17px",
                      marginLeft: "32px",
                      fontFamily: "",
                    }}
                  >
                    <MDBIcon icon="cogs" /> Utilities{" "}
                    <MDBIcon style={{ fontSize: "17px" }} icon="caret-down" />
                  </a>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label className="menuLable">Document</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setScanDocument(!showScanDocument);
                    }}
                    icon={<MDBIcon style={{ fontSize: "14px" }} icon="print" />}
                  >
                    Scan Document
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Label className="menuLable">Reports</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setChangeBranch(!showChangeBranch);
                    }}
                    icon={
                      <MDBIcon style={{ fontSize: "14px" }} icon="file-alt" />
                    }
                  >
                    Offline Reports
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Label className="menuLable">Branch</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setChangeBranch(!showChangeBranch);
                    }}
                    icon={<MDBIcon style={{ fontSize: "14px" }} icon="sync" />}
                  >
                    Change Branch
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {/* // General Enquiry Menu */}

              <Menu
                shadow="md"
                width={270}
                trigger="hover"
                openDelay={50}
                closeDelay={100}
              >
                <Menu.Target>
                  <a
                    className="cursor-pointer"
                    style={{
                      textDecoration: "none",
                      color: "",
                      marginLeft: "32px",
                      fontSize: "17px",
                      fontFamily: "",
                    }}
                  >
                    <MDBIcon icon="question-circle" /> General Enquiry{" "}
                    <MDBIcon style={{ fontSize: "17px" }} icon="caret-down" />
                  </a>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label className="menuLable">Customer</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setCustomerSearchName(!showCustomerSearchName);
                    }}
                    icon={
                      <MDBIcon style={{ fontSize: "14px" }} icon="search" />
                    }
                  >
                    Customer Search Name
                  </Menu.Item>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setCustomerSearchNumber(!showCustomerSearchName);
                    }}
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px" }}
                        icon="search-plus"
                      />
                    }
                  >
                    Customer Search Number
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Label className="menuLable">Account</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setAccountBalanceEnquiry(!showAccountBalanceEnquiry);
                    }}
                    icon={
                      <MDBIcon style={{ fontSize: "14px" }} icon="question" />
                    }
                  >
                    Account Balance Enquiry
                  </Menu.Item>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setAccountGeneralEnquiry(!showAccountGeneralEnquiry);
                    }}
                    color="red"
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px" }}
                        icon="question-circle"
                      />
                    }
                  >
                    Account General Enquiry
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Label className="menuLable">Facility</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setFacilityEnquiry(!showFacilityEnquiry);
                    }}
                    icon={
                      <MDBIcon style={{ fontSize: "14px" }} icon="university" />
                    }
                  >
                    Facility Enquiry
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Label className="menuLable">Transaction</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setTransactionAnalyser(!showTransactionAnalyser);
                    }}
                    icon={
                      <MDBIcon style={{ fontSize: "14px" }} icon="chart-bar" />
                    }
                  >
                    Transaction Analyzer
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Label className="menuLable">COA</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setCOAEnquiry(!showCOAEnquiry);
                    }}
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px" }}
                        icon="search-dollar"
                      />
                    }
                  >
                    COA Enquiry
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {/* // Central Approval Menu */}

              <Menu
                shadow="md"
                width={215}
                trigger="hover"
                openDelay={50}
                closeDelay={100}
              >
                <Menu.Target>
                  <a
                    className="cursor-pointer"
                    style={{
                      textDecoration: "none",
                      color: "",
                      marginLeft: "32px",
                      fontSize: "17px",
                      fontFamily: "",
                    }}
                  >
                    <MDBIcon icon="check-double" /> Central Approval{" "}
                    <MDBIcon style={{ fontSize: "17px" }} icon="caret-down" />
                  </a>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label className="menuLable">Approvals</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setMyApprovals(!showMyApprovals);
                    }}
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px" }}
                        icon="check-double"
                      />
                    }
                  >
                    My Approvals
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {/* // Calculation Menu */}

              <Menu
                shadow="md"
                width={230}
                trigger="hover"
                openDelay={50}
                closeDelay={100}
              >
                <Menu.Target>
                  <a
                    className="cursor-pointer"
                    style={{
                      textDecoration: "none",
                      color: "",
                      marginLeft: "32px",
                      fontSize: "17px",
                      fontFamily: "",
                    }}
                  >
                    <MDBIcon icon="calculator" /> Calculation{" "}
                    <MDBIcon style={{ fontSize: "17px" }} icon="caret-down" />
                  </a>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label className="menuLable">Calculation</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setInterestCalculation(!showInterestCalculation);
                    }}
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px" }}
                        icon="plus-square"
                      />
                    }
                  >
                    Interest Calculation
                  </Menu.Item>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setRiskCalculator(!showRiskCalculator);
                    }}
                    icon={
                      <MDBIcon style={{ fontSize: "14px" }} icon="calculator" />
                    }
                  >
                    Risk Calculator
                  </Menu.Item>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setAddition(!showAddition);
                    }}
                    icon={<MDBIcon style={{ fontSize: "14px" }} icon="plus" />}
                  >
                    Addition
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Label className="menuLable">Conversion</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setCurrencyConversion(!showCurrencyConversion);
                    }}
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px" }}
                        icon="exchange-alt"
                      />
                    }
                  >
                    Currency Conversion
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Label className="menuLable">Dashboard</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setRateDashboard(!showRateDashboard);
                    }}
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px" }}
                        icon="tachometer-alt"
                      />
                    }
                  >
                    Rate Dashboard
                  </Menu.Item>

                  <Menu.Divider />

                  <Menu.Label className="menuLable">Percentiles</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setPercentageAmount(!showPercentageAmount);
                    }}
                    icon={
                      <MDBIcon style={{ fontSize: "14px" }} icon="percent" />
                    }
                  >
                    Percentage Amount
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {/* // Users Menu */}

              <Menu
                shadow="md"
                width={230}
                trigger="hover"
                openDelay={50}
                closeDelay={100}
              >
                <Menu.Target>
                  <a
                    className="cursor-pointer"
                    style={{
                      textDecoration: "none",
                      color: "",
                      marginLeft: "32px",
                      fontSize: "17px",
                      fontFamily: "",
                    }}
                  >
                    <MDBIcon icon="users-cog" /> Users{" "}
                    <MDBIcon style={{ fontSize: "17px" }} icon="caret-down" />
                  </a>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label className="menuLable">Enquiry</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setUserProfileEnquiry(!showUserProfileEnquiry);
                    }}
                    icon={
                      <MDBIcon style={{ fontSize: "14px" }} icon="users-cog" />
                    }
                  >
                    User Profile Enquiry
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {/* // Help Menu */}

              <Menu
                shadow="md"
                width={215}
                trigger="hover"
                openDelay={50}
                closeDelay={100}
              >
                <Menu.Target>
                  <a
                    className="cursor-pointer"
                    style={{
                      textDecoration: "none",
                      color: "",
                      marginLeft: "32px",
                      fontSize: "17px",
                      fontFamily: "",
                    }}
                  >
                    <MDBIcon icon="info-circle" /> Help{" "}
                    <MDBIcon style={{ fontSize: "17px" }} icon="caret-down" />
                  </a>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label className="menuLable">Printing</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setPrint(!showPrint);
                    }}
                    icon={<MDBIcon style={{ fontSize: "14px" }} icon="print" />}
                  >
                    Print
                  </Menu.Item>
                  <Menu.Label className="menuLable">Keys</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setKeys(!showKeys);
                    }}
                    icon={<MDBIcon style={{ fontSize: "14px" }} icon="key" />}
                  >
                    Keys
                  </Menu.Item>
                  <Menu.Label className="menuLable">Mails</Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={function (e) {
                      minimizeFunc();
                      e.preventDefault();
                      setShortMails(!showShortMails);
                    }}
                    icon={
                      <MDBIcon style={{ fontSize: "14px" }} icon="envelope" />
                    }
                  >
                    Shortmails
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>

            <div
              className="float-right pull-right flex-end head2"
              style={{
                marginTop: "-16px",
                textAlign: "right",
                overflowX: "scroll",
                whiteSpace: "nowrap",
              }}
            >
              {/* <Tooltip label="App Settings" color="dark" position="bottom" withArrow> */}

              <a
                className="cursor-pointer"
                style={{
                  textDecoration: "none",
                  color: "searchengin",
                  fontSize: "18px",
                  fontFamily: "",
                }}
              >
                <Select
                  placeholder="Enter Search Text..."
                  style={{
                    width: "175px",
                    borderRadius: "3px",
                    marginLeft: "-180px",
                    marginTop: "-2px",
                    border: "none",
                    paddinglleft: "7px",
                    zIndex: 9999,
                    position: "absolute",
                  }}
                  searchable
                  require="required"
                  size={"sm"}
                  id="listOfValue"
                  // variant="unstyled"
                  // rightSection={{ pointerEvents: "none" }}
                  styles={{ rightSection: { pointerEvents: "none" } }}
                  data={response}
                  className={`${
                    value ? "block" : "hidden -translate-x-3  "
                  } transition ease-in-out duration-100 transform translate-x-0`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearchClickEvent(
                        document.getElementById("listOfValue").value
                      );
                      setSelectedMenuItem(
                        document.getElementById("listOfValue").value
                      );
                    }
                  }}
                  onChange={(formName) => {
                    setSelectedMenuItem(formName);
                    setValue(true);
                    handleSearchClickEvent(formName);
                  }}
                />
                <MDBIcon
                  onClick={() => {
                    setValue(true);
                    handleSearchClickEvent(selectedMenuItem);
                  }}
                  icon="search"
                />
              </a>

              <a
                className="cursor-pointer"
                onClick={() => openSettingsDrawer()}
                style={{
                  textDecoration: "none",
                  marginLeft: "14px",
                  color: "purple",
                  fontSize: "18px",
                  fontFamily: "",
                }}
              >
                <MDBIcon icon="cogs" />
              </a>

              <Menu
                shadow="md"
                width={160}
                trigger="hover"
                openDelay={50}
                closeDelay={100}
              >
                <Menu.Target>
                  <a
                    className="cursor-pointer"
                    style={{
                      textDecoration: "none",
                      marginLeft: "14px",
                      color: "black",
                      fontSize: "18px",
                      fontFamily: "",
                    }}
                  >
                    <MDBIcon icon="font" />
                  </a>
                </Menu.Target>
                <Menu.Dropdown
                  className="themeCard"
                  style={{ marginLeft: "42px", zIndex: "-moz-initial" }}
                >
                  <Menu.Label
                    className="menuLable"
                    style={{ textAlign: "left" }}
                  >
                    Font Sizes
                  </Menu.Label>
                  <Menu.Item
                    style={{ fontSize: "14px" }}
                    className="menuItem"
                    onClick={() => setFontSize("95%")}
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px", color: "black" }}
                        icon="font"
                      />
                    }
                  >
                    Small
                  </Menu.Item>
                  <Menu.Item
                    style={{ fontSize: "16px" }}
                    className="menuItem"
                    onClick={() => setFontSize("100%")}
                    icon={
                      <MDBIcon
                        style={{ fontSize: "16px", color: "black" }}
                        icon="font"
                      />
                    }
                  >
                    Normal
                  </Menu.Item>
                  <Menu.Item
                    style={{ fontSize: "18px" }}
                    className="menuItem"
                    onClick={() => setFontSize("105%")}
                    icon={
                      <MDBIcon
                        style={{ fontSize: "18px", color: "black" }}
                        icon="font"
                      />
                    }
                  >
                    Large
                  </Menu.Item>
                  <Menu.Item
                    style={{ fontSize: "19px" }}
                    className="menuItem"
                    onClick={() => setFontSize("110%")}
                    icon={
                      <MDBIcon
                        style={{ fontSize: "19px", color: "black" }}
                        icon="font"
                      />
                    }
                  >
                    Extra Large
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {/* </Tooltip> */}

              {/* <Tooltip label="Change Branch" color="dark" position="bottom" withArrow> */}
              {/* <a className='cursor-pointer' style={{ textDecoration: "none", marginLeft: "14px", color: "green", fontSize: "18px", fontFamily: "" }}><MDBIcon icon='desktop' /></a> */}
              {/* </Tooltip> */}

              <Menu
                shadow="md"
                width={215}
                trigger="hover"
                openDelay={50}
                closeDelay={100}
              >
                <Menu.Target>
                  <a
                    className="cursor-pointer"
                    style={{
                      textDecoration: "none",
                      marginLeft: "14px",
                      color: "red",
                      fontSize: "18px",
                      fontFamily: "",
                    }}
                  >
                    <MDBIcon icon="palette" />
                  </a>
                </Menu.Target>

                <Menu.Dropdown
                  className="themeCard"
                  style={{ marginLeft: "42px", zIndex: "-moz-initial" }}
                >
                  <Menu.Label
                    className="menuLable"
                    style={{ textAlign: "left" }}
                  >
                    Themes
                  </Menu.Label>
                  <Menu.Item
                    className="menuItem"
                    onClick={() =>
                      setCustomTheme(
                        '{"theme": {"headerImage":"headerBGDefault.jpg", "backgroundImage":"bgDefault.jpg", "navBarColor":"#f1ffff", "breadcrumbBGColor": "#81daec", "textColor":"white", "buttonBGColor": "black", "buttonTextColor": "white", "cardBGColor":"", "fontFamily":null}}'
                      )
                    }
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px", color: "grey" }}
                        icon="palette"
                      />
                    }
                  >
                    Default Theme
                  </Menu.Item>
                  <Menu.Item
                    className="menuItem"
                    onClick={() =>
                      setCustomTheme(
                        '{"theme": {"headerImage":"headerBGUSGDefault.jpg", "backgroundImage":"bgUSGDefault.jpg", "navBarColor":"#eaeff5", "breadcrumbBGColor":"#047fc0", "textColor":"white", "buttonBGColor": "black", "buttonTextColor": "white", "cardBGColor":"", "fontFamily":null}}'
                      )
                    }
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px", color: "#047fc0" }}
                        icon="palette"
                      />
                    }
                  >
                    USG Default Theme
                  </Menu.Item>
                  <Menu.Item
                    className="menuItem"
                    onClick={() =>
                      setCustomTheme(
                        '{"theme": {"headerImage":"headerBGBlack.jpg", "backgroundImage":"bgBlack.jpg", "navBarColor":"#ececec", "breadcrumbBGColor": "#181816", "textColor":"white", "buttonBGColor": "black", "buttonTextColor": "white", "cardBGColor":"", "fontFamily":null}}'
                      )
                    }
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px", color: "black" }}
                        icon="palette"
                      />
                    }
                  >
                    Black Theme
                  </Menu.Item>
                  <Menu.Item
                    className="menuItem"
                    onClick={() =>
                      setCustomTheme(
                        '{"theme": {"headerImage":"headerBGRed.jpg", "backgroundImage":"bgRed.jpg", "navBarColor":"#f8e7e5", "breadcrumbBGColor": "#e70605", "textColor":"white", "buttonBGColor": "black", "buttonTextColor": "white", "cardBGColor":"", "fontFamily":null}}'
                      )
                    }
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px", color: "red" }}
                        icon="palette"
                      />
                    }
                  >
                    Red Theme
                  </Menu.Item>
                  <Menu.Item
                    className="menuItem"
                    onClick={() =>
                      setCustomTheme(
                        '{"theme": {"headerImage":"headerBGGreen.jpg", "backgroundImage":"bgGreen.jpg", "navBarColor":"#d7f4e2", "breadcrumbBGColor": "#95ddee4f", "textColor":"black", "buttonBGColor": "black", "buttonTextColor": "white", "cardBGColor":"", "fontFamily":null}}'
                      )
                    }
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px", color: "green" }}
                        icon="palette"
                      />
                    }
                  >
                    Green Theme
                  </Menu.Item>
                  <Menu.Item
                    className="menuItem"
                    onClick={() =>
                      setCustomTheme(
                        '{"theme": {"headerImage":"headerBGBlue.jpg", "backgroundImage":"bgBlue.jpg", "navBarColor":"#c0eafc", "breadcrumbBGColor": "#00c7ff", "textColor":"white", "buttonBGColor": "black", "buttonTextColor": "white", "cardBGColor":"", "fontFamily":null}}'
                      )
                    }
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px", color: "blue" }}
                        icon="palette"
                      />
                    }
                  >
                    Blue Theme
                  </Menu.Item>
                  <Menu.Item
                    className="menuItem"
                    onClick={() =>
                      setCustomTheme(
                        '{"theme": {"headerImage":"headerBGOrange.jpg", "backgroundImage":"bgOrange.jpg", "navBarColor":"#ffffea", "breadcrumbBGColor": "#95ddee4f", "textColor":"black", "buttonBGColor": "black", "buttonTextColor": "white", "cardBGColor":"", "fontFamily":null}}'
                      )
                    }
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px", color: "orange" }}
                        icon="palette"
                      />
                    }
                  >
                    Orange Theme
                  </Menu.Item>
                  <Menu.Item
                    className="menuItem"
                    onClick={() =>
                      setCustomTheme(
                        '{"theme": {"headerImage":"headerBGVoilet.jpg", "backgroundImage":"bgVoilet.jpg", "navBarColor":"#faf4fe", "breadcrumbBGColor": "#95ddee4f", "textColor":"black", "buttonBGColor": "black", "buttonTextColor": "white", "cardBGColor":"", "fontFamily":null}}'
                      )
                    }
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px", color: "voilet" }}
                        icon="palette"
                      />
                    }
                  >
                    Voilet Theme
                  </Menu.Item>
                  <Menu.Item
                    className="menuItem"
                    onClick={() =>
                      setCustomTheme(
                        '{"theme": {"headerImage":"headerBGTeal.jpg", "backgroundImage":"bgTeal.jpg", "navBarColor":"#edf6f5", "breadcrumbBGColor": "#03838e", "textColor":"white", "buttonBGColor": "black", "buttonTextColor": "white", "cardBGColor":"", "fontFamily":null}}'
                      )
                    }
                    icon={
                      <MDBIcon
                        style={{ fontSize: "14px", color: "#03838e" }}
                        icon="palette"
                      />
                    }
                  >
                    Teal Theme
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>

              {(() => {
                // console.log(maximized);

                if (maximized === true) {
                  return (
                    <a
                      className="cursor-pointer"
                      id="minimizeContainer"
                      onClick={() => minimizeFunc()}
                      style={{
                        textDecoration: "none",
                        marginLeft: "14px",
                        color: "grey",
                        fontSize: "18px",
                        fontFamily: "",
                      }}
                    >
                      <MDBIcon fas icon="compress-arrows-alt" />
                    </a>
                  );
                } else {
                  return (
                    <a
                      className="cursor-pointer"
                      onClick={() => maximizeFunc()}
                      style={{
                        textDecoration: "none",
                        marginLeft: "14px",
                        color: "grey",
                        fontSize: "18px",
                        fontFamily: "",
                      }}
                    >
                      <MDBIcon fas icon="arrows-alt" />
                    </a>
                  );
                }
              })()}

              <a className="cursor-pointer text-dark">
                <i
                  className="fas fa-envelope fa-2x"
                  style={{
                    color: "black",
                    fontSize: "18px",
                    marginLeft: "14px",
                  }}
                ></i>
                <span
                  style={{
                    marginTop: "-15%",
                    marginLeft: "-3px",
                    color: "white",
                  }}
                  className="badge rounded-pill badge-notification bg-success"
                >
                  99
                </span>
              </a>

              <a
                id="logout"
                className="cursor-pointer"
                onClick={() => logout()}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "18px",
                  marginLeft: "14px",
                  fontFamily: "",
                }}
              >
                <MDBIcon icon="sign-out-alt" />
              </a>
            </div>
          </div>
        </MDBCard>
      </header>

      <SettingsDrawer
        setOpened={setOpened}
        setLayoutType={setLayoutType}
        open={opened}
      />
    </>
  );
}