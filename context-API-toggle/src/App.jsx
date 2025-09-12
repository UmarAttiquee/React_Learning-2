
import Home from './components/Home';
import ToggleContextProvider from './context/ToggleContextProvider';


function App() {

  return (
    <>
      <h1>Hello World</h1>
      <ToggleContextProvider>
        <Home />
      </ToggleContextProvider>
    </>
  )
}

export default App
