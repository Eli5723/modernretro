enum ClientMSGType {
    CreateNote,
    RemoveNote,
    EditNote,
    Vote
};

export class VoteMessage {
    type = ClientMSGType.Vote;
    constructor(public category: number, public index: number) {}
}

export class CreateNoteMessage {
    type = ClientMSGType.CreateNote;
    constructor(public category: number, public content: string) {}
}

export class RemoveNoteMessage {
    type = ClientMSGType.RemoveNote;
    constructor(public category: number, public index: number) {}
}

export class EditNoteMessage {
    type = ClientMSGType.EditNote;
    constructor(public category: number, public index: number, public content: string) {}
}

export type ClientMessage = VoteMessage | CreateNoteMessage | RemoveNoteMessage | EditNoteMessage;
