
import "./usersection.scss";
import Link from "next/link";


type Props = {

    isLoggedIn?: boolean;
    userName?: string;
    onLoggout?: () => void;
}


export default function UserSection ({
    isLoggedIn = false,
    userName = "Diego Bascur",
    onLoggout

}: Props){
    const handlelogout = () => {
        if(onLoggout){
            onLoggout();
        } else{
            console.log("cerrando sesion");
        }
    };
    if(isLoggedIn){
        return(
            <div className="user-info">
                <span className="user-icon">👤</span>
                <div className="button-user-info">
                <span className="user-name">{userName}</span>
                <button className="logout-btn" onClick={handlelogout}>
                    Desconectar
                </button>
                </div>
                
            </div>
        );
    }
    return(
    <div className="auth">
        <Link href="/login" className="log-in">👤 Iniciar Sesion </Link> 
        <Link href="/logout" className="log-out">Registrar</Link>
    </div>
)
}
