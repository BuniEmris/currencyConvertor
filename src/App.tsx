import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import CurrenyInput from "./components/CurrenyInput";
import Header from "./components/Header";
import { getResource } from "./utils/apiClient";
function App() {
  const [data, setData] = useState<any>([]);
  const [toCurrency, setToCurrency] = useState<string>("UAH");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [amount, setAmount] = useState(1);
  const [onchangeCurreny, setOnchangeCurreny] = useState<boolean>(true);

  useEffect(() => {
    getResource(`to=${toCurrency}&from=${fromCurrency}&amount=${amount}`).then(
      (response) => setData(response),
    );
  }, [toCurrency, fromCurrency]);
  console.log(data);

  let toAmount, fromAmount;
  if (onchangeCurreny) {
    fromAmount = amount;
    toAmount = amount * data?.info?.rate;
  } else {
    toAmount = amount;
    fromAmount = amount / data?.info?.rate;
  }
  const handleFromAmountChange = (e: any) => {
    setAmount(e.target.value);
    setOnchangeCurreny(true);
  };

  const handleToAmountChange = (e: any) => {
    setAmount(e.target.value);
    setOnchangeCurreny(false);
  };

  return (
    <div className={styles.container}>
      <Header />
      <CurrenyInput
        selectedCurreny={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className={styles.equalSign}>=</div>
      <CurrenyInput
        selectedCurreny={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
      <div className={styles.rate}>{data.result}</div>
    </div>
  );
}

export default App;
