export type RentalCompanies = {
  name: string;
  address: string;
  operatingHours: string;
  contact: string;
  imageUrl?: string;
  city: string;
};

export const dataRentalCompanies: RentalCompanies[] = [
  {
    name: "Roda Bundar",
    address: "Gg. VI Langgar No.16, Gubeng, Surabaya, Jawa Timur",
    city: "Surabaya",
    operatingHours: "09:00 - 21:00",
    contact: "6282332473454",
  },
  {
    name: "Rentcang",
    address: "Jl. Juwingan No.96, Gubeng, Surabaya, Jawa Timur",
    city: "Surabaya",
    operatingHours: "09:00 - 21:00",
    contact: "6285147383594",
  },
  {
    name: "GORENT",
    address: "Jl. Alun-Alun Pucang Rinenggo No.3, Gubeng, Surabaya, Jawa Timur",
    city: "Surabaya",
    operatingHours: "06:00 - 23:00",
    contact: "6281211141400",
  },
  {
    name: "Rental Motor Surabaya Kota",
    address: "Jl. Margo Rukun XII No.10, Bubutan, Surabaya, Jawa Timur",
    city: "Surabaya",
    operatingHours: "06:00 - 23:00",
    contact: "6281232336938",
  },
];
