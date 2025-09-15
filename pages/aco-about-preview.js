import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/header";
import HeroAlt from "../components/heroAlt/heroAlt";
import Footer from "../components/footer/footer";
import CTA from "../components/cta/cta";
import Button from "../components/button/button";

export default function ACOAbout() {
	// Define current page
	const currentPage = "aco-about";

	// SEO
	const title = "About ACO REACH | CINQCARE";
	const metaDescription =
		"ACO REACH primary contact information, ACO Participant and Preferred Providers, administrative leaders, governing bodies, and shared savings and quality information.";
	const pageURL = "https://cinq.care/aco-about";
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
						<h1>ACO Reach <em>Information</em></h1>

						<p><strong>CINQCARE ACO REACH LLC</strong><br/>
						30 Broad Street, 23rd Floor l New York, NY 10004</p>

						<p><strong>Primary Contact:</strong> Ryan Beres, Executive Director</p>

						<Button
							link="tel:+18009227022"
							text="(800) 922-7022"
							type="outline-black"
						/>

						<h2>ACO Participant and Preferred Providers</h2>
						<h3>Performance Year 2025</h3>
						<ul>
							<li><a href="/aco-preview/preferred-providers">Preferred Providers 2025</a></li>
							<li><a href="/aco-preview/participant-providers">Participant Providers 2025</a></li>
						</ul>

						<h2>Additional Information</h2>
						
						<p>Preferred Providers – None</p>

						<p>Joint ventures between or among the ACO and any of its ACO Participant Providers and Preferred Providers – No joint ventures</p>
						
						<h3>ACO’s key clinical and administrative leaders and the name of any company by which they are employed:</h3>
						<ul>
							<li><strong>Ryan Beres</strong>, Executive Director, CINQCARE</li>
							<li><strong>Denise Christian</strong>, Medical Director, MD, Care Medical</li>
						</ul>
						
						<h3>Members of the ACO’s governing body:</h3>
						<ul>
							<li><strong>Rodney Armstead, MD</strong> – Care Medical Practice</li>
							<li><strong>Joseph Tyndall, MD</strong> – Morehouse Healthcare</li>
							<li><strong>Ryan Beres</strong>, CINQCARE</li>
							<li><strong>Marilyn Fraser</strong> – Consumer Advocate, Arthur Ashe Institute for Urban Health</li>
							<li>Beneficiary Representative – <strong>Latoya Harris</strong></li>
						</ul>
						
						<h2>Shared Savings & Quality Information:</h2>
						
						<h3>PY 2023 Shared Saving</h3>
						<ul>
							<li>Amount of any Shared Savings for PY2023: $5,158,569.77 Gross Savings (7% Gross Savings Rate)</li>
							<li>The proportion of PY 2023 Shared Savings invested in infrastructure, redesigned care processes, and other resources necessary to improve outcomes and reduce Medicare costs for Beneficiaries: 65%</li>
							<li>The proportion of PY 2023 Shared Savings distributed to Participant Providers and Preferred Providers: 35%</li>
						</ul>

						<h3>PY 2023 Quality Measures</h3>
						<ul>
							<li>Risk-Standardized, All-Condition Readmission: 15.54</li>
							<li>Risk-Standardized, All-Cause Unplanned Admissions for Patients with Multiple Chronic Conditions: 34.19</li>
							<li>Timely Follow-Up After Acute Exacerbations of Chronic Conditions: 64.31</li>
							<li>PY 2023 Total Quality Score: 47.5%</li>
						</ul>

					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
