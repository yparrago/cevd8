

/*datos iniciales*/
const nna3DataInicio  = [
  {
      'miga':{'retorno':'Niños, niñas y adolescentes','url':'/ninos-ninas-y-adolescentes'},
      'titulo':'Tres generaciones en medio de la guerra',
      'etiquetas':[
        {'texto':'Reclutamiento','url':'/etiquetas/reclutamiento'},
        {'texto':'Orfandad','url':'/etiquetas/orfandad'},
        {'texto':'Infancia','url':'/etiquetas/infancia'},
        {'texto':'Violencias sexuales','url':'/etiquetas/violencias-sexuales'},        
        {'texto':'Desplazamiento','url':'/etiquetas/desplazamiento'},
        {'texto':'Exilio','url':'/etiquetas/exilio'},
        {'texto':'Reconocimiento','url':'/etiquetas/reconocimiento'},
        {'texto':'No repetición','url':'/etiquetas/no-repeticion'}        
      ],
      'texto':'La Comisión de la Verdad escuchó los testimonios de 1.559 personas que sufrieron múltiples hechos violentos durante su niñez y adolescencia. Sus experiencias son diversas, pero presentan semejanzas entre personas de la misma edad. Estas son sus historias.',
      'textom1':'La Comisión de la Verdad escuchó los testimonios de 1.559 personas que sufrieron <a id="lmas" class="lmas" data-bs-toggle="collapse" data-bs-target="#bloquemas">leer más...</a>',
      'textom2':'múltiples hechos violentos durante su niñez y adolescencia. Sus experiencias son diversas, pero presentan semejanzas entre personas de la misma edad.  Estas son sus historias..<a id="lmenos" class="lmenos" data-bs-toggle="collapse" data-bs-target="#contenedorParrafo">Cerrar</a>',
      'urlOnda':'/themes/custom/cevtheme/nna/img/nna3g-onda.png',
      'pregunta':'La historia de niños y niñas a la edad de:',
      'rango':["0-5"," 6-10","11-14","15-17","18-28"]
    },
  ]
 /*datos historias*/ 
