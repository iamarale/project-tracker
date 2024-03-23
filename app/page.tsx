import Projects from "@/components/Projects";
import DarkMode from "@/components/DarkMode"
import Header from "@/components/Header";
export default function page() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold">My awesome Projects</h1>
        <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum accusamus aspernatur asperiores, at nam  natus qui.</p>
      </div>
      <main>

        <Projects />
      </main>
    </div >
  )
}

