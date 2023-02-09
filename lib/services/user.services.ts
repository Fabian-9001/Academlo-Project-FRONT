import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { UserResponse } from '../interfaces/user.interface';

function useUser() {
  const { data, error, isLoading, mutate } = useSWR<UserResponse>(
    '/users/user-info',
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { useUser };
