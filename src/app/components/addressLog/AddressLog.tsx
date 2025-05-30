'use client';
import React, { useState } from 'react';
import { MdDelete, MdLocationOn } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { RiEdit2Fill } from 'react-icons/ri';
import { BiSolidPhoneCall, BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import AddressSearchFilter from '../../sections/addressSearchFilter/AddressSearchFilter';
import AddressForm from '../../sections/addressForm/AddressForm';
import AddressBookHeader from '../../sections/addressBookHeader/AdressBookHeader';
import EditUserForm from '../../sections/editUserForm/EditUserForm';

// Sample user data
const usersData = [
  { id: 1, name: 'Folarin Oladoyinbo', address: 'Jamiu Odunsi Street Highlink Royal Castle Estate Harris Drive Lekki, Eti-Osa, Lagos', contact: '+2349012676322' },
  { id: 2, name: 'Mecury Aisosa', address: 'Jamiu Odunsi Street Highlink Royal Castle Estate Harris Drive Lekki, Eti-Osa, Lagos', contact: '+2349012676322' },
  { id: 3, name: 'Daniel Paul', address: 'Jamiu Odunsi Street Highlink Royal Castle Estate Harris Drive Lekki, Eti-Osa, Lagos', contact: '+2349012676322' },
  { id: 4, name: 'Folarin Oladoyinbo', address: 'Jamiu Odunsi Street Highlink Royal Castle Estate Harris Drive Lekki, Eti-Osa, Lagos', contact: '+2349012676322' },
  { id: 5, name: 'Mecury Aisosa', address: 'Jamiu Odunsi Street Highlink Royal Castle Estate Harris Drive Lekki, Eti-Osa, Lagos', contact: '+2349012676322' },
  { id: 6, name: 'Daniel Paul', address: 'Jamiu Odunsi Street Highlink Royal Castle Estate Harris Drive Lekki, Eti-Osa, Lagos', contact: '+2349012676322' },
];

// Icon colors
const DeepOrange = '#FD4A09';
const DeepBlue = '#007BFF';

//Component Declaration Function
const AddressLog = () => {         
//State Hooks
  const [users, setUsers] = useState(usersData);  //Initializes the users state using usersData defined above. setUsers update the user states
  const [showCount, setShowCount] = useState(10);  //Sets how many users are shown per page (showCount), initially set to 10.
  const [page, setPage] = useState(0);  //Tracks the current page index for pagination, starting from 0.
  const [deleteId, setDeleteId] = useState<number | null>(null); //Stores the id of a user selected for deletion, or null if none.
  const [searchTerm, setSearchTerm] = useState(''); //Stores the current search term from a search input.
  const [showForm, setShowForm] = useState(false); //Controls visibility of a form (for adding a user, likely), initially hidden.
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [editingUser, setEditingUser] = useState(null); 
  

 

  //Pagination Functions
  const handlePrev = () => {
    if (page > 0) setPage(page - 1); //Moves to the previous page if the current page is greater than 0.
  };

  const handleNext = () => {
    const maxPage = Math.ceil(filteredUsers.length / showCount) - 1; //Calculates the maximum number of pages based on filtered users
    if (page < maxPage) setPage(page + 1);  //Increments the page only if the current page is less than maxPage.
  };

  const handleEdit = (user) => {
  setEditingUser(user); // Sets the selected user for editing
};

const handleUserUpdate = (updatedUser) => {
  setUsers(prev =>
    prev.map(user => user.id === updatedUser.id ? updatedUser : user)
  );
  setEditingUser(null); // Close the form
};


  //Deletion Fubnction
  const handleDelete = (id: number) => {  //Deletes a user with the specified id.
    setUsers(users.filter(user => user.id !== id)); //Uses Array.prototype.filter() to return a new list excluding the deleted user.
    setDeleteId(null); //Resets deleteId to null.
  };

  //Add User Function
  const handleAddUser = (newUser: typeof usersData[0]) => { //Adds a new user to the list.
    setUsers([...users, { ...newUser, id: Date.now() }]); //Uses the spread operator to append the new user. Date.now() generates a unique ID.
    setShowForm(false); //Hides the form after adding the user.
  };
//Export Function
  // Export filtered users as CSV file
  const handleExport = () => { //Creates and downloads a CSV file of filteredUsers.
    const headers = ['Name', 'Address', 'Contact'];
    const csvRows = [
      headers.join(','), // creates the column headers.
      ...filteredUsers.map(u => `"${u.name}","${u.address}","${u.contact}"`)  //Each user is mapped to a CSV-formatted string.
    ];

    //CSV Data Preparation
    const csvData = csvRows.join('\n'); //csvRows is an array of strings — the first row is the header (Name,Address,Contact), followed by rows of user data.
    //join('\n') joins each row with a newline character to create one complete CSV string

    //Creating a Blob (file-like object in memory)
    const blob = new Blob([csvData], { type: 'text/csv' }); //A Blob:Binanry Large Objects for storing complex files such as images etc is created for the CSV file
    //The MIME(Multipurpose Internet Mail Extension) type is set to 'text/csv', indicating it’s a CSV file.

    // Creating a Downloadable URL
    const url = window.URL.createObjectURL(blob); //Converts the Blob into a temporary URL using URL.createObjectURL()
    //This URL can be used to reference the Blob in the DOM — it’s not a file path but an in-memory link like:blob:http://localhost/1234-abc-5678 

    //Creating and Clicking a Link
    const a = document.createElement('a'); //Creates a new <a> (anchor) element dynamically using document.createElement('a').
    a.href = url; //Sets its href to the Blob URL.
    a.download = 'address_book_export.csv'; //Sets the download attribute to specify the filename (address_book_export.csv) when saving.
    a.click(); //Triggers a programmatic click with a.click() — simulating the user downloading the file.

    //Clean Up the URL
    window.URL.revokeObjectURL(url); //Frees up memory by revoking the temporary URL created earlier. It prevents memory leaks from unused object URLs.
  };
// Search/Filter Users
  const filteredUsers = users.filter((user) =>  //Filters users whose name, address, or contact includes the search term.
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || //toLowerCase() ensures case-insensitive search.
    user.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.contact.toLowerCase().includes(searchTerm.toLowerCase())   
);
//Paginate Filtered Users
  const start = page * showCount; //Calculates the start index of the current page.
  const paginatedUsers = filteredUsers.slice(start, start + showCount); //paginatedUsers is a slice of filteredUsers for the current page only.

  const handleToggleFilter = () => {
    setFilterEnabled(!filterEnabled);
};

  return (
    <div className="w-full px-4 sm:px-6 lg:px-50 mt-6">
  {/* Header */}
  <AddressBookHeader
    onAddAddress={() => setShowForm(true)}
    onExport={handleExport}
  />

  {/* Address Form */}
  {showForm && (
    <div className="my-6">
      <AddressForm onAdd={handleAddUser} onCancel={() => setShowForm(false)} />
    </div>
  )}

  {/* Search Filter */}
  <div className="mt-6">
    <AddressSearchFilter
      onSearch={setSearchTerm}
      onToggleFilter={handleToggleFilter}
      filterEnabled={filterEnabled}
    />

    {filterEnabled && (
      <div className="mt-4 bg-gray-100 p-4 rounded shadow text-sm text-gray-600">
        Filter: Showing names starting with A–M
      </div>
    )}
  </div>

  {/* User Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
    {paginatedUsers.map((user) => (
      <div
        key={user.id}
        className="w-[300px] h-[300px] lg:px-10 shadow-md p-5 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center mb-4">
            <FaUserAlt className="text-xl mr-3" style={{ color: DeepOrange }} />
            <span className="text-[#222] font-bold text-lg">{user.name}</span>
          </div>
          <div className="flex items-center mb-4">
            <MdLocationOn className="text-xl mr-3" style={{ color: DeepOrange }} />
            <span className="text-[#555] text-sm">{user.address}</span>
          </div>
          <div className="flex items-center">
            <BiSolidPhoneCall className="text-xl mr-3" style={{ color: DeepOrange }} />
            <span className="text-[#555] text-sm">{user.contact}</span>
          </div>
        </div>

        <div className="flex justify-center gap-10 mt-6">
          <button
            title="Edit"
            className="hover:scale-110 transition-transform cursor-pointer"
            onClick={() => handleEdit(user)}
          >
            <RiEdit2Fill className="text-2xl" style={{ color: DeepBlue }} />
          </button>

          {editingUser && (
            <EditUserForm
              user={editingUser}
              onClose={() => setEditingUser(null)}
              onSave={handleUserUpdate}
            />
          )}

          <button
            title="Delete"
            className="hover:scale-110 transition-transform cursor-pointer"
            onClick={() => setDeleteId(user.id)}
          >
            <MdDelete className="text-2xl" style={{ color: DeepOrange }} />
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Pagination Controls */}
  <div className="flex flex-col sm:flex-row justify-between items-center mt-10 gap-4 mb-10">
    {/* Show Result Dropdown */}
    <div className="text-sm">
      <label htmlFor="showResults" className="mr-2 font-semibold text-[#A3A2AB]">
        Show Result:
      </label>
      <select
        id="showResults"
        className="px-2 py-1 text-sm text-[#949494] focus:outline-none border border-gray-300 rounded"
        value={showCount}
        onChange={(e) => setShowCount(parseInt(e.target.value))}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>

    {/* Navigation Arrows */}
    <div className="flex items-center gap-3">
      <button
        title="Previous"
        className="w-9 h-9 border rounded-lg flex items-center justify-center"
        style={{ borderColor: DeepOrange, backgroundColor: '#fff' }}
        onClick={handlePrev}
      >
        <BiChevronLeft className="text-xl" style={{ color: DeepOrange }} />
      </button>

      <button
        title="Next"
        className="w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: DeepOrange }}
        onClick={handleNext}
      >
        <BiChevronRight className="text-xl text-white" />
      </button>
    </div>
  </div>

  {/* Delete Confirmation Modal */}
  {deleteId && (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm text-center">
        <p className="text-lg font-semibold mb-4">
          Are you sure you want to delete this address?
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-md text-sm hover:bg-gray-300"
            onClick={() => setDeleteId(null)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700"
            onClick={() => handleDelete(deleteId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )}
</div>

  );
};

export default AddressLog;
