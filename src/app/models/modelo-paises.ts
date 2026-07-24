export interface ModeloPaises {
  name: {
    common: string;
    official: string;
  };
  codes: {
    alpha_3: string;
    alpha_2: string;
  };
  capitals: Array<{
    name: string;
  }>;
  region: string;
  subregion: string;
  population: number;
  area: {
    kilometers: number;
  };
  flag: {
    url_png: string;
    url_svg: string;
    emoji: string;
  };
  languages: Array<{
    name: string;
  }>;
  currencies: Array<{
    code: string;
    name: string;
    symbol: string;
  }>;
  continents: string[];
  borders: Array<{
    alpha_3: string;
    common: string;
  }>;
  classification: {
    dependency: boolean;
    un_member: boolean;
  };
  links: {
    google_maps: string;
    wikipedia: string;
  };
}
