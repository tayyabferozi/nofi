import React from "react";

const NotFound = () => {
  return (
    <div id="error-page">
      <p>
        <a href="http://nofitoken.com/">nofitoken.com</a>
      </p>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <div>
        It seems that the page you were trying to reach does not exist anymore,
        or maybe it has just moved. You can start again from the
        <a href="http://nofitoken.com/"> home</a> or go back to
        <a href="javascript:%20history.go(-1)"> previous page</a>.
      </div>
    </div>
  );
};

export default NotFound;
