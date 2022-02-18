import LazyLoading from "./components/lazy/LazyLoading";

import Employee from "./container/Employee"

const Login = LazyLoading(() => import("./components/login/Login"));

const routersApp = [
    {
        isExact: true,
        name: "Home",
        path: '/',
        element: <h1>Home</h1>,
    },
    {
        isExact: false,
        name: "Employee",
        path: '/employee',
        element: Employee,
    },
    {
        isExact: false,
        name: "Login",
        path: '/login',
        element: Login,
    }
]

export default routersApp;