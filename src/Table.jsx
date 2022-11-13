import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Table() {
    const [allPost, setPost] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then((res) => res.json())
            .then((data) => setPost(data))
            .catch((error) => alert(error + " error occurs"))
    }, [])

    function deleteClicked(id) {
        if (window.confirm('Do you want to delete?')) {
            fetch(`http://localhost:3000/posts/${id}`, {
                method: 'DELETE'
            })
                .then(() =>
                    alert('Deleted successfully'),
                    window.location.reload()
                )
                .catch((err) => console.log(err + 'error occurs'))
        }
    }

    return (
        <div className="container mx-auto mt-8">
            <div className="flex items-center justify-between my-7">
                <h1 className="font-semibold text-2xl">List of personal details</h1>
                <Link to="/insert" className="bg-emerald-50 hover:border-emerald-500 hover:border-2 border-2 border-white font-semibold p-2 rounded-lg text-xl">+ New Data</Link>
            </div>
            <table className="table-auto w-full text-center border-collapse border border-slate-200">
                <thead>
                    <tr className="bg-emerald-100 text-xl">
                        <th className="border border-slate-200 p-3">Name</th>
                        <th className="border border-slate-200">Email</th>
                        <th className="border border-slate-200">Phone</th>
                        <th className="border border-slate-200">EDIT</th>
                        <th className="border border-slate-200">DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {allPost &&
                        allPost.map((view) => {
                            return (
                                <tr className="hover:bg-slate-50" key={view.id}>
                                    <td className="border border-slate-200 p-3">{view.name}</td>
                                    <td className="border border-slate-200">{view.email}</td>
                                    <td className="border border-slate-200">{view.phone}</td>
                                    <td className="border border-slate-200">
                                        <Link to={`/update/${view.id}`}><i className="fa-regular fa-pen-to-square text-blue-600 text-xl hover:cursor-pointer"></i></Link>
                                    </td>
                                    <td className="border border-slate-200">
                                        <i className="fa-regular fa-trash-can text-red-600 text-xl hover:cursor-pointer" onClick={() => deleteClicked(view.id)}></i>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}