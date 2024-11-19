interface IUsuario {
    id: number,
    token: string,
    nome: string,
    documento: string,
    telefone: string,
    dataCadastro: string,       
    dataNascimento: string,     
    dataUltimaAlteracao: string,
    email: string,
    senha: string,
    endereco: string,
    status: boolean,
    tipoUsuario: string,
    avatar: string
    extrato: Array<any>
}

export default IUsuario;