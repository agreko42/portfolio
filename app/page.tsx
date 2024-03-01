import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
export default function Home(props : any) {

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection language={props.language}/>
      <AboutSection language={props.language}/>
      <ProjectsSection language={props.language}/>
    </main>
  )
}
