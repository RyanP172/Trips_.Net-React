import { Create } from "./components/Trip/Create";
import { Trips } from "./components/Trip/Trips";


const AppRoutes = [

  {
    path: '/trips',
    element: <Trips />
  },
  {
    path: '/create',
    element: <Create />
  }
];

export default AppRoutes;
