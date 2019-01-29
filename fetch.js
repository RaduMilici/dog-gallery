export default async function fetchData(URL) {
    const response = await fetch(URL);
    const {message} = await response.json();

    return message;
}