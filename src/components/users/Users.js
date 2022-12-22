import { useEffect, useState } from "react";
import UsersList from "./UsersList";
import Spinner from "../../shared/UIElements/Spinner";
import ErrorModal from "../../shared/UIElements/ErrorModal";
import { useHttpClient } from "./../../shared/hooks/http-hook";

const Users = () => {
  const [loadedUsers, setLoadedUsers] = useState();
  const { error, isLoading, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:8000/api/users"
        );

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <>
      {<ErrorModal error={error} onClear={clearError} />}
      {isLoading && <Spinner />}
      {!isLoading && loadedUsers && <UsersList users={loadedUsers} />}
    </>
  );
};

export default Users;
