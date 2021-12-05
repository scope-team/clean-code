enum ErrorCode {
    OK,
    MISSING_STRING
}

class Args {
    private schema: string;
    private args: string[];
    private valid = true;
    private unexpectedArguments = new Set<string>();
    private marshalers = new Map<string, ArgumentMarshaler>();
    private argsFound = new Set<string>();
    private currentArgument: number;
    private errorArgument = "\0";
    private errorCode = ErrorCode.OK;

    constructor(schema: string, args: string[]) {
        this.schema = schema;
        this.args = args;
        this.valid = this.parse();
    }

    private parse() {
        if (this.schema.length === 0 && this.args.length === 0)
            return true;
        this.parseSchema();
        this.parseArguments();
        return this.valid;
    }

    private parseSchema() {
        this.schema.split(",").forEach(e => {
            if (e.length > 0) {
                const trimmedElement = e.trim();
                this.parseSchemaElement(trimmedElement);
            }
        });
        return true;
    }

    private parseSchemaElement(element: string) {
        const elementId = element.charAt(0);
        const elementTail = element.substring(1);
        this.validateSchemaElementId(elementId);
        if (this.isBooleanSchemaElement(elementTail)) {
            this.parseBooleanSchemaElement(elementId);
        } else if (this.isStringSchemaElement(elementTail)) {
            this.parseStringSchemaElement(elementId);
        }
    }

    private validateSchemaElementId(elementId: string) {
        if (!elementId.match(/[a-z]/i)) {
            throw new Error(
                "Bad character:" + elementId + "in Args format: " + this.schema
            )
        }
    }

    private parseStringSchemaElement(elementId: string) {
        const m = new StringArgumentMarshaler();
        this.marshalers.set(elementId, m);
    }

    private isStringSchemaElement(elementTail: string) {
        return elementTail === "*";
    }

    private isBooleanSchemaElement(elementTail: string) {
        return elementTail.length === 0;
    }

    private parseBooleanSchemaElement(elementId: string) {
        const m = new BooleanArgumentMarshaler();
        this.marshalers.set(elementId, m);
    }

    private parseArguments() {
        for (this.currentArgument = 0; this.currentArgument < this.args.length; this.currentArgument++) {
            const arg = this.args[this.currentArgument];
            this.parseArgument(arg);
        }
        return true;
    }

    private parseArgument(arg: string) {
        if (arg.startsWith("-")) {
            this.parseElements(arg);
        }
    }

    private parseElements(arg: string) {
        for (let i = 1; i < arg.length; i++) {
            this.parseElement(arg.charAt(i));
        }
    }

    private parseElement(argChar: string) {
        if (this.setArgument(argChar)) {
            this.argsFound.add(argChar);
        } else {
            this.unexpectedArguments.add(argChar);
            this.valid = false;
        }
    }

    private setArgument(argChar: string) {
        const m = this.marshalers.get(argChar)
        if (m instanceof BooleanArgumentMarshaler) {
            this.setBooleanArg(m);
        } else if (m instanceof StringArgumentMarshaler) {
            this.setStringArg(m);
        } else {
            return false;
        }
        return true;
    }

    public setStringArg(m: ArgumentMarshaler) {
        this.currentArgument++;
        m.set(this.args[this.currentArgument])
    }

    public setBooleanArg(m: ArgumentMarshaler) {
        m.set("true");
    }

    public cardinality() {
        return this.argsFound.size;
    }

    public usage() {
        return this.schema.length > 0 ? "-[" + this.schema + "]" : "";
    }

    public errorMessage() {
        if (this.unexpectedArguments.size > 0) {
            return this.unexpectedArgumentMessage();
        } else {
            switch (this.errorCode) {
                case ErrorCode.MISSING_STRING:
                    return ("Could not find string parameter for " + this.errorArgument);
                case ErrorCode.OK:
                    throw new Error("TILT: Should not get here.");
                default:
            }
        }
        return "";
    }

    private unexpectedArgumentMessage() {
        let message = "Argument(s) -";
        this.unexpectedArguments.forEach(c => {
            message += c;
        });
        message += " unexpected."
        return message
    }

    public getBoolean(arg: string) {
        const am = this.marshalers.get(arg);
        return am != null && am.get();
    }

    public getString(arg: string) {
        const am = this.marshalers.get(arg);
        return am == null ? "" : am.get();
    }

    public isValid() {
        return this.valid;
    }


}

abstract class ArgumentMarshaler {
    public abstract set(s: string): void;
    public abstract get();
}

class BooleanArgumentMarshaler extends ArgumentMarshaler {
    private booleanValue = false;

    public set(s: string) {
        this.booleanValue = true;
    }
    public get() {
        return this.booleanValue;
    }
}

class StringArgumentMarshaler extends ArgumentMarshaler {
    private stringValue = "";

    public set(s: string) {
        this.stringValue = s;
    }
    public get() {
        return this.stringValue;
    }
}