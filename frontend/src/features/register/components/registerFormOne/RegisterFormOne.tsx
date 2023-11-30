
import React, {useState} from 'react'
import './RegisterFormOne.css';
import { TextInput } from '../textInput/TextInput';


interface FormOneState {
  firstName: string;
  lastName: string;
  email: string;
  mainTelephone: string;
}

export const RegisterFormOne:React.FC = () => {

  const [stepOneState, setStepOneState] = useState<FormOneState>({
    firstName: "",
    lastName: "string",
    email: "string",
    mainTelephone: "string"
  });

  const updateUser = (e:React.ChangeEvent<HTMLInputElement>): void => {
    
  }
  return (
    <div className="reg-step-one-container" data-testId ="reg-step-one-container">
        <div className="reg-step-one-content">
            User input area for reg one
        </div>
      
    </div>
  )
}

