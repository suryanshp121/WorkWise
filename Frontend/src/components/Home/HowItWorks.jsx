import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';

const HowItWorks = () => {
  return (
    <div className='howitworks'>
      <div className="container">
        <h3>How WorkWise Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus/>
            <p>Create Account</p>
            <p>The "Create Account" functionality of the WorkWise web app facilitates the seamless registration process for users, allowing them to create personalized accounts to access the platform's features and services.</p>
          </div>
          <div className="card">
            <MdFindInPage/>
            <p>Find a Job/Post a Job</p>
            <p>The "Get/Post a Job" functionality of the WorkWise web app enables both job seekers and employers to interact seamlessly, facilitating the process of job discovery and recruitment. </p>
          </div>
          <div className="card">
            <IoMdSend/>
            <p>Apply For Job/Recruit Suitable Candidates</p>
            <p>The "Apply For Job/Recruit Suitable Candidates" functionality of the WorkWise web app serves as a pivotal feature for both job seekers and employers, facilitating the seamless exchange of job applications and recruitment processes.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
