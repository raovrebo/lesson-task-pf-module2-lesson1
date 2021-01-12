// Question 1

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";
if (requiredName === suppliedName) {
    console.log("The name is equal");
} else {
    console.log("The name is not equal");
}

if (requiredName !== suppliedName) {
    console.log("The name is not equal");
} else {
    console.log("The name is equal");
}


// Question 2

var username = "myusername";
if (username.length >= 4 && username.length <= 10) {
    console.log("Acceptable username");
    }
    if (username.length < 4) {
        console.log("Too few characters");
        }
        if (username.length > 10){
            console.log("Too many characters")
            } 

// Question 3

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;
if (invoicePaid === true && productDispatched === true && customerHasSigned === true) {
    console.log("Order complete");
}
    if (invoicePaid === false) {
        console.log("The invoice has not been paid");
    }
        if (productDispatched === false) {
            console.log("The product has not been dispatched");
        }
            if (customerHasSigned === false) {
                console.log("The customer has not signed");
           }

// Question 4

if (!invoicePaid || !productDispatched || !customerHasSigned) {
    if (!invoicePaid) {
        console.log("The invoice has not been paid");
    }
    if (!productDispatched) {
        console.log("The product has not been dispatched");
    }
    if (!customerHasSigned) {
        console.log("The customer has not signed");
    }
} else {
    console.log("Order complete");
}