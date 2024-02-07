export interface Participant {
	name: string;
	id: number;
	iconURL?: string;
}

export interface Note {
	id: number;
	text: string;
	authorId: number;
}

export interface Category {
	id: number;
	title: string;
	description: string;
	notes: Note[];
}

export interface Retro {
	participants: Participant[];
	categories: Category[];
	phases: RetroPhase[];
}

export interface RetroPhase {
	name: string;
	description: string;
	timeEsimate: string;
}

export enum RetroRole {
	Facilitator,
	User,
}

export interface PhaseRules {
	allowNoteCreation: boolean;
	allowVoting: boolean;
	voteLimit: number;
	showNotes: boolean;
}