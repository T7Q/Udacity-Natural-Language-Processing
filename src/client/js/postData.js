// POST request to the server
// url is address to server, data is form input

export const postFormData = async ( url = '', data = {})=>{
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json',
    }, 
        body: JSON.stringify(data), 
    });
    try {
        const data = await response.json();
        return data;
    }catch(error) {
        console.log("error", error);
    }
}