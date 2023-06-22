import { useEffect } from "react";
import ReactDOM from "react-dom";


const Portal = (props) => {

    const modal = document.querySelector("#modal");

    useEffect(() => {
        document.body.style.overflow = "hidden";
         return () => {
           document.body.style.overflow = "visible";
         };
    },[])


    return ReactDOM.createPortal (
        props.children, modal
    )
}

export {Portal} 