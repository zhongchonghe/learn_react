import React, { Fragment, PureComponent } from 'react'





function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    constructor() {
      super()
      this.state = {
        beginTime: "",
        endTime: ""
      }
    }
    UNSAFE_componentWillMount() {
      this.state.beginTime = Date.now()
    }

    componentDidMount() {
      this.state.endTime = Date.now()
      const interval = this.state.endTime - this.state.beginTime
      console.log(interval);
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}



class Home extends PureComponent {
  render() {
    return (
    <Fragment>
    <h2>123</h2>
      <button>123</button>
      </Fragment>
      )
  }
}

const HomePage = withRenderTime(Home)
export default class App extends PureComponent {
  render() {
    return (
      <HomePage />
    )
  }
}
