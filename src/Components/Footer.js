import React from 'react';
import styled from "styled-components";


const FooterWrap = styled.footer`
  width: 100%;
  height: 110px;
  background: #02243F;
  color:#fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0;
  left: 0;
`;


function Footer() {
    return(
        <FooterWrap>
            <p>© Byeonguk 2020 All right reserved.</p>
        </FooterWrap>
    )
}

export default Footer;