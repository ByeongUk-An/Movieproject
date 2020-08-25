import React, {useRef} from 'react';
import styled from 'styled-components';

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 50px;
  width: 290px;
  height: 31px;
  overflow: hidden;
  position: relative;
`;
const Btn = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  color:#032541;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  border-radius: 50px;
  
  & > h3 {
  display: inline-flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    padding: 4px 20px;
    margin-bottom: 0;
    white-space: nowrap;
  }
  &:first-child > h3 {
  color: #fff;
  }
  .slide-bg {
  position: absolute;
  left: 0;
  z-index: -1;
  width: 95.38px;
  height: 100%;
  background: #052541;
  border-radius: 50px;
  }
`;


function Tab() {
    const tabRef = useRef();
    const tabBtns = useRef();

    const tabSelect = () => {
        tabRef.current.style.left = "95.38px";
        //tabRef.current.style.width = tabBtns.current.style.width;
        console.log(tabBtns.current.style)
    }

    return(
        <>
        <BtnWrap>
            <Btn>
                <h3>스트리밍</h3>
                <div ref={tabRef} className="slide-bg"></div>
            </Btn>
            <Btn ref={tabBtns} onClick={tabSelect}><h3>TV</h3></Btn>
            <Btn><h3>대여</h3></Btn>
            <Btn><h3>극장</h3></Btn>
        </BtnWrap>
        </>
    )
}

export default Tab;