import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./screens/Landing.jsx";
import Error from "./screens/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route
          exact
          path="/50x"
          element={
            <Error errorCode="500" errorMsg="Internal Server Error">
              Sorry, something went wrong :(
            </Error>
          }
        />
        <Route
          exact
          path="/403"
          element={
            <Error errorCode="403" errorMsg="Forbidden">
              Unfortunately, you do not have permission to view this
            </Error>
          }
        />
        <Route
          exact
          path="/404"
          element={
            <Error errorCode="404" errorMsg="Page Not Found">
              It seems that the page you were trying to reach does not exist
              anymore, or maybe it has just moved. You can start again from the
              <a href="http://nofitoken.com/"> home</a> or go back to
              <a href="javascript:%20history.go(-1)"> previous page</a>.
            </Error>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
