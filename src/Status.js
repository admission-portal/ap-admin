import { useContext, useEffect, useState } from 'react';
import { UserContext } from './contexts/user';

export default () => {
  const [status, setStatus] = useState(false);
  const { getSession } = useContext(UserContext);

  useEffect(() => {
    getSession()
      .then(() => {
        setStatus(true);
      });
  }, [status]);
};
