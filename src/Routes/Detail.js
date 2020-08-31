import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { movieApi } from "../api";

const DetailWrap = styled.section`
  width: 100%;
  display: flex;
  /* height: 20px; */
`;
const Detail1 = styled.div`
  width: 30%;

  & > img {
    height: 100%;
    margin-bottom: 21px;
  }
`;
const Detail2 = styled.div`
  width: 70%;
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
        <Detail1>
          <img
            src={`https://image.tmdb.org/t/p/w440_and_h660_face${show.poster_path}`}
          />
        </Detail1>
        <Detail2>
          <h2>{show.title}</h2>
          <p>{show.overview}</p>
          <span>{show.release_date}</span>
        </Detail2>
      </DetailWrap>
    );
  }
}

export default Detail;
