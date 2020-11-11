import {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {MyContext} from '../../App';

export const WithAuthRedirect = props => {
  const {isLogged} = useContext(MyContext)
  const history = useHistory()

  if (!isLogged) {
    history.push('/beta')
  }

  return props.children;
}