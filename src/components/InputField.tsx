import React, {InputHTMLAttributes} from 'react';
import {FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/core";
import {useField} from "Formik";
type Props = InputHTMLAttributes<HTMLInputElement> & {
    label:string;
    placeholder:string
    name:string;
}



const InputField: React.FC<Props> = (props) => {

    const [field, {error}] = useField(props)

    // !!error = '' => false
    // !!error = 'error message stuff' => true
    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
            <Input {...field} id={field.name} placeholder={props.placeholder} />
            { error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
};

export default InputField