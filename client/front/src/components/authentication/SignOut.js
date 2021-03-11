import { useCookies } from "react-cookie";
import { useHistory } from "react-router";
import { useStore } from "./Login";

export default function SignOut() {
  const [cookies, setCookie, removeCookie] = useCookies();
  let id = cookies.user.data.user._id;

  const history = useHistory();
  const { setUserData, userData } = useStore();

  const handleLogOut = () => {
    removeCookie("user");
    setUserData({});
    history.push("/");
    console.log("cookies", cookies);
  };

  return (
    <div
      onClick={() => handleLogOut()}
      style={{ marginLeft: "2rem", cursor: "pointer" }}>
      logOut
    </div>
  );
}
