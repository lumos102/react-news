import React from 'react'
import '../../css/flex.css'

class Flex extends React.Component {
  render () {
    return (
      <div>
        {/* 单项目 */}
        {/* 上方 居左 */}
        <div className="box box1">
          <span className="item">^-^</span>
        </div>
        {/* 上方 水平居中 */}
        <div className="box box2">
          <span className="item">^-^</span>
        </div>
        {/* 上方 居右 */}
        <div className="box box3">
          <span className="item">^-^</span>
        </div>
        {/* 左方 垂直居中 */}
        <div className="box box4">
          <span className="item">^-^</span>
        </div>
        {/* 垂直居中+水平居中 */}
        <div className="box box5">
          <span className="item">^-^</span>
        </div>
        {/* 下方 水平居中 */}
        <div className="box box6">
          <span className="item">^-^</span>
        </div>
        {/* 下方 居右 */}
        <div className="box box7">
          <span className="item">^-^</span>
        </div>
        {/* 双项目  项目间水平等宽*/}
        <div className="box box8">
          <span className="item">^-^</span>
          <span className="item">^-^</span>
        </div>
        {/* 双项目  项目间垂直居左等宽*/}
        <div className="box box9">
          <span className="item">^-^</span>
          <span className="item">^-^</span>
        </div>
        {/* 双项目  项目间垂直居中等宽*/}
        <div className="box box10">
          <span className="item">^-^</span>
          <span className="item">^-^</span>
        </div>
        {/* 双项目  项目间垂直居右等宽*/}
        <div className="box box11">
          <span className="item">^-^</span>
          <span className="item">^-^</span>
        </div>
        {/* 双项目  横向 一居左 一居中*/}
        <div className="box box12">
          <span className="item">^-^</span>
          <span className="item">^-^</span>
        </div>
        {/* 双项目  横向 一居左上 一居右下*/}
        <div className="box box13">
          <span className="item">^-^</span>
          <span className="item">^-^</span>
        </div>
        {/* 三项目  横向 一居左上 一居中 一居右下*/}
        <div className="box box14">
          <span className="item">^-^</span>
          <span className="item">^-^</span>
          <span className="item">^-^</span>
        </div>
        {/* 四项目*/}
        <div className="box box15">
          <span className="item">^-^</span>
          <span className="item">^-^</span>
          <span className="item">^-^</span>
          <span className="item">^-^</span>
        </div>
        {/* 四项目*/}
        <div className="box box16">
          <div className="column">
            <span className="item">^-^</span>
            <span className="item">^-^</span>
          </div>
          <div className="column">
            <span className="item">^-^</span>
            <span className="item">^-^</span>
          </div>
        </div>
        {/* 六项目*/}
        <div className="box box17">
          <span className="item">^-^</span>
          <span className="item">^-^</span>
          <span className="item">^-^</span>
          <span className="item">^-^</span>
          <span className="item">^-^</span>
          <span className="item">^-^</span>
        </div>
        {/* 六项目*/}
        <div className="box box18">
          <span className="item">^-^</span>
          <span className="item">^-^</span>
          <span className="item">^-^</span>
          <span className="item">^-^</span>
          <span className="item">^-^</span>
          <span className="item">^-^</span>
        </div>
        {/* 基本布局 */}
        <div className="box grid">
          <div className="grid-cell">1/3</div>
          <div className="grid-cell">1/3</div>
          <div className="grid-cell">1/3</div>
        </div>
        {/* 百分比布局 */}
        <div className="box grid">
          <div className="grid-cell u-grid">测试</div>
          <div className="grid-cell">测试</div>
          <div className="grid-cell">测试</div>
        </div>
        {/* 圣杯布局 */}
        <div className="box web-container">
          <header className="web-header border">header</header>
          <div className="web-body">
            <div className="web-content border">content</div>
            <nav className="web-nav border">left</nav>
            <aside className="web-aside border">right</aside>
          </div>
          <footer className="web-footer border">footer</footer>
        </div>
        {/*  */}
      </div>
    )
  }
}

export default Flex