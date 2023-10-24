import { Outlet } from "react-router-dom";
import { AppBar } from "../components/AppBar/AppBar";
import { Suspense, useEffect } from "react";
import { PageLoader } from "components/Loaders/Loaders";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading } from "redux/selectors";
import { setIsLoading } from "redux/slice";
import { preLoadingQuery } from "redux/preLoadingApi";
import { PendingPage } from "pages/PendingPage/PendingPage";

export const Layout = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    async function fetchData() {
      dispatch(setIsLoading(true));
      try {
        await preLoadingQuery();
      } catch (error) {
      } finally {
        dispatch(setIsLoading(false));
      }
    }

    fetchData();
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <PendingPage />
      ) : (
        <>
          <AppBar />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </main>
        </>
      )}
    </>
  );
};
