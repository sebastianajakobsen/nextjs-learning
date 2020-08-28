import React from 'react';
import {Form, Formik} from "Formik";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";

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
                        <InputField name="username"
                                    placeholder="Username"
                                    label="Username" />
                        <InputField name="password"
                                    placeholder="Password"
                                    label="Password"
                                    type="password" />
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

export default Register