const nna3Data  = [  
  {
      'id': 0, 'etapa': 1, 'top': 720, 'left': -160, 'topcaja': 590, 'leftcaja':-190, 'modal':178,
      'img': { 'url': '/themes/custom/cevtheme/nna/img/nna3g-n1.png',  'h': '130px' },
      'titulo':['El encuentro que nunca llegó'],
      'historia':'Jonathan no conoció a su padre, un sargento del Ejército asesinado en cautiverio por las FARC-EP. Los recuerdos que conserva los construyó a través de las pruebas de supervivencia que él enviaba.',
      'contexto':'Las niñas, niños y adolescentes se decían a sí mismos que debían ser fuertes, pues eran conscientes del doloroso efecto que causaba el secuestro en sus familias. Cuando moría el secuestrado, la incertidumbre se convertía en un duelo en medio de la impotencia de sentir que el encuentro no se haría realidad. Jonathan tuvo que construir el recuerdo de su padre, secuestrado en el Cerro de Patascoy (Nariño) desde la distancia, pues no lo conoció en vida.',
      'etiquetas':[{'texto':'Infancia', 'url':'#'},{'texto':'conflicto', 'url':'#'},{'texto': 'orfandad',  'url':'#'},{'texto':'secuestro',  'url':'#'},{'texto':'guerrilla' ,'url':'#'}],
      'transcripcion':[
        '0:16 - 0:37 Para empezar, cuando mi madre estaba en embarazo de mí, mi padre fue secuestrado. Mi padre era cabo segundo del Ejército Nacional y se encontraba custodiando unas antenas de telecomunicación en Nariño, en un cerro llamado el cerro de Patascoy...',
        '0:38 - 0:45 El 21 de diciembre del año 1997 fue bombardeado este cerro y atacado por la guerrilla de las FARC. ',
        '0:48 - 1:00 Mi padre duró cerca de 15 años de secuestro y fue asesinado por la guerrilla de las FARC el 26 de noviembre de 2011. ',
        '1:05 - 1:23 Fue algo muy duro porque desafortunadamente yo nunca pude conocer a mi padre. Nos comunicábamos a través de las pruebas de supervivencia que pocas veces le dejó enviar la guerrilla, a través de cartas, a través de videos que la guerrilla envió... ',
        '1:28 - 1:41 Trataba de contarle las cosas que yo iba realizando: como cuántos años ya tenía, en qué grado de estudio iba, lo que yo hacía por él, como las caminatas, las manifestaciones. ',
        '1:44 - 1:54 Conocer su personalidad más a fondo, no a través de lo que me contaron de cómo era él, sino conocer su esencia en sí.',
        '1:59 - 2:11 De poder abrazarlo, de poder escuchar su voz en persona, que él me diera un consejo, pues hubiera vivido la vida de un niño normal con su padre y su familia unida, completa, junta. ',
        '2:12 - 2:23 Me imagino a mi padre, no sé, dejándome en el colegio en el primer día de clases, que es lo que yo más recuerdo que es dónde yo empiezo a preguntarle a mi madre dónde está mi papá, por qué no está con nosotros. ',
        '2:25 - 2:39 Entonces el día que asesinan a mi padre esa fue mi reacción: sentirme triste, impotente, porque no supe qué fue lo que nos faltó por hacer para que la guerrilla nos pusiera atención, para que la guerrilla lo liberara… '
 
      ],   
      'basicTranscription' : `
      [00:16.00] Para empezar, cuando mi madre estaba en embarazo de mí, 
      [00:22.00] mi padre fue secuestrado.
      [00:24.00] Mi padre era cabo segundo del Ejército Nacional  
      [00:28.00] él se encontraba custodiando unas antenas de telecomunicación en Nariño, 
      [00:34.00] en un cerro llamado el cerro de Patascoy...
      [00:37.00] El 21 de diciembre del año 1997 
      [00:41.00] fue bombardeado este cerro y atacado por la guerrilla de las FARC.
      [00:49.00] Mi padre duró cerca de 15 años de secuestro
      [00:54.00] y fue asesinado por la guerrilla de las FARC el 26 de noviembre de 2011.
      [01:05.00] Fue algo muy duro porque desafortunadamente yo nunca pude conocer a mi padre. 
      [01:11.00] Nos comunicábamos a través de las pruebas de supervivencia 
      [01:16.00] que pocas veces le dejó enviar la guerrilla, 
      [01:19.00] a través de cartas, a través de videos que la guerrilla envió.
      [01:29.00] Trataba de contarle mi las cosas que yo iba realizando: como cuántos años ya tenía, 
      [01:35.00] en qué grado de estudio iba, 
      [01:38.00] lo que yo hacía por él, como las caminatas, las manifestaciones.
      [01:44.00] Conocer su personalidad más a fondo, 
      [01:49.00] no a través de lo que me contaron de cómo era él, 
      [01:53.00] sino conocer su esencia en sí.
      [01:59.00] De poder abrazarlo, de poder escuchar su voz en persona,
      [02:04.00] que él me diera un consejo, pues hubiera vivido la vida de un niño normal
      [02:09.00] con su padre y su familia completa, unida, junta.
      [02:12.00] Me imagino pues a mi padre, 
      [02:14.00] no sé, dejándome en el colegio por ejemplo en el primer día de clases, 
      [02:17.00] que es lo que yo más recuerdo que es dónde yo empiezo a preguntarle a mi madre 
      [02:20.00] dónde está mi papá, por qué no está con nosotros.
      [02:26.00] Entonces el día que lo asesinan a mi padre esa fue mi reacción 
      [02:29.00] como sentirme triste, impotente, 
      [02:32.00] porque no supe qué fue lo que nos faltó por hacer 
      [02:35.00] para que la guerrilla nos pusiera atención, para que la guerrilla lo liberara…`   
    },
    {
      'id': 1, 'etapa': 1, 'top': 760, 'left':140, 'topcaja': 640, 'leftcaja':40,'modal':179,     
      'img': { 'url': '/themes/custom/cevtheme/nna/img/nna3g-n2.png',  'h': '150px'},
      'titulo':['La lucha por la reivindicación'],
      'historia':'La madre de Diana, una mujer afrodescendiente, fue asesinada por los paramilitares, pero su cuerpo nunca apareció. ¿Qué significó crecer con esta ausencia?',
      'link':'/themes/custom/cevtheme/nna/audios/nna/nnj-tg0a5-diana.mp3',
      'contexto':'Para las niñas, niños y adolescentes de comunidades étnicas que pierden a sus familiares, los impactos se complejizan. Al ponerse en riesgo su aprendizaje cultural, la construcción de su identidad también se afecta. Es a través de los cantos, juegos y enseñanzas de los mayores y autoridades tradicionales que las nuevas generaciones reciben el saber de la comunidad. Así narra Diana estas pérdidas, que se mezclan con el dolor por el asesinato de su madre, en Putumayo, cuando ella tenía 3 meses de nacida.',
      'etiquetas':[ {'texto':'Infancia', 'url':'#'},{'texto': 'conflicto',  'url':'#'},{'texto':'orfandad',  'url':'#'},{'texto':'paramilitares' ,'url':'#'}],
      'transcripcion':[
        '0:11 - 0:33 Pero pues ahí en esa casa hay parte de esa historia y de esos recuerdos que yo tengo. Esa casa era de obra negra y tenía su sala a medio construir. Se evidenciaba que había cómo el inicio de dos habitaciones y un patio. Ese lugar era muy agradable para mi, la verdad.',
        '0:37 - 1:09 Mi mamá pues en su condición de drogadicta dormía en un costal en esa casa en obra negra. Y ella en posición de dormir le dispararon en la cabeza. Aún así, ella estaba con vida cuando fueron, hicieron levantamiento de ella, la llevaron al hospital aún con vida, pero ya no la entraron al hospital para reanimarla, porque decían que ya no había esperanza, sino que ya la llevaron directamente a la morgue para que termine de morir. ',
        '1:15 - 1.21 Después, más o menos a los 13, 14 años, me dijeron que ahí era dónde habían matado a mi mamá. ',
        '1:25 - 1:50 Según manifiestan, es el grupo que le denominaban Los Macetos, que estaban haciendo limpieza en Puerto Asís. Y que había una directriz de matar a todos los drogadictos y a todas las personas que consumían droga. Y en ese día que asesinaron a mi mamá, no solo asesinaron a mi mamá, sino a muchas personas que consumían vicio. ',
        '1:53 - 2:09 No se sabe ni cómo está enterrada, dónde está enterrada, porque fue enterrada como NN, en un tiempo donde, el día que ella murió ‘hubieron’ muchos muertos en el municipio. ',
        '2:11 - 2:33 Conté con la facilidad de tener una familia que me acogió, digamos para poder tener una niñez más sana. Vivo con una familia mestiza, dentro de la familia soy la única afro. ',
        '2:35 - 2:55 En ICBF no hicieron un proceso de adopción, sino que hicieron un proceso de entregarme a una familia cuidadora. Una madre "fami", o madre sustituta, que cuidaban a los niños huérfanos o que no tenían un hogar.  ',
        '2:56 - 3:31 Muchas veces intenté suicidarme porque la gente me señalaba como la huérfana. Y aunque yo tenía a mi mamá y a mi papá, que la verdad me han dado mucho, mucho amor, existe el vacío y existe todos los días la pregunta de cómo hubiese sido mi vida si mi mamá no estuviera muerta. Que a alguien se le hubiera dañado el corazón y le hubiesen quitado la vida.'
      ],   
      'basicTranscription' : `
      [00:12.00] Pero pues ahí en esa casa hay parte de esa historia y de esos recuerdos que yo tengo. 
      [00:17.00] Esa casa era de obra negra y tenía su sala a medio construir. 
      [00:23.00] Se evidenciaba que había cómo el inicio de dos habitaciones y un patio. 
      [00:29.00] Entonces ese lugar era muy agradable para mí, la verdad.
      [00:38.00] Mi mamá pues en su condición de drogadicta 
      [00:42.00] dormía en un costal en esa casa en obra negra. 
      [00:46.00] Y ella en posición de dormir pues le dispararon en la cabeza. 
      [00:50.00] Aun así, ella estaba con vida cuando fueron, 
      [00:53.00] hicieron levantamiento de ella, la llevaron al hospital aún con vida, 
      [00:58.00] pero ya no la entraron como al hospital para reanimarla obvio, 
      [01:03.00] porque decían que ya no había esperanza, 
      [01:05.00] ya la llevaron directamente a la morgue para que termine de morir.
      [01:16.00] Después, más o menos a los 13, 14 años, me dijeron que ahí era dónde habían matado a mi mamá. 
      [01:26.00] Según manifiestan, ese grupo que le denominaban Los Macetos y que estaban haciendo limpieza en Puerto Asís. 
      [01:35.00] Y que había una directriz de matar a todos los drogadictos o a todas las personas que consumían droga. 
      [01:44.00] En ese día que asesinaron a mi mamá, no solo asesinaron a mi mamá, sino a muchas personas que consumían vicio. 
      [01:54.00] No se sabe ni cómo está enterrada, dónde está enterrada, porque fue enterrada como NN, 
      [02:02.00] en un tiempo donde un día, digamos el día que ella murió ‘hubieron’ muchos muertos en el municipio. 
      [02:12.00] Conté con la facilidad de tener una familia que me acogió, 
      [02:17.00] cuando en mis primeros meses para poder, digamos tener una niñez más sana. 
      [02:28.00] Vivo con una familia mestiza totalmente mestiza, dentro de la familia soy la única afro. 
      [02:36.00] En ICBF no hicieron un proceso de adopción, sino que hicieron un proceso de entregarme a una familia cuidadora. 
      [02:45.00] Una madre "fami", o madre sustituta, en esos entonces que cuidaban los niños huérfanos o a los niños que no tenían un hogar.
      [02:57.00] Muchas veces intenté suicidarme porque la gente me señalaba como la huérfana. 
      [03:05.00] Y aunque yo tenía a mi mamá y a mi papá, 
      [03:11.00] que la verdad me han dado mucho, mucho amor, 
      [03:14.00] existe el vacío y existe todos los días la pregunta 
      [03:20.00] de cómo hubiese sido mi vida si mi mamá no estuviera muerta. 
      [03:26.00] Si alguien se le hubiera dañado el corazón y le hubiesen quitado la vida`         
    },
    {
      'id': 2, 'etapa': 2, 'top': 690, 'left': 120, 'topcaja': 580, 'leftcaja':250,'modal':180, 
      'img': { 'url': '/themes/custom/cevtheme/nna/img/nna3g-n3.png',  'h': 220 },
       'titulo':['Aún espero a papá'],
      'historia':'El desplazamiento y la desaparición forzada marcaron la niñez de Olga María. Así lo cuenta en este doloroso relato.',
      'link':'/themes/custom/cevtheme/nna/audios/nna/nnj-tg6a10-olga.mp3',
      'contexto':'La desaparición forzada desintegra al núcleo familiar. Los adultos se centran en su propio dolor y en buscar cómo subsistir, por lo que relegan a un segundo plano a quienes quedan huérfanos. Esto los expone a distintas vulneraciones: asumir roles de adultos, cuidar el hogar o trabajar siendo niños, y vivir nuevas violencias. Más de tres décadas después, Olga María sigue preguntándose cómo habría sido su vida si a su padre no lo hubieran desaparecido, a sus 6 años, en Puerto Nuevo, Simacota, Santander.',
      'etiquetas':[ {'texto':'infancia',  'url':'#'},{'texto':'desplazamiento', 'url':'#'},{'texto': 'orfandad', 'url':'#'},{'texto': 'paramilitares', 'url':'#'},{'texto': 'conflicto' ,'url':'#'}],
      'transcripcion':[
        '00:04 - 0:23 Yo me acuerdo que era de noche y se escuchaban a los perros aullar, y los perros aullaban y ladraban mucho. Es que yo ni sé qué hora era, sé que era de noche, pero a esa hora los perros usualmente no ladraban, pero los animales estaban como inquietos. ',
        '0:25 - 0:48 En ese momento, mi mamá me cogió a mi y a mi hermana. Mi papá cogió a mis hermanos y nos fuimos para atrás. Ya nosotros nos devolvimos –no sé si al otro día o más tardecito–. Total, que se escucharon muchisísimos disparos, pero muchisísimos disparos. Mi papá no pudo dormir esa noche. ',
        '0:49 - 1:31 Ese fue el primer desplazamiento que nosotros tuvimos en la vida, el primer desplazamiento. Mi papá llegó y me cogió, yo sin bañarme. Y mi mamá con un pañal de esos de tela, cogió y me pasó así por la rosita y cogió a mis hermanos. A mi hermana la ‘entangó’ (porque se decía ‘entangar’). Y cogió pañales de tela y encima le puso un plástico y le amarraba aquí y allá. Porque no existían pañales desechables, como hoy en día. Osea, nos cogió a todos, mi mamá cogió un bolso y nos fuimos para Puerto Nuevo. Hasta a mí se me hizo eterno el viaje. ',
        '1:35 - 1.58 Estaba haciendo un solazo porque en Barrancabermeja hacen unos soles terribles, cómo sería que yo sentía la muerte, yo, siendo una niña. Y eso me agobió, eso hoy en día yo vivo con eso en mi piel. A mí me dicen que yo tengo frío de muerto porque a toda hora yo permanezco fría. ',
        '1:59 - 2:09 Cuando llegamos allá, efectivamente estaba mi tío en el piso. Esa es otra imagen que nunca en la vida se me va a olvidar. ',
        '2:13 - 2:26 Nosotros salimos con todos esos muertos hacia Barrancabermeja, y eso si me acuerdo que en Barrancabermeja había muchisisisísima gente desplazada… las familias estaban saliendo. ',
        '2:29 - 3:08 Cuando el Ejército paró el bus, no sé qué tanto tiempo duramos ahí. De todas esas muertes que había, porque había más muertos ahí. Como era un cacerío más adelante, habían muertos. Yo me bajé agarrada de la mano de mi mamá, porque ninguno de nosotros la soltaba; yo agarraba a mi hermanito, él era agarrado de mi mamá, cuando yo veo una oreja con un arete de oro, y me agaché a recoger. Osea, la inocencia de uno. Cuando yo sentí que mi mamá me agarró del brazo, así, y yo ¡jum! de una vez me quedé quieta. ',
        '3:12 - 3:58 Y mi mama le decía: Gilberto no vaya. Gilberto usted se va  a ir por allá y me acuerdo que ellos discutieron en la noche. Y mi papá dijo: ¿Y los marranos y el perro? Y yo le dije: “Ay, si papi, mi perro Coconito. Yo me acuerdo que yo tenía un perro café que le llamábamos Coconito. Y mi perro me lo trae, papi. ¡O vamos!”, le jije a él. Y mi papá dijo: “No, yo voy solo, yo voy mañana”. Total, mi papá fue, le hizo un mercado a mi mamá y se lo trajo a la casa [llanto]… Eso fue el 15, y se fue. A la fecha han pasado 31 años y no volvió. ',
        '4:03 - 4.16 Yo creo que ahí tuvieron que haberle dado la mala noticia a mi mamá de que a mi papá lo habían cogido los paramilitares. Que eran los ‘masetos’, sino que luego le cambiaron el nombre a paramilitares y después a AUC. ',
        '4:17 - 4:49 Todo mundo lloraba, y cuando yo le pregunté a mi mamá: "¿Mami, pero usted por qué llora?". Ella decía "¡Ay Gilberto! ¡Gilberto! ¡Gilberto! ¿Gilberto cómo me dejó sola?" [llanto] Y yo ví a mi hermano que se puso a llorar, y yo lo abracé y me puse a llorar también. Y le dije, ¿pero usted por qué llora?", y me dijo "porque mataron a mi papá". Y yo entonces también me puse a llorar. ',
        '4:53 - 5:25 Total, después de eso, que nosotros volvimos a Barrancabermeja, más nunca... más nunca no, pero hubo como 4 o 5 años para volver a la finca. Ya en ese entonces no había ni perros. Estaban las ollas, de hecho, estaba el caldo creo que podrido dentro de las ollas, porque todo, los platos y todo, todo estaba ahí tal cual. Y todo estaba lleno de monte.',
        '5:27 - 5:57 Yo lamento muchas cosas, pero lo que más lamento yo es no haber tenido a mi padre. Y uno va creando su propia armadura, ¿no? Entonces yo ya era la de la casa, yo era la verraca, y tanto así que mi mamá me pegaba y yo ya no le lloraba porque yo tenía que ser fuerte.'
      ],  
      
      'basicTranscription' : `
      [00:04.00] Yo me acuerdo que era de noche y se escuchaban los perros aullar, 
      [00:10.00] los perros aullaban y ladraban mucho. Es que no sé ni qué hora era, 
      [00:17.00] sé que era de noche, pero a esa hora los perros no usualmente no ladraban, 
      [00:22.00] es que los animales estaban como inquietos. 
      [00:26.00] En ese momento, mi mamá me cogió a mí y a mi hermana. 
      [00:30.00] Mi papá cogió a mis hermanos y nos fuimos para atrás. 
      [00:34.00] Ya nosotros nos devolvimos yo no sé si era al otro día, más tardecito no sé. 
      [00:40.00] Total, que se escucharon muchisísimos disparos, pero muchisísimos disparos. 
      [00:47.00] Y mi papá pues no pudo dormir esa noche. 
      [00:50.00] Pero ese fue el primer desplazamiento que nosotros tuvimos en la vida, el primer desplazamiento. 
      [00:55.00] Y mi papá llegó y me cogió, yo me acuerdo que sin bañarme. 
      [01:00.00] mi mamá me cogió me, con un pañal de esos de tela, cogió y me pasó así por la rosita por acá y cogió a mis hermanos. 
      [01:10.00] A mi hermana la ‘entangó’ (porque se decía ‘entangar’). 
      [01:13.00] Y cogió pañales de tela y le puso y encima le puso un plástico que le amarraba aquí, le amarraba allá. 
      [01:19.00] Porque no existían pañales desechables, que hoy en día. 
      [01:23.00] O sea, nos cogió a todos, mi mamá cogió un bolso y nos fuimos para Puerto Nuevo. 
      [01:30.00] Hasta a mí se me hizo eterno el viaje. 
      [01:36.00] O sea estaba haciendo un solazo porque en Barrancabermeja hacen unos soles terribles, 
      [01:41.00] cómo sería que yo sentía la muerte, yo, siendo una niña. 
      [01:46.00] Y eso me agobió, eso hoy en día yo vivo, yo vivo con eso en mi piel. 
      [01:55.00] A mí me dicen que yo tengo frío de muerto porque a toda hora yo permanezco fría. 
      [02:00.00] Cuando llegamos allá, efectivamente estaba mi tío en el piso. 
      [02:05.00] Esa es otra imagen que nunca en la vida se me va a olvidar. 
      [02:14.00] Nosotros salimos con todos esos muertos hacia Barrancabermeja, 
      [02:18.00] y estando en Barrancabermeja eso si me acuerdo que había muchisisisísima gente desplazada… las familias saliendo. 
      [02:29.00] Cuando el Ejército paró el bus, no sé qué tanto tiempo duramos ahí. 
      [02:33.00] De todas esas muertes que había, porque había más muertos ahí. 
      [02:37.00] Como era un caserío más adelante, habían muertos. 
      [02:40.00] Yo me bajé y yo agarrada de la mano de mi mamá, porque no la soltaba ninguno de nosotros; 
      [02:47.00] yo agarraba a mi hermanito, él era agarrado de mi mamá, yo tambien agarrada de mi mamá, 
      [02:52.00] cuando yo veo una oreja con un arete de oro, y yo me agaché a recoger. 
      [02:58.00] O sea, la inocencia de uno. Cuando yo sentí que mi mamá me agarró, pero así, así, así, así del brazo y yo ¡jum! yo una vez me quedé quieta. 
      [03:12.00] Y mi mama le decía: Gilberto no vaya. Gilberto usted se va  a ir por allá y me acuerdo que ellos discutieron en la noche. 
      [03:21.00] Entonces mi papá dijo: ¿Y los marranos y el perro? Y yo le dije: “Ay, si papi, mi perro Coconito. 
      [03:27.00] Yo me acuerdo que yo tenía un perro café que le llamábamos Coconito. 
      [03:32.00] Y mi perro me lo trae, papi. ¡O vamos!”, le dije a él. Y mi papá dijo: “No, yo voy solo, yo me voy mañana”. 
      [03:40.00] Total, mi papá fue, le hizo un mercado a mi mamá y se lo trajo a la casa [llanto]… Eso fue el 15, y se fue. 
      [03:55.00] A la fecha habían pasado 31 años y no volvió. 
      [04:04.00] Yo creo que ahí tuvieron que haberle dado la mala noticia a mi mamá de que a mi papá lo habían cogido los paramilitares. 
      [04:12.00] Los ‘masetos’, porque después le cambiaron el nombre a los paramilitares y después a AUC. 
      [04:19.00] Todo mundo lloraba y todo mundo lloraba y cuando yo le pregunté "¿Mami, pero usted por qué llora?". 
      [04:27.00] Ella decía "¡Ay Gilberto! ¡Gilberto! ¡Gilberto! ¿Gilberto cómo me dejó sola?" [llanto] 
      [04:37.00] Y yo vi a mi hermano que se puso a llorar, y yo lo abracé y me puse a llorar también. 
      [04:42.00] Y yo le dije, ¿por qué llora?", y me dijo "porque mataron a mi papá". 
      [04:48.00] Y yo entonces también me puse a llorar. 
      [04:54.00] Total, después de eso, que nosotros nos devolvimos a Barrancabermeja, más nunca... más nunca no, 
      [05:02.00] hubo como 4 o 5 años para volver a la finca. 
      [05:07.00] O sea ya en ese entonces no había ni perros. 
      [05:12.00] Estaban las ollas, de hecho, estaba el caldo creo que podrido dentro de las ollas, 
      [05:18.00] porque todo, los platos y todo, todo estaba ahí tal cual. 
      [05:24.00] Y todo eso lleno de monte.
      [05:29.00] Yo lamento muchas cosas, lo que más lamento yo es no haber tenido a mi padre. 
      [05:38.00] Y uno va creando su propia armadura, ¿no? 
      [05:46.00] Entonces yo ya era la de la casa, yo era la verraca, ya yo era,
      [05:51.00] tanto así que mi mamá me pegaba y yo ya no le lloraba porque yo tenía que ser fuerte.
      `           
    },
    {
      'id': 3, 'etapa': 2, 'top': 670, 'left': 140, 'topcaja': 580, 'leftcaja':490,'modal':181,      
      'img': { 'url': '/themes/custom/cevtheme/nna/img/nna3g-n4.png',  'h': 250 },
      'titulo':['Los silencios del secuestro'],
      'historia':'Una misa dominical se convirtió para Juan Daniel a sus 11 años, en una pesadilla que lo alejó de su familia. Así se vive el secuestro en la niñez.',
      'link':'/themes/custom/cevtheme/nna/audios/nna/nnj-tg6a10-juan.mp3',
      'contexto':'Las niñas y niños cuyos familiares han sido secuestrados deben enfrentar la incertidumbre de su retorno. Su nueva realidad los obliga a vivir pendientes de las noticias, con la preocupación por la vida e integridad de sus seres queridos. Juan Daniel lo vivió, a los 11 años, en el Valle del Cauca, cuando su padre, madre y hermano fueron secuestrados.',
      'etiquetas':[ {'texto':'Secuestro',  'url':'#'},{'texto':'infancia',  'url':'#'},{'texto':'conflicto', 'url':'#'},{'texto': 'guerrilla', 'url':'#'},{'texto': 'ELN' ,'url':'#'}],
      'transcripcion':[
        '0:08 - 0:53 Ese día llegamos a la iglesia, como cualquier otro domingo, a la misa de medio día. Como en el trascurso de la misa, durante el saludo de la paz, llegaron dos camiones que bloquearon la entrada del parqueadero de la iglesia, y de esos camiones se bajaron unos señores uniformados, muchos. Rodearon esa iglesia -era como un ranchito abierto, no tenía paredes- y se pararon todos los hombres alrededor. Y uno entró y le dijo al cura una cosa al oído, y después el cura dice que hay una bomba y que todo el mundo tiene que salir. ',
        '0:54 - 1:30 Ya posterior a eso la gente empieza a salir y a dirigirse a sus carros, para irse en su carro, porque la gente no quería dejar el carro tirado. Y se arma una especie de discusión entre los guerrilleros y la gente porque no entendían qué estaba pasando. Creían que era el Ejército, hasta que ya hacen unos tiros al aire. Tengo conocimiento de que en ese momento mataron un escolta, y empezaron a hacer tiros al aire, y ya dicen que es un secuestro que es la guerrilla, que es el ELN, que todo el mundo se tiene que subir a los camiones. ',
        '1:32 - 1:47 Ya empezó a llegar el Ejército y haber presión por parte del Ejército y se armó una balacera, un enfrentamiento muy fuerte; y en ese momento se llevan a mi papá y a mi hermano, se los llevan juntos. ',
        '1:48 - 1:54 Mi hermano le dice que él tiene 14 años, y el guerrillero le dice que él también, entonces que no le importaba, que caminara. ',
        '1:55 - 2:15 Y yo ahí me quedo solo con mi mamá y a mi mamá se la llevan porque todas las señoras que quedaban estaban en tacones y en zapatos que no eran aptos para ir a caminar al monte, entonces a mi mamá se la llevan básicamente porque ese día se había do caminando a la iglesia y andaba en tenis. Yo ahí quedo solo. ',
        '2:17 - 2:35 Yo me metí ahí creyendo que estaba protegido entre esas paredes, pero la cosa cayó en la cancha de futbol y eso me dejo aturdido, como lleno de tierra, de polvo... Y yo ahí quedé, no lloraba, no hablaba, estaba absolutamente en shock. ',
        '2:38 - 3:08 Se escuchaba el helicóptero, entonces lo que decidimos hacer en ese grupo fue amarrar una camiseta blanca a un palo que había para bajar frutas y salir a hondear eso hasta que el helicóptero o el Ejército estaba por ahí cerca y nos vieron, y llegó una tanqueta hasta la puerta de la escuela y nos bajaron como protegidos a todos hasta las casas donde habíamos llegado inicialmente. ',
        '3:10 - 3:37 Posterior a eso, lo que sigue es afrontar esa incertidumbre de esa separación, digamos que mi familia se desintegró y eso para mí fue muy... pues yo creo que fue lo más doloroso, entrar a aceptar que mis papás ya no estaban, que no sabíamos nada de ellos. A mi hermano lo devolvieron porque era menor de edad finalmente, y lo devolvieron a los 15 días de secuestro por ese motivo.',
        '3:39 - 3:50 Era difícil acostarse por la noche y pensar cómo está mi mamá, cómo está mi papá, si se están mojando. Si están vivos o no. Yo a veces sí lloraba de noche. ',
        '3:51 - 4:00 Y, bueno, finalmente liberan a mi hermano, y después como de 6 meses liberan a mi mamá.  ',
        '4:02 - 4:56 La liberación de mi mamá fue una cosa increíble porque ya se empezó a acabar ese martirio terrible, y volvimos a la casa. Cuando liberan a mi papá digamos que ya la familia otra vez estaba junta, había pasado como poco más de medio año, realmente lo que uno siente es demasiada alegría, te das cuenta de lo importante que es la familia y de cómo uno puede permanecer unido sin importarle nada. Básicamente nos valoramos mucho y nos respetamos mucho los unos a los otros, sin importar nuestras diferencias, eso es algo que salió de ahí.'
      ],     
      'basicTranscription' : `[00:00.00]`          
    },
    {
      'id': 4, 'etapa': 3, 'top': 650, 'left': 170, 'topcaja': 570, 'leftcaja': 780,'modal':182,       
      'img': { 'url': '/themes/custom/cevtheme/nna/img/nna3g-n5.png',  'h': 270 },
      'titulo':['Se lo llevaron engañado'],
      'historia':'Ricardo fue reclutado bajo la promesa de una mejor vida para su familia. Esta es su historia.',
      'link':'/themes/custom/cevtheme/nna/audios/nna/nnj-tg11a14-ricardo.mp3',
      'contexto':'Los grupos armados usaron la fuerza, el engaño y la persuasión para reclutar a las niñas, niños y adolescentes. En muchas ocasiones, les prometieron mejorar sus condiciones de vida ofreciéndoles estudio, trabajo o ayuda para sus familiares. También les dijeron que podrían abandonar las filas cuando quisieran. Estas prácticas evidencian la responsabilidad de los reclutadores, quienes, para incorporar miembros en sus filas, se aprovecharon de necesidades como las de Ricardo, reclutado a los 13 años en San Calixto, Norte de Santander.',
      'etiquetas':[ {'texto':'Reclutamiento', 'url':'#'},{'texto': 'preadolescencia', 'url':'#'},{'texto': 'guerrilla', 'url':'#'},{'texto': 'conflicto' ,'url':'#'}],
      'transcripcion':[
        '0:05 - 0:22 El comandante me mandó a llamar, yo le dije que señor qué pasó. Me dijo que si yo quería sacar a mi familia adelante que me metiera ahí con ellos. Yo le dije que no sería capaz porque no sé si aguantaría con el fusil y la maleta y toda esa vaina. Me dijo que solamente era de miliciano. ',
        '0:24 - 0:43 Me dijo que donde tenía que estar pendiente en el pueblo cuando estaba el Ejército por allá rondando. Cuando estaba en las montañas que lo llamara y le avisara. Que estuviera pendiente de la gente que robaba, de la gente que se alzaba y que estuviera pendiente de los soldados. ',
        '0:47 - 1:09 Yo estaba asustado, nervioso. Yo le dije "comandante, yo quiero salirme de eso, Osea, me asusté, yo soy muy nervioso pa´ eso". Me dijo que no, que no me podía salir, que ya estaba metido en eso y dijo que no, me dijo "usted tiene que sacar a la familia adelante", y yo le dije "pero comandante, usted no me ha dado nada a mí, usted me dijo que iba a sacar a la familia adelante, pues yo me metí en esto porque pensaba que iba a volver a mi familia rica". ',
        '1:10 - 1:26 Pues ese día me dio 200 mil pesos como para que estuviera ahí. Yo le dije: "Comandante, en 3 meses me ha dado 200 mil pesos". Dijo: "sí, después que vaya sabiendo más sobre esto le voy pagando más, así va subiendo", dijo. ',
        '1:28 - 1:43 Pues yo le mandaba plata a mamá. Yo le decía: "Mire mamá, le mando eso". Pero yo estaba muy asustado y yo dije "y que tal que me maten a mí por no irme". Pues yo cuando le conté eso a mi papá y él no, mi papá lloró y yo lloré y le dije "papá, yo quería sacarlos adelante, perdóneme", le decía yo. ',
        '1:48 - 2:03 Un día me dieron una pistola y me dijo mate a un señor que vive ahí, en el cerro, quiero que lo mate, me decía el comandante. Yo le decía no sé si matarlo. Me dijo tome, eso es muy fácil y disparó la pistola. Yo quedé sonso...',
        '2:05 - 2:11 Si usted quiere superarse, dele así, con rabia. Usted un día va a ser alguien en la vida, dijo, así como yo… ',
        '2:14 - 2:31 Vaya sin miedo, no sé qué tenía yo, con rabia, tengo que ser alguien en la vida, dije yo. Y llegué y entré y la persona se me arrodilló y me dijo: "No me mate, por favor". Yo iba encapuchado. "No me mate por favor, yo no he hecho nada". Y yo… como que se me salían las lágrimas. ',
        '2:32 - 2:48 Yo le dije: Le doy 24 horas, por qué él tenía un hijo soldado. Por eso, es que lo mandaron a matar. Yo le dije le doy 24 horas para que se vaya. Y el tipo: "¡No me mate!" Yo le dije: "Le doy 24 horas, yo vuelvo aquí en 24 horas. Y si está aquí, ya sabe. ',
        '2:54 - 3:10 Yo digo que... o sea, me gustaría devolver el tiempo para seguir estudiando y no meterme en ningún problema, o sea, aprovechar mi infancia, yo casi no tuve así infancia, que así que jugar con juguetes o disfrazarme, así como hacen el día de las brujitas, tampoco.'
      ],        
      'basicTranscription' : `[00:00.00]`    
    },
    {
      'id': 5, 'etapa': 3, 'top': 770, 'left': 100, 'topcaja': 560, 'leftcaja':999,'modal':183,      
      'img': { 'url': '/themes/custom/cevtheme/nna/img/nna3g-n6.png',  'h': 140 },
      'titulo':['Ser una niña en la guerrilla'],
      'historia':'Milena fue reclutada por el ELN en su adolescencia. También fue víctima de violencia sexual por parte de esta guerrilla.',
      'link':'/themes/custom/cevtheme/nna/audios/nna/nnj-tg11a14-milena.mp3',
      'contexto':'Las niñas y adolescentes reclutadas fueron víctimas de acoso, violación, aborto y anticoncepción forzados, entre otras formas de violencia sexual, durante su permanencia en las filas. Estos hechos traumáticos, que evocan con dolor, les dejaron impactos físicos, psicológicos y reproductivos para el resto de su vida. Fue el caso de Milena, reclutada a los 13 años, en Santa Rosa, Cauca.',
      'etiquetas':[{'texto':'Reclutamiento', 'url':'#'},{'texto': 'Ejército', 'url':'#'},{'texto': 'preadolescencia', 'url':'#'},{'texto': 'conflicto', 'url':'#'}],
      'transcripcion':[
        'Era un muchacho criado en la zona de distensión, más exactamente en el municipio de Mesetas, Meta. Cuando el tiempo, llegaron estas personas, milicianos y miembros del Frente 40 a hacernos propuestas, a decirnos que nos metiéramos al grupo… Esto fue cuando recogieron bastantes muchachos y lo que pasa es que si sumercé tenía dos niños grandes se le llevaban uno y esa era la ley de ellos, entonces al ver que ellos no se iban con ellos, empezaron a hacerles propuestas económicamente, como hicieron en el caso mío. Decidí ingresar al grupo… Yo tenía 15 años. Yo me fui para allá y vi que no fue realidad lo que nos dijeron, yo decidí volarme... Yo iba llegando a la casa y me salieron dos tipos ahí, con armas y todo, me amenazaron y me dijeron que si salía a correr, me disparaban. Me capturaron nuevamente y mi mamá se puso a llorar. Esta columna Arturo Ruiz estaba conformada por 365 personas, entre hombres, mujeres y niños. Y más niños que adultos. De esos 365, yo diría que por ahí unos 250 éramos menores… Llegamos a una parte que se llama Fortul. Nos reunieron, nos dijeron que estábamos a 45 minutos del Ejército. Y yo dije, uf huepucha, aquí es mi oportunidad…Yo me acordaba por dónde habíamos ingresado. Y me empezaron a buscar… Llegué a la estación de Policía a las doce y media, me presenté, yo les dije que venía volado. ¿Usted volado? Pero no trae uniforme de nada. Me empezaron a hacer entrevista… no me creían. Yo no creo que ud sea un guerrillero porque nosotros no hemos escuchado absolutamente nada. Lo cierto del caso es que eso fue un domingo, yo estaba ahí cuando más o menos 4 y media, llegó un chino a buscarme ahí… Les dije “yo no tengo a nadie acá, eso debe ser alguien que me viene a buscar para matarme. Porque como no me pudieron hacer nada… El día miércoles llegó un helicóptero, me subieron a una patrulla de la Policía, me escoltaron. Me acostaron a la parte de atrás, me sacaron escoltado y me subieron al helicóptero. Me sacaron para Arauca, a la capital' 
      ],            
      'basicTranscription' : `[00:00.00]`
    }
    ,
    {
      'id': 6, 'etapa': 4, 'top': 630, 'left': 130, 'topcaja': 580, 'leftcaja':1280,'modal':184,     
      'img': { 'url': '/themes/custom/cevtheme/nna/img/nna3g-n7.png',  'h': 270 },
      'titulo':['La pesadilla de Robinson'],
      'historia':'Para Robinson, la pesadilla no terminó luego de escapar de las FARC. Desde ese momento fue utilizado por el Ejército como informante.',
      'link':'/themes/custom/cevtheme/nna/audios/nna/nnj-tg15a17-jesus.mp3',
      'contexto':'Todos los actores armados fueron responsables, en diferente medida, de la vinculación de niñas, niños y adolescentes a la guerra. Al ser reclutados, estuvieron en riesgo de muerte, enfermedad y castigos. Algunos intentaron fugarse a pesar de las retaliaciones del grupo, otros fueron recuperados por la fuerza pública en medio de combates, varios de los cuales fueron utilizados para el desarrollo de operativos militares. De 1999 a 2021, el programa especializado del ICBF atendió a 6.992 personas menores de 18 años desvinculadas. Fue el caso de Robinson, reclutado con 15 años en Mesetas, Meta.',
      'etiquetas':[ {'texto':'Adolescencia', 'url':'#'},{'texto': 'conflicto', 'url':'#'},{'texto': 'guerrilla', 'url':'#'},{'texto': 'escuela' ,'url':'#'}],
      'transcripcion':[
        '0:14 - 0:50 Una vez cuando estábamos estudiando se agarraron como a las 10. El día era cuando uno se encontraba estudiando en la escuela y entonces nos sacaron y a todos los estudiantes nos reunieron en un solo salón. Y ahí nos pusieron a estar agachados y que nadie saliera. Y solamente hacía la presencia la guardia, algo así, como acordonando la institución para que no fuera a suceder nada por ahí. Y las banderas blancas que colocaban en las sedes sobre la paz o algo así. Esas banderas significaban que había estudiantes o civiles. ',
        '0:54 - 1:18 Cuando uno estaba estudiando el ejército pasaba en camiones o en tanquetas. Como eso es a un lado de la vía, de la escuela, cada que estábamos en descanso, ellos permanecían por la carretera, a pie, en carro. Cuando los padres lo llevan a uno a trabajar en la huerta por ahí los veía uno durmiendo. A veces era el Ejército, sino era la guerrilla, cualquiera de los dos se mantenía. ',
        '1:19 - 1:35 Los profesores decían que no nos pusiéramos a hacerles caso. Y también los papás de uno le decían que no, que no nos pusiéramos a hablar con ellos, tal cosa, que no los recibieran. Por la seguridad de uno mismo. ',
        '1:38 - 1:56 Se escuchaban durante las noches o las tardes o las noches, pero era cuando uno ya estaba en la casa, o hay veces cuando uno se encontraba aquí, en el colegio, como a las 5, eso no tenía hora, cualquier hora, atacaban y entonces uno corra a las viviendas, o a la casa. ',
        '1:57 - 2:08 Pues uno cuando era así, niño, sentía era como temor o miedo. Pero los profesores decían que no, que no tuviéramos miedo, que ahí estaban, que la responsabilidad era de ellos o de todos, que estábamos ahí. ',
        '2:09 - 2:28 Pues no más pensaba que como los profesores a veces decían que no, que el Ejército quería dentrar para apoderarse de todo, las riquezas, algo así. Y entonces la guerrilla era la que no los quería dejar dentrar a las multinacionales. La guerrilla nos ayudaba a cuidar casi como el territorio. ',
        '2:32 - 3:15 Aquí se cultiva el café, la cabuya y los productos de acá. Más en ese tiempo venía la coca... Con el dinero de eso, antes pagaban 400 pesos o 300 pesos y con eso desde que yo venía desde la escuela a mí como más me gustaba era el fútbol, pues yo iba ahorrando, sacaba cierta parte para el mecato, y otra parte ahorraba para los zapatos o el guayo, pero la plata para otras cosas, no malgastaba. ',
        '3:17 - 3:41 Yo prefería estudiar, porque trabajar era como muy duro. Y mi meta era graduarme y seguir un técnico. Y pues hasta el momento sigo ahí, voy con un técnico.'
      ],            
      'basicTranscription' : `[00:00.00]`
    },
    {
      'id': 7, 'etapa': 4, 'top': 630, 'left': 130, 'topcaja': 580, 'leftcaja':1560,'modal':185, 
      'img': { 'url': '/themes/custom/cevtheme/nna/img/nna3g-n8.png',  'h': 270 },
      'titulo':['Estudiar bajo un régimen armado'],
      'historia':'En Córdoba, el control territorial de las AUC se impuso en los salones de las instituciones educativas. Elena cursaba bachillerato cuando vivió el dominio paramilitar en su colegio.',
      'link':'/themes/custom/cevtheme/nna/audios/nna/nnj-tg15a17-elena.mp3',
      'contexto':'Además de ocupar y destruir instituciones educativas, los grupos armados también fundaron colegios propios buscando legitimidad social y adoctrinar y controlar a la población. Fue el caso del Liceo Villanueva, fundado por Fidel Castaño en 1988, donde los paramilitares impusieron una férrea disciplina y alinearon los contenidos educativos con sus posiciones ideológicas. Así lo narra Elena, testigo de estos hechos en Valencia, Córdoba, a sus 15 años.',
      'etiquetas':[ {'texto':'Adolescencia',  'url':'#'},{'texto':'conflicto', 'url':'#'},{'texto': 'orfandad', 'url':'#'},{'texto': 'paramilitares',  'url':'#'},{'texto':'escuela','url':'#'}],
      'transcripcion':[
        '0:11 - 0:24 Cuando estábamos allá en Río Bravo, teníamos todo. Yo creo que el hecho de uno tener un techo, tener comida, ya eso es una súper bendición y más cuando tu tienes un hogar bonito... Era mi mamá, mi papá, mi hermanita y yo. ',
        '0:27 - 0:43 Ya empezaron los inconvenientes con los grupos armados. Uno no sabía quiénes eran los que llegaban, de pronto personas desconocidas. Al punto de que un día se llevaron a mi papá para que les ayudara con los caballos para que le ayudaran ellos me imagino que andar. Ya después se escuchaba que eso era la guerrilla. ',
        '0:49 - 0:58 Cuando ya quemaron la finca, en Macondo, la propia finca, a la mayoría que dicen, entonces ahí si mi papá, claro, el susto... Ahí si nos tocó salir. ',
        '1:03 - 1:30 El Liceo era algo grandote, grandote, a diferencia de una escuelita que es de paja, madera. Tenía cancha, para jugar dentro, básquet, voleibol, el aula múltiple era súper grande, tenía laboratorios. Tenía biblioteca. Uno esperaba llegar a quinto rapidito y pasar al liceo. El liceo tenía toda la dotación que uno quisiera.',
        '1:32 - 1:50 Para nadie es un secreto que el Liceo Villanueva fue fundado por Fidel Castaño. Tampoco es un secreto que las AUC estaban en Córdoba y estaban radicadas en ese pueblo como tal. Entonces era como que la disciplina venía por parte de ellos. Ellos lo donaron, pero nosotros también debíamos cuidarlo. ',
        '1:52 - 2:13 Yo recuerdo que una vez llegaron, llegó un señor y dijo: hacen una fila acá los hombres y al otro lado una fila las mujeres. Y los que tengan el cabello largo nos los vamos a aceptar aquí. Se hizo arriba, como en la tarima del aula múltiple, aquí no aceptamos cortes raros, cabello largo... No aceptamos aretes, las mujeres con cabellos tinturados de otros colores.',
        '2:14 - 2:56 Yo digo que la guerra no es solo que te maten un familiar, que te tocó de pronto estar en un combate, a veces hay cosas que marcan también de otra forma. Cuando murió Carlos Castaño a los seis meses muere mi papá y nos tocó muy duro. Mi hermana desafortunadamente estuvo viviendo con alguien que trabajaba con Carlos. Ya cuando pasa lo de Carlos, a mi hermana se la llevan, la van a buscar a la casa. Yo no sabía si eran paramilitares o si eran autodefensas, perdón Ejército, porque resulta que como yo los veía igual al uniforme, entonces uno no sabía ni qué eran.',
        '2:58 - 3:05 A mi hermana se la llevan con mi sobrinita, que tenía 30 días de nacida…Llevaban a mi hermana en una jaula de esas de cargar ganado… ',
        '3:07 - 3:23 A mí me llamaban por teléfono a decir que nos iban a matar. Decían que  nos iban a matar, que tenía ubicada a mi familia, que tenían ubicada a mi hermanita con mi sobrinita, que faltaba era mi familia... Mi papá a los seis meses se nos muere. ',
        '3:24 - 3:40 La guerra es tan absurda, la guerra es tan dura, que los que están dentro del conflicto. Ellos saben lo que está pasando, pero entonces a los inocentes nos cogen así como por sorpresa. ¿Verdad?'                
      ],            
      'basicTranscription' : `[00:00.00]`
    },
    {
      'id': 8, 'etapa': 4, 'top': 630, 'left': 150, 'topcaja': 580, 'leftcaja':1760,'modal':187,    
      'img': { 'url': '/themes/custom/cevtheme/nna/img/nna3g-n10.png',  'h': 270 },
      'titulo':['La memoria como resistencia'],
      'historia':'Mirella decidió quedarse en su territorio y reconstruir la memoria histórica de la guerra que  afectó a su comunidad  durante décadas.',
      'link':'/themes/custom/cevtheme/nna/audios/nna/nnj-tg18a28-mirella.mp3',
      'contexto':'Los jóvenes tienen preocupaciones sobre los lugares en los que viven y algunos se transforman en líderes. En zonas que el conflicto ha devastado, las y los jóvenes hacen memoria e intentan resignificar su territorio para superar los estragos de la guerra. Este es el caso de Mirella, quien a sus 27 años se propuso recuperar la memoria histórica de su comunidad, en Santa Lucía, corregimiento de Simití, Bolívar, para que la violencia que vivieron sus padres no se repita.',
      'etiquetas':[ {'texto':'conflicto', 'url':'#'},{'texto': 'juventud', 'url':'#'},{'texto': 'memoria' ,'url':'#'}],
      'transcripcion':[
        '0:08 - 0:28 Soy una joven del corregimiento a la cual le preocupa mucho la situación de los jóvenes en esta época y que quiere hacer un cambio o anhela hacer un cambio tratando de unirlos para que realicen actividades más sanas, o que se encaminen más a la educación o al estudio. ',
        '0:30 - 0:37 Tengo 17 años y llevamos un año haciendo el proceso de recolección de memoria por medio de entrevistas.',
        '0:40 - 1:34 La historia de Santa Lucía está llena de personas admirables, y de un gran desastre que hubo porque no hay otra palabra, hubo mucha violencia, asesinatos, pero también cosas de las que poco hablamos y es que los campesinos se aguantaron mucho, muchos se fueron, es lógico, muchos abandonaron su tierra, su hogar, sus fincas, sus casas. Pero muchos se aguantaron. En esa época, por lo que nos han dicho, ellos abrían sus carreteras a pico, a pala, solos, sin ayuda de ningún ente público, ni de las alcaldías, ni de nada, y cuando llegaban a sus casas los estaban esperando los paramilitares o la guerrilla, para quitarles lo poquito que tenían. Les quitaban vacas, les quitaban gallinas, cerdos.',
        '1:35 - 1:53 En la época de mis padres fueron muy amedrentados, en muchas ocasiones se los llevaban y los desaparecían. A las mujeres sobre todo, les endulzaban el oído y se las llevaban, supuestamente que allá iban a ganar mucha plata. ',
        '1:55 - 2:11 En Santa Lucía hubo presencia de dos o tres grupos armados, depende de las épocas, cuando salía uno entraba el otro. Estaban los paramilitares, estaban las Farc, y había otro, la mano negra, me parece. ',
        '2:13 - 2:34 Ellos al campesino le decían: nosotros llegamos a su casa y necesitamos que nos colabore, nosotros los cuidamos a ustedes, ustedes nos cuidan a nosotros. Y en qué necesitan que les colaboren. Y ellos respondían: nosotros necesitamos plata, nosotros necesitamos reses, cositas así, y ellos no se atrevían a decirle que no. ',
        '2:39 - 2:58 Estoy estudiando administración pública, espero que en un futuro terminar, y acceder a un cargo público en mi corregimiento, de mi municipio. Aspiro llegar a la Alcaldía, quiero ser alcaldesa, y sé que lo voy a lograr, esto lo voy a hacer trabajando mucho y de la mano de los jóvenes de mi comunidad.'
      ],
      'basicTranscription' : `[00:00.00]`            
    },
    {
      'id': 9, 'etapa': 5, 'top': 630, 'left': 140, 'topcaja': 580, 'leftcaja':2050,'modal':186,      
      'img': { 'url': '/themes/custom/cevtheme/nna/img/nna3g-n9.png',  'h': 270 },
      'titulo':['Dejar el territorio para salvar la vida'],
      'historia':'Sebastián tuvo que exiliarse después del asesinato de uno de sus compañeros y de recibir amenazas de muerte contra él y miembros de su colectivo.',
      'link':'/themes/custom/cevtheme/nna/audios/nna/nnj-tg18a28-sebastian.mp3',
      'contexto':'A medida que crecen, los y las adolescentes que han sido desplazados establecen nuevos vínculos con su entorno, lo que les permite participar en otros espacios de socialización. Muchos, incluso, se convierten en líderes de su comunidad, rol que los expone a nuevas violencias. Las amenazas de un grupo paramilitar en Soacha, Cundinamarca, forzaron a Sebastián a exiliarse, a los 24 años, para salvar su vida.',
      'etiquetas':[ {'texto':'conflicto',  'url':'#'},{'texto':'exilio',  'url':'#'},{'texto':'juventud',  'url':'#'},{'texto':'desplazamiento', 'url':'#'}],
      'transcripcion':[
        '0:08 - 0:27 Yo vengo de una familia campesina humilde, de la zona del piedemonte de la Macarena, en el departamento del Meta, que ellos confluyen en historias entre la realidad del país en la época. ',
        '0:28 - 1:10 Mi vida es una infancia de niño, normal, llanero, campesino. Cuando estoy cumpliendo mis 11 años de edad, más o menos entre el año 92, 93, sin tener ni idea, descubro que por esa participación activa en la política, o como por ese convencimiento político de mi padre, nosotros tenemos que movilizarnos del pueblo. Movilizarnos es que recibimos amenazas por parte de grupos que pues estaban constantemente tratando de ejercer control. ',
        '1:12 - 1:37 Cuando nosotros tenemos que salir del Llano, solo pudimos salir con mi mamá, que estaba con algunos meses de embarazo, mi hermana menor y yo. En ese momento, nosotros no teníamos ni idea de lo que estaba pasando. Prácticamente, lo que ocurrió es que mi padre desapareció y nosotros pues terminamos llegando con mi mamá embarazada y mi hermana al municipio de Soacha. ',
        '1:39 - 2:10 Me involucra mucho como el accionar social, la posibilidad de relacionarme con gente más adulta que cree en mis capacidades, que me impulsa, que me motiva, y así mismo pues con todo el grupo de amigos, como la idea de ser un grupos de barrio que está activo, que está trabajando, que está movilizando. Y empezamos a hacer cosas, sin que tengan una intención política, muy políticas, como eventos, actividades culturales, pintadas de muros, jornadas de aseo en los barrios, jornadas de aseo comunitarias.',
        '2:12 - 2:16 Que nunca lo veíamos de esa manera. Nosotros simplemente veíamos las necesidades de hacer algo y lo hacíamos. ',
        '2:18 - 2:27 En ese ejercicio terminamos descubriendo que en la localidad 19 de Bogotá, hay grupos armados ilegales. ',
        '2:29 - 3:08 Me fue bien porque tuve la posibilidad de estar de manera tranquila en un lugar que me brindó muchas herramientas, y que es un lugar que tiene toda la disposición para acogerme nuevamente y al cual le he aprendido mucho. Pero fue muy malo porque logró, en términos de ejecución, por decirlo así, acabar con nosotros. No fue sólo la muerte de nuestro compañero y, digamos, otro compañero herido, sino fue la muerte como del proceso activista, ¿no? Del proceso grupal, del proceso que se estaba gestando con tanta fuerza dentro de la comunidad. Y termino estando fuera del país como casi 5 años. ',
        '3:10 - 3:14 O sea, digamos que era muy natural. ¿Si ves como la misma vaina lo va volviendo a uno como insensible? ',
        '3:16 - 3:37 Este país no puede seguir permitiendo que más jóvenes, ni que yo, sigamos viendo cadáveres como si fueran un montón de animales tirados en un hueco. Y esos reflejos y esas imágenes que le quedan a uno en la cabeza, yo quisiera que nunca en la vida, nadie, ninguna persona las tuviera que vivir. ',
        '3:38 - 4:02 Y creo que esa es mi verdad. O sea, creo que lo único que me motiva hoy en día pa´ camellar en estas dinámicas en las que estoy metido, es que a mí no me gustaría que más niñas o más niños de este país, de ningún rincón, tuvieran que presenciar una muerte violenta de alguien, o tuvieran que cruzar por lugares en donde es imposible pasar, o el miedo es tan grande, que ni siquiera se puede conocer algún lugar.'
      ],
      'basicTranscription' : `[00:00.00]`            
    }
  ]
