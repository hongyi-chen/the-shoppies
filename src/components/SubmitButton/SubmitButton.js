import React from "react";
import "./SubmitButton.css";
import SubmitToast from "../Toasts/SubmitToast/SubmitToast";

function SubmitButton() {
  const handleClick = () => {
    const toast = document.getElementById("submit-toast");
    toast.className = "show";
    setTimeout(function () {
      toast.className = toast.className = "";
    }, 2000);
  };
  const toastMessage = "Nominations Submitted!";

  return (
    <div>
      <SubmitToast message={toastMessage} />
      <div className="submit-button">
        <button onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}

export default SubmitButton;
