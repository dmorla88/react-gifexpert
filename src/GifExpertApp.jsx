import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategories = (newValue) => {
        //setCategories(categories.push('Bombillo'));
        // console.log(newValue);
        if (categories.includes(newValue)) return;

        // categories.push(newValue);
        //setCategories(['One Punch', 'Drgon Ball','Bombillo']);
        setCategories([newValue, ...categories]);
    }

    return (
        <>

            <h1>GifExpertApp</h1>


            <AddCategory

                //</>  setCategories={setCategories}>
                onNewCategory={(event) => onAddCategories(event)}
            >
            </AddCategory>



            {categories.map(category =>
            (<GifGrid

                key={category}
                category={category} />)
            )}


        </>
    )
}
