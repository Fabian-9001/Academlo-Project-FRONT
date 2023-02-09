import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { VotesResponse } from '../interfaces/votes.inerface';
import instance from '../helpers/axios.helpers';

function useVotes(id: string) {
  const { data, error, isLoading, mutate } = useSWR<VotesResponse>(
    `/users/${id}/votes`,
    fetcher
  );
  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

function votePublication(id: string) {
  return instance.post(`/publications/${id}/vote`);
}

export { useVotes, votePublication };
