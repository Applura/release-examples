function render(content) {
    const { title, body } = content;
    return `
    <div>
        <h1>${title}</h1>
        <div class="content">${body}</div>
    </div>
    `;
}

export { render };