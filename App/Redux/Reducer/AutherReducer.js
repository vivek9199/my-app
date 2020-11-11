import { IMAGES_LIST_SUCCESS, IMAGES_LIST_FALIURE } from './../Types';

const initialState = {
    successstatus: '',
    autherData: null
}



const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {

    case IMAGES_LIST_SUCCESS:
        // console.log("success---->" + JSON.stringify(action.payload))
      return {
        autherData: action.payload,
        successstatus: action.type, 
      };

    case IMAGES_LIST_FALIURE:

      console.log("failure" + JSON.stringify(action.payload))
      return {
        successstatus: action.type
      };

    //............Default................//

    default:
      return state;
  }
}

export default addToCartReducer;
