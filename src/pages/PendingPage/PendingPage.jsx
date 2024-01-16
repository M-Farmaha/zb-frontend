import { PageLoader } from "../../components/Loaders/Loaders";
import { Title } from "./PendingPage-styled";

export const PendingPage = () => {
  return (
    <>
      <Title>
        The first load may take more time according to server's cold start.
        Please wait a little...
      </Title>
      <PageLoader />
    </>
  );
};
