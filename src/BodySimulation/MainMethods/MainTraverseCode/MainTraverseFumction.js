import MainBodyGraph from "./MainBodyGraph";

const MainBodyTraverseFunction = () => {

    for (const bodyPart in MainBodyGraph) {
       (MainBodyGraph[bodyPart])()
    }
    

}

export default MainBodyTraverseFunction ;

