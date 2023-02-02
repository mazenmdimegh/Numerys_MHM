import { BrowserRouter, Routes, Route } from "react-router-dom";
import Amplify from "aws-amplify";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SignUpPage from "./Pages/SignUp/SignUpPage";
import SignIn from "./Pages/SignIn/SignIn";
import ProtectedRoute from "./Components/ProtectedRoutes/ProtectedRoute";
import { isLoggedIn } from "./helpers/logged_in";
import NotFound from "./Pages/NotFound/NotFound";
import Terms from "./Pages/Terms/Terms";
import Cookies from "./Pages/Cookies/Cookies";
import Politics from "./Pages/Politics/Politics";
import Motors from "./Pages/Motors/Motors";
import Moto from "./Pages/Moto/Moto";
import Atelier from "./Pages/Atelier/Atelier";
import Rachat from "./Pages/Rachat/Rachat";
import Achat from "./Pages/Achat/Achat";
import PaymentStatusCheck from "./Components/Payment/PaymentStatusCheck";
import LandingPage from "./Pages/LandingPage/LandingPage";
import ScrollToTop from "./helpers/ScrollToTop";
import Test from "./Components/Test/Test";
import Pagination from "./Components/Pagination/Pagination";
import PaymentSucc from "./Pages/PaymentSucc/PaymentSucc";
import PaymentFail from "./Pages/PaymentFail/PaymentFail";

const stripePromise = loadStripe("pk_test_M8J3kALZtxiMXK4I8QrKKnjz");
Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: "eu-west-1",
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "eu-west-1_ueqwW4WNB",
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: "4f2im0aanal6ll19an1ga9n9kb",
  },
  oauth: {
    domain: "mhmdomain.auth.eu-west-1.amazoncognito.com",
    redirectSignIn: "https://d10ggo29axg2zf.cloudfront.net/",
    redirectSignOut: "https://d10ggo29axg2zf.cloudfront.net/",
    scope: ["email", "openid"],
    responseType: "token", // or 'token', note that REFRESH token will only be generated when the responseType is code
  },
});

let user = isLoggedIn();

function App() {
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/product-detail/:id" element={<Moto />} />
          <Route path="/motors" element={<Motors />} />
          <Route path="atelier" element={<Atelier />} />
          <Route path="rachat" element={<Rachat />} />
          <Route path="status" element={<PaymentStatusCheck />} />
          <Route path="achat" element={<Achat />} />
          <Route path="test" element={<Test />} />
          {/* <Route path="pag" element={<Pagination />} /> */}
          <Route
            path="signin"
            element={
              <ProtectedRoute user={user}>
                <SignIn />
              </ProtectedRoute>
            }
          />
          <Route
            path="signup"
            element={
              <ProtectedRoute user={user}>
                <SignUpPage />
              </ProtectedRoute>
            }
          />
          <Route path="terms" element={<Terms />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="politique" element={<Politics />} />
          <Route path="succespay" element={<PaymentSucc />} />
          <Route path="failedpay" element={<PaymentFail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Elements>
  );
}

export default App;
