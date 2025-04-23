import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PageRegister } from './PageRegister';

// TODO: When DB and authentication system are implemented, deny page requiring isLogin, isAdmin...

const router = createBrowserRouter([{ path: '/register', element: <PageRegister /> }]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
