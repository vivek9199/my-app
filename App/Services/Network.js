import NetInfo from "@react-native-community/netinfo";
import axios from 'axios'
import Toast from 'react-native-root-toast';
export const base_url = 'https://picsum.photos/list'

export default Network = (method) => {
    return new Promise((resolve, reject) => {
        NetInfo.fetch().then(state => {
            if (state.isConnected) {
        axios({
          method,
          url: `${base_url}`
        //   data: body  //..if Method is post then Body
        })
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
        //   console.log("error========>", error);
          Toast.show('Something went wrong. Please try again !')
          reject(error)
        });
      } else {
                reject('No connection')
                Toast.show('Please check your internet connection !', {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.BOTTOM
                })
            }
        });
    })
}
