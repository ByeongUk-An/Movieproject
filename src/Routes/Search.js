import React, { useState } from "react";
import styled from "styled-components";
import { searchApi } from "../api";
import { useEffect } from "react";

function Search() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([{}]);

  const url = window.location.search;
  const decode = decodeURI(url);
  const itemsplit = decode.split("=");
  // itemsplit[1]을 하면 input 에서 받은 값을 받을수 있다.

  const searchApi2 = async () => {
    try {
      const {
        data: { results: searchResult },
      } = await searchApi.Search(itemsplit[1]);
      setResult(searchResult);
    } catch (Error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    searchApi2();
  }, []);
  console.log(result);
  return (
    <>
      {result.map((result) => {
        return <h2>{result.title}</h2>;
      })}
    </>
  );
}

export default Search;
