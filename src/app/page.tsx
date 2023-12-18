import { Suspense } from "react" // Suspense é um component, e eu posso usar ele por volta de um component que demora para ser carregado

import { GitHubProfile } from "@/components/github-profile";
import Loading from "./loading";
import { Teste } from "@/components/github-profile copy";

export default  function Home() {
  return (
    <div>
      <h1>Home!</h1>

      <Suspense fallback={<Loading/>}>
        <Teste/>  
      </Suspense>
      
        <GitHubProfile/>
    </div>
  )

}
