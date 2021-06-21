import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/Payment.js";
let doc1;
let doc2;
doc1 = new Invoice("yoshi", "burger", 50);
doc2 = new Payment("joshi", "pizza", 250);
let docs = [];
docs.push(doc1);
docs.push(doc2);
console.log(docs);
const invOne = new Invoice("mario", "website", 200);
const invTwo = new Invoice("lugeli", "website two", 500);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((invoice) => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    console.log(doc);
    list.render(doc, type.value, "end");
});
