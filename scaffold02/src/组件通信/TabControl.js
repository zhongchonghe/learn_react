import React, { Component } from 'react'
import './style.css'
export class TabControl extends Component {
  constructor() {
    super()

    this.state = {
      currentIndex: 0
    }

  }
  render() {

    const titles = this.props.titles
    const { currentIndex } = this.state
    return (
      <div className='tab-control'>
        {titles.map((item, index) => {
          return (
            <div onClick={() => this.clickTab(index)} key={index} className={currentIndex == index ? 'active-color' : ''} >{item}</div>
          )
        })}
      </div>
    )
  }

  clickTab(index) {
    console.log(this);
    this.setState({
      currentIndex: index
    })
    const { itemClick } = this.props
    itemClick(index)
  }
}

export default TabControl