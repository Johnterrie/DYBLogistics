"use client";
import { useMemo, useState } from "react";
import africanCountriesData from "../../../../../utils/dummyData";
import { State, City } from "../../../../../utils/dummyData";

const defaultValue = "default";

const defaultState = {
  country: defaultValue,
  state: defaultValue,
  city: defaultValue,
};

const defaultAdditional = {
  currency: "Nigerian Naira (₦)",
  weight: "1",
};

const calculateRate = ({
  from,
  to,
  additional,
}: {
  from: typeof defaultState;
  to: typeof defaultState;
  additional: typeof defaultAdditional;
}) => {
  const baseRates = africanCountriesData.flatMap((country) => {
    return {
      baseShippingRate: country.baseShippingRate,
      countryName: country.name,
    };
  });
  const baseRate = baseRates.find(
    (country) => country.countryName === from.country
  )?.baseShippingRate;
  const distanceFactor = from.country !== to.country ? 2 : 1;
  const weightFactor = parseInt(additional.weight || "1", 10);
  const rate = (baseRate || 0) * distanceFactor * weightFactor;
  return `${additional.currency} ${rate}`;
};

function RateCalculator() {
  const [from, setFrom] = useState(defaultState);
  const [to, setTo] = useState(defaultState);
  const [additional, setAdditional] = useState(defaultAdditional);
  const [rate, setRate] = useState<string | null>(null);

  const countries = useMemo(
    () => africanCountriesData.map((country) => country.name),
    []
  );

  const currencies = useMemo(
    () => africanCountriesData.map((country) => country.currency),
    []
  );

  const getStates = (countryName: string): State[] => {
    return (
      africanCountriesData.find((country) => country.name === countryName)
        ?.states || []
    );
  };

  const getCities = (countryName: string, stateName: string): City[] => {
    const country = africanCountriesData.find((c) => c.name === countryName);
    return country?.states.find((s) => s.name === stateName)?.cities || [];
  };

  const fromStates = useMemo(() => getStates(from.country), [from.country]);
  const fromCities = useMemo(
    () => getCities(from.country, from.state),
    [from.country, from.state]
  );
  const toStates = useMemo(() => getStates(to.country), [to.country]);
  const toCities = useMemo(
    () => getCities(to.country, to.state),
    [to.country, to.state]
  );

  const renderSelect = (
    label: string,
    value: string,
    options: string[],
    onChange: (val: string) => void,
    placeholder: string,
    fixedWidth: boolean
  ) => (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full ${
        fixedWidth && "md:w-[250px]"
      } border border-gray-shade/40 text-gray-dark/80 focus:outline-none px-4 py-3 cursor-pointer`}
    >
      <option value={defaultValue} disabled>
        {placeholder}
      </option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  return (
    <section className="w-full h-full md:overflow-y-auto flex flex-col gap-8 bg-gray-light">
      <header className="bg-white w-full p-10 flex flex-col">
        <h2 className="font-bold text-xl md:text-3xl">My Rates Calculator</h2>
        <p className="font-[600] md:text-lg text-gray-dark/85">
          Find out how much delivery will cost
        </p>
      </header>

      <form className="bg-white mx-auto w-[90%] md:w-[95%] p-5 rounded-xl flex flex-col gap-5">
        {/* From Section */}
        <label className="flex flex-col gap-3">
          <h2 className="font-[600] md:text-lg text-gray-dark/85">
            Where are you shipping from?
          </h2>
          <div className="flex flex-col items-center md:flex-row gap-5">
            {renderSelect(
              "From Country",
              from.country,
              countries,
              (val) => {
                setFrom({
                  country: val,
                  state: defaultValue,
                  city: defaultValue,
                });
              },
              "Country",
              true
            )}
            {renderSelect(
              "From State",
              from.state,
              fromStates.map((s) => s.name),
              (val) => {
                setFrom((prev) => ({
                  ...prev,
                  state: val,
                  city: defaultValue,
                }));
              },
              "State",
              true
            )}
            {renderSelect(
              "From City",
              from.city,
              fromCities.map((c) => c.name),
              (val) => {
                setFrom((prev) => ({ ...prev, city: val }));
              },
              "City",
              true
            )}
          </div>
        </label>

        {/* To Section */}
        <label className="flex flex-col gap-3">
          <h2 className="font-[600] md:text-lg text-gray-dark/85">
            Where are you shipping to?
          </h2>
          <div className="flex flex-col items-center md:flex-row gap-5">
            {renderSelect(
              "To Country",
              to.country,
              countries,
              (val) => {
                setTo({
                  country: val,
                  state: defaultValue,
                  city: defaultValue,
                });
              },
              "Country",
              true
            )}
            {renderSelect(
              "To State",
              to.state,
              toStates.map((s) => s.name),
              (val) => {
                setTo((prev) => ({ ...prev, state: val, city: defaultValue }));
              },
              "State",
              true
            )}
            {renderSelect(
              "To City",
              to.city,
              toCities.map((c) => c.name),
              (val) => {
                setTo((prev) => ({ ...prev, city: val }));
              },
              "City",
              true
            )}
          </div>
        </label>

        {/* Currency & Weight */}
        <div className="w-full flex flex-col md:flex-row items-center gap-5">
          <label
            htmlFor="currency"
            className="flex flex-col gap-2 w-full md:w-1/2"
          >
            <h3 className="text-gray-dark/70 font-semibold">Select Currency</h3>
            {renderSelect(
              "currency",
              additional.currency,
              [...currencies, "United States Dollar ($)"],
              (value) => {
                setAdditional((prev) => ({
                  ...prev,
                  currency: value,
                }));
              },
              "select currency",
              false
            )}
          </label>

          <label
            htmlFor="Weight"
            className="flex flex-col gap-2 w-full md:w-1/2"
          >
            <h3 className="text-gray-dark/70 font-semibold">
              Select Weight (kg)
            </h3>
            {renderSelect(
              "Weight",
              additional.weight,
              ["1", "5", "10", "15", "25"],
              (value) => {
                setAdditional((prev) => ({
                  ...prev,
                  weight: value,
                }));
              },
              "select weight",
              false
            )}
          </label>
        </div>

        {/* Submit Button */}
        <div className="w-full flex flex-col items-center justify-center">
          <button
            type="button"
            className="btn-large w-fit"
            onClick={() => {
              const estimated = calculateRate({ from, to, additional });
              setRate(estimated);
              setFrom(defaultState);
              setTo(defaultState);
              setAdditional(defaultAdditional);
            }}
          >
            Get Quote
          </button>
        </div>

        {/* Rate Display */}
        {rate && (
          <div className="mt-4 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg text-center font-semibold">
            Estimated Shipping Rate: {rate}
          </div>
        )}
      </form>
    </section>
  );
}

export default RateCalculator;
