import React from 'react';
import styled from 'styled-components';

const PosterHead = styled.h2`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 20px;
`;
const PosterWrap = styled.div`
width: 170px;
height: 225px;
margin-right: 20px;

&>img {
width: 150px;
height: 225px;
border-radius: 6px;
margin-bottom: 16px;
}
&>h4 {
font-weight: 700;
font-size: 1.2rem;
}
&>span{
color: rgba(0,0,0,0.6);
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
  
`;

function PosterTrend({data,subject}){
    if(data === null) return (<div>Loding</div>);
    return(
        <>
            {console.log(data)}
            <PosterHead>{subject}</PosterHead>
            <ImgItemWrap>
                {data.map((result) => (
                    <PosterWrap key={result.id}>
                        <img src={`https://image.tmdb.org/t/p/w440_and_h660_face${result.poster_path}`} alt="사진"/> {/*이미지 map*/}
                        {result.title ? <h4>{result.title}</h4>:<h4>{result.name}</h4>}
                        {result.first_air_date ? <span>{result.first_air_date}</span> : <span>{result.release_date}</span> }
                        
                    </PosterWrap>

                ))}
            </ImgItemWrap>
        </>
    )
}

export default PosterTrend;