function car (state = [], { type, payload }) {
  switch(type) {
    case 'init':
      return [...payload]
    case 'update':
      let newState = state.map(e => {
        if (e.id === payload.id) {
          let obj = {
            ...e,
            ...payload
          }
          return obj
        } else {
          return e
        }
      })
      return [...newState]
    default:
      return state
  }
}

export default car