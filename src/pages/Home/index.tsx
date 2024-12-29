import { About, Availability, Experience, Footer, Main, OurTeam, Projects, Specializations} from "../../components";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Main/>
      <Specializations/>
      <About/>
      <Projects/>
      <Experience/>
      <Availability/>
      <OurTeam/>
      <Footer/>
    </div>
  )
}
