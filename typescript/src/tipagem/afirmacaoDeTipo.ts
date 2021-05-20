const urlsite: unknown = "https://googles.com.br";

const siteFavoritos: string[] = [];

// siteFavoritos.push(urlsite) dessa maneira irá ocorrer um erro, pois  ele não sabe que tipo está vindo (se fosse any daria certo).

siteFavoritos.push(urlsite as string);
/*Assim estou afirmando que eu sei qual o tipo (estou afirmando) */

siteFavoritos.push(<string>urlsite);
/*Outra maneira de afirmação */
