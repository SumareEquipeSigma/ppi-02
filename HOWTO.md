#Dicas
Este arquivo contém dicas valiosas sobre as ferramentas utilizadas no projeto.


##Editor Online de Arquivos .MD
Editor Online de arquivos '.md'. Muito útil para dar um preview da documentação (feita neste formato), antes de dar um 'commit' definitivo.

[Editor Online de Arquivos **.md**]

---

##GitHub

Para se trabalhar com os repositórios, vamos usar naturalmente o site do GitHub e instalar mais **duas** ferramentas no computador. Na realidade somente a primeira é realmente 'obrigatória' do meu ponto de vista, a outra é mais um recurso visual para quem evita usar janelas do tipo console.

###Git Bash 
Ferramenta do tipo Console para trabalho com repositórios.

[Download Git Bash]

Durante a instalação selecione o seguinte:

Select Components:  
**On Desktop (2a. opção)**  
**Use a TrueType font is all console Windows (última opção)**

PATH environment:  
**Use Git from Windows Command Prompt (2a. opção)**

Config Line Endings:  
**Deixar como está (1a. opção)**

Terminal Emulator:  
**Use MinTTY (1a. opção)**

###GitHub Desktop
Ferramenta do tipo GUI para trabalho com repositórios.

[Download GitHub Desktop]

No diretório 'Documents' crie uma pasta 'Git_Repositories'. Isso **não** é obrigatório, mas utilizaremos como padrão para o nosso projeto.

###Testando o Repositório
Antes de começar a trabalhar com os arquivos reais, por favor, teste o repositório com um arquivo teste. Para isso abra o 'Git Bash' e entre com os seguintes comandos:

*troque 'seu-nome' por seu primeiro nome* para evitar duplicação.

    $ cd Documents/Git_Repositories
    $ pwd
    $ git clone https://github.com/SumareEquipeSigma/ppi-02.git  
    $ cd ppi-02
    $ touch seu-nomeTeste.txt
    $ ls
    $ git add seu-nomeTeste.txt
    $ git commit -m "Inserindo um arquivo Teste"
    $ git status
    $ git push

*Entre com seu login e senha*. Se não houver erro vá até o GitHub na Web e veja se o novo arquivo apareceu, ele aparecerá para toda equipe.

Para remover o arquivo:

    $ git rm seu-nomeTeste.txt
    $ git status
    $ git commit -m "Deletando o arquivo Teste"
    $ git push

Explicação rápida dos Comandos básicos: 

* **git clone repo.git** Clona o repositório remoto. É primeiro comando que se dá para termos acesso a um repositório. É dado uma única vez.
* **touch arq-name.xxx** Cria um arquivo vazio.
* **ls** Lista os arquivos do dir atual.
* **pwd** Mostra o nome do dir atual.
* **git add -a arq-name** Adiciona um arquivo para ser atualizado.
* **git commit -m "msg"** Modifica LOCALMENTE e OFICIALMENTE o arquivo e o marca para ser enviado.
* **git push** Envia as modificações para que todos possam vê-la.
* **git status** Mostra o status LOCAL deste repositório.
* **git rm arq-name** Remove o arquivo localmente e o marca para ser removido no próximo push.

### Validador de HTML/CSS
Útil para verificar se o HTML e o CSS são documentos dentro do padrão da W3C.

[Validador HTML]
[Validador CSS]
---

[Editor Online de Arquivos **.md**]:http://jrmoran.com/playground/markdown-live-editor/
[Download Git Bash]:https://git-scm.com/downloads
[Download GitHub Desktop]:https://desktop.github.com/
[Validador HTML]:https://validator.w3.org/
[Validador CSS]:http://jigsaw.w3.org/css-validator/