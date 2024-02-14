// "use server";

export default async function FetchData(number: number) {
  let res = await fetch("https://api.sampleapis.com/beers/ale");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  let data = await res.json();
  return data[number].name;
}
