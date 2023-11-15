import React,{useState} from "react";
import { Layout } from "../../components/layout";
import { Card, Form, Row, Space, Typography } from "antd";
import { CustomInput } from "../../components/custom-input";
import { PasswordInput } from "../../components/password-input";
import { CustomButton } from "../../components/custom-button";
import { Link, useNavigate } from "react-router-dom";
import { Paths } from "../../path";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useRegisterMutation } from "../../app/services/auth";
import { Omit } from "@prisma/client/runtime/library";
import { User } from "@prisma/client";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { ErrorMessage } from "../../components/error-message";

type RegisterData=Omit<User,'id'> & {confirmPassword:string}

export const Register = () => {
  const navigate=useNavigate()
  const user=useSelector(selectUser)
  const [registerUser]=useRegisterMutation()
  const [error,setError]=useState("")
  const register=async (data:RegisterData)=>{
    try{
      await registerUser(data).unwrap();
      navigate('/')
    }catch(error){
      const maybeError=isErrorWithMessage(error)

      if(maybeError){
          setError(error.data.message)
      }else{
        setError('Неизвестная ошибка')
      }
    }

  }
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Зарегистрируйтесь" style={{ width: "30rem" }}>
          <Form onFinish={register}>
            <CustomInput name="name" placeholder="Имя" />
            <CustomInput type="email" name="email" placeholder="Email" />
            <PasswordInput name="password" placeholder="Пароль" />
            <PasswordInput name="confirmPassword" placeholder="Повторите пароль" />
            <CustomButton type="primary" htmlType="submit" >
              Зарегистрироваться
            </CustomButton>
          </Form>
          <Space direction="vertical" size="large">
            <Typography>
              Уже зарегистрированы? <Link to={Paths.login}>Войдите</Link>
            </Typography>
            <ErrorMessage message={error}/>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};
