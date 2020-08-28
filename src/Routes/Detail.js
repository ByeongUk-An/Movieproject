import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { movieApi } from "../api";

const DetailWrap = styled.section`
  width: 100%;
  height: 20px;
  background: pink;
`;

function Detail(props) {
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = props.match.params;

  const reqdetail = async (id) => {
    try {
      setLoading(true);
      const { data: results } = await movieApi.moviedetail(id);
      // console.log(data);
      setShow({ ...results });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    reqdetail(id);
  }, []);
  console.log(show);
  console.log(loading);

  if (loading === true) {
    return "loading";
  } else {
    return (
      <DetailWrap>
        <h2>{show.title}</h2>
        <h3>{show.id}</h3>
      </DetailWrap>
    );
  }
}

export default Detail;
