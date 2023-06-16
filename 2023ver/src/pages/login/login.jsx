import React, { useEffect, useState } from "react";
import styled from "styled-components";
// 공통 컴포넌트
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";

// 이미지
import mainLogo from "../../assets/mainLogo.png";

export const Login = () => {
    return (
        <>
          <Container>
            <MainLogoDiv>
              <MainLogoImg src={mainLogo}></MainLogoImg>
              <H1>환영합니다!</H1>
            </MainLogoDiv>

            <LoginFormDiv>
              <LoginForm>

                <LoginInput
                  placeholder="이메일"
                  type="email"
                ></LoginInput>

                <LoginInput
                  placeholder="비밀번호"
                  type="password"
                ></LoginInput>

                <LoginBtn>
                  <Button
                    label={"로그인하기"}
                    btnColor={"white"}
                  />
                </LoginBtn>
              </LoginForm>
            </LoginFormDiv>
          </Container>
        </>
      );
};
export default Login;

const MainLogoDiv = styled.div`
  margin-top: 4%;
`;

const MainLogoImg = styled.img`
  padding: 3% 3% 0 3%;
`;

const H1 = styled.p`
  font-size: 38px;
  margin: 0;
  padding: 2%;
  color: #00ad5c;
  font-weight: 700;
`;

const LoginFormDiv = styled.div`
  width: 100%;
  /* background-color: rgb(255, 212, 212); */
  padding: 10% 5% 2% 5%;
`;
const LoginForm = styled.form`
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  padding: 6%;
  text-align: center;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
`;

const LoginInput = styled.input`
  padding: 4%;
  width: 90%;
  margin: 4%;
  border-radius: 5px;
  border: 1px solid #b6b6b6;
  font-size: 18px;
`;

const LoginBtn = styled.div`
  margin: 5%;
`;
const Div = styled.div`
  padding-bottom: 15%;
`;