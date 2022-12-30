import { useEffect, useState } from "react";
import {
  useParams,
  Link,
  useSearchParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import PlaceList from "./PlaceList";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import Spinner from "../../shared/UIElements/Spinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./UserPlaces.css";

const UserPlaces = () => {
  const userId = useParams().userId;
  let location = useLocation();
  let navigate = useNavigate();
  const [pageParams, setPageParams] = useSearchParams(location.search);
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const [loadedData, setLoadedData] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:8000/api/places/user/${userId}?page=${pageParams.get(
            "page"
          )}`
        );
        setLoadedData(responseData);
        setLoadedPlaces(responseData.places);
      } catch (error) {}
    };
    fetchedData();
  }, [userId, sendRequest, pageParams.get("page")]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
  };
  const paginationHandler = () => {
    setPageParams(location.search);
  };
  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <Spinner asOverlay />}
      {!isLoading && loadedPlaces && loadedData && (
        <PlaceList places={loadedPlaces} onDeletePlace={placeDeletedHandler} />
      )}
      {!isLoading && loadedPlaces && loadedData && (
        <section className="pagination">
          {loadedData.currentPage !== 1 &&
            loadedData.previousPage !== 1 &&
            // <Link onClick={paginationHandler} to={`/${userId}/places?page=1`}>
            //   1
            // </Link>
            navigate({
              pathname: `/${userId}/places`,
              search: setPageParams({
                page: "1",
              }).toString(),
            })}
          {loadedData.hasPreviousPgae && (
            <>
              <Link
                onClick={paginationHandler}
                to={`/${userId}/places?page=${loadedData.previousPage}`}
              >
                {loadedData.previousPage}
              </Link>
              <Link
                onClick={paginationHandler}
                to={`/${userId}/places?page=${loadedData.currentPage}`}
                className="active"
              >
                {loadedData.currentPage}
              </Link>
            </>
          )}
          {loadedData.hasNextPage && (
            <Link
              onClick={paginationHandler}
              to={`/${userId}/places?page=${loadedData.nextPage}`}
            >
              {loadedData.nextPage}
            </Link>
          )}
          {loadedData.lastPage !== loadedData.currentPage &&
            loadedData.nextPage !== loadedData.lastPage && (
              <Link
                onClick={paginationHandler}
                to={`/${userId}/places?page=${loadedData.lastPage}`}
              >
                {loadedData.lastPage}
              </Link>
            )}
        </section>
      )}
    </>
  );
};
export default UserPlaces;
