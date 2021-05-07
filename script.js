// ----------------------DATABASE
const gr = [
  (preud = {
    name: "Preud'homme",
    season: "1994-1999",
    games: "199",
    goals: "0",
    power: 93,
    photo_url:
      "https://static-img.zz.pt/jogadores/78/12978_20201231172126_michel_preud_homme.png",
  }),
  (bento = {
    name: "Bento",
    season: "1972-1990",
    games: "465",
    goals: "0",
    power: 95,
    photo_url:
      "https://www.zerozero.pt/img/jogadores/24/670724_med__20200503142341_manuel_bento.jpg",
  }),
  (roberto = {
    name: "Roberto",
    season: "2010-2011",
    games: "41",
    goals: "0",
    power: 25,
    photo_url:
      "https://static-img.zz.pt/jogadores/65/23565_20201007151438_roberto_jimenez_.png",
  }),
  (ody = {
    name: "Odysseas Vlachodimos",
    season: "2018-2021",
    games: "119",
    goals: "0",
    power: 78,
    photo_url:
      "https://static-img.zz.pt/jogadores/06/197106_20200825231808_odysseas_vlachodimos.png",
  }),
  (varela = {
    name: "Bruno Varela",
    season: "2011-2019",
    games: "35",
    goals: "0",
    power: 60,
    photo_url: "https://static-img.zz.pt/jogadores/38/74938_bruno_varela.jpg",
  }),
  (paulolopes = {
    name: "Paulo Lopes",
    season: "1996-2002 2012-2018",
    games: "11",
    goals: "0",
    power: 62,
    photo_url:
      "https://static-img.zz.pt/jogadores/20/9020_20210424030159_paulo_lopes.png",
  }),
  (juliocesar = {
    name: "Júlio César",
    season: "2014-2018",
    games: "83",
    goals: "0",
    power: 83,
    photo_url:
      "https://static-img.zz.pt/jogadores/71/5271_20210330155207_julio_cesar.png",
  }),
  (ederson = {
    name: "Ederson",
    season: "2015-2017",
    games: "58",
    goals: "0",
    power: 86,
    photo_url:
      "https://static-img.zz.pt/jogadores/85/136885_20200925213720_ederson_moraes.png",
  }),
  (artur = {
    name: "Artur Moraes",
    season: "2011-2015",
    games: "144",
    goals: "0",
    power: 70,
    photo_url:
      "https://static-img.zz.pt/jogadores/98/5298_20181010220041_artur_moraes.jpg",
  }),
  (oblak = {
    name: "Jan Oblak",
    season: "2013-2014",
    games: "26",
    goals: "0",
    power: 89,
    photo_url:
      "https://static-img.zz.pt/jogadores/60/112460_20201002203706_jan_oblak.png",
  }),
  (moreira = {
    name: "Moreira",
    season: "1999-2011",
    games: "148",
    goals: "0",
    power: 71,
    photo_url:
      "https://static-img.zz.pt/jogadores/45/45_20190915140119_moreira.jpg",
  }),
  (moretto = {
    name: "Moretto",
    season: "2005-2010",
    games: "29",
    goals: "0",
    power: 67,
    photo_url:
      "https://static-img.zz.pt/jogadores/56/14156_20190915135621_marcelo_moretto.jpg",
  }),
  (quim = {
    name: "Quim",
    season: "2004-2010",
    games: "184",
    goals: "0",
    power: 77,
    photo_url:
      "https://static-img.zz.pt/jogadores/51/251_20201113175149_quim.jpg",
  }),
  (butt = {
    name: "Hans-Jörg Butt",
    season: "2007-2008",
    games: "7",
    goals: "0",
    power: 54,
    photo_url: "https://static-img.zz.pt/jogadores/02/3202_hans_jorg_butt.jpg",
  }),
  (ruinereu = {
    name: "Rui Nereu",
    season: "2004-2007",
    games: "7",
    goals: "0",
    power: 27,
    photo_url:
      "http://1.bp.blogspot.com/_AQ6G152jKNk/TRHhN_rOA-I/AAAAAAAAACs/jaTM6qS3y5s/s1600/nereu.jpg",
  }),
  (bossio = {
    name: "Carlos Bossio",
    season: "1999-2004",
    games: "23",
    goals: "0",
    power: 23,
    photo_url:
      "https://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/5e37f9710cf2f02ca42d5fa6/190",
  }),
  (enke = {
    name: "Robert Enke",
    season: "1999-2002",
    games: "93",
    goals: "0",
    power: 76,
    photo_url:
      "https://static-img.zz.pt/jogadores/77/2477_20210424012324_robert_enke.png",
  }),
];

const de = [
  (coentrao = {
    name: "Fábio Coentrão",
    season: "2007-2011",
    games: "97",
    goals: "8",
    power: 80,
    photo_url:
      "https://ohomeminvisivel.com/wp-content/uploads/2015/06/fabio-coentrao.jpg",
  }),
  (cortez = {
    name: "Bruno Cortez",
    season: "2013-2014",
    games: "7",
    goals: "0",
    power: 22,
    photo_url:
      "https://static-img.zz.pt/jogadores/34/716734__20201026152812_bruno_cortez.png",
  }),
  (leo = {
    name: "Léo",
    season: "2005-2008",
    games: "127",
    goals: "2",
    power: 78,
    photo_url:
      "https://serbenfiquista.com/sites/default/files/styles/large/public/10725696_orvvf3npxr.jpeg?itok=UDSVWMyq",
  }),
  (grimaldo = {
    name: "Grimaldo",
    season: "2015-2021",
    games: "195",
    goals: "13",
    power: 82,
    photo_url:
      "https://static-img.zz.pt/jogadores/79/214579_20200825225554_alex_grimaldo.png",
  }),
  (eliseu = {
    name: "Eliseu",
    season: "2014-2018",
    games: "109",
    goals: "4",
    power: 74,
    photo_url:
      "https://www.bolanarede.pt/wp-content/uploads/2017/01/eliseu.jpg",
  }),
  (siqueira = {
    name: "Siqueira",
    season: "2013-2014",
    games: "33",
    goals: "1",
    power: 79,
    photo_url:
      "https://static-img.zz.pt/jogadores/00/26500_20161011014941_guilherme_siqueira.jpg",
  }),
  (melgarejo = {
    name: "Melgarejo",
    season: "2013-2014",
    games: "40",
    goals: "2",
    power: 76,
    photo_url:
      "https://static-img.zz.pt/jogadores/11/89711_20200728132123_lorenzo_melgarejo.png",
  }),
  (emerson = {
    name: "Émerson",
    season: "2011-2012",
    games: "39",
    goals: "0",
    power: 19,
    photo_url:
      "https://static-img.zz.pt/jogadores/51/31151_20180302213946_emerson_conceicao.png",
  }),
  (capdevila = {
    name: "Capdevila",
    season: "2011-2012",
    games: "12",
    goals: "0",
    power: 55,
    photo_url:
      "https://www.zerozero.pt/img/jogadores/57/320057_med__20160219113843_joan_capdevila.png",
  }),
  (cesarpeixoto = {
    name: "César Peixoto",
    season: "2009-2011",
    games: "65",
    goals: "1",
    power: 65,
    photo_url:
      "https://serbenfiquista.com/sites/default/files/styles/large/public/10106jujsx.jpg?itok=UgYVQSZG",
  }),
  (dimas = {
    name: "Dimas",
    season: "1994-1997",
    games: "99",
    goals: "5",
    power: 82,
    photo_url:
      "https://static-img.zz.pt/jogadores/81/12981_20210424162438_dimas.png",
  }),
  (pesaresi = {
    name: "Emanuele Pesaresi",
    season: "2001-2002",
    games: "12",
    goals: "0",
    power: 16,
    photo_url:
      "https://serbenfiquista.com/sites/default/files/styles/large/public/pesaresisiuuo.jpg?itok=b69AoDDK",
  }),
];

