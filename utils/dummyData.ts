// africanShippingData.ts

export interface City {
    name: string;
    isCapital?: boolean;
    shippingCost: {
      express: number;  // Cost in USD for express shipping
      standard: number; // Cost in USD for standard shipping
      economy: number;  // Cost in USD for economy shipping
    };
    deliveryTimeRange: {
      express: string;  // e.g. "1-2 days"
      standard: string; // e.g. "3-5 days"
      economy: string;  // e.g. "7-10 days"
    };
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
      currency: "Nigerian Naira (NGN)",
      baseShippingRate: 35.50,
      states: [
        {
          name: "Lagos",
          cities: [
            { 
              name: "Lagos", 
              isCapital: true,
              shippingCost: {
                express: 42.99,
                standard: 28.50,
                economy: 15.75
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "7-10 days"
              }
            },
            { 
              name: "Ikeja",
              shippingCost: {
                express: 39.99,
                standard: 26.50,
                economy: 14.25
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-6 days",
                economy: "7-10 days"
              }
            },
            { 
              name: "Badagry",
              shippingCost: {
                express: 45.99,
                standard: 32.50,
                economy: 18.25
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-7 days",
                economy: "8-12 days"
              }
            },
          ],
        },
        {
            name: "Rivers",
            cities: [
                { 
                    name: "port-Harcourt", 
                    isCapital: true,
                    shippingCost: {
                      express: 48.99,
                      standard: 34.50,
                      economy: 19.75
                    },
                    deliveryTimeRange: {
                      express: "2-3 days",
                      standard: "4-6 days",
                      economy: "8-12 days"
                    }
                  }, 
            ]
        },
        {
          name: "Kano",
          cities: [
            { 
              name: "Kano", 
              isCapital: true,
              shippingCost: {
                express: 48.99,
                standard: 34.50,
                economy: 19.75
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-12 days"
              }
            },
            { 
              name: "Fagge",
              shippingCost: {
                express: 49.99,
                standard: 36.50,
                economy: 21.25
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-7 days",
                economy: "9-13 days"
              }
            },
            { 
              name: "Dala",
              shippingCost: {
                express: 50.99,
                standard: 37.50,
                economy: 22.25
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "5-7 days",
                economy: "9-13 days"
              }
            },
          ],
        },
        {
          name: "Abuja",
          cities: [
            { 
              name: "Abuja", 
              isCapital: true,
              shippingCost: {
                express: 40.99,
                standard: 27.50,
                economy: 16.25
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "7-10 days"
              }
            },
            { 
              name: "Gwagwalada",
              shippingCost: {
                express: 43.99,
                standard: 30.50,
                economy: 18.25
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-11 days"
              }
            },
            { 
              name: "Kuje",
              shippingCost: {
                express: 45.99,
                standard: 32.50,
                economy: 19.25
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-12 days"
              }
            },
          ],
        },
      ],
    },
    {
      name: "South Africa",
      code: "ZA",
      capital: "Pretoria (Administrative), Cape Town (Legislative), Bloemfontein (Judicial)",
      currency: "South African Rand (ZAR)",
      baseShippingRate: 32.75,
      states: [
        {
          name: "Gauteng",
          cities: [
            { 
              name: "Johannesburg", 
              isCapital: true,
              shippingCost: {
                express: 38.99,
                standard: 25.50,
                economy: 14.25
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "6-9 days"
              }
            },
            { 
              name: "Pretoria",
              shippingCost: {
                express: 38.99,
                standard: 25.50,
                economy: 14.25
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "6-9 days"
              }
            },
            { 
              name: "Soweto",
              shippingCost: {
                express: 40.99,
                standard: 27.50,
                economy: 15.75
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "7-10 days"
              }
            },
          ],
        },
        {
          name: "Western Cape",
          cities: [
            { 
              name: "Cape Town", 
              isCapital: true,
              shippingCost: {
                express: 39.99,
                standard: 26.50,
                economy: 15.25
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "7-10 days"
              }
            },
            { 
              name: "Stellenbosch",
              shippingCost: {
                express: 42.99,
                standard: 29.50,
                economy: 16.75
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-11 days"
              }
            },
            { 
              name: "George",
              shippingCost: {
                express: 45.99,
                standard: 32.50,
                economy: 18.75
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-7 days",
                economy: "9-12 days"
              }
            },
          ],
        },
        {
          name: "KwaZulu-Natal",
          cities: [
            { 
              name: "Durban", 
              isCapital: true,
              shippingCost: {
                express: 38.99,
                standard: 25.50,
                economy: 14.75
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "7-10 days"
              }
            },
            { 
              name: "Pietermaritzburg",
              shippingCost: {
                express: 42.99,
                standard: 29.50,
                economy: 16.75
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-11 days"
              }
            },
            { 
              name: "Newcastle",
              shippingCost: {
                express: 45.99,
                standard: 32.50,
                economy: 18.75
              },
              deliveryTimeRange: {
                express: "2-4 days",
                standard: "5-7 days",
                economy: "9-13 days"
              }
            },
          ],
        },
      ],
    },
    {
      name: "Egypt",
      code: "EG",
      capital: "Cairo",
      currency: "Egyptian Pound (EGP)",
      baseShippingRate: 33.25,
      states: [
        {
          name: "Cairo",
          cities: [
            { 
              name: "Cairo", 
              isCapital: true,
              shippingCost: {
                express: 37.99,
                standard: 25.50,
                economy: 14.75
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "7-10 days"
              }
            },
            { 
              name: "Helwan",
              shippingCost: {
                express: 40.99,
                standard: 28.50,
                economy: 16.25
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-11 days"
              }
            },
            { 
              name: "New Cairo",
              shippingCost: {
                express: 39.99,
                standard: 27.50,
                economy: 15.75
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-6 days",
                economy: "7-10 days"
              }
            },
          ],
        },
        {
          name: "Alexandria",
          cities: [
            { 
              name: "Alexandria", 
              isCapital: true,
              shippingCost: {
                express: 39.99,
                standard: 27.50,
                economy: 15.75
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "7-10 days"
              }
            },
            { 
              name: "Borg El Arab",
              shippingCost: {
                express: 44.99,
                standard: 31.50,
                economy: 18.25
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-7 days",
                economy: "9-12 days"
              }
            },
            { 
              name: "Abu Qir",
              shippingCost: {
                express: 43.99,
                standard: 30.50,
                economy: 17.75
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-12 days"
              }
            },
          ],
        },
        {
          name: "Giza",
          cities: [
            { 
              name: "Giza", 
              isCapital: true,
              shippingCost: {
                express: 38.99,
                standard: 26.50,
                economy: 15.25
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "7-10 days"
              }
            },
            { 
              name: "6th of October City",
              shippingCost: {
                express: 41.99,
                standard: 29.50,
                economy: 16.75
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-11 days"
              }
            },
            { 
              name: "Sheikh Zayed City",
              shippingCost: {
                express: 42.99,
                standard: 30.50,
                economy: 17.25
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-11 days"
              }
            },
          ],
        },
      ],
    },
    {
      name: "Algeria",
      code: "DZ",
      capital: "Algiers",
      currency: "Algerian Dinar (DZD)",
      baseShippingRate: 34.50,
      states: [
        {
          name: "Algiers",
          cities: [
            { 
              name: "Algiers", 
              isCapital: true,
              shippingCost: {
                express: 39.99,
                standard: 27.50,
                economy: 15.75
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "7-10 days"
              }
            },
            { 
              name: "Bab Ezzouar",
              shippingCost: {
                express: 40.99,
                standard: 28.50,
                economy: 16.25
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-6 days",
                economy: "7-11 days"
              }
            },
            { 
              name: "Dar El Beïda",
              shippingCost: {
                express: 41.99,
                standard: 29.50,
                economy: 16.75
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-11 days"
              }
            },
          ],
        },
        {
          name: "Oran",
          cities: [
            { 
              name: "Oran", 
              isCapital: true,
              shippingCost: {
                express: 41.99,
                standard: 29.50,
                economy: 16.75
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-6 days",
                economy: "7-11 days"
              }
            },
            { 
              name: "Es Sénia",
              shippingCost: {
                express: 43.99,
                standard: 31.50,
                economy: 17.75
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-12 days"
              }
            },
            { 
              name: "Bir El Djir",
              shippingCost: {
                express: 42.99,
                standard: 30.50,
                economy: 17.25
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-11 days"
              }
            },
          ],
        },
        {
          name: "Constantine",
          cities: [
            { 
              name: "Constantine", 
              isCapital: true,
              shippingCost: {
                express: 44.99,
                standard: 32.50,
                economy: 18.25
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-7 days",
                economy: "9-12 days"
              }
            },
            { 
              name: "El Khroub",
              shippingCost: {
                express: 46.99,
                standard: 34.50,
                economy: 19.25
              },
              deliveryTimeRange: {
                express: "2-4 days",
                standard: "5-7 days",
                economy: "10-14 days"
              }
            },
            { 
              name: "Hamma Bouziane",
              shippingCost: {
                express: 45.99,
                standard: 33.50,
                economy: 18.75
              },
              deliveryTimeRange: {
                express: "2-4 days",
                standard: "5-7 days",
                economy: "9-13 days"
              }
            },
          ],
        },
      ],
    },
    {
      name: "Morocco",
      code: "MA",
      capital: "Rabat",
      currency: "Moroccan Dirham (MAD)",
      baseShippingRate: 31.99,
      states: [
        {
          name: "Casablanca-Settat",
          cities: [
            { 
              name: "Casablanca",
              shippingCost: {
                express: 37.99,
                standard: 25.50,
                economy: 14.75
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "7-10 days"
              }
            },
            { 
              name: "Mohammedia",
              shippingCost: {
                express: 39.99,
                standard: 27.50,
                economy: 15.75
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-6 days",
                economy: "7-11 days"
              }
            },
            { 
              name: "Settat",
              shippingCost: {
                express: 41.99,
                standard: 29.50,
                economy: 16.75
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-12 days"
              }
            },
          ],
        },
        {
          name: "Rabat-Salé-Kénitra",
          cities: [
            { 
              name: "Rabat", 
              isCapital: true,
              shippingCost: {
                express: 37.99,
                standard: 25.50,
                economy: 14.75
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "7-10 days"
              }
            },
            { 
              name: "Salé",
              shippingCost: {
                express: 38.99,
                standard: 26.50,
                economy: 15.25
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "7-10 days"
              }
            },
            { 
              name: "Kenitra",
              shippingCost: {
                express: 40.99,
                standard: 28.50,
                economy: 16.25
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-11 days"
              }
            },
          ],
        },
        {
          name: "Marrakesh-Safi",
          cities: [
            { 
              name: "Marrakesh", 
              isCapital: true,
              shippingCost: {
                express: 39.99,
                standard: 27.50,
                economy: 15.75
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-6 days",
                economy: "7-11 days"
              }
            },
            { 
              name: "Safi",
              shippingCost: {
                express: 42.99,
                standard: 30.50,
                economy: 17.25
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-7 days",
                economy: "9-12 days"
              }
            },
            { 
              name: "Essaouira",
              shippingCost: {
                express: 44.99,
                standard: 32.50,
                economy: 18.25
              },
              deliveryTimeRange: {
                express: "2-4 days",
                standard: "5-7 days",
                economy: "9-13 days"
              }
            },
          ],
        },
      ],
    },
    {
      name: "Ghana",
      code: "GH",
      capital: "Accra",
      currency: "Ghanaian Cedi (GHS)",
      baseShippingRate: 36.25,
      states: [
        {
          name: "Greater Accra",
          cities: [
            { 
              name: "Accra", 
              isCapital: true,
              shippingCost: {
                express: 40.99,
                standard: 28.50,
                economy: 16.25
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-5 days",
                economy: "7-10 days"
              }
            },
            { 
              name: "Tema",
              shippingCost: {
                express: 42.99,
                standard: 30.50,
                economy: 17.25
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-6 days",
                economy: "7-11 days"
              }
            },
            { 
              name: "Madina",
              shippingCost: {
                express: 41.99,
                standard: 29.50,
                economy: 16.75
              },
              deliveryTimeRange: {
                express: "1-2 days",
                standard: "3-6 days",
                economy: "7-10 days"
              }
            },
          ],
        },
        {
          name: "Ashanti",
          cities: [
            { 
              name: "Kumasi", 
              isCapital: true,
              shippingCost: {
                express: 43.99,
                standard: 31.50,
                economy: 17.75
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-6 days",
                economy: "8-12 days"
              }
            },
            { 
              name: "Obuasi",
              shippingCost: {
                express: 45.99,
                standard: 33.50,
                economy: 18.75
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-7 days",
                economy: "9-13 days"
              }
            },
            { 
              name: "Mampong",
              shippingCost: {
                express: 47.99,
                standard: 35.50,
                economy: 19.75
              },
              deliveryTimeRange: {
                express: "2-4 days",
                standard: "5-7 days",
                economy: "10-14 days"
              }
            },
          ],
        },
        {
          name: "Western",
          cities: [
            { 
              name: "Sekondi-Takoradi", 
              isCapital: true,
              shippingCost: {
                express: 44.99,
                standard: 32.50,
                economy: 18.25
              },
              deliveryTimeRange: {
                express: "2-3 days",
                standard: "4-7 days",
                economy: "9-13 days"
              }
            },
            { 
              name: "Tarkwa",
              shippingCost: {
                express: 47.99,
                standard: 35.50,
                economy: 19.75
              },
              deliveryTimeRange: {
                express: "3-4 days",
                standard: "5-8 days",
                economy: "10-15 days"
              }
            },
            { 
              name: "Axim",
              shippingCost: {
                express: 49.99,
                standard: 37.50,
                economy: 21.25
              },
              deliveryTimeRange: {
                express: "3-5 days",
                standard: "6-9 days",
                economy: "11-16 days"
              }
            },
          ],
        },
      ],
    }
  ];
  
  export default africanShippingData;