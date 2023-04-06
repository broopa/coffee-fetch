import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchRoasters, addRoaster } from "../store";
import { useThunk } from "../hooks/useThunk";
import Skeleton from "./Loader";
import Button from "./Button";
import RoastersListItem from "./RoastersListItem";


function RoastersList() {
    const [doFetchRoasters, isLoadingRoasters, loadingRoastersError] = useThunk(fetchRoasters)
    const [doCreateRoaster, isCreatingRoaster, creatingRoasterError] = useThunk(addRoaster)
    const { data } = useSelector((state) => {
        return state.roasters;
    });

    useEffect(() => {
        doFetchRoasters();
    }, []);

    const handleUserRoaster = () => {
        doCreateRoaster();
    };

    let content; 
    if (isLoadingRoasters) {
        content = <Skeleton times={RoastersList.length} className="h-10 w-full" />;
      } else if (loadingRoastersError) {
        content = <div>Error fetching data...</div>;
      } else {
        content = data.map((roaster) => {
            return <RoastersListItem key={roaster.id} roaster={roaster} />
        });
      }

      return <div>
        <div className=" flex flex-row justify-between items-center m-3">
            <h1 className="m-2 text-xl">Roasters</h1>
            <Button loading={isCreatingRoaster} onClick={handleUserRoaster}>
                + Add Roaster
            </Button>
            </div>
            {content}
        </div>;
}

export default RoastersList;