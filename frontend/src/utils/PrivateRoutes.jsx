import { useSelector, useDispatch } from 'react-redux'
import jwt_decode from "jwt-decode";
// - Redux
import { logout, reset } from '../features/auth/authSlice'

function PrivateRoutes() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user);

  if (user != null) {
    const token = user.token
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      dispatch(logout())
      dispatch(reset())
    }
  }
}

export default PrivateRoutes