import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Sports" />
      <Button name="Comedy" />
      <Button name="Games" />
      <Button name="News" />
      <Button name="Cricket" />
      <Button name="Bhajan" />
      <Button name="Songs" />
      <Button name="Inspiration" />
      <Button name="Cooking" />
    </div>
  );
};

export default ButtonList;
