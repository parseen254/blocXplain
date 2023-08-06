"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import robot from "@/public/images/robot.png";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <div className="flex w-full items-center justify-between">
          <div></div>
          <ThemeToggle />
        </div>
        <div className="m-auto flex max-w-sm flex-col justify-between">
          <span
            className={`-mt-14 inline-block text-[48px] font-bold text-black dark:text-white`}
          >
            Bloc-Xplain
          </span>
          <p className="pb-6 font-medium">
            Next.js, Tailwind CSS and shadcn-ui boilerplate that includes all
            you need to build amazing projects. No need to spend time on
            configuring the basic needs of a project. I did that for you -
          </p>

          <div className="">
            <a
              href="https://github.com/parseen254/blocXplain"
              target="_blank"
              rel="noreferrer"
              className="pb-1 dark:text-zinc-800 text-zinc-100"
            >
              <Button size="xl" className="w-full font-bold" variant="brand">
                Repo{" "}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#192c57] p-9">
        <Image src={robot} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}
