import axios from 'axios'
//const instance = axios.create();
import absoluteUrl from 'next-absolute-url'
import {
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,
    CLEAR_ERRORS
}  from '../constants/roomConstants'

//getAllRooms
export const getRooms = (req) => async(dispatch) =>{
    try {
        const {origin}  = absoluteUrl(req) 
      // console.log(`${origin}/api/rooms -- is the absalute url`)
     
      const {data} =  await axios.get(`${origin}/api/rooms`)
      console.log(data)
      dispatch({
          type:ALL_ROOMS_SUCCESS,
          payload:data
      })

    } catch (error) {
        console.log(error.message)
        console.log(error.response.data);
        console.log('From Excemption')
        dispatch({
            type:ALL_ROOMS_FAIL,
            payload:error.response.data.message
           
        })
    }
}


//Clear errors

export const clearErrors = () => async(dispath) =>{
    dispatch({
        type:CLEAR_ERRORS
    })
}

