import { productList } from '../../local/local'

export const updateData = (currentProduct) => dispatch => {
  dispatch({ type: 'UPDATE', payload: currentProduct })
}

export const fetchData = () => dispatch => {
  let listData = productList
  listData = listData.map(item => {
    item.isCheck = false
    return item
  })
  dispatch({
    type: 'FETCH_PRODUCT',
    payload: listData
  })
}