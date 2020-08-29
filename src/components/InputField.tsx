import React, {InputHTMLAttributes} from 'react';
import {FormControl, FormErrorMessage, FormLabel, Input} from "@chakra-ui/core";
import {useField} from "Formik";


type Props = InputHTMLAttributes<HTMLInputElement> & {
    label:string;
    name:string;
}

const InputField: React.FC<Props> = (
    {
        label,
        size,
        ...props
    }) => {

    const [field, {error}] = useField(props)

    return (
        <FormControl isInvalid={!!error}>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <Input {...field} {...props} id={field.name} placeholder={props.placeholder} />
            { error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
};

export default InputField