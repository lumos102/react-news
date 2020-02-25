import React from 'react'
import '../../css/shop.css'

class ListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      select: false
    }
  }
  render () {
    return (
      <div className="shop-item-detail">
        <input
          type="checkbox"
          value={this.state.select}
          className="shop-checkbox"
        />
        <div className="shop-item-img">
          <img src={this.props.url} alt={this.props.name} />
        </div>
        <div className="shop-item-wrap">
          <span className="shop-item-name">{this.props.text}</span>
          <div className="shop-item-price">
            <div className="shop-item-money">￥{this.props.price}</div>
            <div className="shop-item-btn-group">
              <button>-</button>
              <button>{this.props.num}</button>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListItem