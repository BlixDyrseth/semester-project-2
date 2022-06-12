import { baseUrl } from "../../settings/api.js"

export function uploadImage() {
    const 
}

async function addProduct(title, price, description, ) {
    const url = baseUrl + "/";
    const data = JSON.stringify({title, price, description});

    console.log(data)


    const options = {
        method: "POST",
        body: data, 
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.created_at) {
            displayMessage("success", "Product created", ".message-container");
            form.reset();
        }
    } catch (error) {
        displayMessage("error", error, ".message-container");
    }
}