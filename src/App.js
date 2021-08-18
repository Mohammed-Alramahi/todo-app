import Todo from './components/todo/todo'
import SettingsProvider from './context/settings';
import Header from './components/header/header';
function App() {
  return (
    <SettingsProvider>
      <Header />
      <Todo />
    </SettingsProvider>

  );
}

export default App;
