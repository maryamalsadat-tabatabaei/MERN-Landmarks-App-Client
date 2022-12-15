import Button from "../../shared/FormElements/Button";
import * as pathName from "../../Routes/Path";

const PageNotFound = () => {
  <>
    <div>Page not Fount.</div>
    <Button to={pathName.users}>Return to home page</Button>
  </>;
};
export default PageNotFound;
