import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePasswordThunk } from "../redux/settings/actions";
import { Card, Button } from "react-bootstrap";

const ChangePasswordComponent = () => {
  const [secret, setSecret] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyNewPassword, setVerifyNewPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const changePassword = () => {
    if (newPassword == verifyNewPassword) {
      alert("Password changed successfully!");
      dispatch(changePasswordThunk(secret, verifyNewPassword));
      console.log(newPassword);
      console.log(verifyNewPassword);
    } else {
      console.log("Call Your Manager!");
      setError("Passwords do not match!");
      setNewPassword("");
      setVerifyNewPassword("");
    }
  };

  return (
    <>
      <div>
        <Card.Title>
          <h5 className="setting_title my-2">Change Password</h5>
        </Card.Title>
        <input
          type="text"
          className="setting_input"
          value={secret}
          onChange={(e) => {
            setSecret(e.target.value);
            setError(null);
          }}
          placeholder="Enter current password"
        />{" "}
        {/* Is actually a secret*/}
        <br />
        <input
          type="text"
          className="setting_input my-4"
          value={newPassword}
          onChange={(e) => {
            setError(null);
            setNewPassword(e.target.value);
          }}
          placeholder="Enter new password"
        />
        <br />
        <input
          type="text"
          className="setting_input"
          value={verifyNewPassword}
          onChange={(e) => setVerifyNewPassword(e.target.value)}
          placeholder="Confirm password"
        />
        <br />
        {error}
        <br />
        <Button
          type="submit"
          className="buttonOne mt-3"
          onClick={() => changePassword()}
        >
          Change Password
        </Button>
        <br />
        <br />
      </div>
    </>
  );
};

export default ChangePasswordComponent;
