import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header/header";
import HeroAlt from "../../components/heroAlt/heroAlt";
import Form from "../../components/form/form";
import Footer from "../../components/footer/footer";
import CTA from "../../components/cta/cta";
import Button from "../../components/button/button";

export default function ACO() {
	// Define current page
	const currentPage = "aco";

	// SEO
	const title = "ACO REACH | CINQCARE";
	const metaDescription =
		"A CMS accountable care program designed to help participating provider-led organizations improve care for beneficiaries enrolled in traditional Medicare";
	const pageURL = "https://cinq.care/aco";
	const opengraphImg = "https://cinq.care/cinqcare-opengraph.jpg";

	return (
		<>
			<Head>
				<meta name="description" content={metaDescription} />
				<meta property="og:image" content={opengraphImg} />
				<meta property="og:title" content={title} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={pageURL} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@carecinq" />
				<title>{title}</title>
			</Head>

			<Header headerBg="light" />

			<main className="gradient--top">
				<Form page={currentPage} />
				<section page="privacy-policy">
					<div className="wrapper">
						<h2>Your additional services include*</h2>
						<br/><br/>
						<div className="flex">
							<div className="flex-1">
								<h3>A dedicated Care Coordinator from your community to help with:</h3>
								<ul>
									<li>Managing your appointments</li>
									<li>Filling and refilling prescriptions</li>
									<li>Providing transportation</li>
									<li>Making the most of your benefits</li>
									<li>Taking advantage of other social programs</li>
								</ul>

								<h3>Direct access to a nurse by phone at any time:</h3>
								<ul>
									<li>24 hours a day, 7 days a week</li>
								</ul>
							</div>
							<div className="flex-1">
								<h3>Care in your home:</h3>
								<ul>
									<li>Visits from a Home Health Aid</li>
									<li>Home-based physical therapy</li>
									<li>Telehealth</li>
								</ul>

								<h3>Expanded access to services including:</h3>
								<ul>
									<li>Nutritional education</li>
									<li>Mental health support</li>
									<li>Translation services</li>
								</ul>
							</div>
						</div>
						<br/><br/><br/>
						<p>*Certain services may require a qualifying patient diagnosis or condition.</p>

					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
