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

/* 
Course catergories:
Short: {
	Graphics Design: ["3172-DCC-NGGD", "666-MPH", "667-MIL", "671-MID", "675-MP"],
	2D Animation: ["662-M2DA"],
	3D Animation: ["663-MZB", "664-MBL", "669-MC4D", "672-MSP", "674-M3DM", "677-MM", "OV-587-BE"],
	VFX: ["661-MH", "678-MNS"],
	Graphic Web Design and Development: ["3172-DCC-NGWDD"],
	Motion Graphics Design: ["669-MC4D", "670-MAE", "OV-587-BE"],
	UI/UX: [],
	Game Design: ["668-MUC", "676-MUE"],
	Game Development: [],
	Interior/ Exterior: [],
	Video / Audio: ["673-MAVE", "OV-587-BE"],
	AI: ["660-MGAI"],
}

/* Course mapping to categories:
Mid: {
	Graphics Design: [
		"3168-AAIPP-DV",
		"3173-DCC-NGVDMA",
	],
	2D Animation: [],
	3D Animation: [
		"3171-AAIPP-A3DV",
		"3179-AVGC-ADGAB",
		"3178-AVGC-ADGAM",
	],
	VFX: [
		"3180-AVGC-APVFXCE",
	],
	Graphic Web Design and Development: [
		"3172-DCC-NGGDWD",
		"3174-DCC-DCC",
	],
	Motion Graphics Design: [
		"3174-DCC-DCC",
		"3173-DCC-NGVDMA",
	],
	UI/UX: [
		"Advanced Program in UI UX Design",
	],
	Game Design: [],
	Game Development: [],
	Interior/ Exterior: [],
	Video / Audio: [
		"3168-AAIPP-DV",
		"3180-AVGC-APVFXCE",
	],
}


*/

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
		[[], [], [], [], [], []]
	),

	new Course(
		"3168-AAIPP-APAUE",
		"AAIPP Animation - 3168",
		"AAIPP-Advanced Program in Animation with Unreal Engine",
		"Long",
		27,
		["courseCategory"],
		312936,
		273170,
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
	new Course(
		"3168-AAIPP-DV",
		"AAIPP Animation - 3168",
		"AAIPP-Design and Visualization",
		"Mid",
		11,
		["courseCategory"],
		107616,
		103250,
		[[], [], [], [], [], []]
	),
	new Course(
		"3171-AAIPP-A3DV",
		"AAIPP APAVID - 3171",
		"AAIPP-Advanced 3D Visualization",
		"Mid",
		18,
		["courseCategory"],
		208388,
		191278,
		[[], [], [], [], [], []]
	),
	new Course(
		"3171-AAIPP-APAVID",
		"AAIPP APAVID - 3171",
		"AAIPP-Advanced Program in Architectural Visualization and Interior Design",
		"Long",
		27,
		["courseCategory"],
		315532,
		275294,
		[
			[
				"Adobe Illustrator CC",
				"Storyboarder",
				"Adobe Premiere Pro",
				"Adobe Audition CC",
				"Adobe Animate CC",
				"Adobe After Effects CC",
				"Gen Ai Tools",
			],
			[
				"AutoCAD",
				"3ds Max",
				"V-Ray",
				"Adobe Substance Painter",
				"SketchUp",
				"Gen Ai Tools",
			],
			[
				"Blender",
				"Unreal Engine",
				"Twinmotion",
				"Term-end Portfolio",
				"LinkedIn",
				"Upwork",
			],
			[],
			[],
			[],
		]
	),
	new Course(
		"3170-AAIPP-BD",
		"AAIPP Broadcast - 3170",
		"AAIPP-Broadcast Design",
		"Long",
		19,
		["courseCategory"],
		222430,
		203078,
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
				"AutoCAD",
				"3ds Max",
				"V-Ray",
				"Adobe Substance Painter",
				"SketchUp",
				"Gen Ai Tools",
			],
			[],
			[],
			[],
			[],
		]
	),
	new Course(
		"3169-AAIPP-A3DD",
		"AAIPP VFX - 3169",
		"AAIPP-Advanced 3D Design for VFX",
		"Long",
		20,
		["courseCategory"],
		230808,
		209686,
		[[], [], [], [], [], []]
	),
	new Course(
		"3169-AAIPP-AdvVE",
		"AAIPP VFX - 3169",
		"AAIPP-Advanced Program in Visual Effects",
		"Long",
		29,
		["courseCategory"],
		329338,
		285796,
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
				"Adobe Substance Painter",
				"Reality Capture",
				"Arnold",
				"Gen Ai tools for 3D Assets Creation & Animation",
				"Term-end Portfolio",
			],
			[
				"Autodesk Maya nCloth & X-Gen",
				"Houdini",
				"Silhouette",
				"3D Equalizer",
				"Nuke",
				"Term-end Portfolio",
				"LinkedIn",
				"Upwork",
			],
			[],
			[],
			[],
		]
	),
	new Course(
		"3179-AVGC-ADGAB",
		"AVGC - ADGAB - 3179",
		"Advanced Digital Graphics and Animation with Blender",
		"Mid",
		13,
		["courseCategory"],
		149860,
		141836,
		[
			["Adobe Photoshop CC", "Adobe Audition CC", "Adobe After Effects CC"],
			["Blender", "Term-end Portfolio", "LinkedIn", "Upwork"],
			[],
			[],
			[],
			[],
		]
	),
	new Course(
		"3178-AVGC-ADGAM",
		"AVGC - ADGAM - 3178",
		"Advanced Digital Graphics and Animation with Maya",
		"Mid",
		14,
		["courseCategory"],
		158120,
		148326,
		[
			["Adobe Photoshop CC", "Adobe Audition CC", "Adobe After Effects CC"],
			["Autodesk Maya", "Arnold", "Term-end Portfolio", "LinkedIn", "Upwork"],
			[],
			[],
			[],
			[],
		]
	),
	new Course(
		"3177-AVGC-APAVFX",
		"AVGC - Anivfx - 3177",
		"Advanced Program in Animation and VFX",
		"Long",
		23,
		["courseCategory"],
		262432,
		234230,
		[
			[
				"Adobe Photoshop CC",
				"Adobe Premiere Pro",
				"Adobe Audition CC",
				"Adobe After Effects CC",
			],
			["Autodesk Maya", "Adobe Substance Painter", "Arnold"],
			[
				"Autodesk Maya nCloth & X-Gen",
				"Houdini",
				"Silhouette",
				"3D Equalizer",
				"Nuke",
				"Term-end Portfolio",
				"LinkedIn",
				"Upwork",
			],
			[],
			[],
			[],
		]
	),
	new Course(
		"3180-AVGC-APVFXCE",
		"AVGC - APVFXCE - 3180",
		"Advanced Program in VFX Compositing and Editing",
		"Mid",
		11,
		["courseCategory"],
		119180,
		113870,
		[
			[
				"Adobe Photoshop CC",
				"Adobe Premiere Pro",
				"Adobe Audition CC",
				"Adobe After Effects CC",
				"Nuke",
				"Silhouette",
				"DaVinci",
				"Term-end Portfolio",
				"LinkedIn",
				"Upwork",
			],
			[],
			[],
			[],
			[],
			[],
		]
	),
	new Course(
		"3181-AVGC-APVFXFM",
		"AVGC - APVFXFM - 3181",
		"Advanced Program in VFX Film Making",
		"Long",
		20,
		["courseCategory"],
		210040,
		190806,
		[
			[
				"Adobe Photoshop CC",
				"Storyboarder",
				"Adobe Premier Pro CC",
				"Adobe Audition CC",
				"Adobe After Effects CC",
			],
			["Autodesk Maya", "Adobe Substance Painter", "Arnold"],
			[
				"Silhouette",
				"3D Equalizer",
				"Nuke",
				"Term-end Portfolio",
				"LinkedIn",
				"Upwork",
			],
			[],
			[],
			[],
		]
	),
	new Course(
		"3176-AVGC-TRINITY",
		"AVGC - TRINITY - 3176",
		"Trinity 3D, Master in Realtime 3D, VFX and Game Development",
		"Long",
		41,
		["courseCategory"],
		433060,
		351050,
		[
			[
				"Conceptual",
				"Storyboarder",
				"Adobe Illustrator CC",
				"Adobe Photoshop CC",
			],
			[
				"Adobe Premier Pro CC",
				"Adobe Audition CC",
				"Adobe Animate CC",
				"Adobe After Effects CC",
				"DaVinci",
				"Gen Ai tools for Text/Image/Video",
			],
			[
				"Conceptual",
				"Autodesk Maya",
				"Maxon Zbrush",
				"Adobe Substance Painter",
				"Arnold",
			],
			[
				"Autodesk Maya",
				"Gen Ai tools for 3D Assets",
				"Autodesk Maya nCloth & X-Gen",
				"Unreal Engine",
				"Meta Human",
			],
			[
				"Reality Capture",
				"Conceptual",
				"Houdini",
				"Silhouette",
				"3D Equalizer",
				"Nuke",
			],
			["Unreal Engine 5.0"],
		]
	),
	new Course(
		"3174-DCC-DCC",
		"DCC - DCC - 3174",
		"DCC-Digital Content Creation",
		"Mid",
		17,
		["courseCategory"],
		191278,
		176764,
		[
			[
				"Adobe Photoshop CC",
				"Adobe Illustrator CC",
				"Adobe InDesign CC",
				"Canva/Adobe Express",
				"Adobe Dimensions",
				"Term-end Portfolio",
			],
			[
				"Adobe Premiere Pro CC",
				"Adobe Audition CC",
				"Adobe Animate CC",
				"Adobe After Effects CC",
				"DaVinci",
				"Gen Ai tools for text/image/video",
				"Term-end Portfolio",
			],
			[
				"Google Forms",
				"Microsoft Forms",
				"Pencil Project/Draw.io",
				"Figma",
				"Maze/UserTesting",
				"Visify",
				"Uizard",
				"Figma",
				"Firefly",
				"VS Code",
				"WordPress",
				"XAMPP",
				"Term-end Portfolio",
				"LinkedIn",
				"Upwork",
			],
			[],
			[],
			[],
		]
	),
	new Course(
		"3172-DCC-NGGD",
		"DCC - NGGWDD - 3172",
		"DCC-Next-Gen Graphic and Visual Design",
		"Short",
		8,
		["courseCategory"],
		51448,
		50150,
		[
			[
				"Adobe Photoshop CC",
				"Adobe Illustrator CC",
				"Adobe InDesign CC",
				"Canva/Adobe Express",
				"Adobe Dimensions",
				"Term-end Portfolio",
			],
			[],
			[],
			[],
			[],
			[],
		]
	),
	new Course(
		"3172-DCC-NGGDWD",
		"DCC - NGGWDD - 3172",
		"DCC-Next-Gen Graphic Design and Web Development",
		"Mid",
		15,
		["courseCategory"],
		103840,
		97940,
		[
			[
				"Adobe Photoshop CC",
				"Adobe Illustrator CC",
				"Adobe InDesign CC",
				"Canva/Adobe Express",
				"Adobe Dimensions",
				"Pencil Project/Draw.io",
				"Term-end Portfolio",
			],
			[
				"Figma",
				"Visify",
				"Uizard",
				"Figma",
				"Firefly",
				"HTML5 CSS3",
				"Bootstrap",
				"JavaScript",
				"WordPress",
				"XAMPP",
				"AdWords",
				"Analytics",
				"Yoast",
				"PHP and MySQL",
				"Term-end Portfolio",
				"LinkedIn",
				"Upwork",
			],
			[],
			[],
			[],
			[],
		]
	),
	new Course(
		"3172-DCC-NGWDD",
		"DCC - NGGWDD - 3172",
		"DCC-Next-Gen Web Design and Development",
		"Short",
		7,
		["courseCategory"],
		54280,
		52628,
		[
			[
				"Figma",
				"Visify",
				"Uizard",
				"Figma",
				"Firefly",
				"HTML5 CSS3",
				"Bootstrap",
				"JavaScript",
				"WordPress",
				"XAMPP",
				"AdWords",
				"Analytics",
				"Yoast",
				"PHP and MySQL",
				"Term-end Portfolio",
				"LinkedIn",
				"Upwork",
			],
			[],
			[],
			[],
			[],
			[],
		]
	),
	new Course(
		"3173-DCC-NGVDMA",
		"DCC - NGVDMA - 3173",
		"DCC-Next-Gen Visual Design and Motion Graphics",
		"Mid",
		11,
		["courseCategory"],
		100182,
		95462,
		[
			[
				"Adobe Illustrator CC",
				"Adobe Photoshop CC",
				"Canva/Adobe Express",
				"Adobe Animate CC",
				"Adobe Premiere Pro CC",
				"Adobe Audition CC",
				"Adobe After Effects CC",
				"DaVinci",
				"Gen AI tools for Text/Image/Video",
				"Term-end Portfolio",
				"LinkedIn",
				"Upwork",
			],
			[],
			[],
			[],
			[],
			[],
		]
	),
	new Course(
		"3175-GID-APGAD",
		"GID - MGADDARVR - 3175",
		"GID-Advanced Program in Game Art and Design",
		"Long",
		21,
		["courseCategory"],
		222430,
		199656,
		[[], [], [], [], [], []]
	),
	new Course(
		"3175-GID-APGADD",
		"GID - MGADDARVR - 3175",
		"GID-Advanced Program in Game Art, Design and Development",
		"Long",
		28,
		["courseCategory"],
		296770,
		255588,
		[[], [], [], [], [], []]
	),
	new Course(
		"3175-GID-APGADS",
		"GID - MGADDARVR - 3175",
		"GID-Advanced Program in Game Art and Design with Specialization",
		"Long",
		27,
		["courseCategory"],
		281784,
		246266,
		[[], [], [], [], [], []]
	),
	new Course(
		"3175-GID-APID",
		"GID - MGADDARVR - 3175",
		"GID-Advanced Program in Immersive Design",
		"Long",
		26,
		["courseCategory"],
		269512,
		236826,
		[[], [], [], [], [], []]
	),
	new Course(
		"3175-GID-MGADDARVR",
		"GID - MGADDARVR - 3175",
		"GID-Master in Game Art, Design and Dev with ARVRXR",
		"Long",
		39,
		["courseCategory"],
		404504,
		331462,
		[
			[
				"Adobe Illustrator CC",
				"Adobe Photoshop CC",
				"Figma",
				"Adobe Animate CC",
				"Gen AI tools for Text/Image/Video",
				"GDevelop.io",
			],
			[
				"Autodesk Maya",
				"Maxon Zbrush",
				"Adobe Substance Painter",
				"Unreal Engine",
				"Gen AI tools for 3D Assets Creation & Animation",
				"Term-end Portfolio",
			],
			[
				"Blender",
				"Substance Designer",
				"Adobe Stager",
				"Reality Capture",
				"Term-end Portfolio",
			],
			["Unreal Engine"],
			[
				"Spark AR",
				"Unreal Engine",
				"Unity3D",
				"Term-end Portfolio",
				"LinkedIn",
				"Upwork",
			],
			[],
		]
	),
	new Course(
		"undefined!",
		"undefined!",
		"Advanced Program in UI UX Design",
		"duration",
		undefined,
		["courseCategory"],
		undefined,
		undefined,
		[
			[
				"Adobe Photoshop CC",
				"Adobe Illustrator CC",
				"Google Form",
				"Microsoft Forms",
				"Pencil Project/Draw.io",
				"Figma",
				"Maze/User Testing",
				"Visify",
				"Uizard",
				"Figma",
				"Firefly",
				"VS Code",
				"WordPress",
				"XAMPP",
				"Project",
				"Behance",
				"Dribble",
			],
			[],
			[],
			[],
			[],
			[],
		]
	),
	new Course(
		"660-MGAI",
		"STCs",
		"Master in Gen AI",
		"Short",
		2,
		["courseCategory"],
		16992,
		16992,
		[
			[
				"Concept + ChatGPT Plus",
				"Deep Seek",
				"Leonardo Ai + Midjourney + Adobe Photoshop",
				"+ Leonardo Ai",
				"Canva Ai / Adobe Express Ai Tools",
				"Sora + Runway ML + Adobe After Effects + Premiere",
				"Eleven Labs + Suno Ai + Adobe Audition",
				"Meshy Ai + Zbrush",
			],
			[],
			[],
			[],
			[],
			[],
		]
	),
	new Course(
		"661-MH",
		"STCs",
		"Master in Houdini",
		"Short",
		2,
		["courseCategory"],
		21358,
		21358,
		[["Houdini"], [], [], [], [], []]
	),
	new Course(
		"662-M2DA",
		"STCs",
		"Master in 2D Animation",
		"Short",
		9,
		["courseCategory"],
		89208,
		85786,
		[["2d Animate"], [], [], [], [], []]
	),
	new Course(
		"663-MZB",
		"STCs",
		"Master in Zbrush",
		"Short",
		2,
		["courseCategory"],
		17818,
		17818,
		[["Z brush"], [], [], [], [], []]
	),
	new Course(
		"664-MBL",
		"STCs",
		"Master in Blender",
		"Short",
		7,
		["courseCategory"],
		70210,
		68322,
		[["Blender"], [], [], [], [], []]
	),
	new Course(
		"666-MPH",
		"STCs",
		"Master in Photoshop",
		"Short",
		2,
		["courseCategory"],
		21358,
		21358,
		[["Photoshop"], [], [], [], [], []]
	),
	new Course(
		"667-MIL",
		"STCs",
		"Master in Illustrator",
		"Short",
		2,
		["courseCategory"],
		10856,
		10856,
		[["Illustrator"], [], [], [], [], []]
	),
	new Course(
		"668-MUC",
		"STCs",
		"Master in Unreal Cinematics",
		"Short",
		3,
		["courseCategory"],
		32096,
		31742,
		[["Unreal Engine"], [], [], [], [], []]
	),
	new Course(
		"669-MC4D",
		"STCs",
		"Master in Cinema 4D",
		"Short",
		3,
		["courseCategory"],
		32096,
		31742,
		[["Cinema 4D"], [], [], [], [], []]
	),
	new Course(
		"670-MAE",
		"STCs",
		"Master in After Effects",
		"Short",
		2,
		["courseCategory"],
		17110,
		17110,
		[["After Effects"], [], [], [], [], []]
	),
	new Course(
		"671-MID",
		"STCs",
		"Master in InDesign",
		"Short",
		2,
		["courseCategory"],
		11682,
		11682,
		[["InDesign"], [], [], [], [], []]
	),
	new Course(
		"672-MSP",
		"STCs",
		"Master in Substance Painter",
		"Short",
		2,
		["courseCategory"],
		15458,
		15458,
		[["Substance Painter"], [], [], [], [], []]
	),
	new Course(
		"673-MAVE",
		"STCs",
		"Master in Audio Video Editing",
		"Short",
		3,
		["courseCategory"],
		25606,
		25606,
		[["Audio Video Editing"], [], [], [], [], []]
	),
	new Course(
		"674-M3DM",
		"STCs",
		"Master in 3ds Max",
		"Short",
		5,
		["courseCategory"],
		51330,
		50504,
		[["3Ds Max"], [], [], [], [], []]
	),
	new Course(
		"675-MP",
		"STCs",
		"Master in Photography",
		"Short",
		2,
		["courseCategory"],
		17110,
		17110,
		[["Photography"], [], [], [], [], []]
	),
	new Course(
		"676-MUE",
		"STCs",
		"Master in Unreal Engine",
		"Short",
		7,
		["courseCategory"],
		76700,
		75048,
		[["Unreal Engine"], [], [], [], [], []]
	),
	new Course(
		"677-MM",
		"STCs",
		"Master in Maya",
		"Short",
		9,
		["courseCategory"],
		66906,
		64310,
		[["Maya"], [], [], [], [], []]
	),
	new Course(
		"678-MNS",
		"STCs",
		"Master in Nuke and Silhouette",
		"Short",
		4,
		["courseCategory"],
		45548,
		44958,
		[["Nuke and Silhouette"], [], [], [], [], []]
	),

	new Course(
		"OV-587-BE",
		"STCs",
		"Broadcast Editing",
		"Short",
		5,
		["courseCategory"],
		49442,
		48734,
		[[], [], [], [], [], []]
	),
];
