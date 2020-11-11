import {
    IMAGES_LIST_REQUEST, IMAGES_LIST_SUCCESS, IMAGES_LIST_FALIURE
} from './Types';
import Network from './../Services/Network'
import Toast from 'react-native-root-toast';



export function ImagesListsRequest() {   //....Request............
    return {
        type: IMAGES_LIST_REQUEST
    };
}

export function ImagesListsSuccess(response) {   //.....Success.......
    console.log('response--->', response);
    return {
        type: IMAGES_LIST_SUCCESS,
        payload: response
    };
}

export function ImagesListsFailure(error) {    //...for Failure.....
    return {
        type: IMAGES_LIST_FALIURE,
        payload: error
    };
}

//.......for Auther Api................//

export function AuthorListApiCalling() {

    return async (dispatch) => {
        dispatch(ImagesListsRequest());

        Network()
            .then(async (res) => {
                // console.log("res--->", res);
                dispatch(ImagesListsSuccess(res))
            })
            .catch((error) => {
                Toast.show('error');
            });
    };
}
