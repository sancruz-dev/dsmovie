# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) Semana Spring React
>  *Um app completo com as tecnologias mais demandadas do mercado*

## Realização
[DevSuperior - Escola de programação](https://devsuperior.com.br)

[![DevSuperior no Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig)
[![DevSuperior no Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)](https://youtube.com/devsuperior)

<p align="center">
	______ OBSERVAÇÕES PESSOAIS ______
</p>
<p align="center">
	<img width="180px" height="123px" src="https://user-images.githubusercontent.com/83969467/149059281-a2550df8-dd9b-4118-988c-10b431adb8b1.gif" /> 
</p>

#### Espisódio 1

- baseUrl: É uma formatação no uso de importações dentro da arquitetura do projeto, dando a possibilidade de importar qualquer arquivo sem precisar sair da pasta usando '../' e, a linha de código seguinte configura a função, que deve ser inserida no arquivo tsconfig.json. '"baseUrl": "./src"'.

###### Rotas com React Router DOM

- BrowserRouter: inicia a configuração das rotas.

###### Componente MovieCard

- Bootstrap Columns: O bootstrap por padrão configura todo o campo da página com 12 colunas, portanto, se for definido que um elemento ocupe metade da página, será inserido à classe, o número 6 compondo a coluna, desta forma: 'col-6'. Caso queira que o elemento ocupe essa quantidade de colunas a partir de 576px de largura da tela - por exemplo - então a escrita fica assim: 'col-sm-6'.

#### Espisódio 2

###### Configuração de Segurança (Liberar acesso de sistemas em locais dinstintos)

- Classe SecurityConfig: o código da classe está liberando o acesso do backend que está hospedado no servido para que ele possa ser acessado pelo frontent que está em outro lugar. Cria-se a partir do pacote dsmovie, um subpacote chamado config, e lá criado a classe e seus códigos.

###### Domínio, ORM, Seed

- Classe de associação: Ocorre quando houver um relacionamento "muitos para muitos" deverá ter uma tabela no meio fazendo a associação. No caso da tabela de associação do nosso projeto, haverá um dado extra para fazer a ponte entre a tabela Movie e User.

- Chave primária composta: é a chave primária da classe de associação, que é composta pela chave primária da classe Movie e User, logo, é preciso criar uma classe auxiliar (ScorePK) para guardar essas duas chaves para assim virar uma composição.

- Associar 'Score' com 'Movie': o código seguinte forma um filme e associa-o ao objeto Score: 'public void setMovie(Movie movie){id.setMovie(movie);}'. (A linha foi escrita na classe Score).

- Serializable: interface do java que indica que o objeto especificado pode ser convertido para bytes (importante para trafegar na rede e ser salvado em arquivos), e a CHAVE COMPOSTA exige o serializable

###### Busca de Filmes 

- MovieRepository: Responsável pelo CRUD e acesso ao BD.

- @Autowired: instacia a classe automaticamente.

###### Salvar Avaliação

- PUT é idempotente: chamá-lo uma ou várias vezes sucessivamente terá o mesmo efeito. Diferentemente de POST, que pode ter efeitos adicionai.

- @RequestBody: configura que o corpo receba a requisição do JSON e seja convertido no objeto indicado, que no caso, é o ScoreDTO.

- saveAndFlush: as alterações serão liberadas para o DB imediatamente neste comando. Porém, com o 'save', isso não é necessariamente verdade e pode permanecer na memória até que os comandos flush ou commit sejam emitidos.

- HashSet<>(): é uma classe que implementa a interface. Ou seja, o atributo 'Set' associado ao Score ('Set<Score>'), o 'Set' em si é essa interface, e não um classe. Por isso que na sua instância não é chamado por new Set(), pois essa classe é implementada na classe HashSet.

- **Set<Score>**: por que não usar 'List<Score>'? já que referencia uma lista/conjunto/coleção? Porque em Java, numa situação de _muitos pra muitos_ - que é o caso da entidade Score - o que garante a NÃO repetição de dados é o Set.

- OneToMany: One(A entidade atual) To(para) Many(muitos). Ou seja, Um movie pode ter muitos scores. **Portanto, 'One' será a classe atual onde essa 'annotation' está sendo escrita**.

- @OneToMany(mappedById = "id.movie"): o 'id' é o nome da chave primária do score (ScorePK), e o 'movie' é o nome do atributo existente na classe também do ScorePK. Essa linha de código permite acessar todas as avaliações de umm certo filme, a partir de um objeto de filme (a classe Movie). E todo esse processo é feito com o user também.


###### Validação do Postgres local

- Os três perfis de projeto:
	- test: no momento, a propriedade da aplicação está com o perfil ativado como test, configurado lá no arquivo application.properties. Com isso, será criado alguns arquivos de configuração para configurar outros perfis de projeto
	- dev: vai ser um perfil de uma homologação (confirmação), para testar o projeto no BD do Postgres localmente.
	- prod: é o perfil que vai rodar quando instalado na nuvem Heroku.

###### Back-end no Heroku

- Estrutura da url do BD do Postgres da Heroku:
```
postgres://
vwjgmxbputdshi
:
19ab5002aa6262de723ba23647bd277bd1245d14fe463a949d7bde3acb400efa
@
ec2-3-225-41-234.compute-1.amazonaws.com
:
5432
/
dauuv9j80p0sgj

# Substituindo por explicação a variável de ambiente:
# postgres://
# (Nome do usuário)
# :
# (Senha do usuário)
# @
# (Host onde está hospedado o banco de dados)
# :
# (Porta)
# /
# (Nome da base de dados)
```

#### Espisódio 3

###### Parâmetro de rota: userParams

- o movieId que chegou de argumento pro Props, TEM que ser colocado como dependência do useEffect - da function FormCard - caso contrário a requisição entrará em loop repetido, pois seu valor foi usado (${movieId}), portanto é essecial usar esse valor como parâmetro, guiando para uma nova requisição apenas quando este valor for mudado.
