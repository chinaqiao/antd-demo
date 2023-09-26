import { Button } from "antd";
import AppleLogin from "react-apple-login";
import { AppleOutlined, } from '@ant-design/icons';

const Apple = () => (
    <AppleLogin
        clientId="N8YQ2J6D7H"
        redirectURI="https://redirectUrl.com"
        render={(
            renderProps //Custom Apple Sign in Button
        ) => (
            <Button onClick={renderProps.onClick} block>
                <AppleOutlined /> Continue with Apple 📱
            </Button>
        )}
    />
    /*
          <AppleLogin
              clientId="YOUR_CLIENT_ID"
              redirectURI="YOUR_REDIRECT_URL"
              usePopup={true}
              // callback={this.appleResponse} // Catch the response
              scope="email name"
              responseMode="query"
              render={(
                  renderProps //Custom Apple Sign in Button
              ) => (
                  <button
                      onClick={renderProps.onClick}
                      style={{
                          backgroundColor: "white",
                          padding: 10,
                          border: "1px solid black",
                          fontFamily: "none",
                          lineHeight: "25px",
                          fontSize: "25px",
                      }}
                  >
                      <i className="fa-brands fa-apple px-2 "></i>
                      Continue with Apple
                  </button>
              )}
          />
          */
);
export default Apple;
