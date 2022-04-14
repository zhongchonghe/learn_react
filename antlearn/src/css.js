import React, { PureComponent } from 'react'

import classNames from 'classnames'
export default class App extends PureComponent {
  render() {
    const active = true;
    return (
      <div>
        <h2 className='foo bar active'>我是标题</h2>
        <h2 className={classNames({ "active": active }, "title")}>我是标题</h2>
        <h2>我是标题</h2>
        <h2>我是标题</h2>
      </div>
    )
  }
}
