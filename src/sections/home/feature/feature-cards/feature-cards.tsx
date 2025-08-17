import "./feature-card.scss"
import Button from "@/UI/Buttons/buton-hero";

type featureCardProps = {
    icon: React.ReactNode;
    title: string;
    descriptions: string;
    href?: string;
};

export default function FeatureCard({
    icon, title,descriptions,href
}:featureCardProps ){
    return (
        <div className="feature-card">
            <div className="icon">{icon}</div>
            <h3>{title}</h3>
            <p>{descriptions}</p>
            <Button variant="primary" href={href}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                </Button>
        </div>
    );
}