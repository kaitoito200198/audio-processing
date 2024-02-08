import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { SiteWrapper } from '../../components/site-wrapper/site-wrapper';

export function PageNoNavigation(props: { children: React.ReactNode }) {
    const router = createMemoryRouter([
        {
            path: '/',
            element: <SiteWrapper />,
            children: [{ index: true, element: props.children }],
        },
    ]);
    return <RouterProvider router={router} />;
}
