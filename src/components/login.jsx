import { Button, Checkbox, Form, Input, Avatar, Divider } from "antd";
import logo from "../assets/images/logo.png";

import Google from "./google";
import Apple from "./apple";
import Facebook from "./facebook";

const onFinish = (values) => {
    console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};
const Login = () => (
    <Form
        name="basic"
        labelCol={{}}
        wrapperCol={{}}
        style={{}}
        initialValues={{
            remember: true,
        }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item style={{}}>
            <div style={{ justifyContent: "center", display: "flex" }}>
                <Avatar src={logo} size={110} shape="square" />
            </div>
        </Form.Item>
        <Form.Item
            label="Email address"
            name="username"
            rules={[
                {
                    required: true,
                    message: "Please input your email!",
                },
            ]}
        >
            <Input placeholder="Please input your email" />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                    required: true,
                    message: "Please input your password!",
                },
            ]}
        >
            <Input.Password placeholder="Please input your password" />
        </Form.Item>

        {/* <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item wrapperCol={{}}>
            <Button type="primary" htmlType="submit" block>
                Login
            </Button>
        </Form.Item>
        <Divider>OR</Divider>
        <Form.Item><Facebook /></Form.Item>
        <Form.Item><Google /></Form.Item>
        <Form.Item><Apple /></Form.Item>
    </Form>
);
export default Login;
