import React from "react";
import { useHuddle01Web } from "@huddle01/react/hooks";
import Button from "./Button"; // Import the Button component from the same directory

const SendButton = ({ event, disabled }) => {
  const { send } = useHuddle01Web();

  return (
    <div>
      <Button disabled={disabled} onClick={() => send(event)}>
        {event}
      </Button>
    </div>
  );
};

export default SendButton;
