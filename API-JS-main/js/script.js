const viaCep = async (cep) => {

    try {

        const url = await fetch("https://viacep.com.br/ws/" + cep + "/json/")
        const json = await url.json()

        document.getElementById("endereco").value = json.logradouro
        document.getElementById("bairro").value = json.bairro
        document.getElementById("cidade").value = json.localidade
        document.getElementById("estado").value = json.uf

        if (json.erro) {
            console.log("CEP nao existente")
        }
        console.log(json)
    } catch (erro) {
        throw Error(`Não foi possível encontrar o logradouro, motivo: ${erro}`)
    }

}

const recebeCep = document.getElementById("cep").addEventListener('change', event => {
    var cep = event.target.value
    var cep2 = viaCep(cep)



})

