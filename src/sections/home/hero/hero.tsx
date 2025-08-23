import Image from "next/image";
import Button from "@/UI/Buttons/buton-hero";
import "./hero-style.scss";




    export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p>Aprende, calcula y gestiona tu pensión de alimentos.
                    Herramientas y guías para cumplir responsablemente.</p>
            </div>
            <div className="hero-buttons">
                <Button variant="primary" href="/calcular" >Calcular Pensión</Button>
                <Button variant="secondary" href="/consultar">Consultar Deuda</Button>
            </div>


        </section>
    );
    }