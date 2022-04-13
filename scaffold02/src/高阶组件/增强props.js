import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    render() {
        return (
            <div>App
                <EnhanceHome nickName="codeWhy" level={90} />
                <EnhanceAbout nickName="codeWhy" level={90} />
            </div>
        )
    }
}

class Home extends PureComponent {
    render() {
        return (
            <h2>Home
                {`昵称 ${this.props.nickName} 等级${this.props.level} 区域${this.props.region}`}
            </h2>
        )
    }
}

class About extends PureComponent {
    render() {
        return (
            <h2>Home
                {`昵称 ${this.props.nickName} 等级${this.props.level} 区域${this.props.region}`}
            </h2>
        )
    }
}

// 定义高级组件 增减props
function enhanceRegion(Wrap) {
    return p => {
        return <Wrap {...p} region="中国" />
    }
}
const EnhanceHome = enhanceRegion(Home)
const EnhanceAbout = enhanceRegion(About)