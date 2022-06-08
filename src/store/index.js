import { createStore } from "vuex";

const store = createStore({

    //<<..state

   state: {

   // ==> body statistics
            Body:{

                HeartRate: 63

                 }

   // ==> components
          ,Components:{

            Torso:{},
            Heart:{},
            BodyInfo:{}

                      }

   // ==> components Array
          ,ComponentsArray:[]

    //..>>end of state              
          }



   //mutations
   ,mutations:{

      Updateheartrate(s,p){
          s.Body.HeartRate = s.Body.HeartRate + p
          console.log(s.Body.HeartRate);
          s.Components.Heart.component.style.setProperty('animation' , `heartb ${60/s.Body.HeartRate}s ease-in-out 0s infinite reverse`);
      },
     //======================
      ChangeExpandingState(s,p){
          if(p[0]==='true'){s.Components[`${p[1]}`].expanded=true;}
          else if(p[0]==='false'){s.Components[`${p[1]}`].expanded=false;}
      },
     //======================
      KeepExpandingStateTrue(s,p){
        console.log('hello');
        s.Components[`${p}`].expanded=true;
      },
     //======================
      ManegingTheComponentsArray(s,p){
        if(p[0]==='Add'){s.ComponentsArray.push(p[1])}
        else if(p[0]==='Remove'){s.ComponentsArray.pop(p[1])}
      }
   } 
})

//export store

export default store