import { useMutation } from "@apollo/client";
import { getSkills } from "../../GraphQL/Query";
import { deleteSkill } from "../../GraphQL/Mutation";

export default function UseDeleteSkills() {
  const [deleteSkillsData, { loading: deleteSkillsLoading }] = useMutation(
    deleteSkill,
    {
      refetchQueries: [getSkills],
    }
  );

  return {
    deleteSkillsData,
    deleteSkillsLoading,
  };
}
