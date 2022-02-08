import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import QueueComponent from "../component/QueueComponent";

const Queue = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.authStore.isAuthenticated);
  useEffect(() => {
    if (auth !== true) {
      navigate("/login");
    }
  }, [auth, navigate]);
  return (
    <div>
      <p>Hi! Welcome to Queue!</p>
      <QueueComponent />
    </div>
  );
};

export default Queue;
