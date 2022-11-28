import BodyPool from "@/BodySimulation/BodySections/BodyPool/BodyPool"
import store from "@/store"

let BodyComposetionReady = false ;

const BodyComposetionBackUp = {
    BP:{}
} ;

export let BodyComposetion = {
    BP:{}
} ;

export const PrePareTheBody = () => {

    if(BodyComposetionReady === false){

        BodyComposetionReady =true ;
        BodyComposetion.BP = JSON.parse(JSON.stringify(BodyPool)) ;
        store.commit("PopulateTheBodyPool", BodyComposetion.BP)
        store.commit("MakeSimulationStateTrue");
        console.log(store.state.Body.SimulationReady);
     

    }else{

        BodyComposetion = {} ;
        
        Object.assign(BodyComposetion,BodyComposetionBackUp);
        store.commit("DePopulateTheBodyPool");
        store.commit("MakeSimulationStatefalse");
        BodyComposetionReady = false ;
        console.log(store.state.Body.SimulationReady);

    }

}

export default { PrePareTheBody, BodyComposetion }  ;