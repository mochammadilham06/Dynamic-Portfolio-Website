import { useMutation } from "@apollo/client";
import { deletePortfolio } from "../../GraphQL/Mutation";
import { getPortfolio } from "../../GraphQL/Query";

export default function UseDeletePortfolio() {
  const [deletePorto, { loading: deleteLoading }] = useMutation(
    deletePortfolio,
    {
      refetchQueries: [getPortfolio],
    }
  );

  return {
    deletePorto,
    deleteLoading,
  };
}
