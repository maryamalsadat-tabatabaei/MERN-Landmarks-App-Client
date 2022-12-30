import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import Spinner from "./../../shared/UIElements/Spinner";
import ErrorModal from "./../../shared/UIElements/ErrorModal";
import { useHttpClient } from "./../../shared/hooks/http-hook";
import { VALIDATOR_EMAIL } from "../../shared/util/Validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./Auth.css";

const Reset = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { error, isLoading, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const resetSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const responseData = await sendRequest(
        "http://localhost:8000/api/users/resetPassword",
        "POST",
        JSON.stringify({
          email: formState.inputs.email.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      navigate("/");
    } catch (err) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <Spinner asOverlay />}
        <form onSubmit={resetSubmitHandler}>
          <Input
            element="input"
            id="email"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Reset Password
          </Button>
        </form>
      </Card>
    </>
  );
};

export default Reset;
