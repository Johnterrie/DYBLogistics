"use client";

import { useState, useEffect } from "react";
import { useNigerianStates } from "@/app/_lib/hooks/useNigerianStates";

export const StateSelector = () => {
  const { locationDetails, loading } = useNigerianStates();
  const [selectedState, setSelectedState] = useState("Lagos");

  useEffect(() => {
    if (locationDetails.length > 0 && !locationDetails.includes("Lagos")) {
      setSelectedState("");
    }
  }, [locationDetails]);

  if (loading) {
    return <p>Loading states...</p>;
  }

  return (
    <select
      name="state"
      id="state"
      value={selectedState}
      onChange={(e) => setSelectedState(e.target.value)}
      className="appearance-none text-[12px] sm:text-[16px] w-[100%] outline-none "
    >
      <option value="">-- Select State --</option>
      {locationDetails.map((state, index) => (
        <option key={index} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};
