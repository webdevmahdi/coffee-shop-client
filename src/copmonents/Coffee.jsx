import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, coffees, setCoffees }) => {
    let { _id, name, quantity, supplier, taste, price, details, photo } = coffee;
    let handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        let remaining = coffees.filter(cof => cof._id !== _id)
                        setCoffees(remaining)
                    })
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full m-4 p-3">
                <div>
                    <h2 className="card-title font-extrabold">Coffee: {name}</h2>
                    <p className='font-extrabold'>Quantity: {quantity}</p>
                    <p className='font-extrabold'>Supplier: {supplier}</p>
                    <p className='font-extrabold'>Price: ${price}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join top-3 join-vertical">
                        <button className="btn join-item mb-3">Details</button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn join-item mb-3">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item mb-3">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coffee