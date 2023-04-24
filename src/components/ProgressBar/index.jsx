import React, { memo, useRef } from 'react';

function ProgressBar({ x }) {
  // const { removeError } = useError();
  const ref = useRef();
  // let val = 5;
  // const progress = () => {
  //   ref.current.style.width = `${val}%`;
  //   val += 5;
  // };
  // const interval = setInterval(() => progress(), 500);
  // setTimeout(() => {
  //   clearInterval(interval);
  //   removeError(x);
  // }, 10000);

  return (
    <div className="p-1 bg-red-300 h-3 relative overflow-hidden">
      <div className="anim" />
    </div>
  );
}

export default memo(ProgressBar);
