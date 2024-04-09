"use client"

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import EditVente from "@/components/editVente"
import { Container } from "react-bootstrap";

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
    return (
        <Container className="bg-light">
            <EditVente />
        </Container>
)}
