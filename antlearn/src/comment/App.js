import React, { PureComponent } from 'react'
import CommentInput from './components/CommentInput'
import CommentItem from './components/CommentItem'
export default class App extends PureComponent {
    constructor(params) {
        super(params)
        this.state = {
            commentList: []
        }

    }

    render() {
        const { commentList } = this.state
        return (
            <div style={{ width: '500px', padding: '20px' }}>
                {
                    commentList.map((e, idx) =>
                        <CommentItem content={e} key={e.id} removeItem={() => this.removeItem(idx)} />
                    )
                }
                <CommentInput submit123={(e) => this.submita(e)} />
            </div>
        )
    }
    submita(e) {
        this.setState({
            commentList: [...this.state.commentList, e]
        })
    }
    removeItem(idx) {
        console.log(idx);
        const newArray = [...this.state.commentList]
        newArray.splice(idx, 1)
        this.setState({
            commentList: newArray
        })
    }
}
