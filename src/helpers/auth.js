import { Auth } from "aws-amplify";

const signOut = async () => {
  try {
    // const user = await Auth.currentAuthenticatedUser();
    // console.log(user);
    // user.refreshSession();
    // await Auth.signOut();
    localStorage.clear();
    window.location.reload();
  } catch (error) {
    // localStorage.clear();
    console.log("error signing out: ", error);
  }
};

export { signOut };
