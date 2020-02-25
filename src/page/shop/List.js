import React from 'react'
import '../../css/shop.css'
import ListItem from './ListItem'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lists: []
    }
  }
  componentDidMount () {
    const lists = [
      {
        id: '1',
        url: require('./img/item1.jpg'),
        name: '桂格燕麦片111',
        text: '桂格燕麦片111',
        price: 60,
        num: 1
      },
      {
        id: '2',
        url: require('./img/item1.jpg'),
        name: '桂格燕麦片222',
        text: '桂格燕麦片222',
        price: 100,
        num: 1
      }
    ]
    this.setState({lists: lists})
  }
  render () {
    return (
      <div className="shop-cart-page">
        <div className="shop-header">
          {/* 您当前选中{}件商品 */}
          您当前选中{}件商品，购物需谨慎嗷！
        </div>
        <div className="shop-cart-list">
          { this.state.lists.map((item) => (
            <ListItem {...item}></ListItem>
          )) }
        </div>
        <div className="shop-footer">
          <div className="shop-footer-content">
            <span>合计:</span>
            <span class="shop-footer-price">￥{}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default List