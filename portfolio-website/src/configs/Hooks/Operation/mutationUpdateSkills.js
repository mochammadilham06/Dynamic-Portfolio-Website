import { useMutation } from "@apollo/client";
import { getSkills } from "../../GraphQL/Query";
import { updateSkill } from "../../GraphQL/Mutation";
import Swal from "sweetalert2";

export default function UseUpdateSkills() {
  const [
    updateSkillsData,
    { loading: updateSkillsLoading, error: updateSkillsError },
  ] = useMutation(updateSkill, {
    onCompleted: () => {
      Swal.fire({
        icon: "success",
        title: "Skills Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    refetchQueries: [getSkills],
  });

  return {
    updateSkillsData,
    updateSkillsLoading,
    updateSkillsError,
  };
}
