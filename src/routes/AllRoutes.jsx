import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from '../components/Loader';

import BaseLayout from '../layouts/Base';
import ProtectedRoute from './ProtectedRoute';

import {
  loginPath,
  recoverPasswordPath,
  signupPath,
  homePath,
  postsPath,
  perfilPath,
  categoriesPath,
  useGuidePath,
  logoutPath,
  adminPath,
} from './routePaths';

const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Singup'));
const RecoverPassword = lazy(() => import('../pages/RecoverPassword'));

const Home = lazy(() => import('../pages/Home'));
const Perfil = lazy(() => import('../pages/Perfil'));
const Categories = lazy(() => import('../pages/Categories'));
const Posts = lazy(() => import('../pages/Posts'));
const UseGuide = lazy(() => import('../pages/UseGuide'));
const Logout = lazy(() => import('../pages/Logout'));
const Admin = lazy(() => import('../pages/Admin'));

const PageNotFound = lazy(() => import('../pages/NotFound'));


const AllRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          {/* Rotas de autenticação */}
          <Route element={<BaseLayout />}>
            <Route path={loginPath} element={<Login />} />
            <Route path={signupPath} element={<Signup />} />
            <Route path={recoverPasswordPath} element={<RecoverPassword />} />
          </Route>
          {/* Rotas que dependem de informações do usuário.
              Após de processar, renderiza layout base*/}
          <Route element={<ProtectedRoute />}>
            <Route path={homePath} element={<Home />} />
            <Route path={perfilPath} element={<Perfil />} />
            <Route path={categoriesPath} element={<Categories />} />
            <Route path={postsPath} element={<Posts />} />
            <Route path={useGuidePath} element={<UseGuide />} />
            <Route path={logoutPath} element={<Logout />} />
            <Route path={adminPath} element={<Admin />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
