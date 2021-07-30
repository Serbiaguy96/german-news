/** @jsxImportSource @emotion/react */
import React from "react";
import { MoreHoriz } from "@material-ui/icons";
import StepHeading from "../StepHeading";
import Comments from "../Comments";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import image1 from "../../assets/images/imag1.jpg";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.jpg";
import video from "../../assets/images/video1.mp4";
import image5 from "../../assets/images/image5.png";
import image6 from "../../assets/images/image6.png";
import image7 from "../../assets/images/image7.png";

import * as S from "./styles";

const PageContent = () => {
  const onClickImg = () => {
    window.location.href = "https://bitqiapp.com";
  };

  return (
    <div css={S.contentContainerCss}>
      <h1 css={S.contentHeader1Css}>
        Finanzexperte Olaf Scholz zeigt den Deutschen, wie sie 250 € in 2.453,58
        € verwandeln können, ohne ihr Kapital zu riskieren
      </h1>
      <div css={S.newsInfoSection}>
        <span css={S.newInfoSectionFirstPart}>
          Artikel von <a href="/#">Johann Müller</a>, News Deutschland
        </span>
        <span style={{ fontSize: "14px" }}>Aktualisiert am 25. Juli 2021</span>
      </div>
      <div css={S.socialNetworksSection}>
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="Twitter" css={S.twitterSizeCss} />
        <span css={S.moreDotsContainer}>
          <MoreHoriz />
        </span>
      </div>
      <img alt="fix-lint-err" src={image1} />
      <span css={S.afterImgText}>
        Der Finanzminister berichtet über die neue geheime Anlage-App der
        Unicredit Bank, die Hunderte von Menschen in Deutschland sehr reich
        macht
      </span>
      <p css={S.contentHeader3Css}>
        <b>
          Einige deutsche Bürger haben mit ihrem Telefon Millionen von Euro
          verdient, aber wie lange wird diese Welle anhalten?
        </b>
      </p>
      <p>
        Das Bundesministerium für Wirtschaft und Finanzen hat bekannt gegeben,
        dass eine neue Form des Online-Bankings in Deutschland legalisiert
        worden ist: "Wir leben in einer Ära des innovativen, sicheren Bankings,
        und Deutschland wird mit anderen Nationen mithalten müssen, die das auch
        tun", sagte Olaf Scholz in einem Interview mit dem Handelsblatt.
      </p>
      <p>
        Olaf Scholz kritisierte Bitcoin im vergangenen Mai. Doch nun hat er
        seine Meinung geändert.
      </p>
      <p>
        Mit dem Preisanstieg von Kryptowährungen sieht er diese nun als eine
        wertvolle Anlageklasse und eine echte Möglichkeit für die Deutschen,
        schnell Vermögen aufzubauen.
      </p>
      <p>
        "Kryptowährungen wie Bitcoin haben als Währungsmodell eine Zukunft, und
        Regierungen und Banken haben das jetzt zur Kenntnis genommen", so
        Scholz.
      </p>
      <img alt="fix-lint-err" src={image2} />
      <p>
        Viele EU-Länder, darunter Österreich, die Schweiz und Norwegen, haben
        Bitcoin als offizielle Währung anerkannt.
      </p>
      <p>
        Die staatlichen Regierungen fördern nun die Blockchain-Technologie,
        indem sie die Tech-Unternehmen unterstützen, die innovative Lösungen für
        das Krypto-Banking entwickeln.
      </p>
      <p>Kryptowährungen sind jetzt hier, um zu bleiben.</p>
      <p>
        Während die globalen Währungen während der Pandemie zurückgegangen sind,
        sind die Bitcoin-Preise in diesem Jahr gestiegen, was beweist, dass mehr
        Menschen darauf vertrauen, um ihr Vermögen zu schützen und weiter zu
        vermehren.
      </p>
      <p>
        "Sie bekommen die Sicherheit und den Komfort der Bank, während Sie Ihr
        Geld wachsen sehen", sagte Scholz.
      </p>
      <div css={S.innerHeadingCss}>"UNDERGROUND" - BANKING</div>
      <p>
        Einige bekannte wohlhabende Familien, wie die Schwarz aus Berlin, nutzen
        bereits das "Underground"-Banking, um ihr Vermögen zu schützen und ihre
        Steuersituation zu verbessern. So haben viele Deutsche im letzten Jahr
        ein Konto eröffnet und konnten ihre ersten 1.000 € im letzten Jahr auf
        125.000 € im Jahr 2020 aufstocken.
      </p>
      <p>
        Das Ministerium für Wirtschaft und Finanzen Deutschlands hat in
        Kryptowährungen investiert, damit mehr Deutsche daran teilnehmen können
        und endlich aus der Finanzkrise durch die Pandemie herausgeholt werden
        können.
      </p>
      <img alt="fix-lint-err" src={image3} />
      <span css={S.afterImgText}>Deutsche laufen in Scharen zur Anmeldung</span>
      <p>
        Da die Menge der Kryptowährung immer begrenzter wird, steigt ihr Wert
        schnell. Weil weniger Kryptowährung verfügbar geworden ist und mehr
        Menschen sie kaufen wollen, steigt der Preis. Sobald dies den Mainstream
        erreicht, werden wir ein noch explosiveres Wachstum sehen.
      </p>
      <p>
        Es gibt noch freie Plätze im Online-System für Kryptowährung, genannt
        Blockchain, aber wir wissen nicht, wie viele.
      </p>
      <p>Das System ist derzeit für jeden in Deutschland verfügbar.</p>
      <p>
        Hans Oster, ein 38-jähriger Fabrikarbeiter und zweifacher Familienvater
        aus Wolfsburg, berichtete von seinen Erfahrungen.
      </p>
      <p>
        Er hat in kürzester Zeit große Renditen erzielt, da die Kurse in diesem
        Jahr stark gestiegen sind. Zuvor hatte er keine Erfahrung mit
        Kryptowährungen und kannte sich kaum am Computer aus. Also hat er alles
        von seinem Telefon aus gemacht. "Es war sehr einfach, damit anzufangen",
        sagte er uns.
      </p>
      <p>
        Sein finanzielles Ziel war es, mehr Zeit mit seiner Familie verbringen
        zu können und, wenn möglich, seine Nachtschichten in der Fabrik zu
        verkürzen, indem er mehr passives Einkommen hat.
      </p>
      <p>
        Mit einer kurzen und kleinen Investition schaffte er es, in nur drei
        Wochen einen Gewinn von 36.019 € zu erzielen.
      </p>
      <p>Hier ist sein Video-Testimonial:</p>
      <video css={S.videoCss} controls>
        <source src={video} type="video/mp4" />
      </video>
      <p>
        "Das erste, was ich tat, nachdem ich den Link erhalten hatte, war, ein
        Konto bei BitQI zu eröffnen. Es dauerte nur 2 Minuten, um es
        einzurichten. Nachdem ich meinen Namen, meine E-Mail-Adresse und meine
        Telefonnummer eingegeben hatte, konnte ich loslegen. Um mein Konto zu
        aktivieren, habe ich nur eine kleine Einzahlung auf mein Konto gemacht.
        Ich habe das Minimum von 250 € eingezahlt, weil ich mir das leisten
        konnte. Mir gefällt sehr gut, dass ich mein Geld jederzeit wieder auf
        mein normales Bankkonto abheben kann. Wenn ich mein Geld brauche, klicke
        ich in der App einfach auf "Abheben" und bekomme es sofort zurück. Es
        ist auch praktisch, dass es mehr Geldautomatenstandorte gibt, an denen
        ich das Geld abheben kann und es nutzen kann."
      </p>
      <p>
        "Nachdem ich mich am nächsten Tag in mein Krypto-Konto eingeloggt hatte,
        war ich völlig schockiert. Mein Kontostand lag bereits bei rund tausend
        Euro! Ich erhielt einen Anruf von meinem Account Manager, er begrüßte
        mich auf der Plattform und ich fragte sofort, ob es wahr sei, dass ich
        bereits einen Gewinn von 784 Euro gemacht habe. Er war nicht überrascht
        und sagte, dass dies ganz normal sei. "Das ist die Stärke der
        Blockchain.", sagte er mir.
      </p>
      <p>
        "Nach einer stressigen Woche auf der Arbeit hätte ich fast mein Konto
        bei BitQI vergessen. Ich ließ das Geld liegen und bevor ich eines Abends
        schlafen ging, loggte ich mich ein und konnte nicht glauben, was ich da
        sah. Meine anfängliche Einzahlung von 250 €, war nun 2.453,58 € wert!
        Mein Kontomanager sagte mir, je mehr Geld man auf dem Konto lässt, desto
        mehr kann man verdienen. Und so nahmen die Dinge ihren Lauf, eine Woche
        später war mein Konto bei unglaublichen 13.045,86 €."
      </p>
      <p>
        "Ich beschloss sofort, 10.000 € abzuheben, um mir einen lang gehegten
        Traum zu erfüllen. Das Geld erreichte meine Hausbank innerhalb von zwei
        Tagen. Ich habe dann meine Frau und meine Kinder mit einem Urlaub in
        einem 5-Sterne-Luxushotel in der Türkei überrascht, alle Kosten bezahlt.
        Dank meiner neuen Geldmaschine muss ich jetzt nicht mehr so viele
        Nachtschichten in der Fabrik arbeiten."
      </p>
      <div css={S.innerHeadingCss}>VERPASSEN SIE NICHT DIESE GELEGENHEIT</div>
      <p>Auch Angela Merkel unterstützt die Verbreitung dieser BitQI.</p>
      <p>
        Derzeit ermöglicht BitQI unseren Lesern, die Plattform mit einer
        Mindesteinlage von nur 250 Euro zu testen und große Gewinne zu machen.
        Es gibt keine Verpflichtungen und Sie können sich Ihre Gewinne jederzeit
        auszahlen lassen.
      </p>
      <p>Wir haben mit BitQI gesprochen und sie sagten folgendes:</p>
      <p>
        "Sie dürfen diese Gelegenheit einfach nicht verpassen. Die Plattform ist
        gerade erst in Deutschland gestartet und sie wird ihre Nutzer extrem
        reich machen, wie sie es bereits getan hat. In nur wenigen Wochen kann
        jeder garantiert seinen Gewinn verdoppeln oder sogar verdreifachen. Und
        es gibt nichts zu verlieren, denn unsere Plattform bietet eine volle
        Rückerstattung auf Ihre ursprüngliche Einzahlung. "
      </p>
      <div css={S.innerHeadingCss}>
        Klicken Sie auf diesen Link, um sich zu registrieren! (nur 23+
        VIP-Plätze verfügbar):
      </div>
      <p>
        Mit dem VIP-Programm erhalten Sie einen dedizierten Account-Support und
        wir begrenzen die Anzahl der Personen, denen wir helfen können.
      </p>
      <div css={S.sucessBoxCss}>
        Es braucht nur drei Schritte, um anzufangen
        <ol>
          <li>Einloggen in die App</li>
          <li>
            Machen Sie Ihre erste risikofreie Einzahlung mit einem Minimum von €
            250 (Kreditkarte / Überweisung)
          </li>
          <li>
            Aktivieren Sie die automatische Handelsfunktion und beginnen Sie,
            Gewinne zu erzielen!
          </li>
        </ol>
        <b>
          Hinweis: Sie können sich Ihr Guthaben jederzeit auf Ihr normales
          Bankkonto auszahlen lassen. Sie werden von Ihrem persönlichen
          Krypto-Banking-Manager telefonisch kontaktiert, um die Details zu
          bestätigen.
        </b>
      </div>
      <StepHeading step={1} linkText="Einloggen in die App" />
      <img
        alt="fix-lint-err"
        src={image5}
        onClick={onClickImg}
        style={{ cursor: "pointer" }}
      />
      <StepHeading
        step={2}
        linkText="Machen Sie Ihre erste risikofreie Einzahlung mit einem Minimum von € 250 (Kreditkarte / Überweisung)"
      />
      <img
        alt="fix-lint-err"
        src={image6}
        onClick={onClickImg}
        style={{ cursor: "pointer" }}
      />
      <StepHeading
        step={3}
        linkText="Aktivieren Sie die automatische Handelsfunktion und beginnen Sie, Gewinne zu erzielen!"
      />
      <img
        alt="fix-lint-err"
        src={image7}
        onClick={onClickImg}
        style={{ cursor: "pointer" }}
      />
      <div css={S.tryItOutSpanCss}>
        <a href="https://bitqiapp.com">BitQI</a> SELBST AUSPROBIEREN
      </div>
      <p>
        Hinweis: Sie können sich Ihr Guthaben jederzeit auf Ihr normales
        Bankkonto auszahlen lassen. Sie werden von Ihrem persönlichen
        Krypto-Banking-Manager telefonisch kontaktiert, um die Details zu
        bestätigen.
      </p>
      <p>
        Anmerkung der Redaktion: Mitte April 2021 ist Bitcoin nun erstmals über
        63.000 US-Dollar (rund 53.398 Euro) geklettert - in den kommenden Wochen
        dürfte die Kryptowährung nun über 80.000 US-Dollar klettern. Das liegt
        deutlich über dem bisherigen Rekordhoch von 20.000 US-Dollar, das
        Bitcoin im November 2017 erreicht hat. Wenn Sie jetzt investieren,
        stehen die Chancen auf große Gewinne besonders gut und wir empfehlen
        Ihnen, sofort zu starten!
      </p>
      <p>
        Ergreifen Sie die Initiative, denn die Plattform ist nach wie vor
        kostenlos zu nutzen. Sie können jederzeit aussteigen, haben keine
        Verpflichtungen und können die Gewinne inklusive Ihrer Investition
        jederzeit abheben. Lassen Sie sich also die Möglichkeiten, die Ihnen
        dieses System bietet, nicht entgehen.
      </p>
      <Comments />
    </div>
  );
};

export default PageContent;
