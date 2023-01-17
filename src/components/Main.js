import './Main.css';
import { Image } from 'antd';

function Main() {

    return(
        <>
            {/* <main>
                <section className='gallary'>
                    <div className='container-fluid'>
                        <div className='row gy-4'>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-1.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-1.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-2.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-2.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-3.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-3.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-4.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-4.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-5.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-5.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-6.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-6.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-7.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-7.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-8.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-8.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-9.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-9.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-10.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-10.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-11.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-11.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-12.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-12.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-13.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-13.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-14.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-14.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-15.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-15.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <img src={require('./images/gallery-16.jpg')} alt="" className='img-set'/>
                                    <div className='gallary-links d-flex align-items-center justify-content-center'>
                                        <a href={require('./images/gallery-16.jpg')} className='preview-link'><FaExpandAlt/></a>
                                        <a href="gallery-single.html" className='details-link'><FaLink/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main> */}

            

        <main>
            <section className='gallary'>
                <div className='container-fluid'>
                    <div className='row gy-4'>
                        <Image.PreviewGroup>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100 position-relative'>
                                    <Image  src={require('./images/gallery-1.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-2.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-3.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-4.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-5.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-6.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-7.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-8.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-9.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-10.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-11.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-12.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-13.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-14.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-15.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-md-6'>
                                <div className='gallary-item h-100'>
                                    <Image  src={require('./images/gallery-16.jpg')} className="img-set"/>
                                    
                                </div>
                            </div>
                            
                        </Image.PreviewGroup>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default Main;