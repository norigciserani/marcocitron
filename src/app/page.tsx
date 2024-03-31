import getAllVoitures from "../lib/getAllVoitures";

export default async function Home() {

  const commandesData : Promise<Voiture[]> = getAllVoitures()
  const commandes = await commandesData

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
      <br/>
      <table>
        <thead>
          <tr>
            <th>nom</th>
            <th>prenom</th>
            <th>email</th>
            <th>datedenaissance</th>
            <th>tel</th>
            <th>adresse</th>
            <th>cap</th>
            <th>ville</th>
            <th>modelevehicule</th>
            <th>numeroclient</th>
            <th>alimentation</th>
            <th>typemotorisation</th>
            <th>finition</th>
            <th>dateimmat</th>
            <th>typepaiement</th>
            <th>datefinpaiement</th>
            <th>dateanniversairelivraison</th>
            <th>activeralerte</th>
              
            <th><button>action</button></th>
          </tr>
        </thead>
        <tbody>
          {commandes.map(commande => (
            <tr>
              <th>{commande.nom}</th>
              <th>{commande.prenom}</th>
              <th>{commande.email}</th>
              <th>{commande.datedenaissance}</th>
              <th>{commande.tel}</th>
              <th>{commande.adresse}</th>
              <th>{commande.cap}</th>
              <th>{commande.ville}</th>
              <th>{commande.modelevehicule}</th>
              <th>{commande.numeroclient}</th>
              <th>{commande.alimentation}</th>
              <th>{commande.typemotorisation}</th>
              <th>{commande.finition}</th>
              <th>{commande.dateimmat}</th>
              <th>{commande.typepaiement}</th>
              <th>{commande.datefinpaiement}</th>
              <th>{commande.dateanniversairelivraison}</th>
              <th>{commande.activeralerte}</th>
              
              <th><button>delete</button></th>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      </section>
    </main>
  );
}
