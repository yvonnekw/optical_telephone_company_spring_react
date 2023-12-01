
import React, {useState, useEffect} from 'react'
import './RegisterFormOne.css';
//import { TextInput } from '../textInput/TextInput';
import { ValidatedInput } from '../validDatedInput/ValidatedInput';


interface FormOneState {
  firstName: string;
  lastName: string;
  email: string;
  mainTelephone: string;
}

export const RegisterFormOne:React.FC = () => {

  const [stepOneState, setStepOneState] = useState<FormOneState>({
    firstName: "",
    lastName: "",
    email: "",
    mainTelephone: ""
  });

  const updateUser = (e:React.ChangeEvent<HTMLInputElement>): void => {
    setStepOneState({...stepOneState, [e.target.name]: e.target.value})
  }

  useEffect (() => {
    console.log("State change: ", stepOneState);
  }, [stepOneState])
  
  return (
    <div className="reg-step-one-container" data-testId ="reg-step-one-container">
        <div className="reg-step-one-content">
            <ValidatedInput name={"firstName"} label={"first"}
            errorMessage={"What's your first name?"}
            changeValue={updateUser}
            validator={()=> true}
            />
            <ValidatedInput name={"lastName"} label={"last"}
            errorMessage={"What's your last name?"}
            changeValue={updateUser}
            validator={()=> true}
            />
            <ValidatedInput name={"email"} label={"email"}
            errorMessage={"Please, enter a valid email."}
            changeValue={updateUser}
            validator={()=> true}
            />
            <ValidatedInput name={"telephone"} label={"telephone"}
            errorMessage={"Please, enter a valid telephone number"}
            changeValue={updateUser}
            validator={()=> true}
            />
        </div> 
    </div>
  )
}

