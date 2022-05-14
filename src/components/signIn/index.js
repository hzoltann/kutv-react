import React from "react";
import {
  FormInput,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormLabel,
  Text,
  Container,
  FormWrap,
  Icon,
} from "./SignInElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Kutv</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" reqired></FormInput>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" reqired></FormInput>
              <FormLabel htmlFor="for">Continue</FormLabel>
              <FormButton type="submit" reqired to="/">
                Fel Iratkozás
              </FormButton>
              <Text to="/">Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
