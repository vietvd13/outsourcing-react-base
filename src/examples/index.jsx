import DemoLayout from './DemoLayout';
import DemoValidation from './validation/DemoValidation';
import DemoStore from './store/DemoStore';
import DemoI18n from './i18n/demoI18n';
// import DemoQuery from './query/DemoQuery'

export const Routes = [
  {
    path: 'examples',
    element: <DemoLayout />,
    children: [
      {
        path: 'validation',
        element: <DemoValidation />,
      },
      {
        path: 'store',
        element: <DemoStore />,
      },
      {
        path: 'i18n',
        element: <DemoI18n/>,
      },
    //   {
    //     path: 'query',
    //     element: <DemoQuery/>
    //   }
    ],
  },
];
