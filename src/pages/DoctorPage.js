import React, { useState, useEffect } from "react";
import { loadApiThunk } from "../redux/api/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'

import DoctorComponent from '../component/DoctorComponent'
import Dropdown from 'react-bootstrap/Dropdown'

const Doctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  const apiStore = useSelector((state) => state.apiStore);
  const [doctorSelected, setDoctorSelected] = useState("")
  const currentBusinessId = localStorage.getItem("businessId");
  console.log(apiStore)
  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
    dispatch(loadApiThunk());
  }, [auth, navigate]);

  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title="Doctor">
        {apiStore.doctors
          ? apiStore.doctors
            .filter((childDoc) => childDoc.business_id == currentBusinessId)
            .map((eachDoc, i) => (
              <Dropdown.Item onClick={(e) => { setDoctorSelected(e.target.attributes.value.value) }} value={eachDoc.id}>{eachDoc.f_name} {eachDoc.l_name}</Dropdown.Item>
            )) : <Dropdown.Item>No Doctors Found</Dropdown.Item>}
      </DropdownButton>

      {apiStore.doctors
        ? apiStore.doctors
          .filter((doctor) => doctor.id == doctorSelected)
          .map((doctor, i) => (
            <DoctorComponent {...doctor} />
          ))
        : ""}
    </div>
  );
};

export default Doctor;