var inicio = nna3DataInicio[0];
var tagsh='';
for(var h=0; h<inicio.etiquetas.length; h++)
  {    
    tagsh=tagsh+'<a href="'+inicio.etiquetas[h].url+'">'+inicio.etiquetas[h].texto+'</a>';
    if(h!=(inicio.etiquetas.length-1))
    {tagsh=tagsh+' | ';}
  }


/*------------titulo------------------------------*/
const jsmiga = document.getElementById("miga");
jsmiga.innerHTML=inicio.miga.retorno;
jsmiga.setAttribute("href",inicio.miga.url);
/*------------titulo------------------------------*/
const jstitulo = document.getElementById("titulo");
jstitulo.innerHTML=inicio.titulo;

const jstags = document.getElementById("tagshome");
jstags.innerHTML=tagsh;

/*------------texto------------------------------*/
if(screen.width > 768){
  const jstexto = document.getElementById("texto");
  jstexto.innerHTML=inicio.texto;
  }
  else{
  const jstexto1 = document.getElementById("texto");
  jstexto1.innerHTML=inicio.textom1;
  const jstexto2 = document.getElementById("texto2");
  jstexto2.innerHTML=inicio.textom2;
  }
  /*------------imagen de fondo-------------------*/
  const div = document.getElementById('slider');
  div.style.backgroundImage="url("+inicio.urlOnda+")";
   /*-div.style.minWidth="3000px";
  div.style.backgroundSize= "100% 100%";
  div.style.backgroundRepeat="no-repeat";
  div.style.position="relative";
  div.style.display="flex";*/
  
  /*------------pregunta------------------------------*/
