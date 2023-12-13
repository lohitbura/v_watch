import { RouterProvider } from 'react-router-dom';
import Body from './components/body/Body';
import appRouter from './utils/services/appRouter';

function App() {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default App;
