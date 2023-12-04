import "./App.css";
import Card from "./components/Card";

export default function BasicModal() {

  return (
    <section className='banner'>
      <h1>HEJ MORE</h1>
      <div className="card-wrapper">
        <Card 
        title="MÍSTO A ČAS KONÁNÍ" 
        text1="Hotel Baltaci Atrium Lešetín II 651 Zlín"
        text2="2. ÚNORA 2024 10:00 - 17:30"
        />
        <Card 
        title="KONTAKT A REGISTRACE" 
        text1="Tým gynekologicko-porodnického odd. KNTB"
        text2="+420 604 994 504"
        text3="konference@bnzlin.cz"
        />
        <Card 
        title="DŮLEŽITÉ TERMÍNY" 
        text1="Registrace účastníků do 19. 01. 2024"
        text2="Konferenční poplatek do 26. 01. 2024"
        />
      </div>
    </section>
  );
}