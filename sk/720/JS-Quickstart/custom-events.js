
const myEvent = new CustomEvent("myCustomEvent", {
 detail: {
   message: "This is a custom event",
   time: new Date(),
 },
 bubbles: true,
 cancelable: true,
});