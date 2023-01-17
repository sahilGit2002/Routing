import './Pricing.css';

function Pricing() {

    return(

        <section className="pricing">
            <div className="container">
                <div className="section-header">
                    <h2>Prices</h2>
                    <p>Check my adorable pricing</p>
                </div>
                <div className="row gx-lg-5 gy-4">
                    <div className="col-lg-6">
                        <div className='pricing-single-item d-flex justify-content-between text-white'>
                            <h3>Portrait Photography</h3>
                            <h4>$160.00</h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='pricing-single-item d-flex justify-content-between text-white'>
                            <h3>Fashion Photography</h3>
                            <h4>$300.00</h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='pricing-single-item d-flex justify-content-between text-white'>
                            <h3>Sports Photography</h3>
                            <h4>$200.00</h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='pricing-single-item d-flex justify-content-between text-white'>
                            <h3>Still Life Photography</h3>
                            <h4>$120.00</h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='pricing-single-item d-flex justify-content-between text-white'>
                            <h3>Wedding Photography</h3>
                            <h4>$500.00</h4>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='pricing-single-item d-flex justify-content-between text-white'>
                            <h3>Photojournalism</h3>
                            <h4>$200.00</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;