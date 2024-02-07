import { Note, Participant } from "./Retro";

export enum ServerMessageType {
    AddParticipant,
    RemoveParticipant,
    NoteAdded,
    NoteRemoved,
    NoteEdited
}

export class AddParticipant {
    readonly type = ServerMessageType.AddParticipant;
    constructor(public participant: Participant) {}
}

export class RemoveParticipant {
    readonly type = ServerMessageType.RemoveParticipant;
    constructor(public id: number) {}
}

export class NoteAdded {
    readonly type = ServerMessageType.NoteAdded;
    constructor(
        public note: Note) {}
}

export class NoteRemoved {
    readonly type = ServerMessageType.NoteRemoved;
    constructor(public id: number) {}
}

export class NoteEdited {
    readonly type = ServerMessageType.NoteEdited;
    constructor(public text: string) {}
}

export type ServerMessage = AddParticipant | RemoveParticipant | NoteAdded | NoteRemoved | NoteEdited;