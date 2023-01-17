import { ServicesIntro } from "../components/Intro";
import "./Services.css";
import { FiActivity } from "react-icons/fi";
import { BsBoundingBox, BsBroadcast, BsFillCalendarWeekFill } from "react-icons/bs";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";

function Services() {

    return(

        <>
            <ServicesIntro/>


            <section className="services">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-xl-3 col-md-6 d-flex">
                            <div className="services-item position-relative">
                                <div className="service-icon-box">
                                    <FiActivity className="service-icon"/>
                                </div>
                                <h4>Lorem Ipsum</h4>
                                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex">
                            <div className="services-item position-relative">
                                <div className="service-icon-box">
                                    <BsBoundingBox className="service-icon"/>
                                </div>
                                <h4>Sed ut perspici</h4>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex">
                            <div className="services-item position-relative">
                                <div className="service-icon-box">
                                    <BsFillCalendarWeekFill className="service-icon"/>
                                </div>
                                <h4>Magni Dolores</h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 d-flex">
                            <div className="services-item position-relative">
                                <div className="service-icon-box">
                                    <BsBroadcast className="service-icon"/>
                                </div>
                                <h4>Nemo Enim</h4>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Pricing/>

            <Testimonial/>
        </>
    )
}

export default Services;