const dd = [
  (maxi = {
    name: "Maxi Pereira",
    season: "2007-2015",
    games: "333",
    goals: "21",
    power: 77,
    photo_url:
      "https://static-img.zz.pt/jogadores/64/34664_20200416221611_maxi_pereira.jpg",
  }),
  (veloso = {
    name: "António Veloso",
    season: "1980-1995",
    games: "535",
    goals: "8",
    power: 88,
    photo_url: "https://static-img.zz.pt/jogadores/85/11685_antonio_veloso.jpg",
  }),
  (nelsonsemedo = {
    name: "Nélson Semedo",
    season: "2013-2017",
    games: "65",
    goals: "3",
    power: 82,
    photo_url:
      "https://1.bp.blogspot.com/--lbLNDOj5Bk/WO5Ewa-rZ1I/AAAAAAAAHaY/UThj4Xo3kPIV6EtmMgKq5fX3D6Vhlpn_QCLcB/s1600/semedo_17.jpg",
  }),
  (aalmeida = {
    name: "André Almeida",
    season: "2011-2021",
    games: "282",
    goals: "10",
    power: 78,
    photo_url:
      "https://static-img.zz.pt/jogadores/77/74377_20200825192715_andre_almeida.png",
  }),
  (silvio = {
    name: "Sílvio",
    season: "2013-2016",
    games: "39",
    goals: "0",
    power: 70,
    photo_url: "https://static-img.zz.pt/jogadores/19/69219_silvio.jpg",
  }),
  (rubenamorim = {
    name: "Rúben Amorim",
    season: "2008-2015",
    games: "154",
    goals: "6",
    power: 76,
    photo_url:
      "https://static-img.zz.pt/jogadores/03/1803_20200304120707_ruben_amorim.png",
  }),
  (jorgeribeiro = {
    name: "Jorge Ribeiro",
    season: "1999-2002 2008-2010",
    games: "28",
    goals: "2",
    power: 55,
    photo_url: "https://s.hs-data.com/bilder/spieler/gross/21439.jpg",
  }),
  (nelson = {
    name: "Nélson",
    season: "2005-2008",
    games: "107",
    goals: "1",
    power: 71,
    photo_url:
      "https://static-img.zz.pt/jogadores/48/6848_20210328024001_nelson.png",
  }),
  (miguel = {
    name: "Miguel",
    season: "2000-2005",
    games: "161",
    goals: "13",
    power: 74,
    photo_url:
      "https://static-img.zz.pt/jogadores/68/68_20210328044409_miguel.png",
  }),
  (armando = {
    name: "Armando Sá",
    season: "2001-2004",
    games: "56",
    goals: "1",
    power: 67,
    photo_url:
      "https://static-img.zz.pt/jogadores/48/48_20210424022210_armando_sa.png",
  }),
  (abelxavier = {
    name: "Abel Xavier",
    season: "1993-1995",
    games: "65",
    goals: "5",
    power: 82,
    photo_url:
      "https://static-img.zz.pt/jogadores/42/2742_20210418000925_abel_xavier.png",
  }),
  (dudic = {
    name: "Ivan Dudic",
    season: "2000-2001",
    games: "24",
    goals: "0",
    power: 34,
    photo_url:
      "https://static-img.zz.pt/jogadores/23/34023_20210105120623_ivan_dudic.png",
  }),
];

const dc = [
  (luisao = {
    name: "Luisão",
    season: "2003-2019",
    games: "538",
    goals: "47",
    power: 90,
    photo_url:
      "https://img.haikudeck.com/mi/846a9327feffdf3f47dcc09a64ad79b9.jpeg",
  }),
  (humberto = {
    name: "Humberto Coelho",
    season: "1968-1975 1977-1984",
    games: "496",
    goals: "77",
    power: 94,
    photo_url:
      "https://static-img.zz.pt/jogadores/18/11718_20210423201528_humberto_coelho.png",
  }),
  (rubendias = {
    name: "Rúben Dias",
    season: "2008-2020",
    games: "137",
    goals: "13",
    power: 85,
    photo_url:
      "https://m.footballdatabase.eu/images/photos/players/2019-2020/a_248/248295.jpg",
  }),
  (roderick = {
    name: "Roderick Miranda",
    season: "2000-2011 2012-2013",
    games: "15",
    goals: "0",
    power: 42,
    photo_url:
      "https://www.bolanarede.pt/wp-content/uploads/2017/02/roderick-miranda.jpg",
  }),
  (mozer = {
    name: "Carlos Mozer",
    season: "1987-1989 1992-1995",
    games: "159",
    goals: "14",
    power: 88,
    photo_url:
      "https://static-img.zz.pt/jogadores/87/11687_20210106011222_mozer.png",
  }),
  (ricardorocha = {
    name: "Ricardo Rocha",
    season: "2002-2006",
    games: "163",
    goals: "3",
    power: 77,
    photo_url:
      "https://static-img.zz.pt/jogadores/54/54_20210328023143_ricardo_rocha.png",
  }),
  (otamendi = {
    name: "Otamendi",
    season: "2020-2021",
    games: "33",
    goals: "1",
    power: 79,
    photo_url:
      "https://static-img.zz.pt/jogadores/88/67588_20201001141823_nicolas_otamendi.png",
  }),
  (jardel = {
    name: "Jardel",
    season: "2010-2021",
    games: "285",
    goals: "17",
    power: 76,
    photo_url:
      "https://static-img.zz.pt/jogadores/20/107220_20200825225538_jardel.png",
  }),
  (ferro = {
    name: "Ferro",
    season: "2015-2021",
    games: "65",
    goals: "4",
    power: 67,
    photo_url:
      "https://i.pinimg.com/originals/79/80/0a/79800a91f82120d6fb74761a5a120e01.png",
  }),
  (lindelof = {
    name: "Lindelof",
    season: "2012-2017",
    games: "72",
    goals: "2",
    power: 80,
    photo_url:
      "https://static-img.zz.pt/jogadores/66/184866_20200921195806_victor_lindelof.png",
  }),
  (garay = {
    name: "Garay",
    season: "2011-2014",
    games: "136",
    goals: "12",
    power: 82,
    photo_url:
      "https://ohomeminvisivel.com/wp-content/uploads/2015/11/garay.jpg",
  }),
  (davidluiz = {
    name: "David Luiz",
    season: "2006-2011",
    games: "131",
    goals: "6",
    power: 84,
    photo_url:
      "https://static-img.zz.pt/jogadores/84/31184_20210225183931_david_luiz.png",
  }),
  (zoro = {
    name: "Marco Zoro",
    season: "2007-2008",
    games: "7",
    goals: "1",
    power: 36,
    photo_url:
      "http://3.bp.blogspot.com/-mebjA4h7Kck/TeusV_wyxDI/AAAAAAAABG8/PXe_D00GooM/s1600/104302.jpg",
  }),
  (alcides = {
    name: "Alcides",
    season: "2004-2007",
    games: "34",
    goals: "0",
    power: 68,
    photo_url:
      "https://static-img.zz.pt/jogadores/42/5042_20210409004349_alcides.png",
  }),
  (anderson = {
    name: "Anderson",
    season: "2005-2007",
    games: "73",
    goals: "5",
    power: 70,
    photo_url:
      "http://2.bp.blogspot.com/-XupI0rZ8eV4/T5o3pUOZr4I/AAAAAAAAG88/9dyw2AigRhg/s1600/anderson.jpg",
  }),
  (argel = {
    name: "Argel",
    season: "2001-2005",
    games: "97",
    goals: "6",
    power: 83,
    photo_url:
      "https://static-img.zz.pt/jogadores/49/49_20210328005211_argel.png",
  }),
  (helder = {
    name: "Hélder Cristóvão",
    season: "1992-1997 2002-2004",
    games: "230",
    goals: "16",
    power: 76,
    photo_url:
      "https://static-img.zz.pt/jogadores/55/55_20210424033125_helder_cristovao.png",
  }),
  (paulomadeira = {
    name: "Paulo Madeira",
    season: "1989-1995 1997-2001",
    games: "224",
    goals: "7",
    power: 78,
    photo_url: "https://static-img.zz.pt/jogadores/65/565_paulo_madeira.jpg",
  }),
  (king = {
    name: "King",
    season: "1995-1996",
    games: "1",
    goals: "0",
    power: 8,
    photo_url:
      "https://serbenfiquista.com/sites/default/files/styles/large/public/kingvas1d.jpg?itok=6uVx-y7t",
  }),
];

