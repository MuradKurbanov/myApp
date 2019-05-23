export const MARKER_LIST_SUCCESS = 'markerList/MARKER_LIST_SUCCESS';
export const MARKER_LIST = 'markerList/MARKER_LIST';

const initialState = ['text1', 'text2', 'text3'];

export const MarkerList = (state = initialState, action) => {
  // if (action.type) {
  //   return [
  //     ...state,
  //     action.payload
  //   ]
  // }
  return state
}


// export const tradeHistory = (userData) => {
//   return {
//     type: TRADE_HISTORY,
//     payload: {
//       request: {
//         method: 'POST',
//         url: '/api/user/tradeshistory',
//         data: userData,
//         headers: {
//           Authorization: LocalStorage.getItem('token')
//         }
//       }
//     }
//   };
// }
//
// export const orderBook = (data) => {
//   return {
//     type: ORDER_BOOK,
//     payload: {
//       request: {
//         method: 'POST',
//         url: '/api/user/orderbook',
//         data: data,
//         headers: {
//           Authorization: LocalStorage.getItem('token')
//         }
//       }
//     }
//   }
// }
//
// export const marketData = () => {
//   return {
//     type: MARKET_DATA,
//     payload: {
//       request: {
//         url: '/api/user/marketdata',
//         method: 'POST',
//         data: {
//           "eventTime": {
//             "gte": 1530014465507,
//             "lt": 1530111628510
//           },
//           "symbol": "ETHBTC",
//           "nameStock": "binance"
//         },
//         headers: {
//           Authorization: LocalStorage.getItem('token')
//         }
//       }
//     }
//   }
// }