const jspregunta = document.getElementById("pregunta");
jspregunta.innerHTML=inicio.pregunta;
/*------------rango------------------------------*/
const jsrango = document.getElementById("rango");
jsrango.setAttribute('class','box-minmax');
for(valor in inicio.rango){  
  var spn = document.createElement("span");
  spn.innerHTML=inicio.rango[valor];
  jsrango.appendChild(spn);
}
/*------------imagen de fondo en el modal------------------------------*/
//const modalnnafondo = document.getElementById("modal-nnafondo");
//modalnnafondo.setAttribute("src","/themes/custom/cevtheme/nna/img/nna3g-onda-modal.png");
/*------------------------------------------*/

const scrollContainer1 = document.querySelector(".nna3");
scrollContainer1.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer1.scrollLeft += evt.deltaY;
});

let wheel = document.getElementById("wheel");
let sr = document.querySelector("#rs-range-line");
var sliderScrollChange = 1;

wheel.addEventListener("wheel", (event) => {     
  scrollwheel(wheel, event)
  scrollRange(sr, event) 
});

 //----touch para moviles-------------------

var touchWheel = document.getElementById("wheel");
var startX, moveEndX, X;   
touchWheel.addEventListener('touchstart', function(e) {
 // e.preventDefault();
  startX = e.touches[0].pageX;
});

