import { type NextPage } from "next";

import { api } from "~/utils/api";

const ShowTodos: NextPage = () => {
  const { data, error, isLoading } = api.todosRouter.getTodos.useQuery();

  if (error) {
    console.log(error);
  }

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                  >
                    Descripcion
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map(({ description, id, name }) => (
                  <tr className="border-b" key={id}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {id}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                      {name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                      {description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTodos;
