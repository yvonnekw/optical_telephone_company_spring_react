import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../redux/Store';
import { decrementStep } from '../../../../redux/slices/RegisterSlices';
import { Modal } from '../../../../components/Modal/Modal';
import './RegisterModal.css';
import { RegistrationStepCounter } from '../registerStepCounter/RegistrationStepCounter';
import {  determineModalContent } from '../../utils/RegisterModalUtils';

export const RegisterModal:React.FC = () => {

  const state = useSelector((state:RootState) => state.register);
  const dispatch:AppDispatch = useDispatch();

  const stepButtonClicked = () => {
    dispatch(decrementStep());
  }

  return (
    <div className="register-modal">

        <Modal>
            <div className="register-modal">
              <RegistrationStepCounter step={state.step} changeStep={stepButtonClicked}/>
              <div className="register-modal-content">
              { determineModalContent(state.step) }
             </div>
            </div>
        </Modal>
      
    </div>
  )
}


