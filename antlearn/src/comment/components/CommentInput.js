import React, { createRef, PureComponent } from 'react'
import { Input, Button } from 'antd';
import moment from 'moment'
export default class CommentInput extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            content: ""
        }
        this.inputRed = createRef()
    }
    render() {
        const { content } = this.state
        return (
            <div>
                <Input.TextArea value={content} rows={8} onChange={(e) => this.inputChange(e)} />
                <Button type='primary' onClick={() => this.submit()}>添加评论</Button>
            </div>
        )
    }
    inputChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    submit() {
        const { content } = this.state
        const commentInfo = {
            id: moment().valueOf(),
            avator: "https://www.baidu.com/img/flexible/logo/pc/result.png",
            nickName: "zch",
            datetime: moment(),
            content
        }
        this.props.submit123(commentInfo)
        this.setState({
            content: ""
        })
    }
}
