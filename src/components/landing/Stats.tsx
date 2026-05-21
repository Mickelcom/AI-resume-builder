"use client";

import Container from "../common/Container";

import CountUp from "react-countup";

import { useInView } from
  "react-intersection-observer";

const stats = [
  {
    number: 95,
    suffix: "%",
    label: "ATS Compatibility",
  },
  {
    number: 10000,
    suffix: "+",
    label: "Resumes Optimized",
  },
  {
    number: 500,
    suffix: "+",
    label: "Interview Calls",
  },
];

export default function Stats() {

  const { ref, inView } = useInView({

    triggerOnce: true,

    threshold: 0.4,
  });

  return (
    <section
      ref={ref}
      className="py-14"
    >

      <Container>

        <div className="grid md:grid-cols-3 gap-6">

          {stats.map((item) => (

            <div
              key={item.label}
              className="
                group
                border border-zinc-800
                bg-zinc-900/40
                rounded-3xl
                p-8
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-violet-500/40
                hover:bg-zinc-900
                hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]
              "
            >

              <h3
                className="
                  text-4xl
                  font-bold
                  text-violet-400
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              >

                {inView && (

                  <CountUp
                    end={item.number}
                    duration={2.5}
                    separator=","
                  />

                )}

                {item.suffix}

              </h3>

              <p
                className="
                  text-zinc-400
                  mt-4
                  transition-colors
                  duration-300
                  group-hover:text-zinc-200
                "
              >

                {item.label}

              </p>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}