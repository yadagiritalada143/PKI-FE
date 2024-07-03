import React from 'react'

const Profile = () => {
  return (
    <div className='w-100 d-flex flex-column align-items-center justify-content-evenly'>
        <h2>Profile</h2>
        <div className="detils my-2">
            <p>First Name : test </p>
            <p>Last Name : data</p>
            <p>UserName  : testdata </p>
            <p>Email : test@email.com</p>
            <p>Phone No : 123456789</p>
        </div>
    </div>
  )
}

export default Profile