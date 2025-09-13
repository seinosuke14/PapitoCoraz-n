import Image from "next/image";
import Button from "@/UI/Buttons/buton-hero";
import "./hero-style.scss";




    export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content-1">
                <div className="hero-left">
                    <Image src="/images/hero-img-test.png" alt="papitocorazon hero" fill priority className="hero-bg"
                    />
                        {/* <img className="logo-img1" src="/images/hero-img-test.png" alt="imagen" /> */}
                     <div className="hero-text">
                        <h1>Economia y Leyes</h1>
                        <h2>Aprende, calcula y gestiona tu pensión de alimentos. Herramientas y guías para cumplir responsablemente.</h2>
                        <div className="hero-buttons">
                        <Button variant="primary" href="/consultar">Consultar Deuda</Button>
                        <Button variant="primary" href="/calcular">calcular Pensión</Button>
                        </div>
                        
                    </div>
                </div>
               

            </div>
            <div className="hero-content-2">
                {/* <div className="hero-img-2">
                    <img src="https://media.tenor.com/wiMyvo8ZFN0AAAAm/pinguim-penguin.webp" alt="" />
                </div> */}
                <div className="hero-right">
                    <ul className="hero-info">
                        <li>Solucionamos tus dudas</li>
                        <li>Resolvemos tus inseguridades</li>
                        <li>Apoyamos tu desarrollo como padre</li>
                        <li>Apuntamos a ordenar tu economia</li>
                        <li>Te orientamos con leyes y derechos basicos</li>
                    </ul>
                </div>
            </div>


            
            
            
            
            
            
            
            
            {/* /* <div className="hero-content">
                <p>Aprende, calcula y gestiona tu pensión de alimentos. Herramientas y guías para cumplir responsablemente.</p>
            </div>
            <div className="hero-buttons">
                <Button variant="primary" href="/calcular" >Calcular Pensión</Button>
                <Button variant="secondary" href="/consultar">Consultar Deuda</Button>
            </div> */}


        </section>
    );
    }