import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const getErrorMessage = (error: any): string => {
  if (isRouteErrorResponse(error)) {
    return error.statusText;
  } else if (error instanceof Error) {
    return error.message;
  } else {
    return "An unknown error occurred";
  }
};

const BACKGROUND_IMAGE_URL = "https://media.giphy.com/media/f1ohcPEHABwWY/giphy.gif";

export const ErrorScreen = () => {
  const error = useRouteError();
  const errorMessage = getErrorMessage(error);

  return (
    <div
      className="flex flex-col items-start justify-end gap-1 absolute top-0 left-0 w-full h-full p-8 bg-cover bg-center"
      style={{ backgroundImage: `url('${BACKGROUND_IMAGE_URL}')` }}
    >
      <h1 className="text-center text-4xl">Oops, something went wrong...</h1>
      <div className="text-xl">{errorMessage}</div>
    </div>
  );
};
