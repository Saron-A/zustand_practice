const fetchProducts = async () => {
    try {
const response = await fetch("https://fakestoreapi.com/products", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
})
// check for response error
if(!response.ok) {
    throw new Error(`HTTP ERROR: ${response.status}`)
}

const data = await response.json();
return data

    }catch(err) {
        throw err
    }
}

export {fetchProducts};