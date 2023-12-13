import { createBrowserRouter } from "react-router-dom";
import Body from "../../components/body/Body";
import HomeContainer from "../../components/home/HomeContainer";


 const appRouter  = createBrowserRouter([
{
    path:'/',
    element: <Body/>,
    children:[
        {
            path:'/',
            element:<HomeContainer/>
        }
    ]

},

]
 )

 export default appRouter;