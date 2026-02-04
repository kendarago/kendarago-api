export type RentalCompanies = {
  id: string;
  name: string;
  address: string;
  operatingHours: string;
  contact: string;
  imageUrl?: string;
  city: string;
};

export const dataRentalCompanies: RentalCompanies[] = [
  {
    id: "cmkmoh33y0000zcvh3ry2bl9n",
    name: "Roda Bundar",
    address: "Gg. VI Langgar No.16, Gubeng, Surabaya, Jawa Timur",
    city: "Surabaya",
    operatingHours: "09:00 - 21:00",
    contact: "6282332473454",
  },
  {
    id: "cmkmoh33y0000zcvh3rygvcga",
    name: "TransGo",
    address:
      "Jl. Gatot Subroto No.18-20 8, RT.8/RW.2, Kuningan, Jakarta Selatan, DKI Jakarta",
    city: "Jakarta",
    operatingHours: "06:30 - 21:00",
    contact: "6285718495924",
  },
  {
    id: "cmkmoh34q0001zcvhxzqgvcga",
    name: "Rentcang",
    address: "Jl. Juwingan No.96, Gubeng, Surabaya, Jawa Timur",
    city: "Surabaya",
    operatingHours: "09:00 - 21:00",
    contact: "6285147383594",
  },
  {
    id: "cmkmoh3580002zcvhnob32dta",
    name: "GORENT",
    address: "Jl. Alun-Alun Pucang Rinenggo No.3, Gubeng, Surabaya, Jawa Timur",
    city: "Surabaya",
    operatingHours: "06:00 - 23:00",
    contact: "6281211141400",
  },
  {
    id: "cmkmoh35n0003zcvhqffdv1z8",
    name: "Rental Motor Surabaya Kota",
    address: "Jl. Margo Rukun XII No.10, Bubutan, Surabaya, Jawa Timur",
    city: "Surabaya",
    operatingHours: "06:00 - 23:00",
    contact: "6281232336938",
  },
];
