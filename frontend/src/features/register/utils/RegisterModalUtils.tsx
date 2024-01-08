import React from "react";
import { RegisterFormOne } from '../../register/components/registerFormOne/RegisterFormOne';
import { RegisterFormTwo } from "../components/registerFormTwo/RegisterFormTwo";
import { RegisterFormThree } from "../components/registerFormThree/RegisterFormThree";

export const determineModalContent = (step: number): JSX.Element => {
    switch(step){
        case 1:
            return <RegisterFormOne/>
        case 2:
            return  <RegisterFormTwo/>
        case 3:
            return <RegisterFormThree/>  
        case 4 :
            return <span> Registration Step 4</span> 
        case 5:
            return <span> Registration Step 5</span>
        case 6:
            return <span> Registration Step 6</span> 
        default:
            return <></>

    }

}