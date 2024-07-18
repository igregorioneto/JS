function updateLight(current) {
    return current === "green" ? "yellow" : current === "yellow" ? "red" : "green";
}
;(() => {
    console.log(updateLight("green"), "yellow");
    console.log(updateLight("yellow"), "red");
    console.log(updateLight("red"), "green");
})()