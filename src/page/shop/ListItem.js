import React from 'react'
import '../../css/shop.css'
import { connect } from 'react-redux'
import { updateData } from '../../store/actions/car'

class ListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      select: false
    }
  }

  reduceOne (id, num) {
    num--
    this.props.dispatch(updateData({
      id,
      num
    }))
  }

  addOne (id, num) {
    num++
    this.props.dispatch(updateData({
      id,
      num
    }))
  }

  render () {
    return (
      <div className="shop-item-detail">
        {/* <input
          type="checkbox"
          value={this.state.select}
          className="shop-checkbox"
        /> */}
        <div className="shop-item-img">
          <img src={this.props.currentItem.url} alt={this.props.currentItem.name} />
        </div>
        <div className="shop-item-wrap">
          <span className="shop-item-name">{this.props.currentItem.text}</span>
          <div className="shop-item-price">
            <div className="shop-item-money">￥{this.props.currentItem.price}</div>
            <div className="shop-item-btn-group">
              <button onClick={this.reduceOne.bind(this,this.props.currentItem.id,this.props.currentItem.num)}>-</button>
              <button>{this.props.currentItem.num}</button>
              <button onClick={this.addOne.bind(this,this.props.currentItem.id,this.props.currentItem.num)}>+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    shopCar: state.shopCar
  }
}

export default connect(mapStateToProps)(ListItem)