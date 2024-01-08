
import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../../redux/Store'
import { incrementStep } from '../../../../redux/slices/RegisterSlices';
import './RegisterFormOne.css';
import { validateName } from '../../../../services/Validators';
import { ValidatedInput } from '../../../../components/validatedInput/ValidatedInput';
import { RegisterDateInput } from '../registerDateInput/RegisterDateInput';
import { RegisterNameInputs } from '../registerNameInput/RegisterNameInputs';
import { RegisterEmailInput } from '../registerEmailInput/RegisterEmailInput';
import { StyledNextButton } from '../registerNextButton/RegisterNextButton';


export const RegisterFormOne:React.FC = () => {

  const registerState = useSelector((state:RootState) => state.register);
  const dispatch:AppDispatch = useDispatch();

  const [buttonActive, setButtonActive] = useState<boolean>(false);

  const nextPage = () => {
    dispatch(incrementStep());
  }


  useEffect (() => {
    if(registerState.dobValid && registerState.emailValid && registerState.firstNameValid && registerState.lastNameValid){
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [registerState])
  
  return (
    <div className="reg-step-one-container">
        <div className="reg-step-one-content">
          <h1 className="reg-step-one-header">Create your account</h1>
          <RegisterNameInputs firstName={registerState.firstName} lastName={registerState.lastName} />
           <RegisterEmailInput email={registerState.email}/>
           <div className="reg-step-one-dob-disclaimer">
              <p className="reg-step-one-dob-header">Date of birth</p>
              <span className="reg-step-one-dob-text">
                This will not be shown publicly.
              </span>
           </div>
          <RegisterDateInput date={registerState.dob}/>
        </div> 
        <StyledNextButton
            disabled = {!buttonActive}
            color = {"black"}
            active = {buttonActive}
            onClick={nextPage}>
            Next
           </StyledNextButton>
    </div>
  )
}

