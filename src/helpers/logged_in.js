const isLoggedIn = () => {
  const hello = Object.keys(localStorage).filter((key) =>
    key.includes("CognitoIdentityServiceProvider")
  );
  if (hello.length === 0) {
    return false;
  } else {
    return true;
  }
};

const getUserInfo = (Token) => {
  if (isLoggedIn()) {
    const idToken = localStorage.getItem(
      Object.keys(localStorage).filter((key) => key.includes(Token))[0]
    );
    const userToken = idToken.split(".")[1];
    const userInfo = JSON.parse(atob(userToken));
    return userInfo;
  } else {
    return "user is not athenticated";
  }
};

export { isLoggedIn, getUserInfo };
