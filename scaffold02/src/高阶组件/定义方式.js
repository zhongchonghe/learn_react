import React, { PureComponent } from 'react'

class App extends PureComponent {
  render() {
    return (
      <div>{this.props.name}</div>
    )
  }
}

function enhanceComponent(Wrapped) {
  return class NewComponent extends PureComponent {
    render() {
      return <Wrapped {...this.props} />
    }
  }
}

const Enhance = enhanceComponent(App)

export default Enhance;