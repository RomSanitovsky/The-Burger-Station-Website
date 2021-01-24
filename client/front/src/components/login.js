export default function Login() {
    return (
        <div>
            <title>Burger Station</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/png" href="/client/front/public/assets/img/favicon.png" />
            <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css" />
            <link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css" />
            <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css" />
            <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css" />
            <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css" />
            <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css" />
            <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css" />
            <link rel="stylesheet" type="text/css" href="css/util.css" />
            <link rel="stylesheet" type="text/css" href="css/main.css" />
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-t-85 p-b-20">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-70"> Welcome To Burger Station </span>
                            <span className="login100-form-avatar">
                                <img src="images/avatar-01.jpg" alt="AVATAR" />
                            </span>
                            <div className="wrap-input100 validate-input m-t-85 m-b-35" data-validate="Enter username">
                                <input className="input100" type="text" name="username" />
                                <span className="focus-input100" data-placeholder="Username" />
                            </div>
                            <div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
                                <input className="input100" type="password" name="pass" />
                                <span className="focus-input100" data-placeholder="Password" />
                            </div>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn"> Login</button>
                            </div>
                            <ul className="login-more p-t-190">
                                <li className="m-b-8">
                                    <span className="txt1"> Forgot </span>
                                    <a href="#" className="txt2"> Username / Password? </a>
                                </li>
                                <li>
                                    <span className="txt1"> Don’t have an account? </span>
                                    <a href="#" className="txt2"> Sign up </a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <div id="dropDownSelect1" />
        </div>
    );
}
