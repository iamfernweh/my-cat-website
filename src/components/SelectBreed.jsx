import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

function SelectBreed({ selectedBreed, setSelectedBreed }) {
    const [breedList, setBreedList] = useState([]);

    useEffect(() => {
        async function getBreedList() {
            const response = await fetch('https://api.thecatapi.com/v1/breeds');
            const result = await response.json();
            setBreedList(result);
        }
        getBreedList();
    }, []);

    console.log(breedList);

    return (
        <FormControl fullWidth>
            <InputLabel id="breed-select-label">Breed</InputLabel>
            <Select
                labelId="breed-select-label"
                id="breed-select"
                value={selectedBreed}
                label="Breed"
                onChange={(e) => setSelectedBreed(e.target.value)}
            >
                {breedList.map(breed => <MenuItem value={breed.id}>{breed.name}</MenuItem>)}
            </Select>
        </FormControl>
    );
}

export default SelectBreed;