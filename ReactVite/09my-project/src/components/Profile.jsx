import React ,{ useContext} from 'react';
import UserContext from '../UserContext/UserContext';

const Profile = () => {
    const { user } = useContext(UserContext)
  if (!user) return <div> please login</div>
  return <div> 
    <h3>welcome { user.username }</h3>
    <h3>{user.userPwd}</h3>
    </div>
  
}

export default Profile