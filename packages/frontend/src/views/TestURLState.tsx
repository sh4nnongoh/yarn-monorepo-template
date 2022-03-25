import React, { FC, ReactElement } from "react";
import { useParams } from "react-router-dom";
const TestURLState: FC = (): ReactElement => {
  const { state } = useParams<{state: string}>();
  return (
    <div>
      <input defaultValue={state || "Default State"} />
    </div>
  );
};
export default TestURLState;