const mdf = [
  (javigarcia = {
    name: "	Javi García",
    season: "2009-2012",
    games: "141",
    goals: "14",
    power: 79,
    photo_url:
      "http://www1.pictures.zimbio.com/gi/Javi+Garcia+SL+Benfica+v+Chelsea+UEFA+Champions+afRh3cXJTFdl.jpg",
  }),
  (matic = {
    name: "Nemanja Matić",
    season: "2011-2013",
    games: "99",
    goals: "9",
    power: 83,
    photo_url:
      "https://static-img.zz.pt/jogadores/30/99030_20200921194030_nemanja_matic.png",
  }),
  (beto = {
    name: "Beto",
    season: "2005-2007",
    games: "48",
    goals: "1",
    power: 55,
    photo_url: "http://photos1.blogger.com/blogger/3754/753/320/beto.jpg",
  }),
  (samaris = {
    name: "Samaris",
    season: "2014-2021",
    games: "196",
    goals: "6",
    power: 77,
    photo_url:
      "https://static-img.zz.pt/jogadores/95/132495_20200825230415_andreas_samaris.png",
  }),
  (fejsa = {
    name: "Fejsa",
    season: "2013-2020",
    games: "169",
    goals: "2",
    power: 79,
    photo_url:
      "https://static-img.zz.pt/jogadores/48/67048_20200713165625_ljubomir_fejsa.jpg",
  }),
  (witsel = {
    name: "Axel Witsel",
    season: "2011-2013",
    games: "52",
    goals: "5",
    power: 83,
    photo_url:
      "https://static-img.zz.pt/jogadores/69/34169_20210415212815_axel_witsel.png",
  }),
  (yedba = {
    name: "Yebda",
    season: "2008-2010",
    games: "34",
    goals: "2",
    power: 67,
    photo_url:
      "https://static-img.zz.pt/jogadores/22/3422_20210314022321_hassan_yebda.jpg",
  }),
  (katsouranis = {
    name: "Katsouranis",
    season: "2006-2009",
    games: "122",
    goals: "15",
    power: 76,
    photo_url:
      "https://static-img.zz.pt/jogadores/86/2686_20210324010328_kostas_katsouranis.png",
  }),
  (binya = {
    name: "Binya",
    season: "2007-2009",
    games: "39",
    goals: "0",
    power: 30,
    photo_url: "https://www.bdfutbol.com/i/j/77279.jpg",
  }),
  (petit = {
    name: "Petit",
    season: "2002-2008",
    games: "212",
    goals: "14",
    power: 81,
    photo_url:
      "https://static-img.zz.pt/jogadores/61/61_20210424163840_petit.png",
  }),
  (fernandoaguiar = {
    name: "Fernando Aguiar",
    season: "2001-2004",
    games: "45",
    goals: "3",
    power: 44,
    photo_url:
      "https://static-img.zz.pt/jogadores/14/314_20210424031023_fernando_aguiar.png",
  }),
  (tiago = {
    name: "Tiago",
    season: " 2001-2004",
    games: "89",
    goals: "25",
    power: 82,
    photo_url:
      "https://static-img.zz.pt/jogadores/62/62_20190709091602_tiago.jpg",
  }),
  (calado = {
    name: "Calado",
    season: "1995-2001",
    games: "186",
    goals: "8",
    power: 74,
    photo_url: "https://static-img.zz.pt/jogadores/79/96779_jose_calado.jpg",
  }),
  (michaelthomas = {
    name: "Michael Thomas",
    season: "1998-2000",
    games: "25",
    goals: "1",
    power: 33,
    photo_url:
      "https://i.pinimg.com/originals/43/44/0d/43440d2bfa9e878289d18e15bf68b565.jpg",
  }),
  (paulobento = {
    name: "Paulo Bento",
    season: "1994-1996",
    games: "69",
    goals: "3",
    power: 78,
    photo_url: "https://static-img.zz.pt/jogadores/91/291_paulo_bento.jpg",
  }),
  (schwarz = {
    name: "Stefan Schwarz",
    season: "1990-1994",
    games: "111",
    goals: "10",
    power: 84,
    photo_url:
      "https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=OWY2Omdfz12wCIT6gEYGJgBBIBbG7c9dgNt0hfKxDfLjh6WEo6ItKMzXGM3ymKfWvDAHwUveUOkAtKk0G1Wy1SqSfvwYrke2m4H3MQjr9nbeNCc=",
  }),
  (paulosousa = {
    name: "Paulo Sousa",
    season: "1987-1993",
    games: "112",
    goals: "2",
    power: 86,
    photo_url:
      "https://static-img.zz.pt/jogadores/86/5886_20210109041412_paulo_sousa.png",
  }),
  (coluna = {
    name: "Mário Coluna",
    season: "1954-1970",
    games: "520",
    goals: "126",
    power: 97,
    photo_url: "https://static-img.zz.pt/jogadores/49/11749_mario_coluna.png",
  }),
  (sheu = {
    name: "Shéu",
    season: "1972-1989",
    games: "489",
    goals: "45",
    power: 86,
    photo_url: "https://static-img.zz.pt/jogadores/93/11693_sheu.jpg",
  }),
];

const mo = [
  (ruicosta = {
    name: "Rui Costa",
    season: "1991-1994 2006-2008",
    games: "178",
    goals: "28",
    power: 93,
    photo_url:
      "https://static-img.zz.pt/jogadores/53/1953_20201226223232_rui_costa.png",
  }),
  (aimar = {
    name: "Pablo Aimar",
    season: "2008-2013",
    games: "179",
    goals: "17",
    power: 86,
    photo_url:
      "https://static-img.zz.pt/jogadores/93/1093_20201226230118_pablo_aimar.png",
  }),
  (robert = {
    name: "Laurent Robert",
    season: "2005-2006",
    games: "20",
    goals: "3",
    power: 34,
    photo_url:
      "https://static-img.zz.pt/jogadores/57/1657_20210327155736_laurent_robert.png",
  }),
  (taarabt = {
    name: "Taarabt",
    season: "2015-2021",
    games: "83",
    goals: "1",
    power: 77,
    photo_url:
      "https://static-img.zz.pt/jogadores/72/29772_20200825231019_adel_taarabt.png",
  }),
  (pizzi = {
    name: "Pizzi",
    season: "2014-2021",
    games: "324",
    goals: "90",
    power: 80,
    photo_url:
      "https://static-img.zz.pt/jogadores/04/51004_20200825230258_pizzi.png",
  }),
  (talisca = {
    name: "Talisca",
    season: "2014-2016",
    games: "78",
    goals: "20",
    power: 75,
    photo_url:
      "https://sortitoutsi.net/uploads/images/7y1Lc1g5qWvXRZ2hG5WXo3HSaj3njAYB.jpg",
  }),
  (renato = {
    name: "Renato Sanches",
    season: "2014-2016",
    games: "35",
    goals: "2",
    power: 78,
    photo_url:
      "https://tmssl.akamaized.net/images/portrait/originals/258027-1502276477.jpg",
  }),
  (enzo = {
    name: "Enzo Perez",
    season: "2011-2015",
    games: "117",
    goals: "10",
    power: 82,
    photo_url:
      "https://static-img.zz.pt/jogadores/13/37113_20210220203338_enzo_perez.png",
  }),
  (carlosmartins = {
    name: "Carlos Martins",
    season: "2008-2014",
    games: "133",
    goals: "11",
    power: 75,
    photo_url:
      "https://static-img.zz.pt/jogadores/92/292_20201226224617_carlos_martins.png",
  }),
  (nunoassis = {
    name: "Nuno Assis",
    season: "2004-2009",
    games: "83",
    goals: "6",
    power: 70,
    photo_url:
      "https://static-img.zz.pt/jogadores/71/371_20210328030509_nuno_assis.png",
  }),
  (karagounis = {
    name: "Karagounis",
    season: "2005-2007",
    games: "67",
    goals: "3",
    power: 73,
    photo_url:
      "https://static-img.zz.pt/jogadores/25/2025_20210323001130_georgios_karagounis.png",
  }),
  (karyaka = {
    name: "Karyaka",
    season: "2005-2007",
    games: "17",
    goals: "3",
    power: 54,
    photo_url:
      "https://imagens.publico.pt/imagens.aspx/218453?tp=UH&db=IMAGENS&type=JPG&w=320&act=resize",
  }),
  (manuelfernandes = {
    name: "Manuel Fernandes",
    season: "2003-2006",
    games: "97",
    goals: "4",
    power: 71,
    photo_url:
      "https://serbenfiquista.com/sites/default/files/styles/large/public/gettyimages-660841610-1024x1024.jpg?itok=N3SPMuCT",
  }),
  (zahovic = {
    name: "Zahovic",
    season: "2001-2005",
    games: "102",
    goals: "20",
    power: 82,
    photo_url: "https://www.foradejogo.net/images/players/197102010001/255.jpg",
  }),
  (joaopinto = {
    name: "João Vieira Pinto",
    season: "1992-2000",
    games: "302",
    goals: "90",
    power: 92,
    photo_url:
      "https://static-img.zz.pt/jogadores/99/299_20210105230951_joao_vieira_pinto.png",
  }),
  (valdo = {
    name: "Valdo",
    season: "1988-1991 1995-1997",
    games: "183",
    goals: "29",
    power: 84,
    photo_url:
      "https://i.pinimg.com/originals/6e/df/4f/6edf4fa97fbaf64441b0039ca94ef160.jpg",
  }),
];

