// React
import React from "react";

// Components
import { AppButton, AppText } from "@/components";

const LoginSosmed = () => (
  <>
    <div className="login__sosmed">
      <AppButton
        variant="facebook"
        size="large"
        rounded="large"
        icon="/svg/facebook-circle-white-24x24.svg"
      >
        CONTINUE WITH FACEBOOK
      </AppButton>

      <AppButton
        variant="dark-1"
        size="large"
        rounded="large"
        icon="/svg/apple-white.svg"
      >
        CONTINUE WITH APPLE
      </AppButton>

      <AppButton
        variant="blank"
        size="large"
        rounded="large"
        icon="/svg/google.svg"
      >
        CONTINUE WITH GOOGLE
      </AppButton>

      <AppButton variant="blank" size="large" rounded="large">
        CONTINUE WITH PHONE NUMBER
      </AppButton>
    </div>

    <div style={{ height: "20px" }}>
      <AppText className="login__or" weight="bold">
        OR
      </AppText>
      <hr className="login__or-line" />
    </div>
  </>
);

export default LoginSosmed;
