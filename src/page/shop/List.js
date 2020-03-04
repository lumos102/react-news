import React from 'react'
import '../../css/shop.css'
import ListItem from './ListItem'
import { connect } from 'react-redux'
// import { shopCar } from '../../store/reducers/car'
import { fetchData } from '../../store/actions/car'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.dispatch(fetchData())
  }

  calculatePrice () {
    let totalPrice = 0
    let n = 0
    while (n < this.props.shopCar.length) {
      totalPrice = totalPrice + this.props.shopCar[n].num * this.props.shopCar[n].price
      n += 1
    }
    return totalPrice
  }

  render () {
    return (
      <div className="shop-cart-page">
        <div className="shop-header">
          {/* 您当前选中{}件商品 */}
          您当前选中{}件商品，购物需谨慎嗷！
        </div>
        <div className="shop-cart-container">
          { this.props.shopCar.map((item) => (
            <ListItem currentItem={item} key={item.id}></ListItem>
          )) }
        </div>
        <div className="shop-footer">
          <div className="shop-footer-content">
            <span>合计:</span>
            <span className="shop-footer-price">￥{this.calculatePrice()}</span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shopCar: state.shopCar
  }
}

export default connect(mapStateToProps)(List)