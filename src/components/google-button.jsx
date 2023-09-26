import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "antd";
import { GoogleOutlined, } from '@ant-design/icons';


const GoogleLoginButton = () => {
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => console.log(codeResponse),
        flow: "auth-code",
    });

    return (<Button onClick={() => login()} block><GoogleOutlined />Sign in with Google 🚀 </Button>);
};

export default GoogleLoginButton;