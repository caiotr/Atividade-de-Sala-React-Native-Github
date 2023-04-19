import React from 'react';
import { StyleSheet, Image } from 'react-native';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pesquisar = styled.input`
  padding: 8px;
  margin-bottom: 100px;
  border: 100px;
  border-radius: 100px;
  color: #808080;
`;

const styles = StyleSheet.create({
  logo: {
    border:100,
    height: 100,
    width: 209,
    
  }
});

const LoginPage = () => {
  return (
    <LoginPageContainer>
   <Image style={styles.logo} source={require('./assets/google.png')} />
      <LoginForm>
        <Pesquisar type="text" placeholder="Search or type URL" />

      </LoginForm>
    </LoginPageContainer>
  );
};

export default LoginPage;