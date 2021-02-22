import React, { useState, useEffect } from 'react';
import  {update}  from './js/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

function ProfileScreen() {
const User = useSelector((state) =>state.authReducer.user)
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();


  

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: User._id, email, name, lastName, password }))
  }

  useEffect(() => {
    if (User) {
      setEmail(User.email);
      setName(User.name);
      setLastName(User.lastName);
      setPassword(User.password);
    }
    return () => {

    };
  }, [User])
  return <div className="profile">

  <div className="profile-info">
  <p> {User ? `Welcome ${User.name}`:(<p>zddzad</p>)}</p>
    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>User Profile</h2>
          </li>
          
          <li>
            <label htmlFor="name">
              Name
        </label>
            <input value={name} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="name">
              Last Name
        </label>
            <input value={lastName} type="name" name="name" id="name" onChange={(e) => setLastName(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="email">
              Email
        </label>
            <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input value={password} type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
            </input>
          </li>

          <li>
            <button type="submit" className="button primary">Update</button>
          </li>

        </ul>
      </form>
    </div>
  </div>
  </div>

}

export default ProfileScreen;
