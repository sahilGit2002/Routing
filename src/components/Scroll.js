import { FaArrowUp } from 'react-icons/fa';
import './Scroll.css';

function Scroll() {

    return(
        <>
            <div>
                <a href="#top" id='myBtn' onClick={TopFunction()}  className='scroll-top d-flex align-items-center justify-content-center'><FaArrowUp/> </a>
            </div>
        </>
    )
}

// let topbtn = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {ScrollFunction()};

export function ScrollFunction() {
    
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById('myBtn').style.opacity = 1;
          } else {
            document.getElementById('myBtn').style.opacity = 0;
          }
    
}

// When the user clicks on the button, scroll to the top of the document
export const TopFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



export default Scroll;