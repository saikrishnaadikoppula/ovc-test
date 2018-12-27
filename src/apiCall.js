export const fetchTableData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (response.status >= 400) {
        throw (new Error('Error fetching table data'))
    } else {
        return await response.json()
    }
}