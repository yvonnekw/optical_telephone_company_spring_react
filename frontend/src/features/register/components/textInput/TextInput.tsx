
import React, { useState } from 'react'

interface TextInputProps {
    name: string
    label: string
    errorMessage: string
    onChange(e:React.ChangeEvent<HTMLInputElement>):void
    maxLength?:number
    validator?(value:string):boolean
}

export const TextInput:React.FC<TextInputProps> = ({name, label, errorMessage, onChange, maxLength, validator}) => {
  // eslint-disable-next-line
  const [inputValue, setInputValue] = useState<String>("");

  const updateInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    onChange(e); //pass props backwards
    setInputValue(e.target.value);
  }
  
    return (
    <div className='text-input'>
        <div>
            <span>{label}</span>
                <input name={name} onChange={updateInput} />
        </div>
      
    </div>
  )
}


