import { Main } from './Component/Main/Main'
import { GlobalProvider } from './Context/GlobalState'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return <div>
    <GlobalProvider>
      <Main />
      <ToastContainer />
    </GlobalProvider>
  </div>

}

export default App;
