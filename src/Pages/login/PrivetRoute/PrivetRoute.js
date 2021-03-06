import React from "react";
import Button from "@restart/ui/esm/Button";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const PrivetRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <Button
          variant="primary"
          className="btn btn-primary my-5 px-3"
          disabled
        >
          {" "}
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivetRoute;
