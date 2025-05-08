// africanShippingData.ts

export interface City {
  name: string;
  isCapital?: boolean;
}

export interface State {
  name: string;
  cities: City[];
}

export interface Country {
  name: string;
  code: string;
  capital: string;
  currency: string;
  baseShippingRate: number; // Base shipping rate in USD
  states: State[];
}

const africanShippingData: Country[] = [
  {
    name: "Nigeria",
    code: "NG",
    capital: "Abuja",
    currency: "Nigerian Naira (₦)",
    baseShippingRate: 35.50,
    states: [
      {
        name: "Lagos",
        cities: [
          { 
            name: "Lagos", 
            isCapital: true,
          },
          { 
            name: "Ikeja",
          },
          { 
            name: "Badagry",
          },
        ],
      },
      {
        name: "Rivers",
        cities: [
          { 
            name: "port-Harcourt", 
            isCapital: true,
          }, 
        ]
      },
      {
        name: "Kano",
        cities: [
          { 
            name: "Kano", 
            isCapital: true,
          },
          { 
            name: "Fagge",
          },
          { 
            name: "Dala",
          },
        ],
      },
      {
        name: "Abuja",
        cities: [
          { 
            name: "Abuja", 
            isCapital: true,
          },
          { 
            name: "Gwagwalada",
          },
          { 
            name: "Kuje",
          },
        ],
      },
    ],
  },
  {
    name: "South Africa",
    code: "ZA",
    capital: "Pretoria (Administrative), Cape Town (Legislative), Bloemfontein (Judicial)",
    currency: "South African Rand (R)",
    baseShippingRate: 32.75,
    states: [
      {
        name: "Gauteng",
        cities: [
          { 
            name: "Johannesburg", 
            isCapital: true,
          },
          { 
            name: "Pretoria",
          },
          { 
            name: "Soweto",
          },
        ],
      },
      {
        name: "Western Cape",
        cities: [
          { 
            name: "Cape Town", 
            isCapital: true,
          },
          { 
            name: "Stellenbosch",
          },
          { 
            name: "George",
          },
        ],
      },
      {
        name: "KwaZulu-Natal",
        cities: [
          { 
            name: "Durban", 
            isCapital: true,
          },
          { 
            name: "Pietermaritzburg",
          },
          { 
            name: "Newcastle",
          },
        ],
      },
    ],
  },
  {
    name: "Egypt",
    code: "EG",
    capital: "Cairo",
    currency: "Egyptian Pound (£E)",
    baseShippingRate: 33.25,
    states: [
      {
        name: "Cairo",
        cities: [
          { 
            name: "Cairo", 
            isCapital: true,
          },
          { 
            name: "Helwan",
          },
          { 
            name: "New Cairo",
          },
        ],
      },
      {
        name: "Alexandria",
        cities: [
          { 
            name: "Alexandria", 
            isCapital: true,
          },
          { 
            name: "Borg El Arab",
          },
          { 
            name: "Abu Qir",
          },
        ],
      },
      {
        name: "Giza",
        cities: [
          { 
            name: "Giza", 
            isCapital: true,
          },
          { 
            name: "6th of October City",
          },
          { 
            name: "Sheikh Zayed City",
          },
        ],
      },
    ],
  },
  {
    name: "Algeria",
    code: "DZ",
    capital: "Algiers",
    currency: "Algerian Dinar (د.ج)",
    baseShippingRate: 34.50,
    states: [
      {
        name: "Algiers",
        cities: [
          { 
            name: "Algiers", 
            isCapital: true,
          },
          { 
            name: "Bab Ezzouar",
          },
          { 
            name: "Dar El Beïda",
          },
        ],
      },
      {
        name: "Oran",
        cities: [
          { 
            name: "Oran", 
            isCapital: true,
          },
          { 
            name: "Es Sénia",
          },
          { 
            name: "Bir El Djir",
          },
        ],
      },
      {
        name: "Constantine",
        cities: [
          { 
            name: "Constantine", 
            isCapital: true,
          },
          { 
            name: "El Khroub",
          },
          { 
            name: "Hamma Bouziane",
          },
        ],
      },
    ],
  },
  {
    name: "Morocco",
    code: "MA",
    capital: "Rabat",
    currency: "Moroccan Dirham (د.م.)",
    baseShippingRate: 31.99,
    states: [
      {
        name: "Casablanca-Settat",
        cities: [
          { 
            name: "Casablanca",
          },
          { 
            name: "Mohammedia",
          },
          { 
            name: "Settat",
          },
        ],
      },
      {
        name: "Rabat-Salé-Kénitra",
        cities: [
          { 
            name: "Rabat", 
            isCapital: true,
          },
          { 
            name: "Salé",
          },
          { 
            name: "Kenitra",
          },
        ],
      },
      {
        name: "Marrakesh-Safi",
        cities: [
          { 
            name: "Marrakesh", 
            isCapital: true,
          },
          { 
            name: "Safi",
          },
          { 
            name: "Essaouira",
          },
        ],
      },
    ],
  },
  {
    name: "Ghana",
    code: "GH",
    capital: "Accra",
    currency: "Ghanaian Cedi (₵)",
    baseShippingRate: 36.25,
    states: [
      {
        name: "Greater Accra",
        cities: [
          { 
            name: "Accra", 
            isCapital: true,
          },
          { 
            name: "Tema",
          },
          { 
            name: "Madina",
          },
        ],
      },
      {
        name: "Ashanti",
        cities: [
          { 
            name: "Kumasi", 
            isCapital: true,
          },
          { 
            name: "Obuasi",
          },
          { 
            name: "Mampong",
          },
        ],
      },
      {
        name: "Western",
        cities: [
          { 
            name: "Sekondi-Takoradi", 
            isCapital: true,
          },
          { 
            name: "Tarkwa",
          },
          { 
            name: "Axim",
          },
        ],
      },
    ],
  }
];

export default africanShippingData;