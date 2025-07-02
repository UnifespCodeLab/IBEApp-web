import {useNavigate, Outlet} from 'react-router-dom'
import { useEffect } from 'react';

import BaseLayout from '../layouts/Base/index'

let test = a;

/*{   Não implementado por completo ainda     }*/
const ProtectedRoute = () => {
  const navigate = useNavigate();
  const isAuthenticated = false; //add a dynamic method call
  // const user = 'shru ti';//add a dynamic method call

  useEffect(() => {
    if(!isAuthenticated){
      return navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return(
    <BaseLayout >
      <Outlet />
    </BaseLayout>
  )
}

export default ProtectedRoute;