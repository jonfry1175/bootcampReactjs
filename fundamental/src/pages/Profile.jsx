import React from 'react'
import { useParams } from 'react-router-dom'
import withParams from '../hoc/withParams'

// function component
const Profile = () => {
  const params = useParams()
  return (
    <div className='h-screen flex justify-center items-center'>
      <h1 className='text-3xl font-semibold'>Profile page</h1>
      <p>{params.username}</p>
    </div>
  )
}

export default Profile

// class component pake HOC
// class Profile extends React.Component {
//   render() {
//     return (
//           <div className='h-screen flex justify-center items-center flex-col'>
//             <h1 className='text-3xl font-semibold'>Profile page</h1>
//             <p className='text-2xl font-semibold text-red-700'>{this.props.params.username}</p>
//           </div>
//         )
//   }
// }

// export default withParams(Profile)
