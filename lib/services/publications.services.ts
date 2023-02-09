import useSWR from 'swr';
import instance from '../helpers/axios.helpers';
import { fetcher } from '../helpers/fetcher';
import {
  Publication,
  PublicationResponse,
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
  const { data, error, isLoading, mutate } = useSWR<PublicationResponse>(
    `/publications/${id}`,
    fetcher
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

function useMyPublications(id: string) {
  const { data, error, isLoading, mutate } = useSWR<PublicationsResponse>(
    `/users/${id}/publications`,
    fetcher
  );
  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

function createPublication(data: Publication) {
  return instance.post('/publications', data);
}

function deletePublication(id: string) {
  return instance.delete(`/publications/${id}`);
}

export {
  usePublications,
  usePublication,
  useMyPublications,
  createPublication,
  deletePublication,
};
