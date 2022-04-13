import React, { createContext, PureComponent } from 'react'

// 创建context
const UserContext = createContext({
    nickName: "默认",
    level: 1,
    region: "中国"
})
export default class App extends PureComponent {
    render() {
        return (
            <div>App
                <UserContext.Provider value={{ nickName: "张三", level: 18, region: "中国" }}>
                    <UserHome />
                    <UserAbout />
                </UserContext.Provider>
            </div>
        )
    }
}

{/* {`昵称 ${this.props.nickName} 等级${this.props.level} 区域${this.props.region}`} */ }
class Home extends PureComponent {
    render() {
        return (
            // <UserContext.Consumer>
            //     {
            //         user => {
            //             return <h2>{`昵称 ${user.nickName} 等级${user.level} 区域${user.region}`}</h2>
            //         }
            //     }
            // </UserContext.Consumer>
            <h2>
                {`昵称 ${this.props.nickName} 等级${this.props.level} 区域${this.props.region}`}
            </h2>
        )
    }
}

class About extends PureComponent {
    render() {
        return (
            <h2>
                {`昵称 ${this.props.nickName} 等级${this.props.level} 区域${this.props.region}`}
            </h2>
        )
    }
}

// 高阶组件
function withUser(wrapComponent) {
    return p => {
        return (
            <UserContext.Consumer>
                {
                    user => {
                        return <wrapComponent {...p} {...user} />
                    }
                }
            </UserContext.Consumer>
        )
    }
}

const UserHome = withUser(Home)
const UserAbout = withUser(About)