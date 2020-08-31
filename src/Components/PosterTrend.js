import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PosterHead = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 20px;
`;
const PosterWrap = styled.div`
  width: 150px;
  height: 225px;
  margin-right: 20px;
  text-align: center;

  & > img {
    width: 150px;
    height: 225px;
    border-radius: 6px;
    margin-bottom: 16px;
  }
  & > h4 {
    font-weight: 700;
    font-size: 1.2rem;
    color: black;
  }
  & > span {
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }
`;
const ImgItemWrap = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 40px;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
`;
const PosterLink = styled(Link)`
  width: 150px;
  margin-right: 40px;
`;

function PosterTrend({ data, subject }) {
  if (data === null) return <div>Loding</div>;
  return (
    <>
      {console.log(data)}
      <PosterHead>{subject}</PosterHead>
      <ImgItemWrap>
        {data.map((result) => (
          <PosterLink key={result.id} to={`/detail/${result.id}`}>
            <PosterWrap key={result.id}>
              <img
                src={`https://image.tmdb.org/t/p/w440_and_h660_face${result.poster_path}`}
                alt="사진"
              />{" "}
              {/*이미지 map*/}
              {result.title ? (
                <h4>
                  {result.title.length > 8
                    ? result.title.substring(0, 8) + "…"
                    : result.title}
                </h4>
              ) : (
                <h4>
                  {result.name.length > 8
                    ? result.name.substring(0, 8) + "…"
                    : result.name}
                </h4>
              )}
              {result.first_air_date ? (
                <span>{result.first_air_date}</span>
              ) : (
                <span>{result.release_date}</span>
              )}
            </PosterWrap>
          </PosterLink>
        ))}
      </ImgItemWrap>
    </>
  );
}

export default PosterTrend;
