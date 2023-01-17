import React, { Component } from 'react';
import './Testimonial.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

// function Testimonial() {

//     return(

//         <>
//         <div className='container' id='#testi'>            
//             <OwlCarousel 
//                 items={3}  
//                 className="owl-theme" 
//                 animateIn="animate__slideInRight"
//                 animateOut='animate__slideOutLeft'
//                 center={true}
//                 autoplayTimeout={3000} 
//                 loop={true}  
//                 nav  
//                 margin={8} 
//                 autoplay ={true}
//                 responsiveClass={true}
//                 > 
//                 <div className='testimonial-item'>
//                     <div className='box'>
//                         <div>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                         </div>
//                         <p className='text-white'>
//                             Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
//                         </p>
//                         <div className='profile mt-auto'>
//                             <img src={require('./images/testimonials-3.jpg')} alt=""/>
//                         </div>
//                         <h3>Jena Karlis</h3>
//                         <h4>Store Owner</h4>
//                     </div>
//                 </div>  

//                 <div className='testimonial-item'>
//                     <div className='box'>
//                         <div>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                             <BsStarHalf className='stars'/>
//                         </div>
//                         <p className='text-white'>
//                             Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
//                         </p>
//                         <div className='profile'>
//                             <img src={require('./images/testimonials-4.jpg')} alt=""/>
//                         </div>
//                         <h3>Matt Brandon</h3>
//                         <h4>Freelancer</h4>
//                     </div>
//                 </div>

//                 <div className='testimonial-item'>
//                     <div className='box'>
//                         <div>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                             <BsStar className='stars'/>
//                         </div>
//                         <p className='text-white'>
//                             Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
//                         </p>
//                         <div className='profile'>
//                             <img src={require('./images/testimonials-5.jpg')} alt=""/>
//                         </div>
//                         <h3>John Larson</h3>
//                         <h4>Entrepreneur</h4>
//                     </div>
//                 </div>   

//                 <div className='testimonial-item'>
//                     <div className='box'>
//                         <div>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                             <BsStarHalf className='stars'/>
//                             <BsStar className='stars'/>
//                         </div>
//                         <p className='text-white'>
//                             Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
//                         </p>
//                         <div className='profile'>
//                             <img src={require('./images/testimonials-1.jpg')} alt=""/>
//                         </div>
//                         <h3>Saul Goodman</h3>
//                         <h4>Ceo & Founder</h4>
//                     </div>
//                 </div>

//                 <div className='testimonial-item'>
//                     <div className='box'>
//                         <div>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                             <BsStarFill className='stars'/>
//                             <BsStar className='stars'/>
//                             <BsStar className='stars'/>
//                         </div>
//                         <p className='text-white'>
//                             Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
//                         </p>
//                         <div className='profile'>
//                             <img src={require('./images/testimonials-2.jpg')} alt=""/>
//                         </div>
//                         <h3>Sara Wilsson</h3>
//                         <h4>Designer</h4>
//                     </div>
//                 </div>
//             </OwlCarousel>  
//         </div>  
//         </>
//     )
// }


const options = {
    margin: 8,
    responsiveClass: true,
    nav: true,
    loop: true,
    dots: true,
    autoplayTimeout: 3000,
    autoplay: true,
    center: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        400: {
            items: 1,
            nav: false,
        },
        600: {
            items: 2,
            
        },
        700: {
            items: 1,
            nav: false,
        },
        1025: {
            items: 3,

        }
    },
};

class Testimonial extends Component {

    render() {

        return (
            <>
            <section className='testimonial'>
                <div className='container'>
                    <div className='section-header'>
                        <h2>Testimonials</h2>
                        <p>What they are saying</p>
                    </div>
                </div>
            </section>
            <div className='container testimonials' id='#testi'>            
                <OwlCarousel {...options}> 
                <div className='testimonial-item'>
                    <div className='box'>
                        <div>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                        </div>
                        <p className='text-white'>
                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                        </p>
                        <div className='profile mt-auto'>
                            <img src={require('./images/testimonials-3.jpg')} alt=""/>
                        </div>
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                    </div>
                </div>  

                <div className='testimonial-item'>
                    <div className='box'>
                        <div>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                            <BsStarHalf className='stars'/>
                        </div>
                        <p className='text-white'>
                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                        </p>
                        <div className='profile'>
                            <img src={require('./images/testimonials-4.jpg')} alt=""/>
                        </div>
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                    </div>
                </div>

                <div className='testimonial-item'>
                    <div className='box'>
                        <div>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                            <BsStar className='stars'/>
                        </div>
                        <p className='text-white'>
                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                        </p>
                        <div className='profile'>
                            <img src={require('./images/testimonials-5.jpg')} alt=""/>
                        </div>
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                    </div>
                </div>   

                <div className='testimonial-item'>
                    <div className='box'>
                        <div>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                            <BsStarHalf className='stars'/>
                            <BsStar className='stars'/>
                        </div>
                        <p className='text-white'>
                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                        </p>
                        <div className='profile'>
                            <img src={require('./images/testimonials-1.jpg')} alt=""/>
                        </div>
                        <h3>Saul Goodman</h3>
                        <h4>Ceo & Founder</h4>
                    </div>
                </div>

                <div className='testimonial-item'>
                    <div className='box'>
                        <div>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                            <BsStarFill className='stars'/>
                            <BsStar className='stars'/>
                            <BsStar className='stars'/>
                        </div>
                        <p className='text-white'>
                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        </p>
                        <div className='profile'>
                            <img src={require('./images/testimonials-2.jpg')} alt=""/>
                        </div>
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                    </div>
                </div>
            </OwlCarousel>  
        </div>
        </>
        )
    }
}






export default Testimonial;