import styles from "./form.module.scss";

const Form = ({ page }) => {
	let content = "";

	if (page === "join-our-family") {
		content = {
			heading: "Join <em>our family</em>",
			image: "images/ManWomanHugging.jpg",
			paragraph:
				"<p>Every day, we’re committed to your health and well-being—<em>because to us, you’re family.</em> <br> We’ll provide you with personalized care, ensuring you have access to medical, mental health, and community services.</p>",
			form: "https://form.jotform.com/251200129131135",
			class: "family",
		};
	}

	if (page === "sms-opt-in") {
		content = {
			heading: "Sign up to recieve text messages",
			image: "",
			paragraph: "",
			form: "https://form.jotform.com/250985721672162",
			class: "sms",
		};
	}

	if (page === "aco") {
		content = {
			heading: "ACO <em>Reach</em>",
			image: "",
			paragraph:
				"<p>Want to make your Medicare services easier, more convenient, and cost effective?</p>" +
				"<p>To take advantage of this program, call CINQCARE ACO REACH at 1-800-922-7022 or complete the form.</p>",
			form: "https://form.jotform.com/251200129131135",
			class: "family",
		};
	}

	return (
		<section className={styles.section_Form}>
			<div className={styles.container_Form}>
				<div className={styles.form_Content}>
					{content.heading && (
						<h1 dangerouslySetInnerHTML={{ __html: content.heading }} />
					)}
					{content.image && <img src={content.image} />}
					{content.paragraph && (
						<div dangerouslySetInnerHTML={{ __html: content.paragraph }} />
					)}
				</div>
				<div className={styles.form_Form}>
					<iframe
						title="CINQCARE Join Form"
						id="JotFormIFrame"
						allowFullScreen
						src={content.form}
						className={styles[content.class]}
					/>
				</div>
			</div>
		</section>
	);
};

export default Form;
