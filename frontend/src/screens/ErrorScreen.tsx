import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorScreen = () => {
  const error = useRouteError();

  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText
    : error instanceof Error
    ? error.message
    : "An unknown error occurred";

  return (
    <div className="error-screen flex flex-col items-start justify-end gap-1 absolute top-0 left-0 w-full h-full p-8 bg-cover bg-center" style={{backgroundImage: "url('https://media.giphy.com/media/f1ohcPEHABwWY/giphy.gif')"}}>
      <h1>Oops, something went wrong...</h1>
      <div>{errorMessage}</div>
    </div>
  );
};