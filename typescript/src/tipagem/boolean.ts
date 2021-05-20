let admin: boolean = true;

admin = false;

admin = Boolean(1);
/*ele vai converter para boolean, porque é uma função (lembrar de usar com resultados que retornem verdadeiro ou falso, caso contario valores acima de 1 e strings numericas ou palavras que não sejam true ou false serão verdadeiros)*/

let senha = "1234";
let senhaSegura: boolean;

senhaSegura = senha.length > 8;
