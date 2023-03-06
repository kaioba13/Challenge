import React from "react";
import styles from "./Header.module.css";
import logoSvg from "../../assets/ReactChallenge.svg";
import SearchBar from "../SearchBar/SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Header() {
  const [api, setApi] = useState([]);
  async function testApi() {
    try {
      const response = await axios.get(
        "https://api.beta.mejorconsalud.com/wp-json/mc/v1/categories"
      );
      const data = response.data;

      setApi(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    testApi();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.HeaderNav}>
        <div>
          <img src={logoSvg} alt="Logo" />
        </div>

        <SearchBar data={api} />
      </header>
    </div>
  );
}
