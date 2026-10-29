export default function Card({ children }) {
  return (
    <section
      className="bg-white my-3 shadow-sm border-2 flex flex-col gap-4 border-rose-200 max-w-xs rounded-tr-2xl 
    rounded-bl-2xl overflow-hidden p-4 md:m-3 hover:shadow-md transition-all  duration-150 ease-in-out hover:scale-110"
    >
      {children}
    </section>
  );
}
