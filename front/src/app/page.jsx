import dynamic from "next/dynamic";

const CSRLanding = dynamic(() => import("@/components/LandingPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CSRLanding />
    </>
  );
}
