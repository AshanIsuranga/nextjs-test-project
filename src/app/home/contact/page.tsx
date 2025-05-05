'use client';

import { useVehicles } from '../../../context/VehicleContext';

export default function ContactPage() {
  const { vehicles } = useVehicles();

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Contact Page</h1>

      <h2 className="text-xl mt-6 mb-2">Vehicle List </h2>
      <ul className="list-disc pl-6">
        {vehicles.map((v) => (
          <li key={v.id}>
            {v.make} {v.model} ({v.year})
          </li>
        ))}
      </ul>
    </div>
  );
}
