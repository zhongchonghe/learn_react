import React, { PureComponent } from 'react'




class LoginPage extends PureComponent {
    render() {
        return <h2>登录</h2>
    }
}

function withAuth(WapComponent) {
    return p => {
        const { isLogin } = p
        if (isLogin) {
           return <WapComponent {...p} />
        } else {
           return <LoginPage />
        }
    }
}

// 购物车组件
class CartPage extends PureComponent {
    render() {
        return (
            <h1>123</h1>
        )
    }
}

const AuthCartPage = withAuth(CartPage)


export default class App extends PureComponent {
    render() {
        return (
            <AuthCartPage isLogin={false} />
        )
    }
}
