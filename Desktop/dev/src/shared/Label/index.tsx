import { Label } from "./styles"
import { useState } from 'react';
export const ReactLabel:React.FC<{text:string}> = ({text}) => {
    return(
        <Label>{text}</Label>
    )
}