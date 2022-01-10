import React, { useState } from "react";
import '../index.css';

const MyAccordian = ({question,answer}) => {
    const [show,setShow] = useState(false)
    return (
        <>
            <div className="main_heading">
                <p onClick={() => setShow(!show)}>{show ? "-" : "+" }</p><br></br>
                <h3>{question}</h3>
            </div>
            { show ? <p className="answers">{answer}</p> : null}
            
        </>
    )
}

export default MyAccordian;