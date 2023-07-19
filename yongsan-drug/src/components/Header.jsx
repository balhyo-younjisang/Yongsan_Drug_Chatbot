import { styled, keyframes } from "styled-components";
import vite from "../../public/vite.svg";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <a href="#">
          <Logo src={vite} alt="logo" />
        </a>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #041121;
`;

const vibration = keyframes`
  from {
    transform: rotate(3deg);
  }

  to {
    transform: rotate(-3deg)
  }
`;

const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  vertical-align: middle;
  transition: 0.5s;

  &:hover {
    animation: ${vibration} 0.2s infinite;
  }
`;

export default Header;
