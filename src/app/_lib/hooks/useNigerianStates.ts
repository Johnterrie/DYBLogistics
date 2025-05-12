"use client";

import { useEffect, useState } from "react";

export const useNigerianStates = () => {
  const [locationDetails, setLocationDetails] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const res = await fetch("https://nga-states-lga.onrender.com/fetch");
        const data = await res.json();
        setLocationDetails(data);
      } catch (error) {
        console.error("Failed to fetch location data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocationData();
  }, []);

  return { locationDetails, loading };
};
