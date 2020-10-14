import { useEffect } from 'react';

import { RouteComponentProps, withRouter } from 'react-router';

interface INavbarProps extends RouteComponentProps {
}

const ScrollToTop: React.FunctionComponent<INavbarProps> = (props) => {
  useEffect(() => {
    const unlisten = props.history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [props.history]);

  return (null);
}

export default withRouter(ScrollToTop);