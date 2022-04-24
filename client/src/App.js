import Login from "./components/login/login"
import Register from "./components/register/register"
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  return (
    <div className="App" style={{backgroundColor: "antiquewhite"}}>
      <div className="bg-lightslategray h-screen font-sans">
        <div className="container mx-auto h-full flex justify-center items-center">
      <Router>
        <Switch>
          <Route exact path="/"><Login /></Route>
          <Route path="/register"><Register /></Route>
        </Switch>

      </Router>
      </div>
    </div>
    </div>
  );
}

export default App;