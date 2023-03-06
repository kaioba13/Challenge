import styles from "./SearchBar.module.css";
import { useState, useEffect } from "react";

export default function SearchBar({ data }) {
  const [filterData, setFilterData] = useState([]);

  function handleChange(e) {
    const searchValue = e.target.value;
    const newFilter = data.filter((value) => {
      return value.slug.includes(searchValue);
    });
    setFilterData(newFilter);
  }

  return (
    <div className={styles.Search}>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputSearch}
          type="text"
          placeholder="Pesquisar assunto"
          onChange={handleChange}
        />
      </div>
      {filterData != 0 && (
        <div className={styles.dataResult}>
          {filterData.map((value, key) => {
            return (
              <a className={styles.dataItem} href="/Details" target={"_blank"}>
                <p>{value.slug}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
