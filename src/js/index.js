 const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
 const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

 listaSelecaoPokemons.forEach(pokemon => { //funcao
    pokemon.addEventListener('click', () => { //funcao
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idCartaoPokemonAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonAbrir = document.getElementById(idCartaoPokemonAbrir)
        cartaoPokemonAbrir.classList.add('aberto')

        const pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo')     
        
        const pokemonSelecionadoListagem= document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoListagem.classList.add('ativo')
    })
 })