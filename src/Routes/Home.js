import React, { useState, useEffect } from "react";
import styled from "styled-components";
import inputimg from "../images/input.jpg";
import PosterMovie from "../Components/PosterMovie";
import PosterTv from "../Components/PosterTV";
import { movieApi, tvApi, trendApi } from "../api";
import PosterTrend from "../Components/PosterTrend";
import { Link } from "react-router-dom";

const SectionWrap = styled.section`
  background-image: linear-gradient(
      to right,
      rgba(5, 37, 65, 0.8) 0%,
      rgba(28, 183, 221, 0) 100%
    ),
    url(${inputimg});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  max-width: 1300px;
  height: calc(100vh / 2.5);
  min-height: 300px;
  max-height: 360px;
  margin: 0 auto;
  color: #fff;
  display: flex;
  align-items: center;

  & > div {
    padding: 40px 30px;
  }

  & > div > h2 {
    font-size: 3em;
    font-weight: 700;
    line-height: 1;
  }
  & > div > h3 {
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 40px;
  }
  & > div > form {
    position: relative;
  }
  & > div > form > input {
    width: 1220px;
    height: 46px;
    border-radius: 50px;
    border: none;
    outline: none;
    padding: 10px 20px;
    font-size: 18px;
  }
  & > div > form > button {
    width: 100px;
    height: 46px;
    border-radius: 50px;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(
      to right,
      rgba(138, 205, 164, 1) 0%,
      rgba(28, 183, 221, 1) 100%
    );
    color: #fff;
    border: none;
    outline: none;
    font-weight: 700;
  }
`;

const Section2Wrap = styled.section`
  max-width: 1300px;
  margin: 50px auto 0;
  padding: 0 50px;
`;

function Home(props) {
  const [movie, setMovie] = useState(null);
  const [tv, setTV] = useState(null);
  const [trend, setTrend] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  console.log(props);
  useEffect(() => {
    const reqMovieApi = async () => {
      try {
        setLoading(true);
        const {
          data: { results: movieResult },
        } = await movieApi.popular();
        const {
          data: { results: tvResult },
        } = await tvApi.popular();
        const {
          data: { results: trendResult },
        } = await trendApi.trending();
        setMovie(movieResult);
        setTV(tvResult);
        setTrend(trendResult);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    reqMovieApi();
  }, []);
  if (loading) return <div>Loding</div>;
  return (
    <>
      <SectionWrap>
        <div>
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <form method="get" action="/search">
            <input
              type="text"
              placeholder="영화, TV 프로그램. 인물검색..."
              name="searchitem"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </SectionWrap>
      <Section2Wrap>
        <PosterMovie subject="What's Movie" data={movie} />
        <PosterTv subject="What's TV" data={tv} />
        <PosterTrend subject="What's Trend" data={trend} />
      </Section2Wrap>
    </>
  );
}

export default Home;
