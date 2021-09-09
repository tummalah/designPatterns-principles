
// mock http client
const httpClient = new AxiosHttpClient();

filterorders(httpClient, []).then(orders => {
    displayorders(orders);
    saveorder(orders, httpClient);
});

export function filterorders(httpClient, filters): Promise<any> {
    try {
        filters = removeDuplicateFilters(filters);
        return httpClient.get("/api/orders").then(orders => {
            let result = applyFilters(orders);
            return result;
        }).catch(err => {
            // reusing the error handler
            handleError(err, "Something went wrong while processing the orders");
        });
    }
    catch(err) {
        // reusing the error handler
        handleError(err, "Application critical error");
    }
}

// single responsibility of saving the Orders
function saveorder(result: any[], httpClient: any) {
    result.forEach(order => {
        httpClient.post("/api/orders/record", order);
    });
}

// single responsibility of rendering the Orders
function displayorders(result: any[]) {
    let list = document.getElementById("orders-list");
    result.forEach(order => {
        let orderItem = document.createElement("li");
        orderItem.innerHTML = `<strong>${order.lastName}</strong> ${order.firstName}`;
        list.appendChild(orderItem);
    });
}

//single responsibility of handling the error
function handleError(err, msg) {
    console.error(msg);
    let messageBox = new MessageBox();
    messageBox.show(msg);
}


function removeDuplicateFilters(filters) {
    
}

function applyFilters(filters): any[] {
    
    return [];
}

//mock message box
export class MessageBox {
    
    show(msg) {

    }
}