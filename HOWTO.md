#Dicas
Este arquivo cont�m dicas valiosas sobre as ferramentas utilizadas no projeto.


##Editor Online de Arquivos .MD
Editor Online de arquivos '.md'. Muito �til para dar um preview da documenta��o (feita neste formato), antes de dar um 'commit' definitivo.

[Editor Online de Arquivos **.md**]

---

##GitHub

Para se trabalhar com os reposit�rios, vamos usar naturalmente o site do GitHub e instalar mais **duas** ferramentas no computador. Na realidade somente a primeira � realmente 'obrigat�ria' do meu ponto de vista, a outra � mais um recurso visual para quem evita usar janelas do tipo console.

###Git Bash 
Ferramenta do tipo Console para trabalho com reposit�rios.

[Download Git Bash]

Durante a instala��o selecione o seguinte:

Select Components:  
**On Desktop (2a. op��o)**  
**Use a TrueType font is all console Windows (�ltima op��o)**

PATH environment:  
**Use Git from Windows Command Prompt (2a. op��o)**

Config Line Endings:  
**Deixar como est� (1a. op��o)**

Terminal Emulator:  
**Use MinTTY (1a. op��o)**

###GitHub Desktop
Ferramenta do tipo GUI para trabalho com reposit�rios.

[Download GitHub Desktop]

No diret�rio 'Documents' crie uma pasta 'Git_Repositories'. Isso **n�o** � obrigat�rio, mas utilizaremos como padr�o para o nosso projeto.

###Testando o Reposit�rio
Antes de come�ar a trabalhar com os arquivos reais, por favor, teste o reposit�rio com um arquivo teste. Para isso abra o 'Git Bash' e entre com os seguintes comandos:

*troque 'seu-nome' por seu primeiro nome* para evitar duplica��o.

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

*Entre com seu login e senha*. Se n�o houver erro v� at� o GitHub na Web e veja se o novo arquivo apareceu, ele aparecer� para toda equipe.

Para remover o arquivo:

    $ git rm seu-nomeTeste.txt
    $ git status
    $ git commit -m "Deletando o arquivo Teste"
    $ git push

Explica��o r�pida dos Comandos b�sicos: 

* **git clone repo.git** Clona o reposit�rio remoto. � primeiro comando que se d� para termos acesso a um reposit�rio. � dado uma �nica vez.
* **touch arq-name.xxx** Cria um arquivo vazio.
* **ls** Lista os arquivos do dir atual.
* **pwd** Mostra o nome do dir atual.
* **git add -a arq-name** Adiciona um arquivo para ser atualizado.
* **git commit -m "msg"** Modifica LOCALMENTE e OFICIALMENTE o arquivo e o marca para ser enviado.
* **git push** Envia as modifica��es para que todos possam v�-la.
* **git status** Mostra o status LOCAL deste reposit�rio.
* **git rm arq-name** Remove o arquivo localmente e o marca para ser removido no pr�ximo push.

### Validador de HTML/CSS
�til para verificar se o HTML e o CSS s�o documentos dentro do padr�o da W3C.

[Validador HTML]
[Validador CSS]
---

[Editor Online de Arquivos **.md**]:http://jrmoran.com/playground/markdown-live-editor/
[Download Git Bash]:https://git-scm.com/downloads
[Download GitHub Desktop]:https://desktop.github.com/
[Validador HTML]:https://validator.w3.org/
[Validador CSS]:http://jigsaw.w3.org/css-validator/