import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useCallback } from "react";
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

const Dropdown = styled.div`
  border: 1px solid grey;
`;

const History = styled.div`
  margin-top: 50px;
`;

const Button = styled.button``;

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
  const [historyArr, setHistoryArr] = useState([]);

  const delaySearch = useCallback(
    debounce((query) => {
      search(query);
    }, 1000),
    []
  );

  function debounce(fn, delay) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  }

  const search = (query) => {
    if (query.length > 0) {
      axios
        .get(`http://localhost:9192/search/${query}`)
        .then((resp) => {
          console.log("🚀 ~ file: GoogleScreen.js:22 ~ .then ~ resp:", resp);
          setResultArr(resp.data);
        })
        .catch((err) => {
          setResultArr([]);
          console.log("🚀 ~ file: GoogleScreen.js:25 ~ search ~ err:", err);
        });
    } else {
      setResultArr([]);
    }
  };

  const getSearchHistory = () => {
    axios
      .get(`http://localhost:9192/gethistory`)
      .then((resp) => {
        setHistoryArr(resp.data);
        console.log("🚀 ~ file: GoogleScreen.js:22 ~ .then ~ resp:", resp);
      })
      .catch((err) => {
        setHistoryArr([]);
        console.log("🚀 ~ file: GoogleScreen.js:25 ~ search ~ err:", err);
      });
  };

  return (
    <Container className="container">
      <GoogleText className="txt-google">GOOGLE</GoogleText>
      <Input type="text" onChange={(e) => delaySearch(e.target.value)} />
      {resultArr.length !== 0 ? (
        <Dropdown>
          {resultArr.map((res) => {
            return <div>{res}</div>;
          })}
        </Dropdown>
      ) : null}

      <Button onClick={() => getSearchHistory()}>Get History</Button>
      <History>
        Your Search History:
        {historyArr.map((res) => {
          return <div>{res}</div>;
        })}
      </History>
    </Container>
  );
}
