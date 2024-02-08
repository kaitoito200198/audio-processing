import { RouterProvider, createMemoryRouter } from 'react-router-dom';

export function ComponentWrapper(props: { children: React.ReactNode }) {
    const router = createMemoryRouter([
        {
            path: '/',
            element: props.children,
        },
    ]);
    return null;
}
