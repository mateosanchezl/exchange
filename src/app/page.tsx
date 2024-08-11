import Image from "next/image";
import ConverterSection from "@/components/ConverterSection";

export default function Home() {
  return (
    <main className="bg-slate-800 flex min-h-screen flex-col items-center justify-between p-24">
      <ConverterSection />
    </main>
  );
}
