import { useState } from "react";
import { nanoid } from "nanoid";
import Heading from "./Heading";
import AddNoteButton from "./AddNoteButton";
import NotesList from "./NotesList";
import Modal from "./Modal";
import { NoteType } from "../types";

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="container min-w-full mx-auto p-4">{children}</div>;
};

const NotesHomepage = () => {
  // zustand
  // https://github.com/pmndrs/zustand
  // https://github.com/pmndrs/zustand#persist-middleware\

  // notes: []
  // search: (query) => {
  //   state.notes.filter(note: string => note.includes(query))
  // }

  // useState()
  // useReducer()
  // useContext()`

  const [notes, setNotes] = useState<NoteType[]>([]);

  const addNote = (value: string) => {
    const newNote = {
      id: nanoid(),
      content: value,
      date: new Date(),
      isPinned: false,
    };
    const newNotes = [newNote, ...notes];
    newNotes.sort((a, b) =>
      a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1
    );
    setNotes(newNotes);
    console.log(newNotes);
  };

  const deleteNote = (id: string) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const pinNote = (id: string) => {
    const updatedNotes = [...notes];

    updatedNotes.forEach((note) => {
      if (note.id === id) {
        note.isPinned = !note.isPinned;
      }
    });

    updatedNotes.sort((a, b) =>
      a.isPinned === b.isPinned ? 0 : a.isPinned ? -1 : 1
    );

    console.log(updatedNotes);
    setNotes(updatedNotes);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Container>
      <Heading />
      <AddNoteButton handleModal={handleModal} />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
        handlePin={pinNote}
      />
      {openModal && <Modal handleModal={handleModal} />}
    </Container>
  );
};

export default NotesHomepage;
