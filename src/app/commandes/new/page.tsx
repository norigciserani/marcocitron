"use client"

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import EditVente from "@/components/editVente"
import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <Container className="bg-light">
            <EditVente />
        </Container>
)}
