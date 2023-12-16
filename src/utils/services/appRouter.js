import { createBrowserRouter } from "react-router-dom";
import Body from "../../routes/body/Body";
import HomeContainer from "../../routes/home/HomeContainer";
import VideoPlayerContainer from "../../routes/videoPlayer/VideoPlayerContainer";


 const appRouter  = createBrowserRouter([
{
    path:'/',
    element: <Body/>,
    children:[
        {
            path:'/',
            element:<HomeContainer/>
        },
        {
            path:'/videoPlayer',
            element:<VideoPlayerContainer />
        }
    ]

},

]
 )

 export default appRouter;