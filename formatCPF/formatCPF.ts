
export function formatCPF (cpf, type = null) : string
{
    if(type != null){

        let formated = "";
        formated += cpf.slice(0, 3) + ".";
        if(cpf.length == 11){
            formated += cpf.slice(3, 6) + ".";
            formated += cpf.slice(6, 9) + "-";
            formated += cpf.slice(9);
        }else{
            formated += cpf.slice(3, 6) + ".";
            formated += cpf.slice(6, 9) + "-";
            formated += cpf.slice(9);
        }
        return formated;
    }

    return cpf.replace(/[|&;$%@"<>()+,\s-\.]/g, "");
}