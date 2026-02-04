export type Vehicle = {
  rentalCompanyId: string;
  engineCapacity: string;
  imageUrl?: string | null;
  brand: string;
  name: string;
  seatCapacity: number;
  pricePerDay: number;
  year: number;
  vehicleTypeSlug: "motorcycle" | "car";
  transmission: "Automatic" | "Manual";
  fuelType: "Petrol" | "Electric";
  stock: number;
};

export const dataVehicles: Vehicle[] = [
  {
    brand: "Honda",
    engineCapacity: "125cc",
    fuelType: "Petrol",
    name: "Honda Supra X",
    pricePerDay: 80000,
    rentalCompanyId: "cmkmoh33y0000zcvh3ry2bl9n",
    seatCapacity: 2,
    transmission: "Manual",
    vehicleTypeSlug: "motorcycle",
    year: 2018,
    stock: 3,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/13773170-1785-43ad-a73d-b024e112604b/HondaSupraX1252018.png",
  },
  {
    brand: "Honda",
    engineCapacity: "110cc",
    fuelType: "Petrol",
    name: "Honda Revo Fit",
    pricePerDay: 75000,
    rentalCompanyId: "cmkmoh33y0000zcvh3ry2bl9n",
    seatCapacity: 2,
    transmission: "Manual",
    vehicleTypeSlug: "motorcycle",
    year: 2019,
    stock: 2,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/d5d96ced-ff11-4a21-bbc9-e6bd0345cbc9/HondaRevoFit1102019.png",
  },
  {
    brand: "Yamaha",
    engineCapacity: "115cc",
    fuelType: "Petrol",
    name: "Yamaha Mio Sporty",
    pricePerDay: 75000,
    rentalCompanyId: "cmkmoh33y0000zcvh3ry2bl9n",
    seatCapacity: 2,
    transmission: "Automatic",
    vehicleTypeSlug: "motorcycle",
    year: 2012,
    stock: 2,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/30dc221b-5dd6-4a5a-8d1f-30b530547867/YamahaMioSporty1152012.png",
  },
  {
    brand: "Wuling",
    engineCapacity: "26.7 kWh",
    fuelType: "Electric",
    name: "Wuling Air EV",
    pricePerDay: 400000,
    rentalCompanyId: "cmkmoh33y0000zcvh3rygvcga",
    seatCapacity: 4,
    transmission: "Automatic",
    vehicleTypeSlug: "car",
    year: 2024,
    stock: 2,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/e9432457-7e12-4645-99e1-6cf956320c57/newairevproremovebgpreview.png",
  },
  {
    brand: "Toyota",
    engineCapacity: "1300cc",
    fuelType: "Petrol",
    name: "Avanza 1.3 Veloz",
    pricePerDay: 400000,
    rentalCompanyId: "cmkmoh33y0000zcvh3rygvcga",
    seatCapacity: 7,
    transmission: "Automatic",
    vehicleTypeSlug: "car",
    year: 2020,
    stock: 1,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/ded76f09-e6e5-4deb-81e3-211f1d98a32b/4100587457.png",
  },
  {
    brand: "Honda",
    engineCapacity: "1500cc",
    fuelType: "Petrol",
    name: "Honda BR-V Automatic",
    pricePerDay: 500000,
    rentalCompanyId: "cmkmoh33y0000zcvh3rygvcga",
    seatCapacity: 7,
    transmission: "Automatic",
    vehicleTypeSlug: "car",
    year: 2024,
    stock: 1,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/2f613616-21ac-4a4d-b56d-f799dab23ba9/brvtfw.png",
  },
  {
    brand: "Honda",
    engineCapacity: "160cc",
    fuelType: "Petrol",
    name: "Honda Stylo 160",
    pricePerDay: 170000,
    rentalCompanyId: "cmkmoh34q0001zcvhxzqgvcga",
    seatCapacity: 2,
    transmission: "Automatic",
    vehicleTypeSlug: "motorcycle",
    year: 2024,
    stock: 2,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/09910652-2b07-412c-b56a-c45effa4f16d/Stylo160ABSRoyalGreen.png",
  },
  {
    brand: "Honda",
    engineCapacity: "150cc",
    fuelType: "Petrol",
    name: "Honda CRF 150L",
    pricePerDay: 280000,
    rentalCompanyId: "cmkmoh34q0001zcvhxzqgvcga",
    seatCapacity: 2,
    transmission: "Manual",
    vehicleTypeSlug: "motorcycle",
    year: 2022,
    stock: 1,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/fec13eea-a6dc-43d9-a718-113add68ea73/pngcliparthondacrf150fhondacrf150lhondacrf150rhondacrfserieshondaracingcar.png",
  },
  {
    brand: "Yamaha",
    engineCapacity: "155cc",
    fuelType: "Petrol",
    name: "Yamaha NMAX Connected",
    pricePerDay: 160000,
    rentalCompanyId: "cmkmoh34q0001zcvhxzqgvcga",
    seatCapacity: 2,
    transmission: "Automatic",
    vehicleTypeSlug: "motorcycle",
    year: 2023,
    stock: 4,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/a526c5a4-7ce9-4734-8ef0-8ff8a4b9540e/nmaxturbosilver1.png",
  },

  {
    brand: "Yamaha",
    engineCapacity: "125cc",
    fuelType: "Petrol",
    name: "Yamaha Fazzio Hybrid",
    pricePerDay: 120000,
    rentalCompanyId: "cmkmoh3580002zcvhnob32dta",
    seatCapacity: 2,
    transmission: "Automatic",
    vehicleTypeSlug: "motorcycle",
    year: 2023,
    stock: 3,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/41ff2676-0c34-419d-9d58-4a69043554f3/fazzabupink.png",
  },
  {
    brand: "Honda",
    engineCapacity: "160cc",
    fuelType: "Petrol",
    name: "Honda PCX 160",
    pricePerDay: 170000,
    rentalCompanyId: "cmkmoh3580002zcvhnob32dta",
    seatCapacity: 2,
    transmission: "Automatic",
    vehicleTypeSlug: "motorcycle",
    year: 2023,
    stock: 4,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/27b09e5f-4c44-4ece-8df8-e083140a7ffa/HondaPCX160RoadsyncMatteBlack.png",
  },
  {
    brand: "Honda",
    engineCapacity: "150cc",
    fuelType: "Petrol",
    name: "Honda Vario 150",
    pricePerDay: 145000,
    rentalCompanyId: "cmkmoh35n0003zcvhqffdv1z8",
    seatCapacity: 2,
    transmission: "Automatic",
    vehicleTypeSlug: "motorcycle",
    year: 2020,
    stock: 6,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/e4428055-9a23-4bab-ad2f-cb43a3ed7fba/unnamed.png",
  },
  {
    brand: "Honda",
    engineCapacity: "160cc",
    fuelType: "Petrol",
    name: "Honda Vario 160",
    pricePerDay: 195000,
    rentalCompanyId: "cmkmoh35n0003zcvhqffdv1z8",
    seatCapacity: 2,
    transmission: "Automatic",
    vehicleTypeSlug: "motorcycle",
    year: 2024,
    stock: 3,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/38412489-41e1-468b-a7d8-3281ef5b0bc0/Vario160ABSGrandeMatteBlue.png",
  },
  {
    brand: "Honda",
    engineCapacity: "110cc",
    fuelType: "Petrol",
    name: "Honda Scoopy Stylish",
    pricePerDay: 130000,
    rentalCompanyId: "cmkmoh35n0003zcvhqffdv1z8",
    seatCapacity: 2,
    transmission: "Automatic",
    vehicleTypeSlug: "motorcycle",
    year: 2021,
    stock: 4,
    imageUrl:
      "https://1vhhu4ztmd.ucarecd.net/73c7df88-f643-4ea1-a783-b9a04ebb943b/optimizedproduk_foto1731480447_NewHondaScoopyVariantWebFashionBrown.png",
  },
];
