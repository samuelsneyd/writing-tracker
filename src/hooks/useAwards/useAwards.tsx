import * as React from 'react';
import { awards, AwardMap } from './awards';

const useAward = () => {
  const [availableAwards, setAvailableAwards] = React.useState<AwardMap>();

  React.useEffect(() => {
    setAvailableAwards(awards);
  }, []);

  return availableAwards;
};

export default useAward;
