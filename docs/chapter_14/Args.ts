class Args {
    private schema: string;
    private args: string[];
    private valid = false;
    private unexpectedArguments = new Set<string>();
    private booleanArgs = new Map<string, boolean>();
    private numberOfArgument = 0;

    constructor(schema: string, args: string[]) {
        this.schema = schema;
        this.args = args;
        this.valid = this.parse();
    }

    public isValid() {
        return this.valid;
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
        const c = element.charAt(0);
        if (element.length === 1) {
            this.parseBooleanSchemaElement(element);
        }
    }

    private parseBooleanSchemaElement(element: string) {
        const c = element.charAt(0);
        if (c.match(/[a-z]/i)) {
            this.booleanArgs.set(c, false);
        }
    }

    private parseArguments() {
        this.args.forEach(arg => {
            this.parseArgument(arg);
        });
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
        if (this.isBoolean(argChar)) {
            this.numberOfArgument++;
            this.setBooleanArg(argChar, true);
        } else {
            this.unexpectedArguments.add(argChar);
        }
    }

    public setBooleanArg(argChar: string, value: boolean) {
        this.booleanArgs.set(argChar, value);
    }

    public isBoolean(argChar: string) {
        return this.booleanArgs.has(argChar);
    }

    public cardinality() {
        return this.numberOfArgument;
    }

    public usage() {
        return this.schema.length > 0 ? "-[" + this.schema + "]" : "";
    }

    public errorMessage() {
        if (this.unexpectedArguments.size > 0) {
            return this.unexpectedArgumentMessage();
        } else {
            return "";
        }
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
        return this.booleanArgs.get(arg);
    }
}