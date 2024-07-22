"use client"
import { SessionProvider } from 'next-auth/react';
import React from 'react';

type ClientSessionProviderProps = {
  children: React.ReactNode;
};

export default function ClientSessionProvider({
  children,
}: ClientSessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
