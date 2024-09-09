"use client"

import { useState } from "react"
import { useEffect } from "react"    
// import icons:
import { BookmarkIcon, PencilSquareIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Montserrat } from "next/font/google";
import { Prompt } from "next/font/google";

const monstserrat = Montserrat({ subsets: ['latin'] });
const prompt = Prompt({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


const Todo = () => {

  /* States for tasks */
  const [tasks, setTasks] = useState([]); 
  const [task, setTask] = useState("");

  /* State for handling the editing of tasks */
  const [editTaskId, setEditTaskId] = useState(-1);
  /* Task currently being editted */
  const [editTask, setEditTask] = useState("");

  /* State for handling the inspirational quotes */
  const [quote, setQuote] = useState("");





  /*********    FUNTIONS:   ***********/
  /* Function to add tasks to the task array */
  const addTasks = () => {
    /* If the task is not empty */
    if(task !== "") {
      /* Before adding the task to the tasks array, 
       * make it an object with text and bool */
      const newTask = { text: task, completed: false};
      /* Add the task object to the tasks array */
      setTasks([...tasks, newTask]);
      /* Reset the task state */
      setTask("");
    }
  }



  /* Function to delete task: */
  const deleteTasks = (index) => {

    // Create a copy of the tasks array
    // This is done to avoid directly modifying the state
    // This is a good practice in React
    // Another way to do it:
    //      const newTasks = [...tasks];
    // The spread operator ... returns a copy of the array too
    const newTasks = tasks.slice();

    // Remove the task at the index
    // Use splice instead of delete, coz splice takes out the element
    // The 1 in the 2nd parameter is how many elements you want to
    // delete each time this func is called
    // NOTE: if you dont define the second param, if you try to delete
    //      the top task, it will delete all of them 
    newTasks.splice(index, 1);

    // Update the tasks array
    setTasks(newTasks);

  }





  // Function to edit task:
  const editTasks = (index) => {
    // Set the task to be edited
    // Specifically get the text portion of the task object
    setEditTask(tasks[index].text);
    // Set the index of the task to be edited
    setEditTaskId(index);
  }





  // Function to update task:
  const updateTasks = () => {
    // Create a copy of the tasks array
    const newTasks = tasks.slice();
    // Update the task at the index
    newTasks[editTaskId].text = editTask;
    // Update the tasks array
    setTasks(newTasks);
    // Reset the editTaskId
    setEditTaskId(-1);
    setTask("");
  }





  // Function to get current date to display:
  const getDate = () => {
    const date = new Date();

    // Format how you want the date to be displayed:
    // The long means in their long form, so Monday will be
    // displayed as "Monday" and not "Mon" which is short
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString("en-US", options);

  }
  





  // Function to fetch the quotes from the API
  // using UseEffect
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      /* Data is what you extract from the "response" object
       * using one of its methods like ".json()" above */
      .then((data) => {
        // Set the quote state to the quote fetched
        setQuote(data.content);
      })

      // To handle errors:
      .catch((error) => {
        console.error("There has been an error fetching quote: ", error);
      });

  }, []);






  // Toggle between task completed and not:
  // This function will be called when the checkbox is clicked
  const toggleTaskCompletion = (index) => {
    // Create a copy of the task array:
    const newTasks = tasks.slice();
    // Toggle the completed boolean of the selected task
    newTasks[index].completed = !newTasks[index].completed;
    // Update the tasks array:
    setTasks(newTasks);
  }







  return (
    // The wrapper around the whole todo app
    <div className={`${monstserrat.className} flex flex-col items-center w-5/6`}>

      {/* Date Header: */}
      <h1 className="relative text-2xl md:text-3xl lg:text-4xl mb-8 font-bold text-center montserrat-font">
        {getDate()}
      </h1>
      

      {/* Input and Button */}
      <div className={`${prompt.className} flex flex-row border-2 border-black text-sm bg-white/40 justify-center`}>
        <input type="text"
               placeholder="Add new task"
               className="pl-4 py-2 bg-white/0 focus:outline-none"
               value={task}
              // Define the onchange event for our input field
              // This will update the task state with the value of the input field
               onChange = {(e) => {
                            setTask(e.target.value);
                          }}
              // Add event handler so that when the "Enter" key
              // is pressed, we add task
              onKeyDown = {(e) => {
                              if(e.key === "Enter") {
                                addTasks();
                              }
                            }}

        />
        
        <button 
              className="text-black px-2 ml-4 text-3xl
                          rounded-md font-normal text-center
                          hover:rotate-90 transition-transform duration-700 ease-in-out"
              
              // When the button is clicked, add the task
              onClick = {addTasks}
        >
          +
        </button>

      </div>


      {/* Header */}
      <p className={`${monstserrat.className} w-full max-w-[490px] text-left text-xl mt-14 mb-2 font-bold`}>
        Tasks:
      </p>





      {/* List of tasks */}
      <div className={`${prompt.className} w-full`}>
        {/* if the tasks array is not empty, display the top paert
        else, display the bottom part */}
        {tasks.length > 0 ? (
          <ul>
            {tasks.map((task, index) => (
              // Display the task in a list item
              <div className="flex gap-0 items-center justify-center m-3" 
                   key={index}
              >
              
                {/* If the task is being edited, display the input field
                else display the task */}
                {editTaskId === index ? (
                  <input type="text"
                         className=" pl-4 py-2 focus:outline-none w-96 bg-white/0 border-b-2 border-black mr-6"
                         value={editTask}
                         onChange = {(e) => {
                                      setEditTask(e.target.value);
                                    }}
                         onKeyDown = {(e) => {
                                        if(e.key === "Enter") {
                                          updateTasks();
                                        }
                                      }}
                  />
                ) : (
                  // Display the task with the checkbox:
                  <div className=" flex pr-10 py-3 pl-3 mr-6 font-semibold self-center max-w-96 w-full border-2 border-black">
                    <button
                      className={` self-center w-5 h-5 mx-1 border-black border-2 ${task.completed ? "bg-[#fede65]" : "bg-white/75"} hover:bg-[#fede65]/45`}
                      onClick={() => 
                        toggleTaskCompletion(index)
                      }
                    >
                    </button>

                    {/* if task is completed, have a line through the text */}
                    <li className={`ml-2 text-left font-light ${task.completed ? ("line-through text-gray-400") : ''}`}>
                      {task.text}
                    </li>
                  </div>
                )}




                <div className="flex flex-row gap-1">
                  {/* Edit + Save Button: */}
                  {/* Toggle between Save and Edit Button based on
                      the editTaskId. If the editTaskId is = the index of the task
                      display the Save Button, else display the Edit Button */}
                  {editTaskId === index ? (
                    <button
                      className="flex items-center justify-center bg-black w-10 h-10 p-2 text-white font-bold
                                hover:bg-black/75 hover:border-black hover:border-2}"
                      onClick={updateTasks}
                    >
                      {/* Use save icon */}
                      <BookmarkIcon className="size-4"/>
                    </button>
                  ) : (
                    <button
                      className="flex items-center justify-center bg-black w-10 h-10 p-2 text-white font-bold
                                self-center hover:bg-black/75 hover:border-black hover:border-2}"
                      onClick={() => editTasks(index)}
                    >
                      {/* Use edit icon */}
                      <PencilSquareIcon className="size-4"/>
                    </button>
                  )}



                {/* Delete Button: */}
                  <button 
                    className="flex items-center justify-center bg-[#d3aefe] w-10 h-10 p-2 text-black font-bold border-black border-2
                    self-center hover:bg-[#9f6cd9]"

                    // We could have just called onClick= {deleteTasks(index)}
                    // But this would have called deleteTasks automatically
                    // So anytime you added a task, it is deleted automatically
                    // So we have to wrap it in an anonymous function
                    onClick= {() => deleteTasks(index)}
                  >
                    {/* Use Trashcan Icon: */}
                    <TrashIcon className="size-4"/>
                  </button>
                </div>
              </div>
            ))}
          </ul>
        ) : (
          // If tasks array is empty, display this
          <p className="max-w-96 w-full text-center p-3 my-3 mx-2">
            No tasks found
          </p>
        )}
      </div>


      {/* To Display the Quotes at the bottom: */}
      <div className="w-full max-w-96 self-center px-3 mt-20 mb-16">
        <h1 className="text-xs font-semibold text-left">
          Quote of the Day:
        </h1>
        <p className="mt-4 text-slate-600 text-xs italic">
          {quote}
        </p>
      </div>


    </div>
  )
}

export default Todo