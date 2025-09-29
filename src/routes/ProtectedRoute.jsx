import {useNavigate, Outlet} from 'react-router-dom'
import { useEffect } from 'react';

import BaseLayout from '../layouts/Base/index'

/*{   Não implementado por completo ainda     }*/
const ProtectedRoute = () => {
  const navigate = useNavigate();
  // const isAuthenticated = false;
  const isAuthenticated = true; // temporario enquanto nao possui auth

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