import React, { PureComponent } from 'react'
import { Comment, Tooltip, Avatar, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'
export default class CommentItem extends PureComponent {
    render() {
        const { id,
            avator,
            nickName,
            datetime,
            content } = this.props.content


        const actions = [
            <span onClick={() => this.props.removeItem()}><DeleteOutlined />删除</span>
        ]

        return (
            <Comment
                author={<a>{nickName}</a>}
                avatar={<Avatar src={avator} alt="Han Solo" />}
                content={
                    <p>
                        {content}
                    </p>
                }
                datetime={
                    <Tooltip title={datetime.format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{datetime.fromNow()}</span>
                    </Tooltip>
                }
                actions={actions}
            />
        )

    }
}
