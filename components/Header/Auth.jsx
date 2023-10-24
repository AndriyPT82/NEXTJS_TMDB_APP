"use client";
import React from "react";
import { SecondaryButton, PrimaryButton, IconButton } from "../index.js";

export function Auth() {
  const isAuthorised = false;

  return (
    <>
      {!isAuthorised ? (
        <>
          <SecondaryButton
            text="Sign up"
            onClick={() =>
              window.alert("Redirect to Sign Up (Under Development)")
            }
          />
          <PrimaryButton
            text="Login"
            $icon="/icons/bell.svg"
            onClick={() => window.alert("Redirect to Login (Under Development)")}
          />
        </>
      ) : (
        <>
          <IconButton $icon="/icons/bell.svg" />
          <IconButton
            $icon="/pictures/auth.png"
            width={"50px"}
            height={"50px"}
          />
        </>
      )}
    </>
  );
}
