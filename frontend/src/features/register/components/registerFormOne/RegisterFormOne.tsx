
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/Store'
import './RegisterFormOne.css';
import { validateName } from '../../../../services/Validators';
import { ValidatedInput } from '../validatedInput/ValidatedInput';
import { RegisterDateInput } from '../registerDateInput/RegisterDateInput';
import { RegisterNameInputs } from '../registerNameInput/RegisterNameInputs';
import { RegisterEmailInput } from '../registerEmailInput/RegisterEmailInput';
import { StyledNextButton } from '../registerNextButton/RegisterNextButton';


interface FormOneState {
  firstName: string;
  lastName: string;
  email: string;
  mainTelephone: string;
}

export const RegisterFormOne:React.FC = () => {

  const registerState = useSelector((state:RootState) => state.register);

  const [buttonActive, setButtonActive] = useState<boolean>(false);


  useEffect (() => {
    if(registerState.dobValid && registerState.emailValid && registerState.firstNameValid && registerState.lastNameValid){
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, [registerState])
  
  return (
    <div className="reg-step-one-container" data-testId ="reg-step-one-container">
        <div className="reg-step-one-content">
          <RegisterNameInputs />
           <RegisterEmailInput />
          <RegisterDateInput />
        </div> 
        <StyledNextButton
            disabled = {!buttonActive}
            color = {"black"}
            active = {buttonActive}
            onClick={() => console.log("Go to the next page")}>
            Next
           </StyledNextButton>
    </div>
  )
}

