import Link from './Link';

const ArticleTeaser = ({ title, links }) => {
  console.log({ links}, typeof links);
  const link = links ? { ...links.get('canonical'), title } : { title, href: '#' };
  return (
    <article>
      <h2><Link link={link} /></h2>
    </article>
  );
}

export default ArticleTeaser;