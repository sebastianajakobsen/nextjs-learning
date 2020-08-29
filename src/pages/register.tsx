import React, {useEffect} from 'react';
import {Form, Formik} from "Formik";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";
import {Box, Button} from "@chakra-ui/core/dist";
import axios from 'axios'
import * as Yup from "yup";

interface Props {

}

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password:Yup.string()
        .min(5, 'Too Short!')
        .required('Required'),
    passwordConfirmation:Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});


const Register: React.FC<Props> = ({}) => {

    const handleSubmit = ({values}) => {
            console.log(values)
    }

    return (
        <Wrapper variant="small">
            <Formik
                initialValues={{name: "", password: "", email: "", password_confirmation:""}}
                // onSubmit={(values) => {
                //     console.log(values);
                // }}
                validationSchema={RegisterSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        axios.defaults.withCredentials = true;
                        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {
                        // api call
                            axios.post('http://localhost:8000/register', values)
                                .then(res => {
                                    console.log(res);
                                    console.log(res.data);
                                })
                                .catch(err => {
                                    console.log(err);
                                });
                        })
                            setSubmitting(false);
                    }, 1000);

                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <InputField name='name'
                                    placeholder='Username'
                                    label='Username'/>
                        <Box my={2}>
                        <InputField name='email'
                                    placeholder='Email'
                                    label='Email'/>
                        </Box>
                        <Box my={2}>
                            <InputField name='password'
                                        placeholder='Password'
                                        label='Password'
                                        type='password'/>
                        </Box>
                        <Box my={2}>
                            <InputField name='password_confirmation'
                                        placeholder='Confirm Password'
                                        label='Password confirmation'
                                        type='password'/>
                        </Box>
                        <Button mt={4}
                                type='submit'
                                isLoading={isSubmitting}
                                variantColor='teal'>
                            Register
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default Register