touchWheel.addEventListener('touchmove', (event) => {     
  touchr(sr, event) 
});
    
function touchr(range,e) {
  e.preventDefault();
  moveEndX = e.changedTouches[0].pageX;
  X = moveEndX - startX;
  if ( X > 0 ) 
  {
    touchPos=+ 1;     
  }
  else if ( X < 0 ) 
  {
    touchPos=+ (-1);    
  }  
  var oldvalue = Number(range.value).toFixed(0);
  range.value = (oldvalue/1)+touchPos;    
  range.dispatchEvent(new Event('input', {bubbles:true}));
}
///---------------------

var scroll = document.getElementById("rs-range-line");

scroll.oninput = function () {
	var panel = document.getElementById("wheel");
	var total = panel.scrollWidth - panel.offsetWidth;
	var percentage = 15*(this.value);	
	panel.scrollLeft = percentage;
  showSliderFiguras();
}

function scrollwheel(range, event) {
  event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  event.preventDefault();
}

var rangeSlider = document.getElementById("rs-range-line");

function scrollRange(range, event) {
    var scrollchange = event.deltaY * 0.01;
    var newvaluechange = sliderScrollChange * scrollchange;
    var oldvalue = Number(range.value).toFixed(0);
    var newvalue = Number(newvaluechange) + Number(oldvalue);
    range.value = newvalue; 
    touchPos=newvalue;   
    range.dispatchEvent(new Event('input', {bubbles:true}));
}

