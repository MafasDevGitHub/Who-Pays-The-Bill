import { useContext } from "react";
import { MyContext } from "../context";
import context from "react-bootstrap/esm/AccordionContext";

const StageTwo = () => {

    const context = useContext(MyContext);

    return(
        <>
           <div className="result_wrapper">
                <h3>The Looser is :  </h3>
                {context.result}
           </div>

           <div>
                <button className="action_button" onClick={()=> context.resetGame()}>
                    START OVER
                </button>
           </div>

           <div>
                <button className="action_button btn_2" onClick={()=> context.getNewLooser()}>
                    GET NEW LOOSER
                </button>
           </div>
        </>
    )
}

export default StageTwo;