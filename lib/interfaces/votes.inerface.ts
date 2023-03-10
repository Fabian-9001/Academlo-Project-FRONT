export interface VotesResponse {
  results: Results;
}

export interface Results {
  count: number;
  totalPages: number;
  currentPage: number;
  results: Vote[];
}

export interface Vote {
  publication_id: string;
  profile_id: string;
  created_at: string;
  updated_at: string;
  Publication: Publication;
}

export interface Publication {
  id: string;
  profile_id: string;
  publication_type_id: string;
  title: string;
  description: string;
  content: string;
  picture: null;
  city_id: string;
  image_url: null;
  created_at: string;
  updated_at: string;
  votes_count: number;
  city: City;
  publication_type: PublicationType;
  tags: Tag[];
}

export interface City {
  id: string;
  name: string;
  state: State;
}

export interface State {
  id: string;
  name: string;
  Country: Tag;
}

export interface Tag {
  id: string;
  name: string;
}

export interface PublicationType {
  id: string;
  name: string;
  description: string;
}
