import Button from "../../shared/FormElements/Button";
import Card from "../../shared/UIElements/Card";
import * as pathName from "../../Routes/Path";

const ErrorPage = () => {
  return (
    <div className="center">
      <Card>
        <h2>Oops! Page not Fount.</h2>
        <Button to={pathName.users}>Back to home page</Button>
      </Card>
    </div>
  );
};
export default ErrorPage;
