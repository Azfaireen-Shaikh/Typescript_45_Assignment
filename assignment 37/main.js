function makeshirt(size, Text) {
    if (size === void 0) { size = 'large '; }
    if (Text === void 0) { Text = 'i love typescript'; }
    console.log("you have order ".concat(size, ", shirt that says ").concat(Text));
}
makeshirt();
makeshirt('medium');
//different message
makeshirt('small', 'I need a big shirt to wear');
