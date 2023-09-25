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
        <section>
          <header>
            <h3>Recent articles</h3>
          </header>
            {articleList.map((article) => (
              <aside>
                <ArticleTeaser key={article.id} {...article} />
              </aside>
            ))}
        </section>
      </main>
    </article>
  );
}

export default CollectionPage;
