import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import AuthenticationRoutes from '../../Authentication/routes';

import WishRoutes from '../../Wishs/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes />
      <UserRoutes />
      <AuthenticationRoutes />
      <WishRoutes />
    </>
  );
}

export default Routes;