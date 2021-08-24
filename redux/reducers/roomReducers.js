import {
       ALL_ROOMS_SUCCESS,
       ALL_ROOMS_FAIL,
       CLEAR_ERRORS
 }  from '../constants/roomConstants'


 //--ALl room reducer
  export const allRoomsReducer = (state={rooms:[]},action)  =>{
      switch(action.type){

    case ALL_ROOMS_SUCCESS :
        return{
            roomsCount :action.payload.roomsCount,
            resPerPage:action.payload.resPerPage,
            filteredRoomsCount:action.payload.filteredRoomsCount,
            rooms: action.payload.rooms

            // roomsCount,
            // resPerPage,
            // filteredRoomsCount,
            // rooms
           
        }
    case ALL_ROOMS_FAIL:
        return{
            error:action.payload
        }
    case CLEAR_ERRORS:
        return{
            ...state,
            error:null
        }
        default:
            return state;

      }
  }