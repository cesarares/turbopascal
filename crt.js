// The CRT sub-system.

define(["Node"], function (Node) {
    var importSymbols = function (symbolTable) {
        // Keyboard functions.
        symbolTable.addNativeFunction("KeyPressed", Node.booleanType, [], function (ctl) {
            return ctl.keyPressed();
        });
        symbolTable.addNativeFunction("ReadKey", Node.charType, [], function (ctl) {
            // Suspend the machine so that the browser can get keys to us.
            ctl.suspend();

            // set callback for read char
            ctl.readChar(function (ch) {
                        ctl.push(ch);
                        ctl.resume();
                        return false; // stop calling callback
                });

        });

        // Sound functions.
        symbolTable.addNativeFunction("Sound", Node.voidType, [Node.integerType],
                                      function (ctl, hz) {
            // Not implemented.
        });
        symbolTable.addNativeFunction("NoSound", Node.voidType, [], function (ctl) {
            // Not implemented.
        });
    };

    return {
        importSymbols: importSymbols
    };
});
