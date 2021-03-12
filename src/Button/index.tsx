import React from "react";
import Button from "./c";

const ButtonComponent = () => {

  const [state, setState] = React.useState<'large' | 'middle' | 'small'>('middle');

  return (
    <React.Fragment>
      <Button onClick={() => setState('small')}>samll</Button>
      <Button onClick={() => setState('middle')}>middle</Button>
      <Button onClick={() => setState('large')}>large</Button>
      <br></br>
      <br></br>
      <Button size={state}>Button</Button>
    </React.Fragment>
  )
};

export default ButtonComponent;