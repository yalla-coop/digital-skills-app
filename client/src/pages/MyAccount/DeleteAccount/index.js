import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../context/auth';
import { Users } from '../../../api-calls';
import { navRoutes } from '../../../constants';
import Confirm from './Confirm';
import Success from './Success';

const DeleteAccount = ({ type }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { logout } = useAuth();

  const handleDelete = async () => {
    setLoading(true);
    const { error } = await Users.deleteUserById();

    if (error) {
      setLoading(false);
      setError(error.message);
    } else {
      setLoading(false);
      await logout();
      return history.push(navRoutes.GENERAL.DELETE_ACCOUNT_SUCCESS);
    }
  };

  switch (type) {
    case 'deleteConfirm':
      return (
        <Confirm handleDelete={handleDelete} loading={loading} error={error} />
      );
    case 'deleteSuccess':
      return <Success history={history} />;

    default:
      break;
  }
};

export default DeleteAccount;
