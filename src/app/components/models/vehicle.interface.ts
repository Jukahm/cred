export interface Serie {
  name: string;
  id: string;
}

export interface Model {
  name: string;
  id: string;
}

export interface Brand {
  name: string;
  id: string;
}

export interface Vehicle {
  id: string;
  registerYear: number;
  kms: number;
  licensePlate: string;
  serie: Serie | null;
  model: Model | null;
  brand: Brand | null;
  price: number;
  priceB2B: number;
}
