
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { LoginActions } from "../../store/auth-slice";
import classes from "./Header.module.css";

const Header = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispach = useDispatch();
  
  const logoutHandler = () => {
  dispach(LoginActions.logout())  
    // dispatch(logout());
  };

  return (
    <>
        <header className={classes.header}>
          <h1>Redux Auth</h1>
      {isAuth && (
          <nav>
            <ul>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
              <li>
                <button onClick = {logoutHandler}>Logout</button>
              </li>
            </ul>
          </nav>
            )}
        </header>
    </>
  );
};

export default Header;
