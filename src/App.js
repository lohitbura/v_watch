import { RouterProvider } from 'react-router-dom';
import appRouter from './utils/services/appRouter';
import { Provider } from 'react-redux';
import appStore from './store/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
