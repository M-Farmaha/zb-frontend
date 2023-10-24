import { PageLoader } from "../../components/Loaders/Loaders";
import { Title } from "./PendingPage-styled";

export const PendingPage = () => {
  return (
    <>
      <Title>Please, wait for the server to warm up...</Title>
      <PageLoader />
    </>
  );
};
