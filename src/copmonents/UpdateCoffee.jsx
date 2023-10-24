import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  let coffee = useLoaderData();
  let { _id, name, quantity, supplier, taste, price, details, photo } = coffee;

  let handleUpdate = event => {
    event.preventDefault()

    let form = event.target;
    let name = form.name.value;
    let quantity = form.quantity.value;
    let supplier = form.supplier.value;
    let taste = form.taste.value;
    let price = form.price.value;
    let details = form.details.value;
    let photo = form.photo.value;

    let updateCoffee = { name, quantity, supplier, taste, price, details, photo };

    console.log(updateCoffee);
    fetch(`http://localhost:5000/coffee/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateCoffee)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount> 0)
        Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    })
}

return (
    <div>
        <form className='mt-20' onSubmit={handleUpdate}>
            <div className='ms-32 me-32 p-10 mx-auto bg-[#F4F3F0]'>
                <h1 className='text-3xl font-extrabold uppercase mb-4 font-Rancho flex justify-center'>Update coffee</h1>
                
                <div className='flex w-full mt-4 mb-6 mx-auto'>
                    <div className="me-4 w-1/2">
                        <label className="block mb-3">Coffee name</label>
                        <input defaultValue={name} name='name' className="input w-full block input-bordered join-item" placeholder="Coffee name" />
                    </div>
                    <div className=" ms-4 w-1/2">
                        <label className="block mb-3">Quantity</label>
                        <input defaultValue={quantity} name='quantity' className="w-full input input-bordered join-item" placeholder="Quantity" />
                    </div>
                </div>

                <div className='flex w-full mt-4 mb-6 mx-auto'>
                    <div className="me-4 w-1/2">
                        <label className="block mb-3">Supplier</label>
                        <input defaultValue={supplier} name='supplier' className="input w-full block input-bordered join-item" placeholder="Supplier" />
                    </div>
                    <div className=" ms-4 w-1/2">
                        <label className="block mb-3">Taste</label>
                        <input defaultValue={taste} name='taste' className="w-full input input-bordered join-item" placeholder="Taste" />
                    </div>
                </div>

                <div className='flex w-full mt-4 mb-6 mx-auto'>
                    <div className="me-4 w-1/2">
                        <label className="block mb-3">Price</label>
                        <input defaultValue={price} name='price' className="input w-full block input-bordered join-item" placeholder="Price" />
                    </div>
                    <div className=" ms-4 w-1/2">
                        <label className="block mb-3">Details</label>
                        <input defaultValue={details} name='details' className="w-full input input-bordered join-item" placeholder="Details" />
                    </div>
                </div>

                <div className="me-4 w-full">
                    <label className="block mb-3">Photo</label>
                    <input defaultValue={photo} name='photo' className="input w-full block input-bordered join-item" placeholder="Photo" />
                </div>

                <input type="submit" value="Update coffee" className='btn btn-active btn-neutral w-full mt-8' />
            </div>
        </form>
    </div>
)
}

export default UpdateCoffee