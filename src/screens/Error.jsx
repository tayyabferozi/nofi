import React from "react";

const Error = ({ errorCode, errorMsg, children }) => {
  return (
    <div id="error-page">
      <p>
        <a href="http://nofitoken.com/">nofitoken.com</a>
      </p>

      <h1>{errorCode}</h1>
      <h2>{errorMsg}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Error;
