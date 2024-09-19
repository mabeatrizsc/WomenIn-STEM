// Array que armazena informações sobre cientistas
//let dados = [
    //{
        //titulo: "",--Título da cientista
        //imagem: "assets/img/",--Caminho da imagem da cientista
        //descricao: "", -- Descrição da cientista
        // link: "", --Link relacionado à cientista (pode ser uma página ou um perfil)
        //informacao: "", -- Informações adicionais sobre a cientista
    //},
//];
let dados = [
    {
    titulo : "Marie Curie",
    imagem: "assets/img/marie.jpg",
    descricao : "Marie Skłodowska-Curie, nascida Maria Salomea Skłodowska (Varsóvia, 7 de novembro de 1867 — Passy, 4 de julho de 1934), foi uma física e química polonesa naturalizada francesa, que conduziu pesquisas pioneiras sobre radioatividade. Foi a primeira mulher a ganhar o Prêmio Nobel, sendo também a primeira pessoa e a única mulher a ganhá-lo duas vezes, além de ser a única pessoa a ter ganhado o Prêmio Nobel em dois campos científicos diferentes. Teve papel fundamental no legado da família Curie, de cinco prêmios Nobel. Também foi a primeira mulher a se tornar professora na Universidade de Paris e, em 1995, se tornou a primeira mulher a ser sepultada por seus próprios méritos no Panteão de Paris.",
    link : "https://www.youtube.com/watch?v=V6xAI8635go",
    informacao:"https://www.google.com.br/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiOusbq-qeIAxUzr5UCHXW7ASQQFnoECEMQAQ&url=httpshttps://pt.wikipedia.org/wiki/Marie_Curie",
},
{
    titulo: "Katherine Johnson",
    imagem:"assets/img/Katherine.jfif",
    descricao: "Katherine Coleman Goble Johnson (White Sulphur Springs, 26 de agosto de 1918 – Newport News, 24 de fevereiro de 2020) foi uma matemática, física e cientista espacial norte-americana.Fez contribuições fundamentais para a aeronáutica e exploração espacial dos Estados Unidos, em especial em aplicações da computação na NASA. Conhecido pela precisão na navegação astronômica informatizada, seu trabalho de liderança técnica na NASA se estendeu por décadas onde ela calculava as trajetórias, janelas de lançamento e caminhos de retorno de emergência para muitos voos de Projeto Mercury, incluindo as primeiras missões da NASA de John Glenn, Alan Shepard, o voo da Apollo 11, em 1969, à Lua e trabalho contínuo por meio do programa dos ônibus espaciais e sobre os planos iniciais para a missão a Marte. Em 2016, foi incluída na lista de cem mulheres mais inspiradoras e influentes pela BBC.",
    link: "https://www.youtube.com/watch?v=9ZLlb_Z7AoI",
    informacao:"https://pt.wikipedia.org/wiki/Katherine_Johnson"
},
{
    titulo: "Ada Lovelace",
    imagem: "assets/img/Ada.jpg",
    descricao: "Augusta Ada Byron King, Condessa de Lovelace (nascida Byron, 10 de dezembro de 1815 — 27 de novembro de 1852), atualmente conhecida como Ada Lovelace, foi uma matemática e escritora inglesa. Hoje é reconhecida principalmente por ter escrito o primeiro algoritmo para ser processado por uma máquina, a máquina analítica de Charles Babbage. Durante o período em que esteve envolvida com o projeto de Babbage, ela desenvolveu os algoritmos que permitiriam à máquina computar os valores de funções matemáticas, além de publicar uma coleção de notas sobre a máquina analítica. Por esse trabalho é considerada a primeira programadora de toda a história.",
    link: "https://www.youtube.com/watch?v=UNRpU_6luQI",
    informacao:"https://pt.wikipedia.org/wiki/Ada_Lovelace"
},
{
    titulo: "Tu Youyou",
    imagem:"assets/img/TuYouyou.jpg",
    descricao: "Tu Youyou (em chinês: 屠呦呦; Ningbo, 12 de dezembro de 1930) é uma farmacologista e educadora chinesa. Ela descobriu a artemisinina (também conhecida como qinghaosu) e a diidroartemisinina, usada para tratar a malária, um avanço significativo na medicina tropical do século XX, salvando milhões de vidas no Sul da China, Sudeste da Ásia, África e América do Sul. Por seu trabalho, Tu recebeu o Prêmio Lasker em 2011 em medicina clínica e o Prêmio Nobel de 2015 em Fisiologia ou Medicina em conjunto com William Cecil Campbell e Satoshi Ōmura. Foi a primeira ganhadora do Prêmio Nobel da China em fisiologia ou medicina e a primeira cidadã da República Popular da China a receber um Prêmio Nobel em qualquer categoria. Ela também foi a primeira chinesa a receber o Prêmio Lasker. Tu Youyou nasceu, estudou e realizou sua pesquisa exclusivamente na China.",
    link: "https://www.youtube.com/watch?v=Z_XCZZ75BIU",
    informacao:"https://pt.wikipedia.org/wiki/Tu_Youyou" 
},
{
    titulo: "Chien-Shiung Wu",
    imagem:"assets/img/Chien-Shiung.jpg",
    descricao: "Chien-Shiung Wu (em chinês simplificado: 吳健雄, em chinês tradicional: 吴健雄, em pinyin: Wú Jiànxíong), (Xangai, 31 de maio de 1912 — Nova Iorque, 16 de fevereiro de 1997) foi uma física sino-estadunidense. Fez grandes contribuições para a física nuclear, trabalhou no Projeto Manhattan, onde ajudou a criar o processo de separação do urânio em urânio-235 e urânio-238 por difusão gasosa. Conhecida por conduzir o experimento de Wu, que contradizia o hipotético princípio de conservação de paridade. Esta descoberta resultou no Prêmio Nobel para seus colegas, Tsung-Dao Lee e Chen-Ning Yang, em 1957. Wu ganhou o primeiro Prêmio Wolf de Física, em 1978. Sua experiência com física experimental levou a comparações de Wu com Marie Curie. Seus apelidos no meio eram de 'Primeira Dama da Física', 'Madame Curie da China' e 'Rainha da Pesquisa Nuclear'.",
    link:"https://www.youtube.com/watch?v=211EnhIQUNo",
    informacao: "https://pt.wikipedia.org/wiki/Chien-Shiung_Wu"
},
{
    titulo: "Grace Hopper",
    imagem:"assets/img/Grace.jpg",
    descricao: "Grace Murray Hopper (Nova Iorque, 9 de dezembro de 1906 — Condado de Arlington, 1 de janeiro de 1992) foi almirante e analista de sistemas da Marinha dos Estados Unidos nas décadas de 1940 e 1950, criadora da linguagem de programação de alto nível Flow-Matic (em desuso) — base para a criação do COBOL — e uma das primeiras programadoras do computador Harvard Mark I em 1944.Em 1949, Grace Hopper tornou-se empregada da corporação Eckert-Mauchly Computer como matemática sénior e compôs a equipa de desenvolvimento UNIVAC I. Ela também serviu como diretora do UNIVAC de Desenvolvimento Automático de Programação para Remington Rand. O UNIVAC foi o primeiro computador eletrônico de larga escala conhecido a estar no mercado em 1950 e era mais competitivo em processamento de informação do que o Mark I.",
    link: "https://www.youtube.com/watch?v=miaPR9jXv_w",
    informacao:"https://pt.wikipedia.org/wiki/Grace_Hopper" 
},
{
    titulo: "Rosalind Franklin",
    imagem:"assets/img/Rosalind_Franklin.jpg",
    descricao: "Rosalind Elsie Franklin (Londres, 25 de julho de 1920 – Londres, 16 de abril de 1958)[1] foi uma química britânica que contribuiu para o entendimento das estruturas moleculares do DNA, RNA, vírus, carvão mineral e grafite. Embora seus trabalhos sobre o carvão e o vírus tenham sido apreciadas em sua vida, suas contribuições para a descoberta da estrutura do DNA tiveram amplo reconhecimento póstumo. Nascida em uma notável família judaica britânica, Franklin foi educada em uma escola particular em Norland Place, no oeste de Londres, na Lindores School for Young Ladies em Sussex, e na St Paul's Girls' School, em Londres. Depois, ela estudou Ciências Naturais no Newnham College, Cambridge, na qual se formou em 1941. Com uma bolsa de estudos de pesquisa, começou a trabalhar no laboratório de fisico-química da Universidade de Cambridge sob a orientação de Ronald George Wreyford Norrish, que a desapontou por sua falta de entusiasmo.",
    link: "https://www.bing.com/videos/riverview/relatedvideo?&q=Rosalind+Franklin&&mid=E01E244425597A7EAE4FE01E244425597A7EAE4F&&FORM=VRDGAR" ,
    informacao:"https://pt.wikipedia.org/wiki/Rosalind_Franklin"
},
{
    titulo: "Alice Augusta Ball",
    imagem:"assets/img/Alice_Augusta_Ball.jpg",
    descricao: "Alice Augusta Ball (Seattle, 24 de julho de 1892 – Seattle, 31 de dezembro de 1916) foi uma química norte-americana que desenvolveu um óleo injetável que foi o método mais eficiente para o tratamento da lepra até os anos 40. Foi também a primeira mulher e a primeira negra a graduar-se na Universidade do Havaí e a obter um mestrado. Alice era filha de James Presley e Laura Louise (Howard) Ball, nascida em Seattle, Washington em 24 de julho de 1892. Sua família era de classe média, sendo que seu pai era editor de jornal, fotógrafo e advogado. O seu avô, James Presley Ball, foi um fotógrafo famoso e o primeiro afro-americano nos Estados Unidos a aprender o daguerreótipo. A família mudou-se para o Havaí em 1903, mas devido à sua morte um ano depois, a família voltou para Seattle em 1905. Já em Seattle, Alice entrou no ensino médio, recebendo notas altas em ciências e formando-se em 1910. Ela estudou Química na Universidade de Washington e em quatro anos ela recebeu os títulos de bacharelado em Farmácia e em Química. Com o seu orientador em Farmácia, ela publicou um artigo de 10 páginas no prestigiado Journal of the American Chemical Society intitulado 'Benzoylations in Ether Solution'.",
    link: "https://www.youtube.com/watch?v=kt1R-SHnHV8",
    informacao:"https://pt.wikipedia.org/wiki/Alice_Ball" 
},
{
    titulo: "Jaqueline Goes de Jesus",
    imagem: "assets/img/Jaqueline.jfif",
    descricao: "Jaqueline Goes de Jesus (Salvador, 19 de outubro de 1989) é uma biomédica, doutora em patologia humana e pesquisadora brasileira. Foi ainda adolescente que decidiu seguir a carreira de biomédica. A sua primeira experiência em pesquisa envolveu o vírus VIH - algo que a marcou muito pelo impacto a nível mundial e que determinou que prosseguisse um percurso científico e de pesquisa. Distinguiu-se por ser a biomédica que coordenou a equipe responsável pelo sequenciamento do genoma do vírus SARS-CoV-2 apenas 48 horas após a confirmação do primeiro caso de COVID-19 no Brasil. Também fez parte da equipe liderada por pesquisadores ingleses que sequenciou o genoma do vírus Zika.",
    link:"https://www.youtube.com/watch?v=rFRxXFt4ntY",
    informacao: "https://pt.wikipedia.org/wiki/Jaqueline_Goes_de_Jesus"
},
{
    titulo: "Hipatia de Alexandria",
    imagem: "assets/img/Hypatia.png",
    descricao:"Hipatia ou Hipácia (em grego clássico: Ὑπατία; romaniz.: Hypatía; Alexandria, c. 351/370 – Alexandria, 8 de março de 415[1]) foi uma filósofa neoplatônica do Egito Romano. Foi a primeira mulher documentada como tendo sido matemática. Como chefe da escola platônica em Alexandria, também lecionou filosofia e astronomia.Como neoplatonista, pertencia à tradição matemática da Academia de Atenas, representada por Eudoxo de Cnido, e era da escola intelectual do pensador Plotino, que a incentivou a estudar Lógica e Matemática, no lugar de se dedicar à investigação empírica, e a estudar Direito, em vez de ciências da natureza.", 
    link: "https://www.youtube.com/watch?v=gOUGg8wCweg",
    informacao:"https://pt.wikipedia.org/wiki/Hip%C3%A1tia"
},
{
    titulo:"Jane Goodall",
    imagem:"assets/img/jane.jfif", 
    descricao:"Dame Jane Morris Goodall DBE, nascida Valerie Jane Morris-Goodall em 3 de abril de 1934) anteriormente chamada Baronesa Jane van Lawick-Goodall, é uma primatologista, etóloga e antropóloga britânica. Considerada mundialmente a maior estudiosa em chimpanzés, Goodall tem seu trabalho mais reconhecido com o estudo das interações sociais e familiares de chimpanzés selvagens, desde em que ela trabalhou em campo no Parque Nacional de Gombe Stream na Tanzânia na década de 60, onde ela foi a primeira a testemunhar comportamentos de primatas semelhantes ao de humanos, incluindo o conflito armado.", 
    link:"https://www.youtube.com/watch?v=d3b6zSpy7P4", 
    informacao:"https://pt.wikipedia.org/wiki/Jane_Goodall",
},
{
    titulo:"Hedy Lamarr", 
    imagem:"assets/img/Hedy.jpg", 
    descricao:"Hedy Lamarr, nome artístico de Hedwig Eva Maria Kiesler (Vienna, 9 de novembro de 1914 — Altamonte Springs, 19 de janeiro de 2000), foi uma atriz e inventora austríaca radicada no Estados Unidos.Em 28 anos de carreira, participou de mais de 30 filmes e fez uma importante contribuição tecnológica durante a Segunda Guerra Mundial, uma co-invenção, com o compositor George Antheil, um sistema de comunicações para as Forças Armadas dos Estados Unidos que serviu de base para a atual telefonia celular. Em reconhecimento do valor de seu trabalho e da importância da tecnologia por ela inventada, seu nome foi postumamente inserido no National Inventors Hall of Fame em 2014.", 
    link:"https://www.youtube.com/watch?v=edxavhfHH18", 
    informacao:"https://pt.wikipedia.org/wiki/Hedy_Lamarr",
},
{
    titulo:"Mae Jemison", 
    imagem:"assets/img/Mae.jfif", 
    descricao:"Mae Carol Jemison (Decatur, 17 de outubro de 1956) é uma médica, engenheira e ex-astronauta estadunidense. Foi a primeira mulher negra a ir para o espaço, quando serviu como especialista de missão a bordo do ônibus espacial Endeavour. Jemison se uniu ao grupo de astronautas da NASA de 1987 e serviu na missão STS-47, na qual orbitou a Terra dos dias 12 a 20 de setembro de 1992. Jemison sabia desde nova que queria estudar ciência e ir para o espaço. O programa de televisão Star Trek, em particular a atriz negra Nichelle Nichols interpretando a Tenente Uhura, alimentaram o seu interesse no assunto.", 
    link:"https://www.youtube.com/watch?v=nAOV2qQeDtw", 
    informacao:"https://pt.wikipedia.org/wiki/Mae_Jemison",
},
{
    titulo:"Dorothy Vaughan", 
    imagem:"assets/img/Dorothy-Vaughan.webp", 
    descricao:"Dorothy Johnson Vaughan (Kansas City, 20 de setembro de 1910 — Hampton, 10 de novembro de 2008), foi uma matemática estadunidense, que trabalhou na National Advisory Committee for Aeronautics (NACA), a agência predecessora da NASA. Em 1949, ela foi a primeira mulher negra a ser promovida chefe de departamento na NASA.", 
    link:"https://www.youtube.com/watch?v=9fJS0b2Kdqs", 
    informacao:"https://pt.wikipedia.org/wiki/Dorothy_Vaughan",
},
{
    titulo:"Mary Jackson", 
    imagem:"assets/img/mary.jpg", 
    descricao:"Mary Winston Jackson (Hampton, 9 de abril de 1921 – 11 de fevereiro de 2005) foi uma matemática e engenheira aeroespacial norte-americana. Engenheira do National Advisory Committee for Aeronautics (NACA), que se tornou a atual NASA, em 1958. Por boa parte de sua carreira, Mary trabalhou no Centro de Pesquisa Langley, em Hampton, Virgínia. Começou como computadora na divisão West Area Computers, uma área segregada do complexo, em 1951. Em 1958, após frequentar as aulas de engenharia, tornou-se a primeira mulher negra engenheira da NASA.", 
    link:"https://www.youtube.com/watch?v=MsgAKQX4eO8", 
    informacao:"https://pt.wikipedia.org/wiki/Mary_Jackson",
},
]
