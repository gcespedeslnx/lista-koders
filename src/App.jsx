import KodersCards from "./components/kodercards"
import Formulario from "./components/forms"

export default function App(){
  return(
    <main className="w-full h-screen flex items-center flex-col p-4 gap-4">
      <h1 className ="text-3xl font-bold">Lista de koders</h1>
      <section className="flex flex-cols-2 gap-2 w-full max-w-screen-sm">
            <Formulario/>
            <KodersCards/>
                  
          
        
      
           
      </section>
    </main>
  );
}
