// export const initialState = {
//   pages: []
// }

export default function reducer (pages = [], action) {
  switch(action.type) {
    case 'ADD_PAGE':
      return pages.concat(action.page)
    case 'FETCH_PAGES':
      return action.pages
    default: return pages
  }
}
// export default function reducer (state = initialState, action) {
//   switch(action.type) {
//     case 'ADD_PAGE':
//       return state.pages.concat(action.page)
//     case 'FETCH_PAGES':
//       return action.pages
    // case 'ADD_PAGE': {
    //   const newState = {
    //     pages: state.pages.concat(action.page)
    //   }
    //   return newState
    // }
    // case 'FETCH_PAGES': {
    //   const newState = {
    //     pages: action.pages
    //   }
    //   return newState
    // }
//     default: return state
//   }
// }
