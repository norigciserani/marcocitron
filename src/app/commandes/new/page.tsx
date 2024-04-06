"use client"

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import EditVente from "@/components/editVente"

const formAtZero = {
    nom: "",
    prenom: "",
    email: "",
    datedenaissance: "",
    tel: "",
    adresse: "",
    cap: "",
    ville: "",
    numeroclient: "",
    modelevehicule: "",
    alimentation: "",
    typemotorisation: "",
    finition: "",
    dateimmat: "",
    typepaiement: "",
    datefinpaiement: "",
    dateanniversairelivraison: "",
    activeralert: "",
}

export default function Home() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);


    return (
        <div className="container bg-light">
            <EditVente />
        </div>
)}
