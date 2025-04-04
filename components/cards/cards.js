import styles from "./cards.module.scss";
import buffaloMap from "../../public/cards--buffalo.svg";
import brooklynMap from "../../public/cards--brooklyn.svg";
import Button from "../button/button";

const Cards = ({ page }) => {
	let content = {};

	if (page === "care-medical-practice") {
		content = {
			heading: "Find <em>Grace at Home</em> Near You",
			paragraph:
				"Care Medical Practice is expanding to serve more communities.",
			buttonLink: "https://caremedicalpractice.care/book-care-options/",
			buttonText: "Book Care Now",
			buttonTarget: "_blank",
			finePrint:
				"Care Medical Practices are independent medical groups that partner with CINQCARE for administrative and operational support. CINQCARE does not provide medical services or direct patient care.",
			cardContent: [
				{
					heading: "<em>Buffalo</em>, NY",
					address: `564 Niagara Street,<br />Buffalo, NY 14201<br />716.882.0366`,
					image: buffaloMap.src,
					paragraph:
						"On-site lab services, specialty care, and integrated support",
				},
				{
					heading: "<em>Brooklyn</em>, NY",
					address: `322 Linden Boulevard,<br />Ground Floor, Brooklyn,<br />NY 11226<br />718.469.5500`,
					image: brooklynMap.src,
					paragraph: "Comprehensive primary and specialty care",
				},
			],
		};
	}

	if (page === "for-moms") {
		content = {
			heading: "Find <em>Care</em> Near You",
			paragraph:
				"<b>Coming Soon</b><br>Washington, DC & additional Maryland regions.",
			buttonLink: "https://gracewomenscenter.cinq.care/",
			buttonText: "Request a Visit",
			finePrint: "",
			cardContent: [
				{
					heading: "<em>Buffalo</em>, NY",
					address: ``,
					image: buffaloMap.src,
					paragraph:
						"On-site lab services, specialty care, and integrated support",
				},
				{
					heading: "<em>Baltimore</em>, MD",
					address: ``,
					image: brooklynMap.src,
					paragraph: "Coming Soon",
				},
			],
		};
	}

	return (
		<section className={styles.cards}>
			<div className={`${styles.wrapper} wrapper`}>
				{content.heading && (
					<header className={styles.section__header}>
						<h2
							className="period"
							dangerouslySetInnerHTML={{ __html: content.heading }}
						/>
						{content.paragraph && (
							<p dangerouslySetInnerHTML={{ __html: content.paragraph }} />
						)}
						{content.buttonLink && (
							<Button 
								link={content.buttonLink} 
								text={content.buttonText}
								target={content.buttonTarget ? `${content.buttonTarget}` : "_self"}
							/>
						)}
						{content.finePrint && (
							<p className="fine-print">{content.finePrint}</p>
						)}
					</header>
				)}

				{content.cardContent?.map((card, i) => (
					<div className={styles.card__item} key={i}>
						<header>
							<div>
								<h2 dangerouslySetInnerHTML={{ __html: card.heading }} />
								<address dangerouslySetInnerHTML={{ __html: card.address }} />
							</div>
							<img src={card.image} alt="" />
						</header>
						{card.paragraph && (
							<p dangerouslySetInnerHTML={{ __html: card.paragraph }} />
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default Cards;
