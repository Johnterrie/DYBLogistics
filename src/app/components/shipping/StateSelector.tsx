"use client";

import { useNigerianStates } from "@/app/_lib/hooks/useNigerianStates";

export const StateSelector = () => {
  const { locationDetails, loading } = useNigerianStates();
  console.log("these are the states in nigeria", locationDetails);

  if (loading) {
    return <p>Loading states...</p>;
  }

  return (
    <select name="state" id="state">
      <option value="">-- Select State --</option>
      {locationDetails.map((state, index) => (
        <option key={index} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
};
