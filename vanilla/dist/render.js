const menuLink = (item) => {
const { title, href, active = false } = item;
  return (
  active || !href.length
    ? `<span>${title}</span>`
    : `<a href="${href}" title="${title}">${title}</a>`
)};
const menuItem = (item) => (
`  
  <li>
    ${menuLink(item)}
    ${item.children ? menuItems(item.children) : ''}
  </li>
`
);
const menuItems = (items) => (
`
  <ul>
    ${items.map((item) => menuItem(item)).join('')}
  </ul>
`
);

const menu = (menu) => {
  const { items } = menu;
  return `
    <nav>
      ${menuItems(items)}
      <h1>
        Starter App<sup>Vanilla js</sup>
      </h1>
    </nav>
  `;
};
const section = (sectionContent) => {
  const { heading, content } = sectionContent;
  return `
    <section>
      <h3>${heading}</h3>
      ${content}
    </section>
  `  
};
const landingPage = (fields) => {
  const { mainMenu, hero, sections } = fields;
  return `
  <div id="landing-page">
    <header>
      ${menu(mainMenu.data)}
      ${hero}
    </header>
    <main>
      ${sections && sections.data.map((sectionContent) => section(sectionContent)).join('')}
    </main>
  <div>`
}
const basicPage = (fields) => {
  const { mainMenu, title, body } = fields;
  return `
  <div id="basic-page">
    <header>
      ${mainMenu ? menu(mainMenu.data): ''}
      <h2>${title}</h2>
    </header>
    <main>
      <section>${body}</section>
    </main>
  </div>
  `;
}
function render(content) {
  const { type } = content;
  if (type === 'landing_page') {
    return landingPage(content);
  }
  if (type === 'basic_page') {
    return basicPage(content);
  }
  return '<div>Unknown content type</div>';
}

export { render };