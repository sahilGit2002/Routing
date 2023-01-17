import "./Hirebtn.css";
import { Link } from "react-router-dom";

function Hirebtn() {

    return(

        <>
            <div>
                <Link to="/Contact" className="btn-get-start">Available for hire</Link>
            </div>
        </>
    )
}

export function SendMessageBtn() {

    return(

        <div className="text-center send-btn mt-4">
            <button type="submit">Send Message</button>
        </div>
    )
}

export default Hirebtn;