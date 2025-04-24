import React from "react";
import Header from "./Header";
import ASide from "./ASide";
import { observer } from "mobx-react-lite";

const NavigationWrapper = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsOpen(open);
    };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <ASide toggleDrawer={toggleDrawer} isOpen={isOpen} />
    </>
  );
};

export default observer(NavigationWrapper);
