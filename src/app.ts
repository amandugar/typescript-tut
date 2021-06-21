import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let doc1: HasFormatter;
let doc2: HasFormatter;

doc1 = new Invoice("yoshi", "burger", 50);
doc2 = new Payment("joshi", "pizza", 250);

let docs: HasFormatter[] = [];

docs.push(doc1);
docs.push(doc2);

console.log(docs);

const invOne = new Invoice("mario", "website", 200);
const invTwo = new Invoice("lugeli", "website two", 500);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((invoice) => {
  console.log(invoice.client, invoice.amount, invoice.format());
});

const form = document.querySelector(".new-item-form") as HTMLFontElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#toFrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  console.log(doc);
  list.render(doc, type.value, "end");
});
