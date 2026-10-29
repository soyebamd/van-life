import Data from "./pawtronsData.json";

import PawtronCard from "./components/cardContent";

export default function Pawtrons() {
  const petData = Data.map((pawtron) => (
    <PawtronCard key={pawtron.id} pawtron={pawtron} />
  ));

  return (
    <div className=" border-6 border-amber-50 shadow-[inset_0_0_2px_1px_rgba(0,0,0,0.1)] p-4 text-center bg-pink-100 ">
      <header>
        <h2 className="text-4xl font-bold text-rose-700 mb-4">
          Our <span className="italic text-rose-800">purr</span>fectly happy{" "}
          <span className="italic text-rose-800">paw</span>trons
        </h2>

        <svg
          className="fill-rose-700 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          height="35px"
          viewBox="0 -960 960 960"
          width="35px"
        >
          <path d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
        </svg>
      </header>

      {/* CARD CONTAINER */}
      <main className="flex flex-col flex-wrap  justify-center content-center items-center  text-sm md:flex-row ">
        {petData}
      </main>

      {/* FOOTER */}
      <footer className="py-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35px"
          viewBox="0 -960 960 960"
          width="35px"
          className="mx-auto fill-rose-700"
        >
          <path d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
        </svg>
      </footer>
    </div>
  );
}
