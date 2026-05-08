const cards = [
  {
    title: "ATS Score",
    value: "82%",
  },
  {
    title: "Resumes",
    value: "12",
  },
  {
    title: "Templates",
    value: "5",
  },
];

export default function StatsCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
        >

          <p className="text-zinc-400 text-sm">

            {card.title}

          </p>

          <h2 className="text-3xl font-bold text-violet-400 mt-3">

            {card.value}

          </h2>

        </div>

      ))}

    </div>
  );
}