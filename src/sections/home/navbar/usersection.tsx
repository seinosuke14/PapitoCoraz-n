"use client";
import "./usersection.scss";
import Link from "next/link";
import { googleProvider, auth } from "@/libs/firebase/clients";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, User, signOut } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";


type Props = {

    isLoggedIn?: boolean;
    userName?: string;
    onLoggout?: () => void;
}


export default function UserSection ({
    isLoggedIn,
    userName,  
    onLoggout

}: Props){
    const [user,setUser] = useState<User | null>(null);
    const sessionActive = typeof isLoggedIn === "boolean" ? isLoggedIn : !!user;

    const displayName = 
    userName??
    user?.displayName ??
    user?.email ??
    "Usuario";

    const photo = user?.photoURL;

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (u) => {
            setUser(u);
           // if (u){
            //  const token = await u.getIdToken();
               //  await fetch("/api/session", { headers: { Authorization: `Bearer ${token}` } });
            //  }
        });
        return () => unsub();
    },[]);

     const handleLoginGoogle = useCallback(async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // aquí ya quedas autenticado y onAuthStateChanged actualizará la UI
    } catch (err) {
      console.error("Error Google Sign-In:", err);
      alert("No se pudo iniciar sesión con Google.");
    }
  }, []);
  const handleLoginEmail = useCallback(
    async (email: string, password: string) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.error("Error Email Sign-In:", err);
        alert("Revisa tu correo y contraseña.");
      }
    },
    []
  );
  const handleRegisterEmail = useCallback(
    async (email: string, password: string) => {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.error("Error Email Sign-Up:", err);
        alert("No se pudo crear la cuenta.");
      }
    },
    []
  );

  const handleLogout = useCallback(async () => {
    try {
      await signOut(auth);
      onLoggout?.();
    } catch (err) {
      console.error("Error al cerrar sesión:", err);
    }
  }, [onLoggout]);

    if(sessionActive){
        return(
            <div className="user-info">
                {photo ? (
  <img
    src={photo}
    alt="Foto de perfil"
    className="user-photo"
  />
) : (
  <span className="user-icon">👤</span>
)}
                <div className="button-user-info">
                <span className="user-name">{displayName}</span>
                <button className="logout-btn" onClick={handleLogout}>
                    Desconectar
                </button>
                </div>
                
            </div>
        );
    }
    return(
     <div className="auth">
      {/* Botón directo Google */}
      <button className="log-in" onClick={handleLoginGoogle}>
        👤 Iniciar sesión con Google
      </button>

      {/* Si tienes una página con formulario de email/password */}
      <Link href="/login" className="log-in-alt">
        Iniciar sesión
      </Link>

      {/* Corrijo el link: decía /logout pero el texto era "Registrar" */}
      <Link href="/register" className="log-out">
        Registrar
      </Link>
    </div>
  );
}
