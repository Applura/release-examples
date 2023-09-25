import Header from "../components/Header";
import useResource from '../glue/internal/hooks/useResource';

const BasicPage = () => {
  const { resource: { title, body } } = useResource();
  return (
    <article>
      <Header><h1>{title}</h1></Header>
      <main>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </main>
    </article>
  );
}


export default BasicPage;
