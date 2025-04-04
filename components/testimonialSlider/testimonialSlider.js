import { useState } from "react";
import styles from "./testimonialSlider.module.scss";

const TestimonialSlider = ({ page }) => {
	let content = "";

	if (page === "providers") {
		content = {
			heading: "<span>Voices</span> of the CINQCARE practice network",
			paragraph: "",
			subtext: "",
			testimonials: [
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-1.png",
					quote:
						'"We are not a sick-care system, where we only want to see you when you\'re sick. We are in it for the long haul with our patients and the community."',
					name: "Parinda Khatri, PhD, Chief Clinical Officer of Cherokee Health Systems",
				},
				{
					color: "orange", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-2.png",
					quote:
						"\"With CINQCARE, we're not just improving metrics—we're improving lives. The impact on our patients and our practice has been transformational.\"",
					name: "Ms. Deborah Forbes — VP of Operations, Doral Health and Wellness",
				},
			],
		};
	} else if (page === "patients") {
		content = {
			heading: "Real People, <span>Real Care</span>",
			paragraph: "",
			subtext: "See More Stories",
			testimonials: [
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-3.png",
					quote:
						'"I used to miss my doctor\'s appointments because I had no way to get there. I worried about my health, but I felt stuck. Then, CINQCARE stepped in. Now, a nurse comes to me, checks on me, and helps me manage my diabetes. I feel healthier, and I finally have the support I needed."',
					name: "Linda M., CINQCARE Family Member",
				},
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-4.png",
					quote:
						"\"After my stroke, I didn't know how I was going to manage. CINQCARE's team checked on me at home, made sure I had food, and helped me recover. Now, I feel stronger every day.\"",
					name: "James W., CINQCARE Family Member",
				},
			],
		};
	} else if (page === "partners") {
		content = {
			heading: "",
			paragraph: "",
			subtext: "",
			testimonials: [
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-5.png",
					quote:
						'"We are pleased to work with CINQCARE, an organization that shares our unwavering commitment to improving maternal and infant health."',
					name: "Alison Spera, Senior Vice President of Market Impact at March of Dimes",
				},
			],
		};
	} else if (page === "care-medical-practice") {
		content = {
			heading: "Patient Testimonial",
			paragraph: "",
			subtext: "",
			testimonials: [
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-7.png",
					quote:
						'"At my Care Medical Practice, I feel like more than just a number. My doctor really listens and works with me to improve my health."',
					name: "Family Member, Buffalo, NY",
				},
			],
		};
	} else if (page === "for-moms") {
		content = {
			heading: "Meet a Mom",
			paragraph: "",
			subtext: "",
			testimonials: [
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-8.png",
					quote:
						'"I felt like someone finally <em>saw me.</em><br/><br/>"CINQCARE for Moms gave me more than just medical care. They made sure I had everything I needed to feel safe, supported, and strong — <em>before and after my baby arrived.</em>"',
					name: "CINQCARE for Moms Family Member",
				},
			],
		};
	} else if (page === "communities") {
		content = {
			heading: "Real people, <em>Real Care</em>",
			paragraph: "",
			subtext: "",
			testimonials: [
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-10.png",
					quote:
						'"The group I am working with has worked in the neighborhood and outreached regularly. Meeting the community through their eyes has made the experience even more closer to home."',
					name: "Zoey, a CINQCARE care coordinator",
				},
				{
					color: "orange", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-9.png",
					quote:
						'"The experience has been nothing but amazing, being able to communicate with the community and being out here with family members who actually need our help."',
					name: "Kiara, a CINQCARE care coordinator",
				},
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-6.png",
					quote:
						'"We are not a sick care system where we only want to see you when you are sick — we are in it for the long haul with our patients and the community… CINQCARE has been open, honest and transparent…that means the world to us."',
					name: "Parinda Khatri, Ph.D., Cherokee Health Systems CEO",
				},
			],
		};
	} else if (page === "join-our-family") {
		content = {
			heading: "Read reviews from people <em>we've helped.</em>",
			paragraph: "",
			subtext: "",
			testimonials: [
				{
					color: "orange", // Background Color, only yellow and orange are supported rn.
					image: "/headshots/headshot-2.png",
					quote:
						'"With CINQCARE, we’re not just improving metrics—<span>we’re improving lives.</span> The impact on our patients and our practice has been transformational."',
					name: " Ms. Deborah Forbes — VP of Operations, Doral Health and Wellness",
				},
			],
		};
	}

	const [activeIndex, setActiveIndex] = useState(0);

	const handlePrev = () =>
		setActiveIndex((prev) =>
			prev === 0 ? content.testimonials.length - 1 : prev - 1
		);
	const handleNext = () =>
		setActiveIndex((prev) =>
			prev === content.testimonials.length - 1 ? 0 : prev + 1
		);

	return (
		<section className={styles.section_Testimonials}>
			{content.heading && (
				<h2 dangerouslySetInnerHTML={{ __html: content.heading }} />
			)}

			{content.testimonials?.length > 0 && (
				<div
					className={`${styles.container_Testimonials} ${
						styles[content.testimonials[activeIndex]?.color]
					}`}
				>
					<div className={styles.slideWrapper} key={activeIndex}>
						{content.testimonials[activeIndex]?.image && (
							<div className={styles.image_Testimonials}>
								<img
									src={content.testimonials[activeIndex].image}
									alt=""
									loading="lazy"
								/>
							</div>
						)}

						<div className={styles.content_Testimonials}>
							{content.testimonials[activeIndex]?.quote && (
								<h3
									dangerouslySetInnerHTML={{
										__html: content.testimonials[activeIndex].quote,
									}}
								/>
							)}
							{content.testimonials[activeIndex]?.name && (
								<p
									dangerouslySetInnerHTML={{
										__html: content.testimonials[activeIndex].name,
									}}
								/>
							)}
						</div>
					</div>
				</div>
			)}

			{content.testimonials?.length > 1 && (
				<div className={styles.container_Navigation}>
					<button onClick={handlePrev}></button>
					{content.testimonials.map((_, i) => (
						<span
							key={i}
							className={`${styles.dot} ${
								i === activeIndex ? styles.activeDot : ""
							}`}
							onClick={() => setActiveIndex(i)}
						></span>
					))}
					<button onClick={handleNext}></button>
				</div>
			)}
			{content.subtext && (
				<a className={styles.subtext_Testimonials} href="/communities">
					{content.subtext}
				</a>
			)}
		</section>
	);
};

export default TestimonialSlider;
