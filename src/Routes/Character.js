import React, {useState,useEffect} from 'react';
import styled from "styled-components";
import {personApi} from "../api";
import Swing from 'react-reveal/Swing';
import Roll from 'react-reveal/Roll';

const RatedWrap = styled.section`
  width: 1300px;
  margin: 0 auto;
  //display: flex;
  
`;
const WrapItem = styled.div`
  width: 260px;
  display: flex;
  margin-top: 44px;
  justify-content: center;
  color: #000;
  font-size: 30px;
  font-weight: 700;
`;
const WrapItem2 = styled.div`
  width: 1300px;
  display: flex;
  flex-wrap: wrap;
  
  & > div {
  margin: 40px 20px 40px 70px;
  
  width: 206px;
  height: 370px;
  
  box-shadow: 10px 4px 10px gray;
  
  }
  & > div> img {
  width: 206px;
  height: 312px;
  border-radius: 4px;
  margin-bottom: 15px;
  
  }
  & > div > div {
  display: flex;
  justify-content: center;
  align-items: center;
  
  }
  & > div > div > h4 {
  font-weight: 700;
  font-size: 18px;
  }
   
`;

function Tv() {
    const [rating, setRating] = useState(null);
    const [loading, setLoading] = useState(false);
    const reqRatingApi = async ()=>{
        try{
            setLoading(true);
            const {data:{results:PersonResult}} = await personApi.People();
            setRating(PersonResult);
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
                    <h2>인기 인물</h2>
                </Roll>
            </WrapItem>
            <WrapItem2>
                {rating&&rating.map((result)=>(
                    <div key={result.id}>
                        <img src={`https://image.tmdb.org/t/p/w235_and_h235_face${result.profile_path}`} alt="사진"/>
                        <div>
                            <Swing>
                                <h4>{result.name}</h4>
                            </Swing>
                        </div>
                    </div>
                ))}
            </WrapItem2>
        </RatedWrap>
    )
}

export default Tv;