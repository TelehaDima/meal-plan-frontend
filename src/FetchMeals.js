import axios from 'axios';

const getAllMeals = (setMeal) => {
    axios.get("https://meal-plan-backend-eg0b.onrender.com")
        .then(({ data }) => {
            console.log(data);
            setMeal(data);
            
    })
}

const addMeal = ( title, setTitle, setMeal ) => {
    axios.post('https://meal-plan-backend-eg0b.onrender.com/saveMeals', { title })   
        .then((data) => {
    console.log(data);
    setTitle("");
    getAllMeals(setMeal);
    })
}

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
   axios.post('https://meal-plan-backend-eg0b.onrender.com/editMeals', {_id: mealId, title })   
        .then((data) => {
    console.log(data)
            setTitle("")
            setEditing(false)
        getAllMeals(setMeal)
    }) 
}

const deleteMeal = (_id, setMeal) => {
   axios.post('https://meal-plan-backend-eg0b.onrender.com/deletedMeals', {_id})   
        .then((data) => {
    console.log(data)
    getAllMeals(setMeal)
    }) 
}



export { getAllMeals, addMeal, editMeal, deleteMeal };