import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Insert() {

    const [getValue, setValue] = useState({
        id: '',
        name: '',
        email: '',
        phone: ''
    })

    function changedValue(e) {
        setValue((gotValue) => {
            return (
                { ...gotValue, [e.target.name]: e.target.value }
            )
        })
    }
    function formGetSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(getValue)
        })
            .then(() => alert('Successfully added!'))
            .catch((error) => console.log(error))
    }

    return (
        <div className="container mx-auto mt-8">
            <div className="flex items-center justify-between my-7">
                <h1 className="font-semibold text-2xl">Add new data in the table</h1>
                <Link to="/" className="bg-yellow-100 font-semibold p-2 rounded-lg text-xl hover:border-yellow-400 hover:border-2 border-2 border-white">Go back</Link>
            </div>
            <form className="w-[32rem] p-10 bg-emerald-50 rounded-lg mx-auto flex flex-col space-y-10 border" onSubmit={formGetSubmit}>
                <div>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-slate-700">
                            Name
                        </span>
                        <input type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-emerald-200 focus:ring-emerald-200 block w-full rounded-md sm:text-sm focus:ring-1 tracking-widest" onChange={changedValue} />
                    </label>
                </div>
                <div>
                    <label className="block">
                        <span className="block text-md font-medium text-slate-700">
                            Email
                        </span>
                        <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-200 placeholder-slate-400 focus:outline-none focus:border-emerald-200 focus:ring-emerald-100 block w-full rounded-md sm:text-sm focus:ring-1 tracking-widest" onChange={changedValue} />
                    </label>
                </div>
                <div>
                    <label className="block">
                        <span className="block text-md font-medium text-slate-700">
                            Phone
                        </span>
                        <input type="tel" name="phone" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-200 placeholder-slate-400 focus:outline-none focus:border-emerald-200 focus:ring-emerald-100 block w-full rounded-md sm:text-sm focus:ring-1 tracking-widest" onChange={changedValue} />
                    </label>
                </div>
                <button type="submit" className="mt-1 px-3 py-2 bg-emerald-600 focus:outline-none focus:border-emerald-200 focus:ring-emerald-100 block w-full rounded-md text-xl focus:ring-1 font-semibold text-white tracking-widest">ADD</button>
            </form>
        </div>
    )
}