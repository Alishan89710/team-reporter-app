import {Routes as AppRoutes, Route, Link} from "react-router-dom"
import Demo from '../components/Login';
import HorizontalLoginForm from '../components/Signup'

let Rout = () => {
    return (
        <AppRoutes>
            <Route Path="/" element={<Demo />} />
            <Route Path="/" element={<HorizontalLoginForm />} />
        </AppRoutes>
    )
}
export default Rout;
