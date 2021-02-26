export default function HomeInfo() {
  return(
    <div className="info-box" data-ms-content="logged-in-only">
      <span>
        Welcome, You are currently logged in as:
        <div className="user-info" data-ms-member="username"></div>
        Using the Email:
        <div className="user-info" data-ms-member="email"></div>
      </span>
      <span>
        Click <a href="#/ms/profile">Here</a> To view full profile details
      </span>
    </div>
  )
}