export default (state = [], action) => {
  let newState
  let i
  switch (action.type) {
    case 'ADD_QUOTE':
      newState = state
      newState.push(action.quote)
      return newState
    case 'REMOVE_QUOTE':
      newState = state.filter(quote => quote.id != action.quoteId)
      return newState
    case 'UPVOTE_QUOTE':
      // I know this is Janky code... give me a break I don't feel like stack overflowing "How to find obj in array JS right now."
      state.forEach((quote, index) => {
        if (quote.id === action.quoteId){
          i = index
        }
      })
      newState = state
      newState[i].votes++
      return newState
    case 'DOWNVOTE_QUOTE':
      state.forEach((quote, index) => {
        if (quote.id === action.quoteId){
          i = index
        }
      })
      newState = state
      if (newState[i].votes > 1){
        newState[i].votes-= 1
      }
      return newState
    default:
      return state
  }
}
