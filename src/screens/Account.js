import { View, Text } from "react-native";
import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import UserForm from "../components/Auth/UserData";
import useAuth from "../hooks/useAuth";

export default function Account() {
  const { auth } = useAuth();

  return <View>{auth ? <UserForm /> : <LoginForm />}</View>;
}
