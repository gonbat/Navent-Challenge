import React, { useEffect } from "react";
import ResultCard from "../resultCard/ResultCard";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_FILTERED_APARTS } from "../../store/constants/constants";
import NoResult from "../noResult/NoResult";

const List = () => {
  const dispatch = useDispatch();
  const filters = useSelector(({ aparts }) => aparts.filters);
  const aparts = useSelector(({ aparts }) => aparts.data.aparts);
  const filteredAparts = useSelector(
    ({ aparts }) => aparts.data.filteredaparts,
  );

  const newFilteredAparts = (filters) => {
    let copyAparts = aparts.slice(0);
    let selectAparts = (filters, aparts) => {
      let { address, operation_type } = filters;
      let copyAddress = `${aparts.title} ${aparts.posting_location.address}  ${aparts.posting_location.zone} ${aparts.posting_location.city}`.toLowerCase();
      address = address.toLowerCase();
      return (
        address.includes(copyAddress) &&
        (aparts.operation_type.operation_type_id === operation_type ||
          operation_type === 0)
      );
    };
    let filtered = copyAparts.filter((gon) => {
      selectAparts(gon, filters);

      return filtered;
    });
  };

  // useEffect(() => {
  //   dispatch({
  //     type: UPDATE_FILTERED_APARTS,
  //     payload: newFilteredAparts(filters),
  //   });
  // }, [filters]);

  return (
    <div>
      {aparts.map((aparts) => {
        return <ResultCard result={aparts} key={aparts.posting_id} />;
      })}
    </div>
  );
};

export default List;
