import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MainContext } from './Context';

export default function ViewQuiz() {
    const {user,quizs} = useContext(MainContext) 
    const navigator =  useNavigate();

   

    useEffect(
        ()=>{
            const lsUserData = localStorage.getItem("user");
            if(lsUserData == undefined){
                navigator('/login')
            }
        },[user]
    )
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            S NO
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Question
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Option 1
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Option 2
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Option 3
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Option 4
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {quizs.map((d, i) => {
                        return (
                            <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {i+1}
                                </th>
                                <td className="px-6 py-4">{d.question}</td>
                                <td className={`px-6 py-4 ${d.correctanswer == "1" && "text-[red] font-bold" } `}>{d.option1}</td>
                                <td className={`px-6 py-4 ${d.correctanswer == "2" && "text-[red] font-bold" }`}>{d.option2}</td>
                                <td className={`px-6 py-4 ${d.correctanswer == "3" && "text-[red] font-bold" }`}>{d.option3}</td>
                                <td className={`px-6 py-4 ${d.correctanswer == "4" && "text-[red] font-bold" }`}>{d.option4}</td>
                            </tr>

                        )

                    })}


                </tbody>
            </table>
        </div>

    )
}
