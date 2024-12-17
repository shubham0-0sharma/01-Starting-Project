import { type ReactNode, type FC } from "react";
type headerProps = {
  children: ReactNode;
  image: {
    src: string;
    alt: string;
  };
};

const Header: FC<headerProps> = ({ image, children }) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
