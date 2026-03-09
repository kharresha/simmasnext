import { redirect } from 'next/navigation';

export default function RootPage() {
  // Langsung lempar ke halaman login biar rapi
  redirect('/auth/login');
}
