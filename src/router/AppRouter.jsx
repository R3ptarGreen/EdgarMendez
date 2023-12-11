import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from '../App'
import {HomePage, BiographyPage} from '../pages/index'
const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            children:[
                {path: '/', element:<HomePage/>},
                {path:'/biography', element: <BiographyPage/>}
            ]
        }
    ]
    )
  return <RouterProvider router={router}/>
}

export default AppRouter