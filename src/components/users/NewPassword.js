import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import Spinner from "./../../shared/UIElements/Spinner";
import ErrorModal from "./../../shared/UIElements/ErrorModal";
import { useHttpClient } from "./../../shared/hooks/http-hook";
import { VALIDATOR_MINLENGTH } from "../../shared/util/Validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./Auth.css";

const NewPassword = () => {
  const [userId, setUserId] = useState();
  const passwordToken = useParams().token;
  const navigate = useNavigate();
  const { error, isLoading, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:8000/api/users/new-password"
        );
        setUserId(responseData.userId);
      } catch (err) {}
      fetchedData();
    };
  }, []);

  const newPasswordSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("passwordToken", passwordToken, "userId", userId);
    try {
      await sendRequest(
        "http://localhost:8000/api/users/new-password",
        "POST",
        JSON.stringify({
          newPassword: formState.inputs.password.value,
          passwordToken: passwordToken,
          userId,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      navigate("/login");
    } catch (err) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <Spinner asOverlay />}
        <form onSubmit={newPasswordSubmitHandler}>
          <Input
            element="input"
            id="password"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 6 characters."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Update Password
          </Button>
        </form>
      </Card>
    </>
  );
};

export default NewPassword;
