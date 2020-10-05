import React, { useEffect } from "react";
import DoctorNav from "../../NavBar/DoctorNav";
import User from '../User';
import axois from "../../../axois";
import { useStateValue } from "../../../context/StateProvider";
import { actionTypes } from "../../../context/reducer";
import "../../NavBar/LoginNav.css";
function Doctor() {
  // eslint-disable-next-line
   const [ {me,patient}, dispatch] = useStateValue();

useEffect(() => {
  axois
    .get("/api/v1/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => {
      dispatch({
        type: actionTypes.SET_ME,
        me: response.data,
      });
    });
}, [dispatch]);


useEffect(() => {
 me &&
  axois
    .get("/api/v1/patient", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((response) => {
      dispatch({
        type: actionTypes.SET_PATIENT,
        patient: response.data,
      });
    });
}, [me, dispatch]);



  return (
    <div>
      <DoctorNav me={me}/>
      <h2 color="red">Patient List</h2>
      <User patient={patient}/>
      </div>
   
  );
}
export default Doctor;
