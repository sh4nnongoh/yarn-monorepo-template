import React, { FC, ReactElement } from "react";
const TestState: FC<{
  value: string,
  setValue: (val: string) => void
}> = ({ value, setValue }): ReactElement => (
  <div>
    <input defaultValue={value} onChange={(e) => setValue(e.target.value)} />
  </div>
);
export default TestState;
