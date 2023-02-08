import useSWR from 'swr';
import instance from '../helpers/axios.helpers';
import { fetcher } from '../helpers/fetcher';
import {
  Publication,
  PublicationsResponse,
} from '../interfaces/publications.interface';

function usePublications() {
  const { data, error, isLoading, mutate } = useSWR<PublicationsResponse>(
    '/publications',
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

function usePublication(id: string) {
  const { data, error, isLoading, mutate } = useSWR<PublicationsResponse>(
    `/publications/${id}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

function createPublication(data: Publication) {
  return instance.post('/publications', data);
}

function updatePublication(id: string, data: Publication) {
  return instance.patch(`/publications/${id}`, data);
}

function deletePublication(id: string) {
  return instance.delete(`/publications/${id}`);
}

function votePublication(id: string) {
  return instance.post(`/publications/${id}/votes`);
}

export {
  usePublications,
  createPublication,
  usePublication,
  updatePublication,
  deletePublication,
  votePublication,
};
