import { Analytics } from '@vercel/analytics/react';
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <>
      <Homepage />
      <Analytics />
    </>
  )
}
