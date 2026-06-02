import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured";
  let message = "Something went wrong";

  if(error.status === 500){
    message = JSON.parse(error.data).message;
  }

  if(error.status === 404){
    title = "Not found.";
    message = "could not find resource or page"
  }

  return (
    <>
    <MainNavigation></MainNavigation>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
