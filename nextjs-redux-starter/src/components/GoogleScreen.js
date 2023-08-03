import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
const Container = styled.div`
  //   background: black;
`;

const GoogleText = styled.div`
  color: black;
  display: flex;
`;

const Input = styled.input`
  border: 1px solid black;
`;

const data = [
  "London",
  "UK",
  "Pune",
  "Los Angelis",
  "Bengaluru",
  "Mumbai",
  "Dehli",
];

export default function GoogleScreen() {
  const [resultArr, setResultArr] = useState([]);

  const debounceSearch = (func, wait) => {
    let timeout;
    return function mainFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(delay, wait);
    };
  };

  const onSearch = (query) => {
    debounceSearch(search(query), 3000);
  };

  //   const debounceSearch = (query, delay) => {
  //     let timeout;

  //     return funct(...args) {
  //         const later = () => {
  //             clearTimeout(timeout);
  //             func(...args);
  //           };
  //     }
  //     setTimeout(() => {
  //       console.log(delay);
  //       search(query);
  //     }, delay);
  //   };

  const filerResp = (resp, query) => {
    console.log("🚀 ~ file: GoogleScreen.js:40 ~ filerResp ~ resp:", resp);

    let result = resp.filter((s) => s.contains(query));
    setResultArr(result);
  };

  const search = (query) => {
    axios
      .get(`https://run.mocky.io/v3/05ac0e7a-f08e-4fec-afb2-e05235ba7636`)
      .then((resp) => {
        filerResp(resp.data.data, query);
        console.log("🚀 ~ file: GoogleScreen.js:22 ~ .then ~ resp:", resp);
      })
      .catch((err) => {
        console.log("🚀 ~ file: GoogleScreen.js:25 ~ search ~ err:", err);
      });
  };

  return (
    <Container className="container">
      <GoogleText className="txt-google">GOOGLE</GoogleText>
      <Input type="text" onChange={(e) => onSearch(e.target.value)} />
      <ul></ul>
    </Container>
  );
}
