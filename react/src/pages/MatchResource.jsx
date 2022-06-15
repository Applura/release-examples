
const MatchResource = ({ resource, children }) => {
  if (!resource) {
    return null;
  }
  const Match = children.find((component) => component.props.type === resource.type);
  const Default = children.find((component) => 'default' in component.props);
  return Match || Default || null;
}

export default MatchResource;
