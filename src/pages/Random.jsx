import { useState } from 'react';

import { usePrevious } from '../hooks/hooks';

export default function Random () {
  const [blackWhite, setBlackWhite] = useState('black');
  
  const prev = usePrevious(blackWhite);

  return (
    <>
      <p>Previous: {prev}</p>
      <p>Current Value: {blackWhite}</p>
      <button
        type="button"
        onClick={() => {
          if (blackWhite == 'black') {
            setBlackWhite('white');
            return;
          }
          setBlackWhite('black');
        }}
      >
        Toggle
      </button>
    </>
  );
}

