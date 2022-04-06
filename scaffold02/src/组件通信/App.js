import React, { Component } from 'react'
import TabControl from './TabControl'
export default class App extends Component {

  constructor() {
    super()
    this.titles = ['新款', '精选', '流行']
    this.state = {
      index: 0
    }
  }

  render() {
    const { index } = this.state
    return (
      <div>
        <TabControl itemClick={(index) => this.itemClick(index)} titles={this.titles} />
        <div>{this.titles[index]}</div>
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      index: index
    })
    console.log(index);
  }


}
