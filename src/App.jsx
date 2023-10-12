import { BrowserRouter } from "react-router-dom";
import CustomeRoute from "./router/route";

function App() {
  return (
    <>
      <BrowserRouter>
        <CustomeRoute />
      </BrowserRouter>
    </>
  );
}

export default App;
