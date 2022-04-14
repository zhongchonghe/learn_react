import React, { PureComponent } from 'react'
import { HomeWrapper, HomeSpan } from "./style";
export default class Home extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            colors: "purple"
        }
    }
    render() {
        return (
            <HomeWrapper>
                <h2>我是Home标题</h2>
                <div>
                    <HomeSpan color={this.state.colors}>轮播图</HomeSpan>
                    <span className='lun'>轮播图</span>
                    <span className='lun'>轮播图</span>
                </div>
            </HomeWrapper>
        )
    }
}   
