import React from "react";
import styles from "./Input.module.css";
interface OwnProps {
  selectedCurreny: string;
  amount: any;
  onChangeCurrency: (e: any) => void;
  onChangeAmount: (e: any) => void;
}
export default function currenyInput({
  selectedCurreny,
  amount,
  onChangeCurrency,
  onChangeAmount,
}: OwnProps) {
  return (
    <div className={styles.container}>
      <input
        className={styles.inputBox}
        type="number"
        value={amount}
        onChange={onChangeAmount}
      />
      <select
        value={selectedCurreny}
        className={styles.selectorBox}
        onChange={onChangeCurrency}
      >
        <option value={"USD"}>USD </option>
        <option value={"EUR"}>EUR </option>
        <option value={"UAH"}>UAH </option>
      </select>
    </div>
  );
}
