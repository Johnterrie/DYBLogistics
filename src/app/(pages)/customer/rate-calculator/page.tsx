"use client";
import { useMemo, useState } from "react";
import africanCountriesData from "../../../../../utils/dummyData";
import { State, City } from "../../../../../utils/dummyData";

const defaultValue = "default";

function RateCalculator() {
  const [from, setFrom] = useState({
    country: defaultValue,
    state: defaultValue,
    city: defaultValue,
  });
  const [to, setTo] = useState({
    country: defaultValue,
    state: defaultValue,
    city: defaultValue,
  });

  // Derived data
  const countries = useMemo(
    () => africanCountriesData.map((country) => country.name),
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

  // UI Helper
  const renderSelect = (
    label: string,
    value: string,
    options: string[],
    onChange: (val: string) => void,
    placeholder: string
  ) => (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-[250px] border border-gray-shade/40 text-gray-dark/80 focus:outline-none px-4 py-3 cursor-pointer"
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
    <section className="w-full h-screen md:overflow-y-auto flex flex-col gap-8 bg-gray-light">
      <header className="bg-white w-full p-10 flex flex-col">
        <h2 className="font-bold text-xl md:text-3xl">My Rates Calculator</h2>
        <p className="font-[600] md:text-lg">
          Find out how much delivery will cost
        </p>
      </header>

      <form className="bg-white mx-auto w-[90%] md:w-[95%] p-5 rounded-xl flex flex-col gap-5">
        {/* From Section */}
        <label className="flex flex-col gap-3">
          <h2 className="font-[600] md:text-lg">
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
              "Country"
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
              "State"
            )}
            {renderSelect(
              "From City",
              from.city,
              fromCities.map((c) => c.name),
              (val) => {
                setFrom((prev) => ({ ...prev, city: val }));
              },
              "City"
            )}
          </div>
        </label>

        {/* To Section */}
        <label className="flex flex-col gap-3">
          <h2 className="font-[600] md:text-lg">Where are you shipping to?</h2>
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
              "Country"
            )}
            {renderSelect(
              "To State",
              to.state,
              toStates.map((s) => s.name),
              (val) => {
                setTo((prev) => ({ ...prev, state: val, city: defaultValue }));
              },
              "State"
            )}
            {renderSelect(
              "To City",
              to.city,
              toCities.map((c) => c.name),
              (val) => {
                setTo((prev) => ({ ...prev, city: val }));
              },
              "City"
            )}
          </div>
        </label>
        <div className="w-full flex flex-col items-center justify-center">
          <button className="btn-large w-fit">Get Quote</button>
        </div>
      </form>
    </section>
  );
}

export default RateCalculator;
