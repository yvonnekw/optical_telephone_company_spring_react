import './Landing.css';
import '../assets/global.css'
import React from 'react'


import { RegisterModal } from '../features/register/components/registerModal/RegisterModal';

export const Landing:React.FC = () => {
  return (
    <div className="home-container bg-color">
      <RegisterModal/>
    </div>
  )
}


