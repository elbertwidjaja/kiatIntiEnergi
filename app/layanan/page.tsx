import React from "react";
import styles from "./styles.module.scss";
import MainLayout from "../components/MainLayout";
import SurveyCard from "./SurveyCard";

function layanan() {
  return (
    <MainLayout>
      <div>poster</div>
      <div className={styles.surveyContainer}>
        <SurveyCard />
      </div>
    </MainLayout>
  );
}

export default layanan;
