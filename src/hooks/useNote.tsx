import { useOutletContext } from "react-router-dom";
import { Note } from "../App";

function useNote() {
  return useOutletContext<Note>();
}

export default useNote;
