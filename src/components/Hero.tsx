import { Web3Wines } from "../images";

export function Hero() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center bg-cover items-center bg-hero-pattern bg-no-repeat">
      <div className="container mx-auto grid justify-items-center">
        <img src={Web3Wines} alt="Web3 Wines" />
      </div>
    </div>
  );
}