const me = [
  (chalana = {
    name: "Chalana",
    season: "1975-1976 1983-1990",
    games: "311",
    goals: "48",
    power: 94,
    photo_url:
      "https://static-img.zz.pt/jogadores/24/11724_20210423201109_chalana.png",
  }),
  (dimaria = {
    name: "Di Maria",
    season: "2007-2010",
    games: "124",
    goals: "15",
    power: 86,
    photo_url:
      "https://static-img.zz.pt/jogadores/83/37283_20200918005959_angel_di_maria.jpg",
  }),
  (adu = {
    name: "Freddy Adu",
    season: "2007-2008",
    games: "21",
    goals: "5",
    power: 52,
    photo_url:
      "https://static-img.zz.pt/jogadores/53/3153_20200116133435_freddy_adu.jpg",
  }),
  (olajohn = {
    name: "Ola John",
    season: "2012-2016",
    games: "90",
    goals: "9",
    power: 62,
    photo_url:
      "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQaOh3QR34jZOsB3o_WGazvsflryBc2urKR3vf0AaAg7z85dkx6Ihyf3sufj25J",
  }),
  (cervi = {
    name: "Franco Cervi",
    season: "2016-2021",
    games: "170",
    goals: "21",
    power: 73,
    photo_url:
      "https://static-img.zz.pt/jogadores/31/424231_20200825192734_franco_cervi.png",
  }),
  (gaitan = {
    name: "Nico Gaitán",
    season: "2010-2016",
    games: "253",
    goals: "41",
    power: 81,
    photo_url:
      "https://img.a.transfermarkt.technology/portrait/header/75442-1554742365.jpg?lm=1",
  }),
  (brunocesar = {
    name: "Bruno César",
    season: "2011-2013",
    games: "60",
    goals: "13",
    power: 73,
    photo_url:
      "https://serbenfiquista.com/sites/default/files/styles/large/public/brunocsar1utsk8.jpg?itok=oBT1q1SN",
  }),
  (nolito = {
    name: "Nolito",
    season: "2011-2013",
    games: "63",
    goals: "16",
    power: 75,
    photo_url: "https://www.zerozero.pt/img/geral/79785_med_.jpg.jpg",
  }),
  (balboa = {
    name: "Javier Balboa",
    season: "2008-2009",
    games: "17",
    goals: "0",
    power: 12,
    photo_url:
      "https://e00-marca.uecdn.es/imagenes/2010/01/29/futbol/2adivision/1264798384_0.jpg",
  }),
  (cristian = {
    name: "Cristián Rodríguez",
    season: "2007-2008",
    games: "36",
    goals: "7",
    power: 69,
    photo_url:
      "https://www.football-pictures.net/data/media/192/Cristian-Rodriguez-benfica.jpg",
  }),
  (sabry = {
    name: "Sabry",
    season: "1999-2002",
    games: "42",
    goals: "9",
    power: 81,
    photo_url:
      "https://i.pinimg.com/originals/f9/4e/36/f94e3617890d4cfa427197546ac7efdf.jpg",
  }),
  (futre = {
    name: "Paulo Futre",
    season: "1992-1993",
    games: "13",
    goals: "5",
    power: 89,
    photo_url:
      "https://i.pinimg.com/originals/5f/40/04/5f4004474d97151f3b546e25881a1dd5.jpg",
  }),
];

const md = [
  (manu = {
    name: "Manú",
    season: "2006-2007",
    games: "17",
    goals: "0",
    power: 42,
    photo_url:
      "https://static-img.zz.pt/jogadores/68/670668__20200503034207_manu.jpg",
  }),
  (salvio = {
    name: "Eduardo Salvio",
    season: "2010-2011 2012-2019",
    games: "266",
    goals: "56",
    power: 81,
    photo_url:
      "https://static-img.zz.pt/jogadores/15/75015_20191229190542_eduardo_salvio.jpg",
  }),
  (diamantino = {
    name: "Diamantino",
    season: "1977-1980 1982-1990",
    games: "309",
    goals: "85",
    power: 86,
    photo_url:
      "https://static-img.zz.pt/jogadores/23/11723_20201215012117_diamantino.jpg",
  }),
  (rafa = {
    name: "Rafa",
    season: "2016-2021",
    games: "178",
    goals: "46",
    power: 82,
    photo_url:
      "https://static-img.zz.pt/jogadores/61/261061_20200825230315_rafa_silva.png",
  }),
  (zivkovic = {
    name: "Zivkovic",
    season: "2016-2020",
    games: "88",
    goals: "4",
    power: 65,
    photo_url:
      "https://static-img.zz.pt/jogadores/62/340062_20201102142112_andrija_zivkovic.png",
  }),
  (carrillo = {
    name: "André Carrillo",
    season: "2016-2018",
    games: "32",
    goals: "3",
    power: 70,
    photo_url:
      "https://i.pinimg.com/originals/de/95/4e/de954ec8e23edc6e9f90d2d60739fcd9.png",
  }),
  (guedes = {
    name: "Gonçalo Guedes",
    season: "2012-2017",
    games: "68",
    goals: "11",
    power: 75,
    photo_url:
      "https://static-img.zz.pt/jogadores/38/143938_20200928022845_goncalo_guedes.png",
  }),
  (bebe = {
    name: "Bebé",
    season: "2014-2015",
    games: "6",
    goals: "0",
    power: 37,
    photo_url:
      "https://static-img.zz.pt/jogadores/31/99231_20200204151837_bebe.jpg",
  }),
  (markovic = {
    name: "Markovic",
    season: "2013-2014",
    games: "49",
    goals: "7",
    power: 73,
    photo_url:
      "https://static-img.zz.pt/jogadores/23/197623_20191021150748_lazar_markovic.jpg",
  }),
  (djalo = {
    name: "Yannick Djaló",
    season: "2011-2012",
    games: "5",
    goals: "0",
    power: 24,
    photo_url:
      "https://static-img.zz.pt/jogadores/46/670346__20200501151959_yannick_djalo.jpg",
  }),
  (ramires = {
    name: "Ramires",
    season: "2009-2010",
    games: "42",
    goals: "5",
    power: 79,
    photo_url:
      "https://static-img.zz.pt/jogadores/83/34483_20210331201617_ramires.png",
  }),
  (reyes = {
    name: "Antonio Reyes",
    season: "2008-2009",
    games: "35",
    goals: "6",
    power: 81,
    photo_url:
      "https://static-img.zz.pt/jogadores/70/1070_20190601234746_jose_antonio_reyes.jpg",
  }),
  (simao = {
    name: "Simão Sabrosa",
    season: "2001-2007",
    games: "230",
    goals: "34",
    power: 84,
    photo_url:
      "https://benficapower.files.wordpress.com/2012/05/simao-sabrosa-benfica.jpg",
  }),
  (geovanni = {
    name: "Geovanni",
    season: "2002-2006",
    games: "131",
    goals: "23",
    power: 78,
    photo_url:
      "https://static-img.zz.pt/jogadores/83/483_20210328021403_geovanni.png",
  }),
  (poborsky = {
    name: "Karel Poborsky",
    season: "1997-2001",
    games: "112",
    goals: "17",
    power: 86,
    photo_url:
      "https://static-img.zz.pt/jogadores/71/2971_20210107223437_karel_poborsky.png",
  }),
  (paneira = {
    name: "Vítor Paneira",
    season: "1987-1995",
    games: "289",
    goals: "44",
    power: 84,
    photo_url: "https://static-img.zz.pt/jogadores/22/30622_vitor_paneira.jpg",
  }),
];

