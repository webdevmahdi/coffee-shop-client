import React from 'react'
import Swal from 'sweetalert2'

const AddCoffee = () => {

    let handleSubmit = event => {
        event.preventDefault()

        let form = event.target;
        let name = form.name.value;
        let quantity = form.quantity.value;
        let supplier = form.supplier.value;
        let taste = form.taste.value;
        let price = form.price.value;
        let details = form.details.value;
        let photo = form.photo.value;

        let coffeeInformation = { name, quantity, supplier, taste, price, details, photo };
        console.log(coffeeInformation);
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeInformation)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId)
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
            <form className='mt-20' onSubmit={handleSubmit}>
                <div className='ms-32 me-32 p-10 mx-auto bg-[#F4F3F0]'>
                    <h1 className='text-3xl font-extrabold uppercase mb-4 font-Rancho flex justify-center'>Add your coffee</h1>
                    
                    <p className='text-[#1B1A1AB2] text-lg font-raleway text-center ms-14 me-14 mb-8'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    <div className='flex w-full mt-4 mb-6 mx-auto'>
                        <div className="me-4 w-1/2">
                            <label className="block mb-3">Coffee name</label>
                            <input name='name' className="input w-full block input-bordered join-item" placeholder="Coffee name" />
                        </div>
                        <div className=" ms-4 w-1/2">
                            <label className="block mb-3">Quantity</label>
                            <input name='quantity' className="w-full input input-bordered join-item" placeholder="Quantity" />
                        </div>
                    </div>

                    <div className='flex w-full mt-4 mb-6 mx-auto'>
                        <div className="me-4 w-1/2">
                            <label className="block mb-3">Supplier</label>
                            <input name='supplier' className="input w-full block input-bordered join-item" placeholder="Supplier" />
                        </div>
                        <div className=" ms-4 w-1/2">
                            <label className="block mb-3">Taste</label>
                            <input name='taste' className="w-full input input-bordered join-item" placeholder="Taste" />
                        </div>
                    </div>

                    <div className='flex w-full mt-4 mb-6 mx-auto'>
                        <div className="me-4 w-1/2">
                            <label className="block mb-3">Price</label>
                            <input name='price' className="input w-full block input-bordered join-item" placeholder="Price" />
                        </div>
                        <div className=" ms-4 w-1/2">
                            <label className="block mb-3">Details</label>
                            <input name='details' className="w-full input input-bordered join-item" placeholder="Details" />
                        </div>
                    </div>

                    <div className="me-4 w-full">
                        <label className="block mb-3">Photo</label>
                        <input name='photo' className="input w-full block input-bordered join-item" placeholder="Photo" />
                    </div>

                    <input type="submit" value="Add a coffee" className='btn btn-active btn-neutral w-full mt-8' />
                </div>
            </form>
        </div>
    )
}

export default AddCoffee