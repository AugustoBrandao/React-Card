# Componentes Controlados
Em resumo, o próprio estado e a função responsável por alterar esse estado ficam no componente pai (no caso, o App). A função responsável por alterar o estado será passada do componente pai para o filho através de uma prop.

1- Declare o estado no componente App <br>
2- Por organização, vamos separar as informações do cartão em um objeto dentro do state, para que possamos enviar todos os dados de uma vez só <br>
3- Vamos passar esse estado adiante, enviando o objeto cardInfo para o componente Form <br> 
4- Desestruture o cardInfo no componente Form <br>
5- Passar o value dos inputs recebendo o estado, para quando o input for alterado, o estado ser alterado também (minuto 31 da aula) <br>
6- Provavelmente você tentou digitar nos campos e não apareceu nada, isso ocorre pq o valor que está sendo mostrado no input é o valor do state do componente pai <br>
7- Criar no componente pai uma função handleChange genérico para todos os campos <br>
8- Passar a função handleChange para o componente < Form /> como desestruturação. Junto com o cardInfo <br>
9- Para cada input no componente < Form /> colocar o evento onChange={ handleChange } <br>
10- Atente-se para colocar a propriedade name de cada input de forma diferente, pois no set state iremos pegar o name para colocar como chave do estado <br>
11-Agora é necessário passar o estado para o componente < CreditCard /> <br>
12-Passe as props do objeto cardInfo e da função handleChange <br>

