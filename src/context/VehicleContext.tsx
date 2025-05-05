'use client';

import React, { createContext, useContext, useState } from 'react';

type Vehicle = {
  id: number;
  make: string;
  model: string;
  year: number;
};

const VehicleContext = createContext<{
  vehicles: Vehicle[];
  setVehicles: (vehicles: Vehicle[]) => void;
}>({
  vehicles: [],
  setVehicles: () => {},
});

export function VehicleProvider({ children }: { children: React.ReactNode }) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2021 },
    { id: 3, make: 'Ford', model: 'Focus', year: 2019 }
  ]);

  return (
    <VehicleContext.Provider value={{ vehicles, setVehicles }}>
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicles() {
  return useContext(VehicleContext);
}
