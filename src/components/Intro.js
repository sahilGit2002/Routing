import Hirebtn from './Hirebtn';
import './Intro.css';

function Intro() {
    return(

        <>
            <section className='hero d-flex justify-content-center align-items-center'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6 text-center text-box'>
                            <h2>I'm <span> Jenny Wilson</span> a Professional Photographer from New York City</h2>
                            <p>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
                            <Hirebtn/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export function AboutIntro() {

    return(
        <>
            <main>
                <div className='page-header d-flex align-items-center'>
                    <div className='container'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-lg-6 text-center'>
                                <h2>About</h2>
                                <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                                <Hirebtn/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


export function ServicesIntro() {

    return(

        <main>
            <div className='page-header d-flex align-items-center'>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-lg-6 text-center'>
                            <h2>Services</h2>
                            <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                            <Hirebtn/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export function ContactIntro() {

    return(

        <main>
            <div className='page-header d-flex align-items-center'>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-lg-6 text-center'>
                            <h2>Contact</h2>
                            <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Intro;