import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoasters } from "../store";
import Skeleton from "./Loader";

function RoastersList() {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.roasters;
    });

    useEffect(() => {
        dispatch(fetchRoasters());
    }, [dispatch]);

    if (isLoading) {
        return <Skeleton times={6} className="h-10 w-full" />;
      }
    
      if (error) {
        return <div>Error fetching data...</div>;
      }
    
      const renderedRoasters = data.map((roaster) => {
        return (
          <div key={roaster.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
              {roaster.name}
            </div>
          </div>
        );
      });
    
      return <div>{renderedRoasters}</div>;
}

export default RoastersList;