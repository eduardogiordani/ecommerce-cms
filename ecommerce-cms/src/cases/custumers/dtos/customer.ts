export interface StateDTO {
    id?: string;
    name: string;
    ibge: string;
    acronym: string;
}

export interface CityDTO {
  id?: string;
  name: string;
  ibge: string;
  state: string;
}

export interface CustomerDTO {
  id?: string;
  name: string;
  address: string;
  zipCode: string;
  city: CityDTO;
}