const pl = [
  (cardozo = {
    name: "Óscar Cardozo",
    season: "2007-2014",
    games: "293",
    goals: "172",
    power: 91,
    photo_url:
      "https://www.zerozero.pt/img/jogadores/06/734606_med__20201221212011_oscar_cardozo.jpg",
  }),
  (eusebio = {
    name: "Eusébio",
    season: "1960-1975",
    games: "440",
    goals: "471",
    power: 105,
    photo_url:
      "https://lh3.googleusercontent.com/-gMYvio3hLvs/Usw6f5Y7otI/AAAAAAAAQOc/GOGoBosNe3A/king.png?imgmax=350",
  }),
  (kikin = {
    name: "Kikin Fonseca",
    season: "2006-2007",
    games: "13",
    goals: "3",
    power: 33,
    photo_url:
      "https://static-img.zz.pt/jogadores/84/16184_20200317102122_kikin_fonseca.jpg",
  }),
  (bergessio = {
    name: "Gonzalo Bergessio",
    season: "2007-2008",
    games: "9",
    goals: "0",
    power: 17,
    photo_url:
      "https://ugc.kn3.net/i/760x/http://3.bp.blogspot.com/_EEQxSBIXW0Q/R4uwGmB_FPI/AAAAAAAAAAs/BY5usd_0Vug/s320/Lavandina.jpg",
  }),
  (makukula = {
    name: "Makukula",
    season: "2007-2008",
    games: "9",
    goals: "2",
    power: 34,
    photo_url:
      "https://static-img.zz.pt/jogadores/22/1122_20180213140209_ariza_makukula.jpg",
  }),
  (saviola = {
    name: "Saviola",
    season: "2009-2012",
    games: "121",
    goals: "39",
    power: 83,
    photo_url:
      "https://static-img.zz.pt/jogadores/73/773_20190308222256_javier_saviola.jpg",
  }),
  (seferovic = {
    name: "Seferovic",
    season: "2017-2021",
    games: "167",
    goals: "65",
    power: 78,
    photo_url:
      "https://static-img.zz.pt/jogadores/79/102379_20200825230438_haris_seferovic.png",
  }),
  (vinicius = {
    name: "Vinícius",
    season: "2019-2021",
    games: "49",
    goals: "24",
    power: 79,
    photo_url:
      "https://static-img.zz.pt/jogadores/81/520581_20201002120326_carlos_vinicius.png",
  }),
  (jonas = {
    name: "Jonas",
    season: "2014-2019",
    games: "183",
    goals: "137",
    power: 87,
    photo_url:
      "https://static-img.zz.pt/jogadores/21/32221_20190712001307_jonas.jpg",
  }),
  (ferreyra = {
    name: "Ferreyra",
    season: "2018-2020",
    games: "12",
    goals: "1",
    power: 63,
    photo_url:
      "https://static-img.zz.pt/jogadores/73/80173_20210201211329_facundo_ferreyra.png",
  }),
  (felix = {
    name: "João Félix",
    season: "2016-2019",
    games: "43",
    goals: "20",
    power: 84,
    photo_url:
      "https://static-img.zz.pt/jogadores/12/284412_20201002194038_joao_felix.png",
  }),
  (jimenez = {
    name: "Raúl Jiménez",
    season: "2015-2018",
    games: "120",
    goals: "31",
    power: 76,
    photo_url:
      "https://static-img.zz.pt/jogadores/84/220684_20200921193101_raul_jimenez.png",
  }),
  (mitroglou = {
    name: "Mitroglou",
    season: "2015-2017",
    games: "88",
    goals: "52",
    power: 78,
    photo_url:
      "https://i.pinimg.com/originals/4c/dc/1a/4cdc1abd007b82447ef0a03fe8c88ae5.jpg",
  }),
  (lima = {
    name: "Lima",
    season: "2012-2015",
    games: "144",
    goals: "70",
    power: 81,
    photo_url:
      "https://static-img.zz.pt/jogadores/42/32542_20190112192508_lima.jpg",
  }),
  (jara = {
    name: "Franco Jara",
    season: "2010-2015",
    games: "47",
    goals: "11",
    power: 68,
    photo_url: "https://img.vavel.com/b/jara_lo.png",
  }),
  (rodrigo = {
    name: "Rodrigo",
    season: "2011-2014",
    games: "120",
    goals: "45",
    power: 78,
    photo_url:
      "https://static-img.zz.pt/jogadores/62/126962_20200922121539_rodrigo_moreno.png",
  }),
  (mantorras = {
    name: "Mantorras",
    season: "2001-2011",
    games: "129",
    goals: "31",
    power: 72,
    photo_url:
      "https://static-img.zz.pt/jogadores/62/672762__20200513091011_pedro_mantorras.png",
  }),
  (nunogomes = {
    name: "Nuno Gomes",
    season: "1997-2011",
    games: "399",
    goals: "166",
    power: 80,
    photo_url:
      "https://static-img.zz.pt/jogadores/67/67_20210328024941_nuno_gomes.png",
  }),
  (suazo = {
    name: "David Suazo",
    season: "2008-2009",
    games: "22",
    goals: "5",
    power: 68,
    photo_url:
      "https://static-img.zz.pt/jogadores/61/9161_20210204232251_david_suazo.png",
  }),
  (manduca = {
    name: "Manduca",
    season: "2005-2007",
    games: "19",
    goals: "1",
    power: 43,
    photo_url:
      "https://static-img.zz.pt/jogadores/14/614_20180224154617_gustavo_manduca.jpg",
  }),
  (miccoli = {
    name: "Miccoli",
    season: "2005-2007",
    games: "56",
    goals: "19",
    power: 85,
    photo_url:
      "https://static-img.zz.pt/jogadores/87/1987_20210409011131_fabrizio_miccoli.png",
  }),
  (derlei = {
    name: "Derlei",
    season: "2006-2007",
    games: "18",
    goals: "1",
    power: 46,
    photo_url:
      "https://i.pinimg.com/originals/30/75/66/307566e4512b578c7f17073d0df6e9dd.jpg",
  }),
  (karadas = {
    name: "Azar Karadas",
    season: "2004-2005",
    games: "36",
    goals: "6",
    power: 64,
    photo_url:
      "https://serbenfiquista.com/sites/default/files/styles/large/public/karadas2gluru.jpg?itok=ngib_opI",
  }),
  (sokota = {
    name: "Sokota",
    season: "2001-2005",
    games: "79",
    goals: "28",
    power: 71,
    photo_url:
      "https://static-img.zz.pt/jogadores/69/69_20210324005407_tomo_sokota.png",
  }),
  (drulovic = {
    name: "Drulovic",
    season: "2001-2003",
    games: "54",
    goals: "6",
    power: 67,
    photo_url:
      "https://static-img.zz.pt/jogadores/63/63_20210108142814_ljubinko_drulovic.png",
  }),
  (hooijdonk = {
    name: "Pierre van Hooijdonk",
    season: "2000-2001",
    games: "35",
    goals: "23",
    power: 79,
    photo_url:
      "https://static-img.zz.pt/jogadores/85/5885_20210308141609_pierre_van_hooijdonk.png",
  }),
  (pringle = {
    name: "Martin Pringle",
    season: "1996-1999",
    games: "55",
    goals: "8",
    power: 44,
    photo_url:
      "https://aoutravisao.files.wordpress.com/2010/04/pringle3.jpg?w=584",
  }),
  (caniggia = {
    name: "Caniggia",
    season: "1994-1995",
    games: "34",
    goals: "16",
    power: 86,
    photo_url:
      "https://i.pinimg.com/originals/8d/c9/18/8dc918957b475538aedffac0344e7c00.jpg",
  }),
  (isaias = {
    name: "Isaías",
    season: "1990-1995",
    games: "178",
    goals: "71",
    power: 85,
    photo_url:
      "http://3.bp.blogspot.com/_7tsmgYAv2ao/R078FVMBc9I/AAAAAAAAFrM/6wpuFu__4vg/s320/94+95+Benfica+2.jpg",
  }),
  (ruiaguas = {
    name: "Rui Águas",
    season: "1985-1988 1990-1994",
    games: "237",
    goals: "105",
    power: 83,
    photo_url:
      "https://static-img.zz.pt/jogadores/96/11696_20210423204418_rui_aguas.png",
  }),
  (magnusson = {
    name: "Mats Magnusson",
    season: "1987-1992",
    games: "163",
    goals: "87",
    power: 88,
    photo_url:
      "https://static-img.zz.pt/jogadores/95/11695_20201228180450_mats_magnusson.png",
  }),
  (pipi = {
    name: "Rogério Pipi",
    season: "1942-1954",
    games: "306",
    goals: "204",
    power: 98,
    photo_url: "https://static-img.zz.pt/jogadores/08/171908_rogerio_pipi.png",
  }),
  (joseaguas = {
    name: "José Águas",
    season: "1950-1963",
    games: "379",
    goals: "378",
    power: 100,
    photo_url: "https://static-img.zz.pt/jogadores/48/11748_jose_aguas.jpg",
  }),
  (josetorres = {
    name: "José Torres",
    season: "1959-1971",
    games: "258",
    goals: "229",
    power: 92,
    photo_url:
      "https://static-img.zz.pt/jogadores/90/11790_20210131051231_jose_torres.png",
  }),
];

