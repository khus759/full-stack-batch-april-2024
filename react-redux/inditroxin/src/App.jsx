import { RouterProvider } from 'react-router-dom'
import { MainRouter } from './routes/MainRouter'
import { store } from './store/Store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={MainRouter} />
      </Provider>

      )
}

export default App
