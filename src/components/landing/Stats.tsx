import Container from "../common/Container";

const stats = [
  {
    number: "95%",
    label: "ATS Compatibility",
  },
  {
    number: "10K+",
    label: "Resumes Optimized",
  },
  {
    number: "500+",
    label: "Interview Calls",
  },
];

export default function Stats() {
  return (
    <section className="py-10">

      <Container>

        <div className="grid md:grid-cols-3 gap-6">

          {stats.map((item) => (
            <div
              key={item.label}
              className="border border-zinc-800 bg-zinc-900/40 rounded-3xl p-8 text-center"
            >

              <h3 className="text-4xl font-bold text-violet-400">

                {item.number}

              </h3>

              <p className="text-zinc-400 mt-4">

                {item.label}

              </p>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
}