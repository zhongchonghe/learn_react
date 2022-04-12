import React, { PureComponent } from 'react'

 class App extends PureComponent {
  render() {
    return (
      <div>App</div>
    )
  }
}

function enhanceComponent(Wrapped){
    return class NewComponent extends PureComponent{
        render(){
            return <Wrapped/>
        }
    }
}

const Enhance = enhanceComponent(App)

export default Enhance;