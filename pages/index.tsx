import React from "react";
import DefaultLayout from "components/Layouts/DefaultLayout";
import { Button } from "components/shared/Button/Button";
import ActionConfirm from "components/shared/ActionConfirm/ActionConfirm";

export default function Home() {
  return (
    <div id="app">
      <Button className="mr-10">Tailwind Styled Button inside #app</Button>

      <ActionConfirm
        action={() => Promise.resolve()}
        heading="Are you sure"
        message="Bla bla"
      >
        Opens Modal
      </ActionConfirm>
    </div>
  );
}
