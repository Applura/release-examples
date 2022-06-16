import { useResource } from "../glue/ResourceContext";
const Link = ({ link }) => {
  const { follow } = useResource();
  const { href, title, active } = link;
  const handleClick = (e) => {
    e.preventDefault();
    follow(link);
  }

  return <a onClick={handleClick} href={href} title={title} className={active ? 'is-active' : ''}>{title}</a>
}

export default Link;
