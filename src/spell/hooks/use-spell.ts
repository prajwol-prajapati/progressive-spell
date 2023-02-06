import { useQuery } from "react-query";
import { getAllSpells } from "../spell.api";

export const useListOfSpells = () => {
  return useQuery<any>("get-all-spells", getAllSpells);
};
