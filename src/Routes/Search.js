import React, { useState } from "react";
import styled from "styled-components";
import { searchApi } from "../api";

function Search() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const url = window.location.search;
  const decode = decodeURI(url);
  const itemsplit = decode.split("=");
  // itemsplit[1]을 하면 input 에서 받은 값을 받을수 있다.

  const searchApi2 = async () => {
    const {
      data: { results: searchResult },
    } = await searchApi.Search(itemsplit[1]);
    console.log(searchResult);
  };
  searchApi2();

  return <h2>hello</h2>;
}

export default Search;
