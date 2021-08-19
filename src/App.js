import Todo from './components/todo/todo'
import SettingsProvider from './context/settings';
import Header from './components/header/header';
import Settings from './components/settings/settings';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
if (!localStorage.getItem("sortBy") || !localStorage.getItem("showCompleted") || !localStorage.getItem("itemsPerPage")) {
  localStorage.setItem("sortBy", "Easiest")
  localStorage.setItem("showCompleted", "true")
  localStorage.setItem("itemsPerPage", "3")
}

function App() {
  return (
    <SettingsProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Todo} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </Router>
    </SettingsProvider>

  );
}

export default App;
