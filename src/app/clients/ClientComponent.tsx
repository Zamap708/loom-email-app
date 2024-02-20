import { getClients } from "../actions";

export default async function ClientComponent() {
  const data = await getClients();
  console.log(data);
  // console.log(JSON.stringify(data))

  // console.log(data[0])
  const content = data.map((client: any) => {
    return (
      <div
        className="w-full p-1 flex items-center justify-start bg-white rounded"
        key={1}
      >
        <span className="h-full flex justify-start items-center gap-2 px-2">
          <input
            type="checkbox"
            name="ClientselectAll"
            id="ClientselectAll"
            className="h-full"
          />
          <label htmlFor="ClientselectAll"></label>
        </span>
        <div className="w-full grid grid-cols-8">
          {/* all truncated values must have a tooltip on hover for full value */}
          <span className="truncate px-2">{client.docData.ID}</span>
          <span className="truncate px-2">{client.docData.firstName}</span>
          <span className="truncate px-2">{client.docData.lastName}</span>
          <span className="truncate px-2">
            <a href={client.docData.linkedIn}>{client.docData.linkedIn}</a>
          </span>
          <span className="truncate px-2">{client.docData.email.personal}</span>
          <span className="truncate px-2">{client.docData.email.work}</span>
          <span className="truncate px-2">
            {client.docData.number.personal}
          </span>
          <span className="truncate px-2">{client.docData.number.work}</span>
        </div>
      </div>
    );
  });
  return <ul className="flex flex-col gap-1">{content}</ul>;
}
