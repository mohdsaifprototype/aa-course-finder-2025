// Course categories grouped by duration
export const courseCategories = {
	Long: [
		"3D Animation",
		"VFX",
		"Game Design",
		"Game Development",
		"Interior/Exterior",
	],
	Mid: [
		"Graphic Design",
		"2D Animation",
		"3D Animation",
		"VFX",
		"Graphic Web Design and Development",
		"Motion Graphic Design",
		"UI/UX",
		"Video/Audio",
	],
	Short: [
		"Graphic Design",
		"3D Animation",
		"VFX",
		"Graphic Web Design and Development",
		"Motion Graphic Design",
		"UI/UX",
		"Game Design",
		"Game Development",
		"Interior/Exterior",
		"Video/Audio",
	],
};

// Course class definition
class Course {
	constructor(
		courseCode,
		courseFamily,
		name,
		duration,
		months,
		categories,
		totalFees,
		lumpSum,
		terms,
		degree = false
	) {
		this.courseCode = courseCode;
		this.courseFamily = courseFamily;
		this.name = name;
		this.duration = duration;
		this.months = months;
		this.categories = categories; // Changed to accept multiple categories
		this.totalFees = totalFees;
		this.registrationFees = 5900; // Fixed registration fee
		this.downPayment = degree ? 80000 : 30000; // Fixed down payment
		this.lumpSum = lumpSum;
		this.terms = terms;
		this.degree = degree;
	}

	get totalSubmission() {
		return this.totalFees - this.downPayment;
	}

	get totalNoOfQuarterlyInstallments() {
		if (this.degree) {
			return this.months / 6 - 1;
		} else {
			return Math.floor((this.months - 1) / 3);
		}
	}

	get installments() {
		if (this.degree) {
			return this.totalSubmission / 5;
		} else {
			return this.totalSubmission / Math.floor((this.months - 1) / 3);
		}
	}

	get monthlyInstallments_1() {
		return Math.round(this.totalSubmission / (this.months - 1));
	}

	get monthlyInstallments_2() {
		return Math.round(this.totalSubmission / (this.months - 2));
	}

	get monthlyInstallments_3() {
		return Math.round(this.totalSubmission / (this.months - 3));
	}

	get monthlyInstallments_4() {
		return Math.round(this.totalSubmission / (this.months - 4));
	}
}

// Course details
export const courses = [
	new Course(
		"3168-AAIPP-A3DD",
		"AAIPP Animation - 3168",
		"AAIPP-Advanced 3D Design",
		"Long",
		22,
		["VFX"],
		248508,
		224436,
		[
			[
				"Adobe Illustrator CC",
				"Adobe Photoshop CC",
				"Storyboarder",
				"Adobe Premier Pro CC",
				"Adobe Audition CC",
				"Adobe Animate CC",
				"Adobe After Effects CC",
				"Gen Ai tools for Text/Image/Video",
				"Term-end Portfolio",
			],
			[
				"Autodesk Maya",
				"Maxon Zbrush",
				"Adobe Substance Painter",
				"Reality Capture",
				"Arnold",
				"Gen Ai tools for 3D Assets Creation & Animation",
				"Term-end Portfolio",
			],
			[
				"Autodesk Maya nCloth & X-Gen",
				"Unreal Engine",
				"Meta Human",
				"Term-end Portfolio",
				"LinkedIn",
				"Upwork",
			],
			[],
			[],
			[],
		]
	),
];
