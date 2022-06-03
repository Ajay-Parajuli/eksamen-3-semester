import React, { useEffect } from "react";
import "./about.css";
import Banner from "../../assets/images/banner.png";
import Tobias from "../../assets/images/tobias.png";
import Aos from "aos";
import "aos/dist/aos.css";



export const About = () => {

  /* Initialize animate on scroll effect*/ 
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <div className="container">
      <div className="mission-vision-om">
        <div className="mv">
          <div className="mildtimg">
            <h1>Om os</h1>
            <img className="image" src={Tobias} alt="Tobias" />
          </div>
          <div>
            <p className="pdiv">
              <h2>Tobias Iversen</h2>
              Jeg begyndte efter sommeren 2019 på Erhvervsakademiet i Aarhus. Jeg startede på ‘Iværksætterlinjen’ og det var her, jeg fik lyst til at
              skabe noget, der gjorde det nemmere at finde og købe bæredygtigt tøj. Jeg havde svært ved at gennemskue, hvor bæredygtigt tøjet i
              butikkerne var og jeg vidste ikke, hvad der var det mest bæredygtige at gøre, når det kom til tøj. Det endte ud i denne platform, som
              jeg håber, vil hjælpe dig med at beholde din gode stil samtidig med at du tager hensyn til mennesket, miljøet og dyret bag dit tøj.{" "}
            </p>
          </div>
        </div>

        <div className="om-mig-genbrugsshop">
          <div className="om-mig-genbrugsshopinside">
            <div className="ommig">
              <div data-aos="fade-up">
                <h2>Mission og Vision</h2>
                <p>Min mission er at skabe opmærksomhed omkring bæredygtigt herretøj.</p>
                <p>Min vision er at få alle mænd i Danmark til at tænke på bæredygtighed, når de skal vælge tøj.</p>
                <h2>Hvorfor?</h2>
              </div>
              <div data-aos="fade-up">
                <p>
                  Fordi jeg i alt det jeg gør, gerne vil træffe det mest bæredygtige valg og jeg håber at du vil gøre det samme. Tøj er en af de mest
                  forurenende industrier. 16% af verdens insektgift bliver brugt på bomuldsmarker, selvom bomuldsmarker kun udgør 2,5% af alt
                  landbrugsjord i verden og produktionen af tøj regnes for at udlede hele 10 procent af verdens samlede CO2-udleding. Undersøgelser
                  antager desuden at vores tøjforbrug vil være steget 63% i år 2030-fra 62 millioner tons til 102 millioner tons. Der er altså
                  virkelig grund til at tænke bæredygtigt, når du skal købe tøj. Vi tænker heldigvis mere og mere over, hvor de produkter vi køber,
                  kommer fra og hvordan de er lavet. Det ved virksomhederne godt og derfor har de fleste efterhånden også oprettet en CSR-afdeling.{" "}
                </p>
                <br></br>
              </div>
              <div data-aos="fade-up">
                <p>
                  CSR står for Corporate Social Responsibility og det handler blandt andet om at fortælle forbrugeren om firmaets plan for at blive
                  mere bæredygtig. Vil du vide om en virksomhed tænker på miljøet og fremtiden, så kig derfor efter deres CSR-plan. Tøjindustrien har
                  en lang værdikæde. Det vil sige at vejen fra råmateriale til færdigt produkt er lang og kompliceret. Det kan derfor godt være svært
                  at finde ud af, hvad der er det mest bæredygtige at gøre. Heldigvis er der lavet en lang række certificeringsmærker, der hjælper dig
                  til at få et indblik i, hvordan tøj er lavet. Kig efter dem, når du skal købe tøj.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="kontakt">
          <h2>Mildt</h2>
          <p>
            CVR-nummer: 41100885 <br></br>Tobias Lindhardt Iversen <br></br>Email: Tobiasli@mildt.dk
          </p>
        </div>
      </div>
    </div>
  );
};
