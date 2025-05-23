import { useState } from "react";
import styles from "./testimonialSlider.module.scss";

const TestimonialSlider = ({ page }) => {
	let content = "";

	if (page === "providers") {
		content = {
			heading: "Voices of the CINQCARE practice network",
			paragraph: "",
			subtext: "",
			testimonials: [
				{
					color: "yellow", // Background Color, only yellow and orange are supported rn.
					image: "/images/Quote-MenFriends.jpg",
					quote:
						'"We are not a sick-care system, where we only want to see you when you\'re sick. <em>We are in it for the long haul</em> with our patients and the community."',
					name: "Chief Clinical Officer, Large Health System",
				},
				{
					color: "orange",
					image: "/images/Quote-MenFriends.jpg",
					quote:
						"\"With CINQCARE, we're not just improving metrics—<em>we're improving lives.</em> The impact on our patients and our practice has been transformational.\"",
					name: "VP of Operations, Health System",
				},
			],
		};
	} else if (page === "patients") {
		content = {
			heading: "Real People, Real Care",
			paragraph: "",
			subtext: "See More Stories",
			testimonials: [
				{
					color: "yellow",
					image: "/images/Quote-WomenLaughing.jpg",
					quote:
						'"I used to miss my doctor\'s appointments because I had no way to get there. I worried about my health, but I felt stuck. Then, CINQCARE stepped in. Now, a nurse comes to me, checks on me, and helps me manage my diabetes. <em>I feel healthier, and I finally have the support I needed.</em>"',
					name: "CINQCARE Family Member",
				},
				{
					color: "yellow",
					image: "/headshots/Quote-WomenLaughing.jpg",
					quote:
						"\"After my stroke, I didn't know how I was going to manage. CINQCARE's team checked on me at home, made sure I had food, and helped me recover. Now, I feel stronger every day.\"",
					name: "CINQCARE Family Member",
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
					color: "yellow",
					image: "/images/Quote-NursePatient.jpg",
					quote:
						'"By combining our expertise and resources, Optum and CINQCARE hope to make significant strides in improving the health and well-being of the diverse population of dually eligible Medicare and Medicaid members we serve."',
					name: "Steve Swift, Chief Financial Officer CINQCARE",
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
					color: "yellow",
					image: "/images/Quote-NursePatientHugging.jpg",
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
					color: "yellow",
					image: "/images/Quote-MotherBaby.jpg",
					quote:
						'"I felt like someone finally <em>saw me.</em><br/><br/>"CINQCARE for Moms gave me more than just medical care. They made sure I had everything I needed to feel safe, supported, and strong — <em>before and after my baby arrived.</em>"',
					name: "CINQCARE for Moms Family Member",
				},
			],
		};
	} else if (page === "communities") {
		content = {
			heading: "Real People, Real Care",
			paragraph: "",
			subtext: "",
			testimonials: [
				{
					color: "yellow",
					image: "/images/Quote-NursePatientPark.jpg",
					quote:
						'"The group I am working with has worked in the neighborhood and outreached regularly. Meeting the community through their eyes has made the experience even more closer to home."',
					name: "CINQCARE care coordinator",
				},
				{
					color: "orange",
					image: "/headshots/Quote-NursePatientPark.jpg",
					quote:
						'"The experience has been nothing but amazing, being able to communicate with the community and being out here with family members who actually need our help."',
					name: "CINQCARE care coordinator",
				},
				{
					color: "yellow",
					image: "/headshots/Quote-NursePatientPark.jpg",
					quote:
						'"We are not a sick care system where we only want to see you when you are sick — we are in it for the long haul with our patients and the community… CINQCARE has been open, honest and transparent…that means the world to us."',
					name: "CEO, Large Health System",
				},
			],
		};
	} else if (page === "join-our-family") {
		content = {
			heading: "Read reviews from people we've helped.",
			paragraph: "",
			subtext: "",
			testimonials: [
				{
					color: "orange",
					image: "/images/Quote-DoctorsTalking.jpg",
					quote:
						'"With CINQCARE, we’re not just improving metrics—<span>we’re improving lives.</span> The impact on our patients and our practice has been transformational."',
					name: "VP of Operations, Large Health System",
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
			{content.testimonials?.length > 0 && (
				<div
					className={`${styles.container_Testimonials} ${
						styles[content.testimonials[activeIndex]?.color]
					}`}
				>
					{/* Static image remains outside the animated text container */}
					<div className={styles.image_Testimonials}>
						{content.testimonials[0]?.image && (
							<img src={content.testimonials[0].image} alt="" loading="lazy" />
						)}
					</div>

					{/* The slideWrapper is keyed so it re-mounts and triggers the slideIn animation */}
					<div key={activeIndex} className={styles.slideWrapper}>
						<div className={styles.content_Testimonials}>
							{content.heading && (
								<h2 dangerouslySetInnerHTML={{ __html: content.heading }} />
							)}
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
