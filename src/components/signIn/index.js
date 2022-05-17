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
          <Icon to="/">Kütv</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Jelentkezz be / hozz létre új fiókot</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" reqired></FormInput>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" reqired></FormInput>
              <FormLabel htmlFor="for">Folyatatás</FormLabel>
              <FormButton type="submit" reqired to="/">
                Feliratkozás
              </FormButton>
              <Text to="/">Elfelejtettem a jelszavam</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
