export type Vehicle = {
  id: number;
  type: "motorcycle" | "car";
  name: string;
  brand: string;
  pricePerDay: number;
  seatCapacity: number;
  fuelType: "Gas" | "Electric";
  transmission: "Matic" | "Manual";
  engineCapacity: string;
  imageUrl?: string;
};

export const dataVehicles: Vehicle[] = [
  {
    id: 1,
    type: "motorcycle",
    name: "YAMAHA NMAX TURBO 2025",
    brand: "YAMAHA",
    pricePerDay: 100000,
    seatCapacity: 2,
    fuelType: "Gas",
    transmission: "Matic",
    engineCapacity: "155cc",
  },
];