//----------------------END DATABASE

const btnStart = document.querySelector(".btn-start");
const btnEnd = document.querySelector(".btn-end");
const btnPlayer1 = document.querySelector(".player-1");
const btnPlayer2 = document.querySelector(".player-2");
const pickInterface = document.querySelector(".pick");
const highScore = document.querySelector(".high-score");
const scoreStars = document.querySelector(".score-stars");
const scoreNumber = document.querySelector(".score-number");
const finalScore = document.querySelector(".final-score");

const grPlayer = document.querySelector(".gr");
const ddPlayer = document.querySelector(".dd");
const dePlayer = document.querySelector(".de");
const dcdPlayer = document.querySelector(".dcd");
const dcePlayer = document.querySelector(".dce");
const mdfPlayer = document.querySelector(".mdf");
const moPlayer = document.querySelector(".mo");
const mePlayer = document.querySelector(".me");
const mdPlayer = document.querySelector(".md");
const plePlayer = document.querySelector(".ple");
const pldPlayer = document.querySelector(".pld");

const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const player1Name = document.querySelector(".player1name");
const player2Name = document.querySelector(".player2name");
const player1Seasons = document.querySelector(".player1seasons");
const player2Seasons = document.querySelector(".player2seasons");
const player1Games = document.querySelector(".player1games");
const player2Games = document.querySelector(".player2games");
const player1Goals = document.querySelector(".player1goals");
const player2Goals = document.querySelector(".player2goals");
const player1Pic = document.querySelector(".player1pic");
const player2Pic = document.querySelector(".player2pic");

const grBtn = document.querySelector(".grbtn");
const ddBtn = document.querySelector(".ddbtn");
const deBtn = document.querySelector(".debtn");
const dcdBtn = document.querySelector(".dcdbtn");
const dceBtn = document.querySelector(".dcebtn");
const mdfBtn = document.querySelector(".mdfbtn");
const moBtn = document.querySelector(".mobtn");
const meBtn = document.querySelector(".mebtn");
const mdBtn = document.querySelector(".mdbtn");
const pldBtn = document.querySelector(".pldbtn");
const pleBtn = document.querySelector(".plebtn");

let grDone,
  ddDone,
  deDone,
  dceDone,
  dcdDone,
  mdfDone,
  moDone,
  meDone,
  mdDone,
  pleDone,
  pldDone;

let grPower,
  dePower,
  ddPower,
  dcePower,
  dcdPower,
  mdfPower,
  moPower,
  mdPower,
  mePower,
  plePower,
  pldPower,
  totalPower;

let gr1,
  gr2,
  de1,
  de2,
  dd1,
  dd2,
  dc1,
  dc2,
  dc3,
  dc4,
  mdf1,
  mdf2,
  mo1,
  mo2,
  me1,
  me2,
  md1,
  md2,
  pl1,
  pl2,
  pl3,
  pl4;
const notDone = function () {
  grDone = false;
  deDone = false;
  ddDone = false;
  dceDone = false;
  dcdDone = false;
  mdfDone = false;
  moDone = false;
  (meDone = false), (mdDone = false);
  pleDone = false;
  pldDone = false;
};

const generatePlayers = function () {
  gr1 = gr[Math.floor(Math.random() * gr.length)];
  gr2 = gr[Math.floor(Math.random() * gr.length)];

  while (gr1 === gr2) {
    gr2 = gr[Math.floor(Math.random() * gr.length)];
  }

  de1 = de[Math.floor(Math.random() * de.length)];
  de2 = de[Math.floor(Math.random() * de.length)];

  while (de1 === de2) {
    de2 = de[Math.floor(Math.random() * de.length)];
  }

  dd1 = dd[Math.floor(Math.random() * dd.length)];
  dd2 = dd[Math.floor(Math.random() * dd.length)];

  while (dd1 === dd2) {
    dd2 = dd[Math.floor(Math.random() * dd.length)];
  }

  dc1 = dc[Math.floor(Math.random() * dc.length)];
  dc2 = dc[Math.floor(Math.random() * dc.length)];
  dc3 = dc[Math.floor(Math.random() * dc.length)];
  dc4 = dc[Math.floor(Math.random() * dc.length)];

  while (
    dc1 === dc2 ||
    dc1 === dc3 ||
    dc1 === dc4 ||
    dc2 === dc3 ||
    dc2 === dc4 ||
    dc3 === dc4
  ) {
    dc2 = dc[Math.floor(Math.random() * dc.length)];
    dc3 = dc[Math.floor(Math.random() * dc.length)];
    dc4 = dc[Math.floor(Math.random() * dc.length)];
  }

  mdf1 = mdf[Math.floor(Math.random() * mdf.length)];
  mdf2 = mdf[Math.floor(Math.random() * mdf.length)];

  while (mdf1 === mdf2) {
    mdf2 = mdf[Math.floor(Math.random() * mdf.length)];
  }

  mo1 = mo[Math.floor(Math.random() * mo.length)];
  mo2 = mo[Math.floor(Math.random() * mo.length)];

  while (mo1 === mo2) {
    mo2 = mo[Math.floor(Math.random() * mo.length)];
  }

  me1 = me[Math.floor(Math.random() * me.length)];
  me2 = me[Math.floor(Math.random() * me.length)];

  while (me1 === me2) {
    me2 = me[Math.floor(Math.random() * me.length)];
  }

  md1 = md[Math.floor(Math.random() * md.length)];
  md2 = md[Math.floor(Math.random() * md.length)];

  while (md1 === md2) {
    md2 = md[Math.floor(Math.random() * md.length)];
  }

  pl1 = pl[Math.floor(Math.random() * pl.length)];
  pl2 = pl[Math.floor(Math.random() * pl.length)];
  pl3 = pl[Math.floor(Math.random() * pl.length)];
  pl4 = pl[Math.floor(Math.random() * pl.length)];

  while (
    pl1 === pl2 ||
    pl1 === pl3 ||
    pl1 === pl4 ||
    pl2 === pl3 ||
    pl2 === pl4 ||
    pl3 === pl4
  ) {
    pl2 = pl[Math.floor(Math.random() * pl.length)];
    pl3 = pl[Math.floor(Math.random() * pl.length)];
    pl4 = pl[Math.floor(Math.random() * pl.length)];
  }
};

const showBtns = function () {
  grBtn.classList.remove("hidden");
  ddBtn.classList.remove("hidden");
  deBtn.classList.remove("hidden");
  dcdBtn.classList.remove("hidden");
  dceBtn.classList.remove("hidden");
  mdfBtn.classList.remove("hidden");
  moBtn.classList.remove("hidden");
  meBtn.classList.remove("hidden");
  mdBtn.classList.remove("hidden");
  pldBtn.classList.remove("hidden");
  pleBtn.classList.remove("hidden");
};

