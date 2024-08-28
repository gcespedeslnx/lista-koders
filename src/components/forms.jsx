import clsx from "clsx"
import { useForm } from "react-hook-form"
import { useState } from "react"



export default function Formulario(){
    const [koders, setKoders] =useState([]);
    const [text, setText] = useState("");
    const {register, 
           handleSubmit,
           reset,  formState: { errors } } = useForm();
           
        function addKoder(todoText){
            setKoders([...koders, todoText]);
            reset();
        }
        
        function onSubmit(data){
            addKoder(data.text);
        }
    return(
        <section>
        <form onSubmit={handleSubmit(onSubmit)}
         >

        <article className="border border-white rounded p-4 w-full grid-cols-[4rem_auto_2rem] gap-2 grid-rows-2">
           <form action="">
            <div className="col-start-2 row-start-1 gap-2"> 
                <input type="text"  {...register("nombre")} className={clsx("bg-black text-white border-white/50 rounded p-2 w-full",
                        "bg-red-500/10",{"bg-red-500/10":errors.text}  )}
                      placeholder="Ingrese su nombre">
                 </input>
            </div>
            <br />
         <div className="col-start-2 row-start-2">  
            <input type="text"  {...register("apellido")}  className={clsx("bg-black text-white border-white/50 rounded p-2 w-full",
                "bg-red-500/10",{"bg-red-500/10":errors.text})}
                placeholder="Ingrese su apellido"> 
            </input>
         </div>
         <br />
         <div className="col-start-2 row-start-3"> 
            <input type = "text"  {...register("liga")}
                className={clsx("bg-black text-white border-white/50 rounded p-2 w-full",
                "bg-red-500/10",{"bg-red-500/10":errors.text})}
                placeholder="Ingrese liga GitHub"              
                >
            </input>
            </div>
            <button className="bg-teal-500 text-black font-bold rounded p-2" > Registrar</button>
        </form>

        </article>

          
        
                     
        </form>
        </section>
    );
}