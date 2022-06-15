import Link from './Link';
const Menu = ({ items }) => (
  <nav>
    <ul>
      {items.map((item) => <li key={item.id}><Link link={item} /></li>)}
    </ul>
  </nav>
)

export default Menu;
