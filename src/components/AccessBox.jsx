export default function AccessBox() {
  return(
    <div className="registration" data-ms-content="!logged-in-only">
      <h3>Please signup or login</h3>
      <a className="registration-link" href={`#/ms/signup/${process.env.REACT_APP_SIGNUP_ID}#ms-hide-element`}>
        <button className="button">Signup</button>
      </a>
      <a className="registration-link" href="#/ms/login#ms-hide-element">
        <button className="button">Login</button>
      </a>
    </div>
  )
}