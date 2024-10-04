const INFO = {
	main: {
		title: "Home | Ahmad Portfolio",
		name: "Ahmad Alhourani",
		email: "ahmad.alhourani.contact@gmail.com",
		logo: "../logo.png",
		logo1:"../logo1.png"
	},

	socials: {
		twitter: "https://twitter.com/Ahmad27207545",
		github: "https://github.com/AhmadAlhourani19",
		LinkedIn: "https://www.linkedin.com/in/ahmad-alhourani-9555a72b6/",
	},

	homepage: {
		title: "Information Engineering Student at HAW Hamburg.",
		description: (
		  <>
			<h3>Welcome to my portfolio website!</h3>
			<br />
			Greetings from the bustling digital harbor of HAW Hamburg! I am Ahmad Alhourani, your intrepid navigator through the swirling nebulae of Information Engineering. On this virtual vessel you're invited to journey alongside me into the heart of innovation and discovery.
			<br />
			<br />
			In the halls of HAW Hamburg, where knowledge and ambition intertwine, I'm delving deep into the secrets of Information Engineering. Armed with the languages of the digital age C, Java, and Python I craft spells of code that bring to life the web's canvas with HTML5 and CSS3. And in the shadows, I'm conjuring the future with React.js, weaving spells that animate the web in ways you've yet to dream.
			<br />
			<br />
			Step aboard and set sail through my projects, a constellation of practical enchantments where theory and application dance in moonlit revelry. Here, databases aren't mere storage chambers but realms where narratives are spun from raw data, and frontends aren't just interfaces but stages where digital dramas unfold.
			<br />
			<br />
			Beyond the rigid lines of code, I am an artist painting with the vibrant hues of creativity. Each project is a canvas, and every line of code is a stroke of imagination. Brace yourself for an immersive journey where technology and creativity dance in harmony.
			<br />
			<br />
			Are you ready to embark on a quest of cosmic collaboration? Whether you're charting unknown territories of inquiry or in search of a fellow adventurer to navigate the tech wilderness, reach out. Together, let's transform fleeting thoughts into enduring legacies, crafting constellations of invention that light up the digital skies.
			<br />
			<br />
			<h3>Keep Exploring, Keep Innovating!</h3>
			 </>
		),
	  },


	projects: [
		{
			title: "Interactive Car Simulation (Java)",
			description:
				"This Java lab project showcases a dynamic Car Simulator with a user-friendly graphical interface. Users can spawn cars of different colors by clicking buttons, ensuring a clutter-free and interactive experience. The program allows individual deletion of cars based on color and provides an option to clear the entire screen. This project serves as a hands-on introduction to Java GUI programming, offering both functionality and visual appeal.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/AhmadAlhourani19/Car.git",
		},

		{
			title: "Microcontroller-Based Speed Measurement System (C)",
			description:
				"This project involves the development of a microcontroller-based system designed to measure and display the speed and direction of a rotating object using the TIVA TM4C1294 microcontroller. The system utilizes various peripherals and interrupts to accurately capture speed data and display it on an LCD",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png",
			linkText: "View Project",
			link: "https://github.com/AhmadAlhourani19/MC.git"
		},

		{
			title: "ADC-Based Voltage Measurement and Display System",
			description:
				"This project involves the development of a microcontroller-based system that reads an analog voltage input using the ADC (Analog-to-Digital Converter) of a TIVA TM4C1294 microcontroller and displays the corresponding digital value on a 7-segment display. The system includes a debounce mechanism for a button using a timer.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png",
			linkText: "View Project",
			link: "https://github.com/AhmadAlhourani19/ADC-Voltage-Measurement.git",
		},

		{
			title: "Pendulum-Based LED Display with Tiva TM4C1294",
			description:
				"This project involves creating a pendulum-based LED display system using the Tiva TM4C1294 microcontroller. The goal is to control a set of LEDs to display characters or patterns as the pendulum swings, creating a visual effect similar to persistence of vision displays.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png",
			linkText: "View Project",
			link: "https://github.com/AhmadAlhourani19/Pendulum-Based-LED-Display.git",
		},

	],

};

export default INFO;
