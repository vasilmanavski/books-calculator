import React from 'react';
import { RouterProvider } from 'react-router';
import router from '../src/router/router';

const App = (): React.JSX.Element => (
    <RouterProvider router={router} />
);

export default App;
