interface IProduto {
  nome: string;
  valor: number;
  marca: string;
  lote: string | number;
}
let produto: IProduto;

produto = {
  lote: "2558s45d",
  marca: "marca Nova",
  nome: "sabonete",
  valor: 25.56, 
};

/*Padrão para interfaces: começar com I e em seguinda o nome da classe que irá implementa-lá ex: classe animal --> interface IAnimal */