const showPick = function () {
  pickInterface.classList.remove("hidden");
  player1.classList.remove("hidden");
  player2.classList.remove("hidden");
};

const hidePick = function () {
  pickInterface.classList.add("hidden");
  player1.classList.add("hidden");
  player2.classList.add("hidden");
};

const hidePlayers = function () {
  grPlayer.classList.add("hidden");
  dePlayer.classList.add("hidden");
  ddPlayer.classList.add("hidden");
  dcePlayer.classList.add("hidden");
  dcdPlayer.classList.add("hidden");
  mdfPlayer.classList.add("hidden");
  moPlayer.classList.add("hidden");
  mePlayer.classList.add("hidden");
  mdPlayer.classList.add("hidden");
  plePlayer.classList.add("hidden");
  pldPlayer.classList.add("hidden");
};

btnStart.addEventListener("click", function () {
  showBtns();
  notDone();
  generatePlayers();
  hidePlayers();
  finalScore.classList.add("hidden");
});

grBtn.addEventListener("click", function () {
  player1Pic.src = gr1.photo_url;
  player1Name.textContent = gr1.name;
  player1Seasons.textContent = gr1.season;
  player1Games.textContent = `${gr1.games} Jogos`;
  player1Goals.textContent = `${gr1.goals} Golos`;
  player2Pic.src = gr2.photo_url;
  player2Name.textContent = gr2.name;
  player2Seasons.textContent = gr2.season;
  player2Games.textContent = `${gr2.games} Jogos`;
  player2Goals.textContent = `${gr2.goals} Golos`;
  showPick();
});

deBtn.addEventListener("click", function () {
  player1Pic.src = de1.photo_url;
  player1Name.textContent = de1.name;
  player1Seasons.textContent = de1.season;
  player1Games.textContent = `${de1.games} Jogos`;
  player1Goals.textContent = `${de1.goals} Golos`;
  player2Pic.src = de2.photo_url;
  player2Name.textContent = de2.name;
  player2Seasons.textContent = de2.season;
  player2Games.textContent = `${de2.games} Jogos`;
  player2Goals.textContent = `${de2.goals} Golos`;
  showPick();
});

ddBtn.addEventListener("click", function () {
  player1Pic.src = dd1.photo_url;
  player1Name.textContent = dd1.name;
  player1Seasons.textContent = dd1.season;
  player1Games.textContent = `${dd1.games} Jogos`;
  player1Goals.textContent = `${dd1.goals} Golos`;
  player2Pic.src = dd2.photo_url;
  player2Name.textContent = dd2.name;
  player2Seasons.textContent = dd2.season;
  player2Games.textContent = `${dd2.games} Jogos`;
  player2Goals.textContent = `${dd2.goals} Golos`;
  showPick();
});

dceBtn.addEventListener("click", function () {
  player1Pic.src = dc1.photo_url;
  player1Name.textContent = dc1.name;
  player1Seasons.textContent = dc1.season;
  player1Games.textContent = `${dc1.games} Jogos`;
  player1Goals.textContent = `${dc1.goals} Golos`;
  player2Pic.src = dc2.photo_url;
  player2Name.textContent = dc2.name;
  player2Seasons.textContent = dc2.season;
  player2Games.textContent = `${dc2.games} Jogos`;
  player2Goals.textContent = `${dc2.goals} Golos`;
  showPick();
});

dcdBtn.addEventListener("click", function () {
  player1Pic.src = dc3.photo_url;
  player1Name.textContent = dc3.name;
  player1Seasons.textContent = dc3.season;
  player1Games.textContent = `${dc3.games} Jogos`;
  player1Goals.textContent = `${dc3.goals} Golos`;
  player2Pic.src = dc4.photo_url;
  player2Name.textContent = dc4.name;
  player2Seasons.textContent = dc4.season;
  player2Games.textContent = `${dc4.games} Jogos`;
  player2Goals.textContent = `${dc4.goals} Golos`;
  showPick();
});

mdfBtn.addEventListener("click", function () {
  player1Pic.src = mdf1.photo_url;
  player1Name.textContent = mdf1.name;
  player1Seasons.textContent = mdf1.season;
  player1Games.textContent = `${mdf1.games} Jogos`;
  player1Goals.textContent = `${mdf1.goals} Golos`;
  player2Pic.src = mdf2.photo_url;
  player2Name.textContent = mdf2.name;
  player2Seasons.textContent = mdf2.season;
  player2Games.textContent = `${mdf2.games} Jogos`;
  player2Goals.textContent = `${mdf2.goals} Golos`;
  showPick();
});

moBtn.addEventListener("click", function () {
  player1Pic.src = mo1.photo_url;
  player1Name.textContent = mo1.name;
  player1Seasons.textContent = mo1.season;
  player1Games.textContent = `${mo1.games} Jogos`;
  player1Goals.textContent = `${mo1.goals} Golos`;
  player2Pic.src = mo2.photo_url;
  player2Name.textContent = mo2.name;
  player2Seasons.textContent = mo2.season;
  player2Games.textContent = `${mo2.games} Jogos`;
  player2Goals.textContent = `${mo2.goals} Golos`;
  showPick();
});

meBtn.addEventListener("click", function () {
  player1Pic.src = me1.photo_url;
  player1Name.textContent = me1.name;
  player1Seasons.textContent = me1.season;
  player1Games.textContent = `${me1.games} Jogos`;
  player1Goals.textContent = `${me1.goals} Golos`;
  player2Pic.src = me2.photo_url;
  player2Name.textContent = me2.name;
  player2Seasons.textContent = me2.season;
  player2Games.textContent = `${me2.games} Jogos`;
  player2Goals.textContent = `${me2.goals} Golos`;
  showPick();
});

mdBtn.addEventListener("click", function () {
  player1Pic.src = md1.photo_url;
  player1Name.textContent = md1.name;
  player1Seasons.textContent = md1.season;
  player1Games.textContent = `${md1.games} Jogos`;
  player1Goals.textContent = `${md1.goals} Golos`;
  player2Pic.src = md2.photo_url;
  player2Name.textContent = md2.name;
  player2Seasons.textContent = md2.season;
  player2Games.textContent = `${md2.games} Jogos`;
  player2Goals.textContent = `${md2.goals} Golos`;
  showPick();
});

pleBtn.addEventListener("click", function () {
  player1Pic.src = pl1.photo_url;
  player1Name.textContent = pl1.name;
  player1Seasons.textContent = pl1.season;
  player1Games.textContent = `${pl1.games} Jogos`;
  player1Goals.textContent = `${pl1.goals} Golos`;
  player2Pic.src = pl2.photo_url;
  player2Name.textContent = pl2.name;
  player2Seasons.textContent = pl2.season;
  player2Games.textContent = `${pl2.games} Jogos`;
  player2Goals.textContent = `${pl2.goals} Golos`;
  showPick();
});

pldBtn.addEventListener("click", function () {
  player1Pic.src = pl3.photo_url;
  player1Name.textContent = pl3.name;
  player1Seasons.textContent = pl3.season;
  player1Games.textContent = `${pl3.games} Jogos`;
  player1Goals.textContent = `${pl3.goals} Golos`;
  player2Pic.src = pl4.photo_url;
  player2Name.textContent = pl4.name;
  player2Seasons.textContent = pl4.season;
  player2Games.textContent = `${pl4.games} Jogos`;
  player2Goals.textContent = `${pl4.goals} Golos`;
  showPick();
});

