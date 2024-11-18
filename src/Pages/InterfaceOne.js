//Import Components
import { Col, Container, Row } from "react-bootstrap";
import FirstHeader from "../components/FirstHeader";
//Import Images
import boutique from "../images/boutique.png";
import piecesElec from "../images/piecesElec.png";
import machine from "../images/machine.png";
import transport from "../images/transport.png";
//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import FirstCard from "../components/FirstCard";

AOS.init({
  duration: 2000, // Durée de l'animation en ms
  once: false, // Exécute l'animation une seule fois
});
//Code Pen

export default function InterfaceOne() {
  return (
    <>
      <Row>
        <Col sm="12" className="mb-5">
          <FirstHeader />
        </Col>
      </Row>
      {/* Nos Services */}
      <Row className="mt-5 Sarbini">
        <Col sm="12" className="mt-5">
          <Container className="justify-content-center d-flex">
            <div className="text-center">
              <h1 className="animate__animated animate__slideInUp animate__slower text-center">
                Sarbini Pieces
              </h1>
              <p style={{ marginBottom: "100px" }}>
                La solution pour les pièces de rechange électronique
              </p>

              <img
                data-aos="zoom-in-up"
                src={boutique}
                className="img-boutique"
                alt="None"
              ></img>
              {/* Cards  */}
              <div
                data-aos="zoom-in-up"
                class="container text-center my-5 text-center d-flex justify-content-center align-items-center flex-column"
              >
                <h1>Nos Services</h1>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 w-75 ">
                  <div class="col">
                    <FirstCard
                      src={piecesElec}
                      title="FirstCard"
                      body={
                        "VENTE PIÈCES ÉLECTRONIQUE MACHINES À COUDRE ET BRODERIE"
                      }
                    />
                  </div>
                  <div class="col">
                    <FirstCard
                      src={machine}
                      title="FirstCard"
                      body={"VENTE DE MACHINES À COUDRE ET PIÈCES RECHANGE"}
                    />
                  </div>
                  <div class="col">
                    <FirstCard
                      src={transport}
                      title="FirstCard"
                      body={"SERVICE IMPORTATION RAPIDE SUR COMMANDE"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <Container className="d-flex justify-content-center align-items-center flex-column "></Container>
        </Col>
      </Row>
    </>
  );
}
