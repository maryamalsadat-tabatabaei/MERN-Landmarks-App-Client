import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PlaceList from "./PlaceList";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import Spinner from "../../shared/UIElements/Spinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

const UserPlaces = () => {
  const userId = useParams().userId;
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const responsedata = await sendRequest(
          `http://localhost:8000/api/places/user/${userId}`
        );
        setLoadedPlaces(responsedata.places);
      } catch (error) {}
    };
    fetchedData();
  }, [userId, sendRequest]);

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedPlaces((prevPlaces) =>
      prevPlaces.filter((place) => place.id !== deletedPlaceId)
    );
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <Spinner asOverlay />}
      {!isLoading && loadedPlaces && (
        <PlaceList places={loadedPlaces} onDeletePlace={placeDeletedHandler} />
      )}
    </>
  );
};
export default UserPlaces;
