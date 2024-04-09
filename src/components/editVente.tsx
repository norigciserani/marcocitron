"use client"

import { Checkbox } from "@material-tailwind/react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const champs = [
    "nom",
    "prenom",
    "email",
    "datedenaissance",
    "tel",
    "adresse",
    "cap",
    "ville",
    "numeroclient",
    "modelevehicule",
    "alimentation",
    "typemotorisation",
    "finition",
    "dateimmat",
    "typepaiement",
    "datefinpaiement",
    "dateanniversairelivraison",
    "activeralerte"
]

interface champsI {
    [index: string] : string | boolean | Date,
    nom: string,
    prenom : string,
    email : string,
    datedenaissance : Date,
    tel : string,
    adresse : string,
    cap : string,
    ville : string,
    numeroclient : string,
    modelevehicule : string,
    alimentation : string,
    typemotorisation : string,
    finition : string,
    dateimmat : Date,
    typepaiement : string,
    datefinpaiement : Date,
    dateanniversairelivraison : Date,
    activeralerte: boolean
}

const formAtZero: champsI = {
    nom: "",
    prenom: "",
    email: "",
    datedenaissance: new Date(),
    tel: "",
    adresse: "",
    cap: "",
    ville: "",
    numeroclient: "",
    modelevehicule: "",
    alimentation: "",
    typemotorisation: "",
    finition: "",
    dateimmat: new Date(),
    typepaiement: "",
    datefinpaiement: new Date(),
    dateanniversairelivraison: new Date(),
    activeralerte: false
}

export default function EditVente() {
    const [formData, setFormData] = useState<champsI>(formAtZero)

    const colonneForm = (champ : string) => {  // La taille des différents champs
        if (["nom", "prenom", "cap", "ville"].includes(champ)) {
            return "col-md-6"
        } else if (["modelevehicule", "alimentation", "typemotorisation", "finition"].includes(champ)) {
            return "col-md-3"
        } else {
            return "col-md-12"
        }
    };

    const typeForm = (champ : string) => {
        if (champ == "email") {
            return "email"
        } else {
            return "text"
        }
    };

    const getValueInput = (key: string) : string | number => {
        let res = formData[key]
        if (typeof res === "string" || typeof res === "number") {
            return res
        }
        return '';
    }

    const handleChange = (event : any) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData(prevState => {
            return{
                ...prevState,
                [name]: newValue
            }
        });
    };

    async function requeteNouvelleVente (event: any) {
        event.preventDefault()
        const res = await fetch(`http://localhost:3000/api/newcommande`, {
            method : 'POST',
            body: JSON.stringify(formData),
        })

        setFormData(formAtZero)
    }

    return (
        <form className="row g-3">
            {champs.map((champ) => (
                <div key={champ} className={colonneForm(champ)}>
                    {
                        ((champ == "datedenaissance") || (champ == "dateimmat") || (champ == "datefinpaiement") || (champ == "dateanniversairelivraison"))
                        ?
                        <>
                            <label htmlFor={champ} className="form-label">{champ}</label>
                            <DatePicker
                                dateFormat="dd/MM/yyyy" className="form-control"
                                selected={formData[champ]}
                                onChange={(date) => handleChange({target: {
                                    name: champ,
                                    value: date,
                                    type: "text"
                                }})}
                                id={champ} />
                        </>
                        : (champ == "activeralerte")
                        ?
                        <Checkbox
                            label={champ}
                            checked={formData.activeralerte}
                            onChange={handleChange}
                            name="activeralerte"
                            // rajouté automatiquement
                            onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}
                        />
                        :
                        <>
                            <label htmlFor={champ} className="form-label">{champ}</label>
                            <input
                                type={typeForm(champ)}
                                className="form-control"
                                name={champ}
                                aria-describedby=""
                                onChange={handleChange}
                                value={getValueInput(champ)}
                            />
                        </>
                    }
                </div>
            ))}
            <button className="btn btn-primary" type="submit" onClick={requeteNouvelleVente}>Envoyer</button>
        </form>
    );
}
