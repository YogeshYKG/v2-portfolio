import React from "react";
import FloatingLauncher from "@/app/components/supportWidget/floatinglauncher/FloatingLauncher";
import SupportPanel from "@/app/components/supportWidget/supportPanel/SupportPanel";

const SupportWidget = () => {
  return (
    <>
      <FloatingLauncher />
      <SupportPanel />
      {/* <FloatingForm />  #Name this  */}
    </>
  );
};

export default SupportWidget;
