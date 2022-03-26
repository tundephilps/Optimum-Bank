import React from 'react';
import "./Navbar.scss";
import {Link} from 'react-scroll';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {


    let navigate = useNavigate();


    const marker = document.querySelector('#marker');
    const item = document.querySelectorAll('ul li a');

    function Indicator(e) {
        marker.style.left = e.offsetLeft+'px';
        marker.style.width =  e.offsetWidth+'px';
    }

    item.forEach(Link => {
        Link.addEventListener('mousemove', (e) => {
            Indicator(e.target);

        })
    })

  return(
 <nav className='navbar'>  
<Link to='main'><h1 onClick={() => {navigate("/");}}  className='font'>Optimum Bank</h1></Link>
    
    
      <ul id='navblue'>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Create">Create/Acc</a></li>
          <li><a href="#currency">Converter</a></li>
          <li><a href="#Budget">Budget</a></li>
          <li><a href="#Loan">Loan</a></li>
          <div id="marker"></div>
      </ul>
      </nav>   
 );
};

export default Navbar;

