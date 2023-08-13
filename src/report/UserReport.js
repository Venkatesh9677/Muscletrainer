import React from "react";
import Muscle from "./Muscle";
import Cardio from "./Cardio";
import Yoga from "./Stretch";
import Layout from "../components/routes/Layout";


function UserReport() {
  return (
    <>
      <Layout/>

      <Muscle />

      <Cardio />

      <Yoga />


    </>
  );
}

export default UserReport;
