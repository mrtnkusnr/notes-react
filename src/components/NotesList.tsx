import Note from "./Note";
import AddNote from "./AddNote";
import { NoteType } from "../types";
import Filter from "./Filter";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

type NoteListType = {
  notes: NoteType[];
  handleAddNote: (value: string) => void;
  handleDeleteNote: (value: string) => void;
  handlePin: (value: string) => void;
};

const NotesList: React.FC<NoteListType> = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handlePin,
}) => {
  const [filteredNotes, setFilteredNotes] = useState<NoteType[] | null>(null);

  const [searchParams, setSearchParams] = useSearchParams({});

  const handleFilterPinned = () => {
    const pinnedNotes = notes.filter((note) => note.isPinned === true);
    // react-router
    // https://reactrouter.com/en/main
    // const [searchParams, setSearchParams] = useSearchParams();
    // setSearchParams({filter: 'pinned'});
    // if (searchParams.pinned) {}
    // console.log("AAA");
    // history.pushState(
    //   {
    //     aaa: "bbb",
    //   },
    //   "",
    //   ""
    // );

    searchParams.set("pinned", "true");
    setSearchParams(searchParams);
    setFilteredNotes(pinnedNotes);
  };

  const handleResetFilter = () => {
    searchParams.delete("pinned");
    setSearchParams(searchParams);
    setFilteredNotes(null);
  };

  const displayNotes = filteredNotes ? filteredNotes : notes;

  // const showPinnedNotes = searchParams.get('pinned') === 'true'

  return (
    <div>
      <Filter
        handleFilterPinned={handleFilterPinned}
        handleResetFilter={handleResetFilter}
      />
      <div className="notes-list masonry sm:masonry-sm md:masonry-md">
        <AddNote handleAddNote={handleAddNote} />
        {displayNotes.map((note) => (
          <Note
            notes={notes}
            key={note.id}
            id={note.id}
            content={note.content}
            date={note.date}
            isPinned={note.isPinned}
            handleDeleteNote={handleDeleteNote}
            handlePin={handlePin}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
