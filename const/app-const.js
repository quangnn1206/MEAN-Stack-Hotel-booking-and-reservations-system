
var DATABASE = "HotelBookingReservationsSystem";
var DB_HOST = "localhost";
var DB_PORT = "27017";

exports.DB_CONNECTION = "mongodb://" + DB_HOST + ":" + DB_PORT + "/" + DATABASE;
exports.DB_CONNECT_SUCCESS = 'connection succesful';
exports.SERCRET = 'dohungcuong';
exports.PORT = 3000;
exports.RESOURCE = 'public';
exports.VIEW = 'views';
exports.VIEW_FILE_EXTENSION = 'ejs';
exports.ANGULAR_DIR = '/dist';
exports.LOGGER ='dev';
exports.PAGE404 = 'Not Found';
exports.APP_RUNNING_RESULT = "App now running on port";
exports.ERROR_MES = 'err_msg';
exports.SUCCESS_MES = 'success_msg';
exports.USER_API = '/api/users';
exports.ROOM_API = '/api/rooms';
exports.RESTAURANT_API = '/api/restaurant';
exports.ACTIVITY_API = '/api/activity';
exports.FOLLOW_USER_API = '/api/follow-users';


exports.SIGNUP_SUCESS = 'sign up successfully: ';
exports.TKS_SIGNUP = 'Thank you for join us! You are able to use premium feature!'
exports.ACCOUNT_INIT = 'You are having $500 in your account';
exports.BALANCE_INIT = 500;
exports.SIGNUP_DETAIL = 'You have signed up with email ';
exports.NO_RES = "Not Yet";
exports.ACCOUNT_USED = 'sign up failed: exist account: ';
exports.EMAIL_TAKEN = 'This username is already taken';
exports.SIGNUP_ERR = 'sign up failed: cannot check users';
exports.SIGNUP_INVALID = 'sign up failed: validation form not accepted';

exports.INPUT_USERNAME = 'Please input your username';
exports.INPUT_PASSWORD = 'Please input your password';
exports.CONFIRM_PW = 'Confirm must be the same with password';
exports.INPUT_NAME = 'Please input your full name';
exports.INPUT_PHONE = 'Please input your phone number';
exports.PHONE_INVALID = 'Phone number must be digits only';
exports.INPUT_ADDRESS = 'Please input your address';
exports.CLICK_REGISTER = 'click page /register';
exports.LOGIN_SUCCESS = 'login success: ';
exports.CLICK_LOGIN = 'click page /login';
exports.CLICK_LOGOUT = 'click page /logout';
exports.INVALID_USERNAME = "Invalid Username";
exports.WRONG_PW = "Wrond password!!";