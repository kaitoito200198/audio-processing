import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from '../../routes';

export function PagewithNavigation(props: { path?: string }) {
    const router = createMemoryRouter(routes, { initialEntries: [props.path ?? '/'] });
    return <RouterProvider router={router} />;
}
