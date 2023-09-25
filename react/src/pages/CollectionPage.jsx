import Header from "../components/Header";
import ArticleTeaser from "../components/ArticleTeaser";
import useResource from '../glue/internal/hooks/useResource';

const CollectionPage = () => {
  const { resource: { title, body, articles } } = useResource();
  const articleList = articles?.data || [];
  return (
    <article>
      <Header><h1>{title}</h1></Header>
      <main>
        <div dangerouslySetInnerHTML={{ __html: body }} />
        {articleList.map((article) => (
          <ArticleTeaser key={article.id} {...article} />
        ))}
      </main>
    </article>
  );
}

export default CollectionPage;
