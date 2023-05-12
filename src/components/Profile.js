import { useSelector } from "react-redux"

const Profile = () => {
    const user= useSelector((state) => state.user.value)
  return (
    <div>
        <h1>Profile Details</h1>
        <p>Name:{user.name}</p>
        <p>Age:{user.age}</p>
        <p>Email id:{user.email}</p>
        <p>Mobile no:{user.mobile}</p>

    </div>
  )
}

export default Profile