import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


const prisma = new PrismaClient()

export async function GET() {
    const commandes = await prisma.voiture.findMany()
    return NextResponse.json(commandes)
}