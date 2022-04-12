import React, { Component } from 'react'


// 第一步:创建Context对象 
const UserContext = React.createContext({
  nickname: "aaa",
  level: -1
})

function ProfileHeader() {

  return (
    <UserContext.Consumer>
      {
        value => {
          return (
            <div>
              <h2>用户昵称:{value.nickname}</h2>
              <h2>用户等级:{value.level}</h2>
            </div>
          )
        }
      }
    </UserContext.Consumer>
  )
}


// class ProfileHeader extends Component {

//   render() {
//     const { nickname, level } = this.context
//     console.log(this.context);
//     return (
//       <div>
//         <h2>用户昵称:{nickname}</h2>
//         <h2>用户等级:{level}</h2>
//       </div>
//     )
//   }
// }
// 第三步
// ProfileHeader.contextType = UserContext



function Profile() {

  return (
    <div>
      <ProfileHeader />
    </div>
  )
}


export default class context extends Component {

  constructor() {
    super()
    this.state = {
      nickname: '张三',
      level: 3
    }

  }

  render() {
    return (
      <div>
        {/* 第二步 */}
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    )
  }
}
