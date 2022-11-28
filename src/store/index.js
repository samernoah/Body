import { createStore } from "vuex";

const store = createStore({

    //<<..state

   state: {

   // ==> body statistics
            Body:{

                HeartRate: 63,
                BodyPool:[],
                SimulationReady:false
                 }

    // ==> Operations Que
            ,OperationsQue:{value:[]}

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


     // ==> Body DashBoard Active Icon
    ,BodyDashBoardActiveIcon:{
      ActiveIcon:null
                             },
      
      // ==> Body DashBoard Active Icon
      BodyDashBoard:{
        OrganDisplay:{
          ChoosedOrgan:{ OrganName: null, OgranNameToDisplayOnOrgansMenu: null },
        }
      }                       
     // ==> Store Que Interval
     ,StoreQueInterval:false 

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
     SelectActiveIcon(s,p){
       let AIcon = s.BodyDashBoardActiveIcon ;
       console.log(AIcon.ActiveIcon);
       if( AIcon.ActiveIcon !== p ){
        AIcon.ActiveIcon = p ;
        console.log(AIcon.ActiveIcon);
      }else{
        AIcon.ActiveIcon = null ;
      }
      console.log(AIcon.ActiveIcon);

     },
     //======================
     ChangeTheMobileView(s,p){
       if(p===true){s.MobileView.Mobile = true; }
       else if (p===false){s.MobileView.Mobile = false;};
     },
     //======================
     OperationsQuePush(s,p){
       s.OperationsQue.value.unshift(p) ;
         },  
     //======================
     OperationsQuepop(s,p){
      s.OperationsQue.value.pop() ;
     },
     //======================
     ChangeTheChoosedOrgan(s,p){
       s.BodyDashBoard.OrganDisplay.ChoosedOrgan.OrganName = p.OrganName ;
       s.BodyDashBoard.OrganDisplay.ChoosedOrgan.OgranNameToDisplayOnOrgansMenu = p.OgranNameToDisplayOnOrgansMenu ;

     },
     //======================
     PopulateTheBodyPool(s,p){
        s.Body.BodyPool=[] ;

         for(let val in p ){
          s.Body.BodyPool.push(p[val])
         }
        
     },
     //======================
     DePopulateTheBodyPool(s,p){
      s.Body.BodyPool=[] ;
     
   },
    //======================
    MakeSimulationStateTrue(s,p){
      s.Body.SimulationReady = true;
     
   },
    //======================
    MakeSimulationStatefalse(s,p){
      s.Body.SimulationReady = false;
     
   },
     //======================
     BodyPoolValuesDisplayStateChange(s,p){
      
        // s.Body.BodyPool[p].ChosenForDisplay = !s.Body.BodyPool[p].ChosenForDisplay ;
        console.log(s.Body.BodyPool[p].ChosenForDisplay);

     }
    
   }, 
  })

//export store

export default store