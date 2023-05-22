import React, { useEffect } from "react";
import { useGlobalContext } from "../context";

const Alert = () => {
  const { alertMSG, handleAlert, addCart } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleAlert();
    }, 3000);

    return () => {
      clearInterval(timeout);
    };
  }, [addCart]);

  return (
    <div
      className={`${
        !alertMSG.bool ? "hide-alert" : "hide-alert alert-container"
      }`}
      style={{ backgroundColor: `${alertMSG.status}` }}
    >
      <p>{alertMSG.msg}</p>
    </div>
  );
};

export default Alert;
