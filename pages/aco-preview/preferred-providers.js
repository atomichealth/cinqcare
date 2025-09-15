import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CTA from "../../components/cta/cta";
import Button from "../../components/button/button";

export default function PreferredProviders() {
	// Define current page
	const currentPage = "preferred-providers";

	// SEO
	const title = "CINQCARE ACO REACH Preferred Providers | CINQCARE";
	const metaDescription =
		"A list of ACO Reach Preferred Providers for the current year.";
	const pageURL = "https://cinq.care/aco/preferred-providers";
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
				<section page="privacy-policy">
					<div className="wrapper">
						<p><a href="/aco-about-preview">&larr; Go Back</a></p>
						<h1>Preferred Providers – <em>Performance Year 2025</em></h1>
						<br/><br/>
						<div className="flex">
							<div className="flex-1">
								<ul>
									<li>FERROL SAMS</li>
									<li>GOODWIN HOUSE HOME AND COMMUNITY BASED SERVICES</li>
									<li>GOODWIN HOUSE INCORPORATED</li>
									<li>KAREN GRIFFITHS</li>
								</ul>
							</div>
							<div className="flex-1">
								<ul>
									<li>SHERITA JOLLY</li>
									<li>VINSON HALL LLC</li>
									<li>WHITESIDE COUNTY COMMUNITY HEALTH CLINIC</li>
								</ul>
							</div>
						</div>
						
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
