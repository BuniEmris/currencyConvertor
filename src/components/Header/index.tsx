import React, { useEffect, useState } from "react";
import { getResource } from "../../utils/apiClient";
import styles from "./Header.module.css";
export default function Header() {
  const [usdvalue, setUsdvalue] = useState(0);
  const [eurvalue, setEurvalue] = useState(0);
  useEffect(() => {
    getResource("to=USD&from=UAH&amount=1").then((response) =>
      setUsdvalue(response.result),
    );
    getResource("to=EUR&from=UAH&amount=1").then((response) =>
      setEurvalue(response.result),
    );
  }, []);

  return (
    <div className={styles.container}>
      <h3>Convert Ukrainian Hryvni to US Dollars and EURO</h3>
      <p>Today 1 USD is UKR {usdvalue}</p>
      <p>Today 1 EURO is UKR {eurvalue}</p>
    </div>
  );
}
