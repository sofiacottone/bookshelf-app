

export default function FormAddUpdateBook() {
    return <form className="px-8 py-6 w-96 m-auto bg-slate-800 text-white rounded-xl">
        <div className="mb-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Add new book</h3>
            <i class="fa-regular fa-circle-xmark cursor-pointer hover:text-orange-600 hover:scale-110"></i>
        </div>

        <div className="flex flex-col gap-1">
            <label className="text-sm">Book title</label>
            <input type="text" className="p-1 rounded-xl text-white text-sm bg-transparent border border-orange-600 focus:outline-orange-600" />
        </div>

        <div className="mt-4 flex flex-col gap-1">
            <label className="text-sm">Author</label>
            <input type="text" className="px-2 py-1 rounded-xl text-white text-sm bg-transparent border border-orange-600 focus:outline-orange-600" />
        </div>

        <div className="mt-4 flex justify-end gap-2">
            <button className="px-2 py-px border border-orange-600 rounded text-sm text-orange-600 hover:scale-110">Cancel</button>
            <button className="px-2 py-px border border-orange-600 rounded text-sm bg-orange-600 hover:scale-110">Add</button>
        </div>
    </form>
}