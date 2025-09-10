import { Request } from "doobots";
import { main } from "../src/main.js";

describe("Main Test", () => {
    it("should process with data and files", async () => {
        const request = new Request(
            { nome: "Matheus" },
            [{ fileName: "teste.txt", base64: "SGVsbG8gV29ybGQh" }]
        );

        const response = await main(request);

        expect(response.get("greeting")).toBe("Ola, Matheus!");
        expect(response.get("fileContent")).toBe("Hello World!");
    });
});