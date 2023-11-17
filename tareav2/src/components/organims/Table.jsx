const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  ]
  //El encabezado de todas las columnas de permisos estará compuesto por dos filas, la primera tiene el 
  //nombre de la entidad, la segunda el nombre del permiso.
  
  
  const role = [
    {
    id: 1,
    name: "Admin" ,
    permissions : [
      {
         entity : "Project",
         permissions: "WRITE"
      }],
    },
    {
      id: 2,
      name: "User" ,
      permissions : [
        {
           entity : "Project",
           permissions: "WRITE"
        }],
      }
  ];
  
    function Table() {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="mt-10 text-base font-semibold leading-6 text-gray-900"> User
            </h1>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y-2 divide-gray-900 divide-x-2" >
                <thead>
                  <td>
                    Project
                  </td>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Role
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Perm 1
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Perm 2
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Perm 3
                    </th>
                   
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                   {role.map((role) => (
                    <tr key={role.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {role.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{role.permissions[0].permissions}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{role.permissions[0].permissions}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{role.permissions[0].permissions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              + Add Role
            </button>
          </div>
      </div>
    )
  }
  
  export default Table