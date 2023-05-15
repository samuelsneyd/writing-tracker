import * as React from 'react';
import { useState, useEffect } from 'react';
import { awards, AwardMap } from './awards';

const useAward = () => {
  const [availableAwards, setAvailableAwards] = useState<AwardMap>();

  useEffect(() => {
    setAvailableAwards(awards);
  }, []);

  return availableAwards;
};

export default useAward;
