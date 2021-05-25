class PermissaoGetSet {
  constructor(private _nome: string, private _nivel: number) {}

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    if (novoNome.length < 5) {
      throw new Error("Onome deve ter pelo menos 5 caracteres");
    }
    this._nome = novoNome;
  }
  get nivel() {
    return this._nivel;
  }

  set nivel(nivelNovo) {
    this._nivel = nivelNovo;
  }
  /*O nome dos gets e sets devem der diferentes do atributo, para isso usar _ */
}

const permissaoGetSet = new PermissaoGetSet("adminstrador", 1);

console.log(permissaoGetSet.nome); //<---get
permissaoGetSet.nome = "usuario";//<--set
