

export const Title = () => {
    <a href="/">
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTweev2cNZCgecH7BJbsS2WxVkVCOWIDj6M3Q&usqp=CAU"
        alt="logo"
        />
    </a>
}



const Header = () => {
    return (
      <div className="header">
        <Title />
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    );
  };

  export default Header;