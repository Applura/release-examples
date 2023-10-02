import React from "react";
import LandingPage from "./pages/LandingPage";
import BasicPage from "./pages/BasicPage";

/**
 * PageTypes maps server resource types to the component that should render them.
 */
const PageTypes = {
  landing_page: LandingPage,
  basic_page: BasicPage,
};

/**
 * App receives the current resource and/or problem and renders the application interface.
 *
 * @param resource
 *   The current resource.
 * @param problem
 *   The last problem encountered, if any, such as a client or server error.
 */
const App = ({ resource, problem }) => {
  // Extract the type of the current resource.
  const { type } = resource;
  // Look up the appropriate component to render this resource.
  const Page = PageTypes[type];
  // Render the resource from its fields.
  return <Page fields={resource} />;
};

export default App;
