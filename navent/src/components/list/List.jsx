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

  const selectAparts = (filters, aparts) => {
    let { address, operation_type } = filters;
    let copyOpType = aparts.operation_type.operation_type_id;
    let copyAddress = `${aparts.title}  ${aparts.posting_location.zone} ${aparts.posting_location.city}`;
    address = address.toLowerCase();
    return (
      address.includes(copyAddress) &&
      (copyOpType === operation_type || operation_type === 0)
    );
  };

  let newFilteredAparts = (filters, aparts) => {
    let copyAparts = aparts.slice(0);

    let filtered = copyAparts.filter((gon) => {
      selectAparts(gon, filters);
    });

    return filtered;
  };

  // useEffect(() => {
  //   dispatch({
  //     type: UPDATE_FILTERED_APARTS,
  //     payload: newFilteredAparts(filters, aparts),
  //   });
  // }, [filters]);
  return (
    <div>
      {console.log(filteredAparts, filters, aparts)}

      {filters.activeSearch ? (
        filteredAparts.length > 0 ? (
          filteredAparts.map((apart) => {
            return <ResultCard result={apart} key={apart.posting_id} />;
          })
        ) : (
          <NoResult />
        )
      ) : (
        aparts.map((aparts) => {
          return <ResultCard result={aparts} key={aparts.posting_id} />;
        })
      )}
    </div>
  );
};

export default List;
