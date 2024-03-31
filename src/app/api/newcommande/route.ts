import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"


const prisma = new PrismaClient()
export async function POST(req: Request) {
    const dataIn = await req.json()
    
    const commande = await prisma.voiture.create({
        data: {

            nom : dataIn.nom,
            prenom : dataIn.prenom,
            datedenaissance : dataIn.datedenaissance,
            tel : dataIn.tel,
            email : dataIn.email,
            adresse : dataIn.adresse, 
            cap : dataIn.cap,
            ville : dataIn.ville, 
            modelevehicule : dataIn.modelevehicule,
            numeroclient : dataIn.numeroclient,
            alimentation : dataIn.alimentation,
            typemotorisation : dataIn.typemotorisation,
            finition : dataIn.finition,
            dateimmat : dataIn.dateimmat,
            typepaiement : dataIn.typepaiement,
            datefinpaiement : dataIn.datefinpaiement,
            dateanniversairelivraison : dataIn.dateanniversairelivraison,
            activeralerte : dataIn.activeralerte,

            
        }
    })
    
    return NextResponse.json({message: "ok" , commandecree : commande})
}

  