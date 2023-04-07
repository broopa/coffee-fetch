import { useFetchCoffeesQuery } from "../store";

function CoffeeList({ roaster }) {
    const { data, error, isLoading } = useFetchCoffeesQuery(roaster);
    console.log(data, error, isLoading);
    return <div>
        Coffee for {roaster.name}
    </div>
}

export default CoffeeList;