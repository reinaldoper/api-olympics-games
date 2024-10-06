"use client";
import { useEffect, useState } from "react";
import { IAthlete } from "../types/athleteType";
import Image from "next/image";

export default function AthletePage() {
  const [token, setToken] = useState<string>('');
  const [athletes, setAthletes] = useState<IAthlete | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const requestOptions: RequestInit = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(token)
          }
        };

        const response = await fetch('http://localhost:3001/athlete', requestOptions);

        if (!response.ok) {
          throw new Error('Failed to fetch athletes');
        }

        const data = await response.json();
        setAthletes(data);
      } catch (err: unknown) { 
        if (err instanceof Error) {
          setError(err.message); 
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    if (token) {
      fetchAthletes();
    }
  }, [token]);

  if (error) {
    return <div className="flex justify-center m-auto">Error: {error}</div>;
  }

  if (!athletes) {
    return <div className="flex justify-center m-auto">Loading...</div>;
  }

  const { message } = athletes;

  return (
    <div>
      <h1 className="flex justify-center text-3xl font-bold text-purple-700 mb-4 mt-6">
        Olympics Athletes from Brazil
      </h1>
      <ul className="flex flex-wrap justify-center w-11/12 lg:w-3/4 m-auto gap-6">
        {message.map((athlete) => (
          <li
            key={athlete.id}
            className="flex flex-col items-center bg-gradient-to-r from-gray-300 to-gray-400 p-6 rounded-xl shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-2 text-center">
              {athlete.instagramBio}
            </h2>
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-700 mb-1">
                Followers: {athlete.instagramFollowersCount}
              </p>
              <p className="text-sm text-gray-700 mb-3">
                Following: {athlete.instagramFollowingCount}
              </p>
              <a
                href={`/athlete/${athlete.id}`}
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"
              >
                <Image
                  src={`data:image/jpeg;base64,${athlete.instagramImageUrl}`}
                  alt={athlete.name}
                  width={80}
                  height={80}
                  priority
                  className="rounded-full mb-3"
                />
              </a>
              <a
                href={athlete.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"
              >
                Instagram Profile
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>

  );
}