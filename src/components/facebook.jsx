import FacebookLogin from "@greatsumini/react-facebook-login";
import { Button } from "antd";
import { FacebookOutlined, } from '@ant-design/icons';
const Facebook = () => (
    // default
    <FacebookLogin
        appId="302901895399050"
        onSuccess={(response) => {
            console.log("Login Success!", response);
        }}
        onFail={(error) => {
            console.log("Login Failed!", error);
        }}
        onProfileSuccess={(response) => {
            console.log("Get Profile Success!", response);
        }}
    />
);
const Facebook1 = () => (
    // custom style
    <FacebookLogin
        appId="302901895399050"
        style={{
            backgroundColor: "#4267b2",
            color: "#fff",
            fontSize: "16px",
            padding: "12px 24px",
            border: "none",
            borderRadius: "4px",
        }}
    />
);
const Facebook2 = () => (
    // custom render function
    <FacebookLogin
        appId="302901895399050"
        onSuccess={(response) => {
            console.log("Login Success!", response);
        }}
        onFail={(error) => {
            console.log("Login Failed!", error);
        }}
        onProfileSuccess={(response) => {
            console.log("Get Profile Success!", response);
        }}
        render={({ onClick, logout }) => <Button onClick={onClick} block> <FacebookOutlined />Sign in with Facebook 🎉 </Button>}
    />
);

const Facebook3 = () => (
    // custom params, options
    <FacebookLogin
        appId="302901895399050"
        useRedirect
        initParams={{
            version: "v10.0",
            xfbml: true,
        }}
        dialogParams={{
            response_type: "token",
        }}
        loginOptions={{
            return_scopes: true,
        }}
    />
);
export default Facebook2;
