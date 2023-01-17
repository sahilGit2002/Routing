import { BsGeoAlt, BsEnvelope, BsPhone } from 'react-icons/bs';
import { SendMessageBtn } from '../components/Hirebtn';
import { ContactIntro } from '../components/Intro';
import './Contact.css';

function Contact() {

    return(

        <>
            <ContactIntro/>

            <section className='contact'>
                <div className='container'>
                    <div className='row justify-content-center gy-4'>
                        <div className='col-lg-3'>
                            <div className='info-item d-flex'>
                                <div className='contact-icon-box'>
                                    <BsGeoAlt className='contact-icon flex-shrink-0'/>
                                </div>
                                <div>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <div className='info-item d-flex'>
                                <div className='contact-icon-box'>
                                    <BsEnvelope className='contact-icon flex-shrink-0'/>
                                </div>
                                <div>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <div className='info-item d-flex'>
                                <div className='contact-icon-box'>
                                    <BsPhone className='contact-icon flex-shrink-0'/>
                                </div>
                                <div>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-center mt-4'>
                        <div className='col-lg-9'>
                            <form action="" className='email-form'>
                                <div className='row'>
                                    <div className='col-md-6 form-group'>
                                        <input type="text" className='form-control' placeholder='Your Name' required/>
                                    </div>
                                    <div className='col-md-6 form-group mt-3 mt-md-0'>
                                        <input type="email" className='form-control' placeholder='Your Email' required/>
                                    </div>
                                </div>

                                <div className='form-group mt-3'>
                                    <input type="text" className='form-control' placeholder='Subject' required/>
                                </div>

                                <div className='form-group mt-3'>
                                    <textarea name="" className='form-control' id="" cols="30" rows="5" placeholder='Message' required></textarea>
                                </div>

                                <SendMessageBtn/>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;