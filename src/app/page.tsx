import Link from "next/link"
import { Button } from "@mijn-ui/react-button"
import {
  BookIcon,
  EslintIcon,
  GithubIcon,
  NextjsIcon,
  TailwindCssIcon,
} from "@/components/icons"
import ThemeToggler from "@/components/theme-toggler"

export default function Home() {
  return (
    <main className="flex flex-col gap-6 items-center py-20 lg:py-40 min-h-screen">
      <div className="text-center flex items-center flex-col gap-6 max-w-screen-lg px-4 sm:px-8 relative">
        <div className="w-full -top-14 lg:-top-20 right-5 flex items-center justify-end absolute">
          <ThemeToggler
            color="secondary"
            variant="text"
            className="text-base"
            radius="full"
          />
        </div>
        <h1 className="bg-gradient-to-br from-main-text to-muted-text/70 bg-clip-text text-3xl/[1.2] font-bold tracking-tight text-transparent sm:text-4xl/[1.2] sm:font-extrabold lg:text-5xl/[1.2] md:w-3/4 mb-6">
          NextJS Template with MijnUI components
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="w-full border rounded-md py-6 px-4 flex flex-col items-center justify-center text-center">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-main-text bg-accent lg:h-12 lg:w-12">
              <NextjsIcon className="size-full" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Next.js</h3>
            <p className="text-muted-text">
              Fast by default, with config optimized for performance.
            </p>
          </div>
          <div className="w-full border rounded-md py-6 px-4 flex flex-col items-center justify-center text-center">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-main-text bg-accent lg:h-12 lg:w-12">
              <TailwindCssIcon className="size-full" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Tailwind CSS</h3>
            <p className="text-muted-text">
              A utility-first CSS framework for rapid UI development.
            </p>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 w-full border rounded-md py-6 px-4 flex flex-col items-center justify-center text-center">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full p-1.5 text-main-text bg-accent lg:h-12 lg:w-12">
              <EslintIcon className="size-full" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Eslint Prettier</h3>
            <p className="text-muted-text">
              For clean, consistent, and error-free code.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link
              target="_blank"
              href={"https://mijn-ui.vercel.app/docs/next-js"}
            >
              <BookIcon />
              Documentation
            </Link>
          </Button>
          <Button asChild color="secondary" variant={"outline"}>
            <Link
              target="_blank"
              href={"https://github.com/mijn-ui/nextjs-template"}
            >
              <GithubIcon />
              Github
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
