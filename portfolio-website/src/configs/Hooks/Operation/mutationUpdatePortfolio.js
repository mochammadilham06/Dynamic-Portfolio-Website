import { useMutation } from "@apollo/client";
import { getPortfolio } from "../../GraphQL/Query";
import { UpdatePortfolio } from "../../GraphQL/Mutation";
import Swal from "sweetalert2";

export default function UseUpdatePortfolio() {
  const [
    updatePortfolioData,
    { loading: updatePortfolioLoadng, error: updatePortfolioError },
  ] = useMutation(UpdatePortfolio, {
    onCompleted: () => {
      Swal.fire({
        icon: "success",
        title: "Portfolio Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    refetchQueries: [getPortfolio],
  });

  return {
    updatePortfolioData,
    updatePortfolioLoadng,
    updatePortfolioError,
  };
}
