import React, { useEffect, useState } from "react";
import { getResource } from "../../utils/apiClient";
import styles from "./Header.module.css";
export default function Header() {
  const [usdvalue, setUsdvalue] = useState<any>([]);
  const [eurvalue, setEurvalue] = useState<any>([]);
  useEffect(() => {
    getResource("to=UAH&from=USD&amount=1").then((response) =>
      setUsdvalue(response),
    );
    getResource("to=UAH&from=EUR&amount=1").then((response) =>
      setEurvalue(response),
    );
  }, []);
  console.log(usdvalue, "va+++ ", eurvalue);

  return (
    <div className={styles.container}>
      <h3>Convert Ukrainian Hryvni to US Dollars and EURO</h3>
      <p>Today 1 USD is UKR {usdvalue?.result}</p>
      <p>Today 1 EURO is UKR {eurvalue?.result}</p>
    </div>
  );
}
