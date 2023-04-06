import { GoTrashcan } from 'react-icons/go';
import Button from './Button';
import { removeRoaster } from '../store';
import { useThunk } from '../hooks/useThunk';
import ExpandablePanel from './ExpandablePanel';
import CoffeeList from './CoffeeList';


function RoastersListItem ( {roaster} ) {
    const [doRemoveRoaster, isLoading, error] = useThunk(removeRoaster);

    const handeClick = () => {
        doRemoveRoaster(roaster);
    }

    const header = <>
     <Button className="mr-3" loading={isLoading} onClick={handeClick} >
        <GoTrashcan />
    </Button>
    {error && <div>Error Deleting Roaster.</div>}
    {roaster.name}
    </>

    return (
        <ExpandablePanel header={header}>
            <CoffeeList roaster={roaster} />
        </ExpandablePanel>
    );
}

export default RoastersListItem;