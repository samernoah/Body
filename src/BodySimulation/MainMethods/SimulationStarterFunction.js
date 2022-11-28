import MainBodyTraverseFunction from "./MainTraverseCode/MainTraverseFumction";
import OperationQue from "./Que";
import store from "@/store";
import { BodyComposetion } from "../MainMethods/PrePareTheBodyMethods/PrePareTheBody"


let SimulationActive = false ;
const SimulationStarterFunction = (MainIntervalTimer) => {

        

        

            if(!SimulationActive){

                SimulationActive = true ;

                // store.commit("PopulateTheBodyPool", BodyPool) ;

                //Main Simulation Interval 
                window.Intervals.SimulationInterval = setInterval(() => {

                    MainBodyTraverseFunction()
                    store.commit("PopulateTheBodyPool", BodyComposetion.BP)
                    console.log("1 operation performed")
                   
                }, MainIntervalTimer * 1000 );


                //Que Interval
                window.Intervals.QueInterval = setInterval(() => {

                if(OperationQue.length > 0 ) {

                    let operation = OperationQue.pop() ;
                    store.commit("OperationsQuePush", operation );

                } 

                }, 3000);


                //Store Que Interval
                setTimeout(() => {
                    window.Intervals.StoreQueInterval = setInterval(() => {

                        store.commit("OperationsQuepop")
    
                    }, 3000);
                }, 1000);
               
                console.log("should be true", SimulationActive);
            }
            else{
                clearInterval(window.Intervals.SimulationInterval);
                clearInterval(window.Intervals.QueInterval);
                clearInterval(window.Intervals.StoreQueInterval);
                SimulationActive = false ;
                console.log("should be false", SimulationActive);

            }

        }




export default SimulationStarterFunction