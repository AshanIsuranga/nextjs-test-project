'use client';

import { useSearchParams } from 'next/navigation';

export default function HomePage() {
  const searchParams = useSearchParams();
  const username = searchParams.get('username');

  const students = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 22,
      height: '5ft 9in',
      gender: 'Male',
      university: 'Oxford',
      degree: 'Computer Science',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 21,
      height: '5ft 6in',
      gender: 'Female',
      university: 'Harvard',
      degree: 'Economics',
    },
    {
      firstName: 'Alex',
      lastName: 'Johnson',
      age: 23,
      height: '6ft',
      gender: 'Non-binary',
      university: 'MIT',
      degree: 'Engineering',
    },
  ];

  return (
    <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <div className="font-semibold text-center text-3xl text-amber-600">
      
      <p className="mb-6">
        Welcome, <span className="font-semibold text-center text-3xl text-amber-600">{username ? username : 'Guest'}</span>!
      </p>
      </div>

      <h2 className="text-2xl font-semibold  mb-2">Student List</h2>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-400">
          <tr>
            <th className="border px-4 py-2 text-left">First Name</th>
            <th className="border px-4 py-2 text-left">Last Name</th>
            <th className="border px-4 py-2">Age</th>
            <th className="border px-4 py-2">Height</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2 text-left">University</th>
            <th className="border px-4 py-2 text-left">Degree</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border px-4 py-2 text-left">{student.firstName}</td>
              <td className="border px-4 py-2 text-left">{student.lastName}</td>
              <td className="border px-4 py-2 text-center">{student.age}</td>
              <td className="border px-4 py-2 text-center">{student.height}</td>
              <td className="border px-4 py-2 text-center">{student.gender}</td>
              <td className="border px-4 py-2 text-left">{student.university}</td>
              <td className="border px-4 py-2 text-left">{student.degree}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
