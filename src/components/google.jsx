import { GoogleLogin, GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import GoogleLoginButton from "./google-button";

const Google = () => {
    return (
        <GoogleOAuthProvider clientId="1034793734928-td2qeg4g3rsjesij5rfqg00a4hs5egjp.apps.googleusercontent.com">
            <GoogleLoginButton />
        </GoogleOAuthProvider>
    );
};

export default Google;
