import useMenu from '../hooks/useMenu';
import Menu from "./Menu";
import { useResource } from "../glue/ResourceContext";

const Header = ({ children }) => {
  const { resource } = useResource();
  const { items } = useMenu(resource);
  return (
    <header>
      {children}
      <Menu items={items} />
    </header>
  )
}

export default Header;
