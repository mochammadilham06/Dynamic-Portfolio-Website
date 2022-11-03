import { useMutation } from "@apollo/client";
import { getSkills } from "../../GraphQL/Query";
import { createSkills } from "../../GraphQL/Mutation";
export default function UseCreateSkills() {
  const [createSkillsData, { loading: createSkillsLoading }] = useMutation(
    createSkills,
    {
      refetchQueries: [getSkills],
    }
  );

  return {
    createSkillsData,
    createSkillsLoading,
  };
}
