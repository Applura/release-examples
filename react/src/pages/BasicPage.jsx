import React from "react";
import ProcessedHTML from "../components/ProcessedHtml";
import Nav from "../components/Nav";

/**
 * BasicPage renders "basic_page" resources.
 *
 * @param fields
 *   The basic page fields.
 */
const BasicPage = ({ fields }) => {
  // Extract the required fields from the resource fields.
  const { mainMenu, title, body } = fields;
  return (
    <div id="basic-page">
      <header>
        {/* The main resource. */}
        <Nav resource={mainMenu.data} />
        <h2>{title}</h2>
      </header>
      <main>
        <section>
          {/* The body content is sent from the server, pre-processed and filtered against XSS vulnerabilities. */}
          <ProcessedHTML html={body} />
        </section>
      </main>
    </div>
  );
};

export default BasicPage;
