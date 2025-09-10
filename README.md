# DooBots - JavaScript - Exemplo

Este repositório contém um exemplo de um script JavaScript que pode ser executado no DooBots.

## Estrutura Mínima

- `main.js`: Deve conter uma função `main` que receba um argumento do tipo `doobots.Request` e retorne `doobots.Response`.
- `package.json`: Arquivo com as dependências do projeto

## Testando Localmente

Como o pacote `doobots` já está nas dependências do projeto, ele fornece um comando `doobots-run` que deve ser executado na raiz do seu projeto.

Para conveniência, também foi adicionado um script chamado `local` no `package.json` deste exemplo, assim você pode só executar `npm run local` para testar.

Esse comando espera que, na pasta onde foi executado ou na pasta `dist` dentro da pasta onde foi executado, contenha os arquivos `main.js` e `input.json`, sendo o seu script principal e o arquivo de atributos de entrada para o teste, respectivamente.

Esse script `local` faz o seguinte:

- Copia o arquivo `input.json` que fica na raiz do projeto e os arquivos `.js` que ficam na pasta `src` para a pasta `dist`
- Executa o comando `doobots-run`

### Instalar Dependências

```shell
npm install
```

### Executar

```shell
npm run local
```

O código de exemplo deste repositório retorna dois atributo de dados, sendo:
- `greeting`: Contém `Ola, ${nome_recebido}!`
- `fileContent`: Retorna o conteúdo do arquivo de entrada para exemplificar o uso dos arquivos

Saída do código de exemplo:

```json
{"data": {"greeting": "Ola, Matheus!", "fileContent": "Hello World!"}, "files": []}
```

## Testes

É recomendado o desenvolvimento utilizando testes unitários para facilitar a iteração "teste-ajuste".

O exemplo já contempla um teste unitário `tests/main.test.js` que pode ser executado usando `npm test`.

## Empacotando

Para poder executar o código desenvolvido no DooBots, é necessário empacotar seu código em um arquivo `.zip` para fazer upload dele no DooBots.

O zip deve conter pelo menos os arquivos `package.json` e `main.js`.

Exemplo de estrutura mínima do arquivo zip:

```
code.zip
|- main.js
|- package.json
```

> - É necessário que os arquivos `main.js` e `package.json` estejam na raiz do zip, e não dentro de uma pasta.
> - Importante não incluir a pasta `node_modules` no zip, pois as dependências serão instaladas automaticamente no ambiente do DooBots.