import Link from './Link';

const ArticleTeaser = ({ title, links }) => {
  // SSR throws an error about get() not being a function.
  const link = links.hasOwnProperty('get')
    ? { ...links.get('canonical'), title } 
    : { href: '#', title };
  return (
    <article>
      <h2><Link link={link} /></h2>
    </article>
  );
}

export default ArticleTeaser;