import { Route, Switch } from "react-router-dom";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import TodoUpdate from "./TodoUpdate";

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" render={props => (<TodoList />)} />
        <Route exact path="/add" render={props => (<TodoAdd />)} />
        <Route exact path="/update/:id" render={props => (<TodoUpdate {...props} />)} />
      </Switch>
    </div>
  );
}

export default App;