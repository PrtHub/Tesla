import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react'
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
   const [burgerStatus, setBurgerStatus] = useState(false);
   
    return (
        <Container>
            <Image>
              
                 <img src="./images/logo.svg" alt="" />
             
            </Image>
            <Menu>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Panels</a>
                <a href="#">Solar Roof</a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CustomWrapper>
                   <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CustomWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">User Inventory</a></li>
                <li><a href="#">Trade In</a></li>
                <li><a href="#">Demo Drive</a></li>
                <li><a href="#">Insurence</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Inventor Realtion</a></li>

            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`
const Image = styled.div`
   
`

const Menu = styled.div`
   display: flex;
   align-item: center;
   justify-content: center;
   flex: 1;
   font-size: 17px;
  
   a{
     font-weight: 600;
     padding: 5px 15px;
     text-transform: uppercase;
      &:hover {
     background-color: rgba(23, 26, 32, 0.5);
     color: white;
     font-weight: 300;
} 

   }

   @media (max-width: 768px){
    display: none;
 }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  
   a{
     font-weight: 600;
     padding: 5px 15px;
    text-transform: uppercase;
    &:hover {
       background-color: rgba(23, 26, 32, 0.5);
        color: white;
        font-weight: 300;
   } 
  } 
 
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   background-color: white;
   width: 400px;
   z-index: 16;
   display: flex;
   flex-direction: column;
   text-align: start;
   list-style: none;
   
   padding: 40px;
   transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
   transition: transform 0.5s ease-in;

   li{
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3) 
   }
   a{
    font-weight: 600;
    font-size: 18px;
   }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`
const CustomWrapper = styled.div`
   display: flex;
   justify-content: flex-end;

`