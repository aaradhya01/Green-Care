import React, { Component, useContext } from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Home from "./pages";
import SigninPage from "./pages/signin";
import UserPage from './pages/user';

// function App() {
  // const { user } = useContext(AuthContext);
  
class App extends Component {
//   state = {
//     response: "",
//     post: "",
//     responseToPost: "",
//   };

//   componentDidMount() {
//     this.callApi()
//       .then((res) => this.setState({ response: res.express }))
//       .catch((err) => console.log(err));
//   }

//   callApi = async () => {
//     const response = await fetch("/api/hello");
//     const body = await response.json();
//     if (response.status !== 200) throw Error(body.message);

//     return body;
//   };

//   handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("/api/world", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();

//     this.setState({ responseToPost: body });
//   };



  render() {
    return (
      <div className="App">
        <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/user' component={UserPage} exact />
        {/* <Route path="/profile/:username"> */}
        {/* <Profile /> </Route> */}
      </Switch>
    </Router>



        {/* <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={(e) => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p> */}
      </div>
    );
  }
}

export default App;