var rangeSlider = document.getElementById("rs-range-line");
rangeSlider.addEventListener("input", showSliderMensajes, false);
let sn = document.querySelector(".container-nna");

sr.addEventListener('input', updateValue);

function updateValue(e) {
  showSliderFiguras();
}

/*----ubica las figuras y los mensaje--------------------*/
while (sn.lastElementChild) {
  sn.removeChild(sn.lastElementChild);
}
function showSliderFiguras() {    

//jQuery('.buttons-nna button').each((i, btn) => {
 // jQuery(btn).attr("type", "button")
  //jQuery(btn).attr("class", "open-modal")
 // jQuery(btn).attr("data-bs-toggle", "modal");
  //jQuery(btn).attr("data-bs-target","#nna-audio-transcription-modal");   
//});

  sn.setAttribute('class','slider-nna'); 
  
  for(var b=0;b<nna3Data.length;b++)
    {
      posicion=b;
      var im = document.createElement("img"); 
      im.className="ims imagen-silueta"+nna3Data[posicion].id;     
      im.setAttribute( 'src' , nna3Data[posicion].img.url);  
      sn.appendChild(im);
    }
}

function showSliderMensajes() {     
  const vetapa=[];
  const vopacity=[];
  const tempo=12;
  const opacidad=2;
  sn.setAttribute('class','slider-nna');   
  var distancia = (100/(inicio.rango.length-1));/*se distribuye el rango en el slider que tiene un valor de 100*/
  var ubicacion=0
  var contador=0;
  for (var a = 0; a<nna3Data.length; a++)
  {
    ubicacion = (nna3Data[a].etapa-1)*distancia;
    if(rangeSlider.value > ubicacion-tempo && rangeSlider.value < ubicacion+tempo)
    {      
      vetapa.push(a);
      if(rangeSlider.value != ubicacion)
      { 
        if(ubicacion<rangeSlider.value)
        {vopacity[0]=rangeSlider.value-ubicacion;}
        else
        {vopacity[0]=ubicacion-rangeSlider.value;}
        vopacity[1]=rangeSlider.value;
      }
    }
  }  
  
  while (sn.lastElementChild) {
    sn.removeChild(sn.lastElementChild);
  }

  for(var b=0;b<vetapa.length;b++)
  {
    posicion=vetapa[b];    
    var np = document.createElement("div");
    var nbtn = document.createElement("div");
    nbtn.className="button"+nna3Data[posicion].id; 
    sn.appendChild(nbtn);        
    var btn = document.createElement("div");  
    btn.className= "buttons-nna modal_cev"; 
    btn.setAttribute("data-class","nna-modal");  
    btn.setAttribute("data-nid",nna3Data[posicion].modal); 
    //btn.value=nna3Data[posicion].id;
    // btn.setAttribute("onclick",'functionModal(this)');  
    np.className="caja-texto-opacity caja"+nna3Data[posicion].id;  
    if(rangeSlider.value==vopacity[1])
      {                     
        np.style.opacity=opacidad-(vopacity[0]*((opacidad-0.02)/tempo));  
        btn.style.opacity=opacidad-(vopacity[0]*((opacidad-0.02)/tempo));  
      }      
    if(rangeSlider.value==(nna3Data[posicion].etapa-1)*distancia)
      {
        np.style.opacity=opacidad;
        btn.style.opacity=opacidad;
      }
    np.innerHTML=nna3Data[posicion].historia; 
    sn.appendChild(np);
    var icon = document.createElement("i");  
    icon.className="bi bi-volume-up";
    btn.appendChild(icon)
    nbtn.appendChild(btn);    
    sn.appendChild(nbtn);
    var box = document.querySelector('.caja'+nna3Data[posicion].id);    
    var positionT = box.offsetTop + box.offsetHeight - 15;
    var positionL = box.offsetLeft + box.offsetWidth - 45;
    btn.style.marginTop = positionT+"px";
    btn.style.marginLeft = positionL+"px";    
  }
}

