"use client";

import { Button } from "@/components/ui/button";
import { FileText, FolderGit2 } from "lucide-react";
import { TypingRole } from "./typing-role";
import { CodeStreamBackground } from "./code-stream-background";
import { NavLink } from "./nav-link";

export function Hero() {
  return (
    <section
      id="hero"
      className="
    relative
    flex
    min-h-screen
    flex-col
    items-center
    justify-center
    overflow-hidden
    px-6
    py-24
    text-center
  "
      aria-label="Introduction"
    >
      <CodeStreamBackground intensity={1.5} className="opacity-90 blur-[1px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Sai Pranav Madupu
          </h1>

          <TypingRole />
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Designing and deploying AI-powered systems with real-world impact.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="min-w-40 transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
          >
            <NavLink href="#projects">
              <FolderGit2 className="size-4" aria-hidden />
              View Projects
            </NavLink>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="min-w-40 transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
