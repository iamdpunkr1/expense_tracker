import {Link} from 'react-router-dom'
import * as Unicons from '@iconscout/react-unicons';

const Signup = () => {
    return (
      <div className="form-box">
      <form className="center-wrap">
              <div className="section text-center">
              <h4 className="mb-4 pb-3">Sign Up</h4>
              <div className="form-group">
                <input
                    type="text"
                    name="logname"
                    className="form-style"
                    placeholder="Your Full Name"
                    id="logname"
                    autoComplete="off"
                />
                <Unicons.UilUser className="input-icon uil uil-at"  />
                </div>
              <div className="form-group  mt-2">
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
              Have a account? <Link to="/login">Login</Link>
              </p>
            </div>
        </form>
      </div>
      );
}
 
export default Signup;