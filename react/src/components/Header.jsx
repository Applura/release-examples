import { useContext } from 'react';
import { ResourceContext } from "../ResourceContext";
import useMenu from '../hooks/useMenu';
import Menu from "./Menu";

const Header = ({ children }) => {
  const { resource } = useContext(ResourceContext);
  const { items } = useMenu(resource);
  return (
    <header>
      {children}
      <Menu items={items} />
    </header>
  )
}

export default Header;