btnPlayer1.addEventListener("click", function () {
  hidePick();
  if (player1Name.textContent === gr1.name) {
    grBtn.classList.add("hidden");
    grPlayer.classList.remove("hidden");
    document.querySelector(".grname").textContent = gr1.name;
    document.querySelector(".grpic").src = gr1.photo_url;
    grPower = gr1.power;
    grDone = true;
  } else if (player1Name.textContent === de1.name) {
    deBtn.classList.add("hidden");
    dePlayer.classList.remove("hidden");
    document.querySelector(".dename").textContent = de1.name;
    document.querySelector(".depic").src = de1.photo_url;
    dePower = de1.power;
    deDone = true;
  } else if (player1Name.textContent === dd1.name) {
    ddBtn.classList.add("hidden");
    ddPlayer.classList.remove("hidden");
    document.querySelector(".ddname").textContent = dd1.name;
    document.querySelector(".ddpic").src = dd1.photo_url;
    ddPower = dd1.power;
    ddDone = true;
  } else if (player1Name.textContent === dc1.name) {
    dceBtn.classList.add("hidden");
    dcePlayer.classList.remove("hidden");
    document.querySelector(".dcename").textContent = dc1.name;
    document.querySelector(".dcepic").src = dc1.photo_url;
    dcePower = dc1.power;
    dceDone = true;
  } else if (player1Name.textContent === dc3.name) {
    dcdBtn.classList.add("hidden");
    dcdPlayer.classList.remove("hidden");
    document.querySelector(".dcdname").textContent = dc3.name;
    document.querySelector(".dcdpic").src = dc3.photo_url;
    dcdPower = dc3.power;
    dcdDone = true;
  } else if (player1Name.textContent === mdf1.name) {
    mdfBtn.classList.add("hidden");
    mdfPlayer.classList.remove("hidden");
    document.querySelector(".mdfname").textContent = mdf1.name;
    document.querySelector(".mdfpic").src = mdf1.photo_url;
    mdfPower = mdf1.power;
    mdfDone = true;
  } else if (player1Name.textContent === md1.name) {
    mdBtn.classList.add("hidden");
    mdPlayer.classList.remove("hidden");
    document.querySelector(".mdname").textContent = md1.name;
    document.querySelector(".mdpic").src = md1.photo_url;
    mdPower = md1.power;
    mdDone = true;
  } else if (player1Name.textContent === me1.name) {
    meBtn.classList.add("hidden");
    mePlayer.classList.remove("hidden");
    document.querySelector(".mename").textContent = me1.name;
    document.querySelector(".mepic").src = me1.photo_url;
    mePower = me1.power;
    meDone = true;
  } else if (player1Name.textContent === mo1.name) {
    moBtn.classList.add("hidden");
    moPlayer.classList.remove("hidden");
    document.querySelector(".moname").textContent = mo1.name;
    document.querySelector(".mopic").src = mo1.photo_url;
    moPower = mo1.power;
    moDone = true;
  } else if (player1Name.textContent === pl1.name) {
    pleBtn.classList.add("hidden");
    plePlayer.classList.remove("hidden");
    document.querySelector(".plename").textContent = pl1.name;
    document.querySelector(".plepic").src = pl1.photo_url;
    plePower = pl1.power;
    pleDone = true;
  } else if (player1Name.textContent === pl3.name) {
    pldBtn.classList.add("hidden");
    pldPlayer.classList.remove("hidden");
    document.querySelector(".pldname").textContent = pl3.name;
    document.querySelector(".pldpic").src = pl3.photo_url;
    pldPower = pl3.power;
    pldDone = true;
  }
});

btnPlayer2.addEventListener("click", function () {
  hidePick();
  if (player2Name.textContent === gr2.name) {
    grBtn.classList.add("hidden");
    grPlayer.classList.remove("hidden");
    document.querySelector(".grname").textContent = gr2.name;
    document.querySelector(".grpic").src = gr2.photo_url;
    grPower = gr2.power;
    grDone = true;
  } else if (player2Name.textContent === de2.name) {
    deBtn.classList.add("hidden");
    dePlayer.classList.remove("hidden");
    document.querySelector(".dename").textContent = de2.name;
    document.querySelector(".depic").src = de2.photo_url;
    dePower = de2.power;
    deDone = true;
  } else if (player2Name.textContent === dd2.name) {
    ddBtn.classList.add("hidden");
    ddPlayer.classList.remove("hidden");
    document.querySelector(".ddname").textContent = dd2.name;
    document.querySelector(".ddpic").src = dd2.photo_url;
    ddPower = dd2.power;
    ddDone = true;
  } else if (player2Name.textContent === dc2.name) {
    dceBtn.classList.add("hidden");
    dcePlayer.classList.remove("hidden");
    document.querySelector(".dcename").textContent = dc2.name;
    document.querySelector(".dcepic").src = dc2.photo_url;
    dcePower = dc2.power;
    dceDone = true;
  } else if (player2Name.textContent === dc4.name) {
    dcdBtn.classList.add("hidden");
    dcdPlayer.classList.remove("hidden");
    document.querySelector(".dcdname").textContent = dc4.name;
    document.querySelector(".dcdpic").src = dc4.photo_url;
    dcdPower = dc4.power;
    dcdDone = true;
  } else if (player2Name.textContent === mdf2.name) {
    mdfBtn.classList.add("hidden");
    mdfPlayer.classList.remove("hidden");
    document.querySelector(".mdfname").textContent = mdf2.name;
    document.querySelector(".mdfpic").src = mdf2.photo_url;
    mdfPower = mdf2.power;
    mdfDone = true;
  } else if (player2Name.textContent === md2.name) {
    mdBtn.classList.add("hidden");
    mdPlayer.classList.remove("hidden");
    document.querySelector(".mdname").textContent = md2.name;
    document.querySelector(".mdpic").src = md2.photo_url;
    mdPower = md2.power;
    mdDone = true;
  } else if (player2Name.textContent === me2.name) {
    meBtn.classList.add("hidden");
    mePlayer.classList.remove("hidden");
    document.querySelector(".mename").textContent = me2.name;
    document.querySelector(".mepic").src = me2.photo_url;
    mePower = me2.power;
    meDone = true;
  } else if (player2Name.textContent === mo2.name) {
    moBtn.classList.add("hidden");
    moPlayer.classList.remove("hidden");
    document.querySelector(".moname").textContent = mo2.name;
    document.querySelector(".mopic").src = mo2.photo_url;
    moPower = mo2.power;
    moDone = true;
  } else if (player2Name.textContent === pl2.name) {
    pleBtn.classList.add("hidden");
    plePlayer.classList.remove("hidden");
    document.querySelector(".plename").textContent = pl2.name;
    document.querySelector(".plepic").src = pl2.photo_url;
    plePower = pl2.power;
    pleDone = true;
  } else if (player2Name.textContent === pl4.name) {
    pldBtn.classList.add("hidden");
    pldPlayer.classList.remove("hidden");
    document.querySelector(".pldname").textContent = pl4.name;
    document.querySelector(".pldpic").src = pl4.photo_url;
    pldPower = pl4.power;
    pldDone = true;
  }
});

btnEnd.addEventListener("click", function () {
  if (
    !grDone ||
    !deDone ||
    !ddDone ||
    !dceDone ||
    !dcdDone ||
    !mdfDone ||
    !moDone ||
    !meDone ||
    !mdDone ||
    !pleDone ||
    !pldDone
  ) {
    alert("ESCOLHA 11 JOGADORES");
  } else {
    totalPower = Math.round(
      (dePower +
        ddPower +
        dcePower +
        grPower +
        dcdPower +
        mdfPower +
        moPower +
        mePower +
        mdPower +
        plePower +
        pldPower) /
        11
    );
    if (totalPower > Number(highScore.textContent)) {
      highScore.textContent = totalPower;
    }
    if (totalPower <= 50) {
      finalScore.classList.remove("hidden");
      scoreStars.textContent = "⭐";
      scoreNumber.textContent = totalPower;
    } else if (totalPower <= 65) {
      finalScore.classList.remove("hidden");
      scoreStars.textContent = "⭐⭐";
      scoreNumber.textContent = totalPower;
    } else if (totalPower <= 80) {
      finalScore.classList.remove("hidden");
      scoreStars.textContent = "⭐⭐⭐";
      scoreNumber.textContent = totalPower;
    } else if (totalPower <= 90) {
      finalScore.classList.remove("hidden");
      scoreStars.textContent = "⭐⭐⭐⭐";
      scoreNumber.textContent = totalPower;
    } else if (totalPower > 88) {
      finalScore.classList.remove("hidden");
      scoreStars.textContent = "⭐⭐⭐⭐⭐";
      scoreNumber.textContent = totalPower;
    }
  }
});
