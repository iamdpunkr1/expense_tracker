import {Link} from 'react-router-dom'
import * as Unicons from '@iconscout/react-unicons';
const Login = () => {
    return (
      <div className="form-box">
      <form className="center-wrap">
              <div className="section text-center">
              <h4 className="mb-4 pb-3">Log In</h4>
              
              <div className="form-group">
                <input
                  type="email"
                  name="logemail"
                  className="form-style"
                  placeholder="Your Email"
                  id="logemail"
                  autoComplete="off"
                />
                <Unicons.UilAt className="input-icon uil uil-at"  />
              </div>
              <div className="form-group mt-2">
                <input
                  type="password"
                  name="logpass"
                  className="form-style"
                  placeholder="Your Password"
                  id="logpass"
                  autoComplete="off"
                />
                <Unicons.UilLock className="input-icon uil uil-at"  />
              </div>
              <button className="btn mt-4">
                submit
              </button>
              <p className="mb-0 mt-4 text-center">
              Create a account? <Link to="/signup">Signup</Link>
              </p>
            </div>
        </form>
      </div>
      );
}
 
export default Login;