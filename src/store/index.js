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
            Header:{
              HeaderMenue:null
            },
            Torso:{},
            Heart:{},
            BodyInfo:{},
            BurgerMenu:{}

                      }

   // ==> components Array
          ,ComponentsArray:[]


    // ==> info chamber
    ,InfoOfSellectedDivision:{
      Info:null,
      InfoShow:false,
      IntraInfo:false
                             }


    // ==> Mobile View
    ,MobileView:{
      Mobile:false
    }                         

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
      },
     //======================
     ChangingTheInfo(s,p){
       let IOSD = s.InfoOfSellectedDivision;
      if(!IOSD.Info){
        IOSD.Info=p;
        IOSD.InfoShow=true;
        IOSD.IntraInfo=true;
      }else if(p.Name === IOSD.Info.Name && IOSD.InfoShow === true){
        IOSD.Info=null;
        IOSD.InfoShow=false;
        IOSD.IntraInfo=false;
      }else if(p.Name !== IOSD.Info.Name && IOSD.InfoShow === true){
        IOSD.IntraInfo=false;
        setTimeout(() => {
          IOSD.Info = p;
          IOSD.IntraInfo=true;
        }, 100);
        
      }
     },
     //======================
     ChangeTheMobileView(s,p){
       if(p===true){s.MobileView.Mobile = true; console.log(s.MobileView.Mobile);}
       else if (p===false){s.MobileView.Mobile = false; console.log(s.MobileView.Mobile)};
     }
    
   } 
})

//export store

export default store