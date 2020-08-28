import React from 'react';
import {Form, Formik} from "Formik";
import {FormControl, FormLabel, Input} from "@chakra-ui/core/dist";
import Wrapper from "../components/Wrapper";

interface Props {

}

const Register: React.FC<Props> = ({}) => {
    return (
        <Wrapper variant="small">
            <Formik
                initialValues={{username: "", password: ""}}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({values, handleChange}) => (
                    <Form>
                        <FormControl>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <Input value={values.username}
                                   onChange={handleChange}
                                   id="username"
                                   placeholder="Username"/>
                            {/*<FormErrorMessage>{form.errors.name}</FormErrorMessage>*/}
                        </FormControl>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default Register