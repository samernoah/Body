import {BodyComposetion} from "../../../MainMethods/PrePareTheBodyMethods/PrePareTheBody";
import Quer from "@/BodySimulation/MainMethods/Quer";

const Pancreas = () => {
    console.log("Pancreas Method used");
    if(BodyComposetion.BP.Glucose.Value > 100){
        BodyComposetion.BP.Insuline.Value += 5 ;
        Quer(BodyComposetion.BP.Insuline);
        BodyComposetion.BP.Glucose.Value -= 5 ;
        Quer(BodyComposetion.BP.Glucose);
       
    }
    if(BodyComposetion.BP.Glucose.Value === 100){
        BodyComposetion.BP.Glucagon.Value += 5
        Quer(BodyComposetion.BP.Glucagon);
        BodyComposetion.BP.Glucose.Value += 5 ;
        Quer(BodyComposetion.BP.Glucose);
        
    }


}

export default Pancreas ;