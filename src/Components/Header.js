import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import logo from "../images/logo.svg";
import { FaSearch } from 'react-icons/fa';

const HeaderWrap = styled.header`
    width: 100%;
    height: 64px;
    background: #052541;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .svglogo {
    width: 154px;
    height: 24px;
    }
`;
const NavWrap = styled.div`
  width: 1300px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;
const NaviUl = styled.ul`
  display: flex;
  align-items: center;
  
`;
const NaviLi = styled.li`




.morelink {
 padding: 8px;
  font-size: 16px;
  margin-left: 12px;
}
`;
const NavLink = styled(Link)`
  color:#ffffff;
  text-decoration: none;
  padding: 8px;
  font-size: 16px;
  margin-left: 12px;
`;
const Searchitem = styled(FaSearch)`
  color:#fff;
  cursor: pointer;
  font-size: 18px;
`;


function Header() {
    return(
        <HeaderWrap>
            <NavWrap>

            <NaviUl>
                <NaviLi>  <Link to='/'> <img src={logo} alt="" className='svglogo'/></Link></NaviLi>
                <NaviLi><NavLink to='/movie'>영화</NavLink></NaviLi>
                <NaviLi><NavLink to="/tv">TV 프로그램</NavLink></NaviLi>
                <NaviLi><NavLink to="/Character">인물</NavLink></NaviLi>
                <NaviLi><a href="https://www.themoviedb.org/documentation/api" className='morelink'>More</a></NaviLi>
            </NaviUl>
                <NaviUl>
                    <NaviLi><Searchitem/></NaviLi>
                </NaviUl>
            </NavWrap>
        </HeaderWrap>
    )
}

export default Header;