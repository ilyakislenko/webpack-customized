import {Input} from './styles'
import { useState } from 'react';
type TInput = {
    placeholder:string,
    onChangeFunc:(value: React.SetStateAction<string>) => void
}
export const ReactInput:React.FC<TInput> = ({placeholder,onChangeFunc}) => {
    return(
            <Input placeholder={placeholder} onChange={(e) => onChangeFunc(e.target.value)}></Input>
    )
}