showSliderMensajes();
showSliderFiguras();


    function openTranscription(evt, TranscriptionNumber) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("link");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(TranscriptionNumber).style.display = "block";
      evt.currentTarget.className += " active";
    }


function functionModal(objButton){  
  var div=document.getElementById("start");
  div.innerHTML='00:00';
  var posicion = objButton.value
  var div=document.getElementById("nna-titulo");
  var titulo='';
  for(var a=0; a<nna3Data[posicion].titulo.length; a++)
  {    
    titulo=titulo+'<h5>'+nna3Data[posicion].titulo[a]+'</h5>';    
  }
  div.innerHTML=titulo;
  
  var div=document.getElementById("tag");
  var tags='';
  for(var a=0; a<nna3Data[posicion].etiquetas.length; a++)
  {    
    tags=tags+'<a href="'+nna3Data[posicion].etiquetas[a].url+'">'+nna3Data[posicion].etiquetas[a].texto+'</a>';
    if(a!=(nna3Data[posicion].etiquetas.length-1))
    {tags=tags+' | ';}
  }
  div.innerHTML=tags;
  var div=document.getElementById("audio-transcription-2");
  var transcription='';
  for(var a=0; a<nna3Data[posicion].transcripcion.length; a++)
  {    
    transcription=transcription+'<p>'+nna3Data[posicion].transcripcion[a]+'</p>';    
  }
  div.innerHTML=transcription;
  var div=document.getElementById("modal-description");    
  div.innerHTML=nna3Data[posicion].contexto;
  var div=document.getElementById("nna-imagen");
  div.setAttribute( 'src' , nna3Data[posicion].img.url);  

/*-------------------------------------------------------*/
  // Audio Transcription 
  const playerAudioTranscription=setupPlayerRT("#player-audio-transcription");
  playerAudioTranscription.addTracks([nna3Data[posicion].link]);
  $('#nna-audio-transcription-modal').on('hide.bs.modal', (e) => playerAudioTranscription.stop());

  const btn1 = $('button[data-toggler="audio-transcription-1"]');
  const btn2 = $('button[data-toggler="audio-transcription-2"]');
  btn2.click((e) => {
      $("div#audio-transcription-2").removeClass('d-none')
      $("div#audio-transcription-1").addClass('d-none')
  })

  btn1.click((e) => {
      $("div#audio-transcription-2").addClass('d-none')
      $("div#audio-transcription-1").removeClass('d-none')
  })

  const doubleTransLrc = new Lyricer({
      "divID": "audio-modal-double-transcription",
      "showLines": 1,
      "lineidPrefix": 'lyric-double-transcription',
      "clickable": false
  });
  doubleTransLrc.setLrc(nna3Data[posicion].basicTranscription)

  $("#player-audio-transcription audio").on("timeupdate", function () {
      doubleTransLrc.move(this.currentTime);
  });
}

//leer más

document.addEventListener("DOMContentLoaded", function() {  
  intervalo();
  var lmas = document.getElementById('lmas');
  var lmenos = document.getElementById('lmenos');
  var blockem = document.getElementById('bloquemas');
  if (lmas !== null){
    lmas.addEventListener('click', function(){
      this.style.display = 'none';
      blockem.style.display ='contents';
      var parr = document.querySelector('.parrafoppal');  
      parr.classList.toggle('parrMas');
    });  
    lmenos.addEventListener('click', function(){
      lmas.style.display ='contents';
      blockem.style.display ='none';
      var parr = document.querySelector('.parrafoppal');  
      parr.classList.toggle('parrMas');
    });
  }
});
