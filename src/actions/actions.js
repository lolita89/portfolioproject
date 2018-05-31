import * as request from 'superagent'

//store has a function called dispatch to send the action 
//#11 USING REDUX => store.dispatch to send the action in order to change the state inside 
//ACTIONS
export const KALI = 'KALI'
export const TAMBAH = 'TAMBAH'
export const KURANG = 'KURANG'

//ACTION CREATORS
export const kali = () => ({
    type: KALI,
  });

  export const tambah = () => ({
    type: TAMBAH,
  });

  export const kurang = () => ({
    type: KURANG,
  });


// store.dispatch({type: "KALI"})
// store.dispatch({type: "TAMBAH"})
// store.dispatch({type: "KURANG"})