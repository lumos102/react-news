function shopCar (state = [], { type, payload }) {
  switch(type) {
    case 'FETCH_PRODUCT':
      return [...payload]
    case 'UPDATE':
      let newState = state.map(item => {
        if (item.id === payload.id) {
          let obj = {
            ...item,
            ...payload
          }
          return obj
        } else {
          return item
        }
      })
      return [...newState]
    default:
      return state
  }
}

export default shopCar