import formatCPF from './formatCPF';

describe("Format to a cpf number", () =>
{
    it("Should return a clean cpf number", () =>
    {
        let text = "XXX.XXX.XXX-XX";
        let formated = formatCPF(text);
        expect(formated).toBe("XXXXXXXXXXX");
    })

    it("Return a formatted cpf number", () =>
    {
        let text = "XXXXXXXXXXX";
        let formated = formatCPF(text, 1);
        expect(formated).toBe("XXX.XXX.XXX-XX");
    })
})