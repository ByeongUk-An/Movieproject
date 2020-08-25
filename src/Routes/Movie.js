import React, {useState,useEffect} from 'react';
import styled from "styled-components";
import {ratingApi} from "../api";
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';

const RatedWrap = styled.section`
  width: 1300px;
  margin: 0 auto;
  display: flex;
  
`;
const WrapItem = styled.div`
  width: 260px;
  height: 100vh;
  display: flex;
  padding-top: 140px;
  justify-content: center;
  color: #000;
  font-size: 30px;
  font-weight: 700;
`;
const WrapItem2 = styled.div`
  width: 1040px;
  display: flex;
  flex-wrap: wrap;
  
  & > div {
  margin: 90px 20px 40px 70px;
  
  width: 206px;
  height: 370px;
  
  text-align: center;
  box-shadow: 10px 4px 10px gray;
  
  }
  & > div> img {
  width: 206px;
  height: 312px;
  border-radius: 4px;
  }
  & > div > div > h4 {
  font-weight: 700;
  font-size: 18px;
  }
   & > div > div> span {
   color: rgba(0,0,0,0.6);
   }
   & > div > div > p {
   color: rgba(0,0,0,0.6);
   }
`;

function Movie() {
    const [rating, setRating] = useState(null);
    const [loading, setLoading] = useState(false);
    const reqRatingApi = async ()=>{
        try{
            setLoading(true);
            const {data:{results:ratingResult}} = await ratingApi.rating();
            setRating(ratingResult);
            console.log(rating);
        }catch (e) {
            console.log(e);
        }finally {
            setLoading(false)
        }
    }



    useEffect(()=>{

        if(rating===null){
            reqRatingApi();
        }
        console.log(rating)

    },[rating]);
    if(loading) return (<div>Loading...</div>);
    return(
        <RatedWrap>
            <WrapItem>
                <Roll right>
                <h2>높은 평점의 인기 영화</h2>
                </Roll>
            </WrapItem>
            <WrapItem2>
                {rating&&rating.map((result)=>(
                    <div key={result.id}>
                        <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${result.poster_path}`} alt="사진"/>
                        <div>
                            <Slide right>
                                <h4>{result.title.length > 12 ? result.title.substring(0, 12) + "…" : result.title}</h4>

                            <span>{result.release_date}</span>
                            <p>평점: {result.vote_average}</p>
                            </Slide>
                        </div>
                    </div>
                ))}
            </WrapItem2>
        </RatedWrap>
    )
}

export default Movie;