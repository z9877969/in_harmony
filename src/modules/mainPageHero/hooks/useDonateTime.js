'use client';

import { useState } from 'react';

const useDonateTime = () => {
  const [donateTime, setDonateTime] = useState(false);
  return { donateTime, setDonateTime };
};

export default useDonateTime;
