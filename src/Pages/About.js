import { AboutIntro } from "../components/Intro";
import './About.css';
import { BiChevronRight } from "react-icons/bi"
import Testimonial from  "../components/Testimonial";

function About() {

    return(

        <>
            <div>
                <AboutIntro/>

                <section className="about">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <img src={require('../components/images/profile-img.jpg')} alt="" />
                            </div>
                            <div className="col-lg-7 content">
                                <h2>Professional Photographer from New York</h2>
                                <p className="fst-italic py-3 text-white"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul className="p-0">
                                            <li>
                                                <BiChevronRight className="right-arrow"/>
                                                <strong className="text-white">Birthday :</strong>
                                                <span className="p-0 text-white">1 May 1995</span>
                                            </li>
                                            <li>
                                                <BiChevronRight className="right-arrow"/>
                                                <strong className="text-white">Website :</strong>
                                                <span className="p-0 text-white">www.example.com</span>
                                            </li>
                                            <li>
                                                <BiChevronRight className="right-arrow"/>
                                                <strong className="text-white">Phone :</strong>
                                                <span className="p-0 text-white">+123 456 7890</span>
                                            </li>
                                            <li>
                                                <BiChevronRight className="right-arrow"/>
                                                <strong className="text-white">City :</strong>
                                                <span className="p-0 text-white">New York, USA</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="p-0">
                                            <li>
                                                <BiChevronRight className="right-arrow"/>
                                                <strong className="text-white">Age :</strong>
                                                <span className="p-0 text-white">30</span>
                                            </li>
                                            <li>
                                                <BiChevronRight className="right-arrow"/>
                                                <strong className="text-white">Degree :</strong>
                                                <span className="p-0 text-white">Master</span>
                                            </li>
                                            <li>
                                                <BiChevronRight className="right-arrow"/>
                                                <strong className="text-white">Email :</strong>
                                                <span className="p-0 text-white">email@example.com</span>
                                            </li>
                                            <li>
                                                <BiChevronRight className="right-arrow"/>
                                                <strong className="text-white">Freelance :</strong>
                                                <span className="p-0 text-white">Available</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="py-3 text-white">
                                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                                </p>
                                <p className="m-0 text-white">
                                    Recusandae est praesentium consequatur eos voluptatem. Vitae dolores aliquam itaque odio nihil. Neque ut neque ut quae voluptas. Maxime corporis aut ut ipsum consequatur. Repudiandae sunt sequi minus qui et. Doloribus molestiae officiis. Soluta eligendi fugiat omnis enim. Numquam alias sint possimus eveniet ad. Ratione in earum eum magni totam.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                
 
                <Testimonial/>
            </div>

        </>
    )
}

export default About;