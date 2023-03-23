import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from '../enum/AppRoutes';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import AboutUsPage from '../pages/AboutUsPage';
import Layout from '../layout/Layout';
import FormsPage from '../pages/FormsPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={AppRoutes.NotFoundPage} element={<NotFoundPage />} />
        <Route path={AppRoutes.AboutUsPage} element={<AboutUsPage />} />
        <Route path={AppRoutes.FormsPage} element={<FormsPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
