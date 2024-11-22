import React, { useContext, useEffect } from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { MainContext } from './Context';

export default function AddQuiz() {
     const {user} = useContext(MainContext)
    const navigator =  useNavigate();
    const options = [1, 2, 3, 4];
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            question: e.target.question.value,
            option1: e.target.option1.value,
            option2: e.target.option2.value,
            option3: e.target.option3.value,
            option4: e.target.option4.value,
            correctanswer: e.target.correctanswer.value
        }

        const quizId = uuidv4();
        const db = getDatabase();
        set(ref(db, 'quiz/' + quizId), data);
        // console.log(data)

        e.target.reset();

    }

    useEffect(
        ()=>{
            const lsUserData = localStorage.getItem("user");
            if(lsUserData == undefined){
                navigator('/login')
            }
        },[user] //dependecy  ==jab jab user change ho 
    )
    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">Create a Quiz Question</h1>
            <form onSubmit={handleSubmit}>
                {/* Question Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Question
                    </label>
                    <textarea
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"
                        rows="3" name='question'
                        placeholder="Enter your question"
                    />
                </div>

                {/* Options Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Options
                    </label>
                    {options.map((d, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"
                                placeholder={`option ${index + 1}`} name={`option${index + 1}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Correct Answer Selector */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Correct Answer
                    </label>
                    <select
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-indigo-300"
                        name="correctanswer"
                    >
                        <option value="" disabled>
                            Select the correct answer
                        </option>
                        {options.map((option, index) => (
                            <option key={index} value={option} >
                                {`Option ${index + 1}`}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white rounded-md py-2 hover:bg-indigo-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
