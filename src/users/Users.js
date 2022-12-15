import UsersList from "./UsersList";

const Users = () => {
  const DUMMY_USERS = [
    {
      id: "u1",
      name: "Maryam",
      image:
        "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
      places: 3,
    },
  ];

  return <UsersList users={DUMMY_USERS} />;
};

export default Users;
