import { Category, Note, Participant, RetroPhase } from "./Retro";

let mockId = 5; // Start with the next available id

export const mockParticipants: Participant[] = [
	{
		name: "John Doe",
		id: mockId++,
		iconURL: "api.dicebear.com/7.x/bottts/png"
	},
	{
		name: "Jane Doe",
		id: mockId++,
		iconURL: "api.dicebear.com/7.x/bottts/png"
	},
	{
		name: "John Smith",
		id: mockId++,
		iconURL: "api.dicebear.com/7.x/bottts/png"
	},
	{
		name: "Jane Smith",
		id: mockId++,
		iconURL: "api.dicebear.com/7.x/bottts/png"
	},
	{
		name: "John Johnson",
		id: mockId++,
		iconURL: "api.dicebear.com/7.x/bottts/png"
	},
];

export const mockCategories: Category[] = [
	{
		id: mockId++,
		title: "Start",
		description: "What should we start doing?",
		notes: generateMockNotes(5),
	},
	{
		id: mockId++,
		title: "Stop",
		description: "What should we stop doing?",
		notes: generateMockNotes(5),
	},
	{
		id: mockId++,
		title: "Continue",
		description: "What should we continue doing?",
		notes: generateMockNotes(5),
	},
	{
		id: mockId++,
		title: "Kudos",
		description: "What should we praise?",
		notes: generateMockNotes(5),
	},
];

function generateMockNotes(numNotes: number): Note[] {
	const newNotes: Note[] = [];

	for (let i = 0; i < numNotes; i++) {
		const newNote: Note = {
			id: mockId++,
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
			authorId: (i + Math.floor(Math.random()*mockParticipants.length)) % mockParticipants.length,
		};

		newNotes.push(newNote);
	}

	return newNotes;
}


export const retroPhases: RetroPhase[] = [
	{
		name: "Collect Notes",
		description: "Note areas where you think the team can improve",
		timeEsimate: "Estimate: 3 minutes",
	},
	{
		name: "Grooming",
		description: "Facilitator removes duplicate / non-actionable notes",
		timeEsimate: "Estimate: 2 minutes",
	},
	{
		name: "Voting",
		description: "Vote on items you want the team to discuss",
		timeEsimate: "Estimate: 2 minutes",
	},
	{
		name: "Action Items",
		description: "Create / Remove action items",
		timeEsimate: "Estimate: 4 minutes",
	},
];

export const mockRetro = {
	participants: mockParticipants,
	categories: mockCategories,
	retroPhases: retroPhases,
};