import "./App.css";
import Headers from "./components/header";
import Login from "./components/login";
import { Route } from "react-router-dom";
import AddFriend from "./components/addFriend";
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/friendList";

function App() {
  console.log(localStorage.getItem("token"));
  return (
    <div className="App">
      <Route path="/" component={Headers} />
      <Route path="/api/login" component={Login} />
      <Route path="/api/friends" component={AddFriend} />
      <PrivateRoute path="/api/friendsList" component={FriendList} />
    </div>
  );
}

export default App;
