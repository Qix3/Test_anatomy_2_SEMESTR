// ============================================================
// АНАТОМИЯ — ОБНОВЛЁННЫЙ МАССИВ (200 вопросов из предоставленного файла)
// ============================================================
const ALL_QUESTIONS = [
    { q: "Назовите поверхности сердца", a: ["Передняя и задняя","Медиастинальная и реберная","Грудино-реберная и диафрагмальная","Грудинная и позвоночная"], c: 2 },
    { q: "Какими сосудами и где заканчивается большой круг кровообращения", a: ["В левом предсердии, легочными венами","В правом предсердии, легочными венами","В правом желудочке, верхней и нижней полыми венами","В правом предсердии, верхней и нижней полыми венами"], c: 3 },
    { q: "Укажите части аорты", a: ["Восходящая и нисходящая аорта","Восходящая, дуга аорты, нисходящая аорта","Грудная и брюшная аорта","Дуга аорты и нисходящая аорта"], c: 1 },
    { q: "Укажите висцеральные ветви грудной аорты", a: ["Aa.bronchiales, phrenicae, esophagei, mediastinales","Aa.bronchiales, aa.intercostales posteriores","Aa.bronchiales, esophagei, pericardiaci, mediastinales","Aa.intercostales, pericardiaci, esophagei, mediastinales"], c: 2 },
    { q: "Укажите парные висцеральные ветви брюшной аорты", a: ["Aa.renales, a.suprarenales, aa.phrenicae inferiores et superiores","Aa.testiculares (a.ovarica), aa.renales et aa.lumbales","A.ovarica (a.testicularis), a.renalis, a.suprarenalis media","Aa.renales, aa.glandulae suprarenales superiores et aa.lumbales"], c: 2 },
    { q: "Назовите задние ветви наружной сонной артерии", a: ["A.occipitalis, a.facialis, a.pharingea","A.occipitalis, a.auricularis posterior, a.sternacleidomastaidea","A.occipitalis, a.auricularis posterior, a.thyroidea","A.auricularis posterior, a.maxillaris, a.temporalis"], c: 1 },
    { q: "От какого сосуда отходит подключичная артерия", a: ["Слева от truncus brachiocephalicus, справа от arcus aortae","Слева от arcus aortae, справа от aorta ascendens","Слева от arcus aortae, справа от truncus brachiocephalicus","Слева от aorta ascendens, справа от arcus aorta"], c: 2 },
    { q: "Какие сосуды образуют поверхностную ладонную дугу", a: ["A.ulnaris et palmaris superficialis a.radialis","A.ulnaris et r.palmaris profundus a.radialis","A.radialis et r.palmaris superficialis a.ulnaris","A.radialis et r.palmaris profundus a.ulnaris"], c: 0 },
    { q: "Назовите конечные ветви аорты", a: ["Aa.iliacae communes et a.sacralis mediana","Aa.iliacae externa et interna","Aa.iliacae internae","Aa.sacrales mediana et lateralis"], c: 0 },
    { q: "Укажите артерии входящие в состав горизонтальной подошвенной дуги", a: ["A.plantaris lateralis, a.plantaris medialis","A.plantaris lateralis, a.plantaris medialis, a.arcuata","A.plantaris lateralis, a.plantaris medialis, r.plantaris profundus","A.plantaris medialis, r.plantaris profundus"], c: 2 },
    { q: "Ветви верхней брыжеечной артерии", a: ["A.colica dextra, a.iliocolica","A.colica media, a.colica sinistra","A.jejunalis, a.colica sinistra","A.illoedia, a.sigmoidea"], c: 0 },
    { q: "Правая желудочно-сальниковая артерия отходит", a: ["A.gastroduodenalis","A.mesenterica inferior","A.mesenterica superior","A.hepatica communis"], c: 0 },
    { q: "A. pudenda externa отходит от", a: ["A.femoralis","A.mesenterica inferior","A.iliaca externa","A.iliaca interna"], c: 0 },
    { q: "A. pudenda interna отходит от", a: ["A.iliaca externa","A.iliaca interna","A.femoralis","A.sacralis mediana"], c: 1 },
    { q: "Ветви бедренной артерии", a: ["A.circumflexa ilium superficialis, a.profunda femoris","A.epigastrica superficialis, a.circumflexa ilium profunda","A.profunda femoris, a.perforentes","A.profunda femoris, a.circumflexa femoris lateralis"], c: 3 },
    { q: "Куда вливаются venae pulmonales", a: ["Atrium dexter","Vena cava superior","Atrium sinister","V.azygos"], c: 2 },
    { q: "Размеры спинного мозга у взрослых", a: ["Длина в среднем 43 см, вес 34-38 г","Длина 35 см, вес 25 г","Длина 38 см, вес 30 г","Длина в среднем 43 см, вес 32 г"], c: 0 },
    { q: "Что видно на поперечных срезах спинного мозга", a: ["Substantia alba, substantia grisea","Canalis centralis, radix anterior","Cervix medullaris, cauda equina","Substantia alba, substantia grisea, canalis centralis"], c: 3 },
    { q: "Вкусовые чувства от передней 2/3 языка воспринимаются каким нервом", a: ["Барабанная струна","Блуждающий нерв","Языкоглоточный","Подъязычный"], c: 0 },
    { q: "На продолговатом мозге расположены ядра каких черепномозговых нервов", a: ["IX-XII пар","V-X пар","VII-XII пар","III, IX, X, XII пар"], c: 0 },
    { q: "Чем отделены дорсальная и вентральная части моста", a: ["Corpus trapezoideum","Formatio reticularis","Nuclei pontis","Ядра V-VIII пар нервов"], c: 0 },
    { q: "Какие ножки имеет мозжечок", a: ["Передний, задний, средний","Верхний, средний, нижний","Передний, нижний, средний","Левый, средний, правый"], c: 1 },
    { q: "Чем образована крыша IV желудочка", a: ["Velum medullare superior et inferius","Pedunculus cerebelli","Velum medullare medius et lateralis","Fossa rhomboidea"], c: 0 },
    { q: "Части среднего мозга", a: ["Tectus mesencephali, basis pedunculi cerebri","Tectum mesencephali, tegmentum","Tegmentum, basis pedunculi","Tectum mesencephali, pedunculi cerebri"], c: 3 },
    { q: "Из чего состоит epithalamus", a: ["Шишковидное тело, поводок, подушка","Шишковидное тело, поводок, треугольник поводка","Передний бугор, поводок, треугольник поводка","Шишковидное тело, поводок, передний бугор"], c: 1 },
    { q: "Доли полушария головного мозга", a: ["Lobus frontalis, temporalis, parietalis, occipitalis, insula","Lobus frontalis, insula, lobus occipitalis","Lobus frontalis, temporalis, cuneus, insula","Lobus frontalis, parietalis, occipitalis, cuneus"], c: 0 },
    { q: "Части полушария головного мозга", a: ["Плащ, боковые желудочки, обонятельный мозг, базальные ядра","Плащ, боковые желудочки, ствол мозга","Боковые желудочки, обонятельный мозг, мозжечок","Плащ, базальные ядра, обонятельный мозг, мозжечок"], c: 0 },
    { q: "Чем отделена височная доля головного мозга от других долек", a: ["Sulcus lateralis","Sulcus centralis","Sulcus parietooccipitalis","Sulcus precentralis"], c: 0 },
    { q: "Из каких видов волокон состоит белое вещество полушарий", a: ["Ассоциативные, комиссуральные, проекционные","Ассоциативные, интракортикальные, проекционные","Комиссуральные, экстракортикальные, проекционные","Ассоциативные, экстракортикальные, комиссуральные"], c: 0 },
    { q: "Части свода", a: ["Columnae fornicis, corpus, crura fornicis","Columnae fornicis, genu, crura fornicis","Columnae fornicis, caput genu, corpus","Tuberculum anterior, rostrum, crura fornicis"], c: 0 },
    { q: "Какие капсулы отделяют базальные ядра", a: ["Capsula anterior, interna et externa","Capsula externa, interna, extrema","Capsula posterior externa, interna","Capsula externa, interna, anterior"], c: 1 },
    { q: "На какие группы делятся проекционные проводящие пути", a: ["Центробежные и центростремительные","Афферентные-чувствительные, эфферентные-двигательные","Чувствительные и двигательные","Корковые и мозжечковые"], c: 1 },
    { q: "Чем сообщена барабанная полость с носоглоткой", a: ["Среднее ухо","Евстахиева труба","Наружный слуховой проход","Барабанная перепонка"], c: 1 },
    { q: "Чем заполнен перепончатый лабиринт", a: ["Клеткой","Перилимфой","Жидкостью","Эндолимфой"], c: 3 },
    { q: "Какие полукружные каналы расположены в лабиринте", a: ["Canalis semicircularis superior, posterior, lateralis","Canalis semicircularis anterior, posterior, lateralis","Canalis semicircularis inferior, superior, lateralis","Canalis semicircularis medius, posterior, lateralis"], c: 1 },
    { q: "Части барабанной перепонки", a: ["Pars tensa, pars flaccida","Pars superior et inferior","Pars anterior et posterior","Pars fibrosa, pars tensa"], c: 0 },
    { q: "Из каких частей состоит орган зрения", a: ["Глазное яблоко, мышцы","Глазное яблоко, зрительный нерв","Глаз и вспомогательные органы глаза","Глаз и слезный аппарат"], c: 2 },
    { q: "Где расположен перекрест кортико-нуклеарных путей", a: ["Перекресте пирамиды","Перекресте белого вещества","Передней серой шейке","В среднем мозге, мосте, продолговатом мозге"], c: 3 },
    { q: "Какие импульсы проводит пирамидный путь", a: ["Непроизвольные двигательные","Регулирующий мышечный тонус","Импульс идущий из мозжечка","Импульсы произвольного движения"], c: 3 },
    { q: "На какие группы делятся афферентные проводящие пути", a: ["Экстрацептивные, проприоцептивные и интероцептивные пути","Кожную и глубокой чувствительности","Экстрацептивные, интрацептивные, двигательные","Мозжечковые и корковые пути"], c: 0 },
    { q: "Из чего слагаются проводящие пути", a: ["Нейронов и ядер головного мозга","Нервных волокон","Белого вещества мозга","Серого вещества мозга"], c: 1 },
    { q: "Что соединяют ассоциативные проводящие пути", a: ["Полушария головного мозга","Извилины","Соединяют участки коры одного полушария","Желудочки"], c: 2 },
    { q: "Классификация проводящих путей", a: ["Ассоциативные, комиссуральные","Чувствительные, двигательные, ассоциативные","Длинные, средние, короткие","Ассоциативные, комиссуральные, проекционные"], c: 3 },
    { q: "Что входит в состав базальных ядер", a: ["Полосатое тело, миндалевидное тело","Хвостатое ядро, полосатое тело, ограда","Полосатое тело, миндалевидное тело, ограда","Червеобразное ядро, миндалевидное тело, ограда"], c: 2 },
    { q: "Что образуют комиссуральные волокна", a: ["Переднюю спайку, свод, мозолистое тело","Переднюю спайку, свод, пояс","Переднюю спайку, пояс, мозолистое тело","Свод, пояс, мозолистое тело"], c: 0 },
    { q: "Где находится островок", a: ["На височной доле","На дне центральной борозды","На лобной доле","На дне латеральной борозды"], c: 3 },
    { q: "Из чего состоит metathalamus", a: ["Epithalamus, corpus geniculatum","Pulvinar thalami, epithalamus","Corpora geniculata laterale et mediale","Corpus geniculatum, thalamus opticus"], c: 2 },
    { q: "Из каких частей состоит промежуточный мозг", a: ["Зрительный бугор, III желудочек, подбугорье","Подбугорье, забугорье, зрительный бугор","Thalamencephalon, hypothalamus, III желудочек","Thalamus opticus, metathalamus, III желудочек"], c: 1 },
    { q: "Ядро каких пар черепно-мозговых нервов расположено на дне ромбовидной ямки", a: ["V-XII","IX-XII","V-VIII","III-VIII"], c: 0 },
    { q: "Чем образовано дно IV желудочка", a: ["Recessus medialis","Recessus lateralis","Pons, medulla oblongata","Fossa rhomboidea"], c: 3 },
    { q: "Полостью какого мозгового пузыря является IV желудочек", a: ["Rhombencephalon","Metencephalon","Mesencephalon","Prosencephalon"], c: 0 },
    { q: "Какие ядра имеет мозжечок", a: ["N.dentatus, n.emboliformis, n.amygdaloideum","N.fastigi, n.emboliformis, n.globosus, n.dentatus","N.ruber, substantia nigra","N.fastigi, n.olive, n.emboliformis, n.amygdaloideum"], c: 1 },
    { q: "Ядра каких пар черепно-мозговых нервов расположены на дорсальной части моста", a: ["V, VII, X","IV, VI, V","V-VIII","VI, VII, VIII"], c: 3 },
    { q: "Какие проводящие пути проходят на задних канатиках продолговатого мозга", a: ["Проводящий путь проприоцептивного чувства","Проводящий путь двигательного анализатора","Проводящий путь слухового анализатора","Путь поверхностной чувствительности"], c: 0 },
    { q: "Части головного мозга", a: ["Полушарие, мозжечок, продолговатый мозг","Полушарие, мозжечок, мост","Полушарие большого мозга, мозжечок, ствол мозга","Полушарие, мост, продолговатый мозг"], c: 2 },
    { q: "Где расположено субдуральное пространство", a: ["Между твердой и мягкой мозговыми оболочками","Между надкостницей и твердой мозговой оболочками","Между костью и твердой оболочками","Между твердой и паутинной оболочками"], c: 3 },
    { q: "Где расположено эпидуральное пространство", a: ["Между надкостницей и твердой мозговой оболочками","Между костью и твердой мозговой оболочкой","Между твердой и мягкой оболочками","Между твердой и паутинной оболочками"], c: 1 },
    { q: "Какие канатики имеет спинной мозг", a: ["Funiculus anterior, media, posterior","Funiculus media, lateralis, posterior","Funiculus anterior, lateralis, posterior","Funiculus anterior, superior, posterior"], c: 2 },
    { q: "Количество сегментов спинного мозга", a: ["31","30","32","29"], c: 0 },
    { q: "Где находится нижняя граница спинного мозга", a: ["На уровне II-III поясничных позвонков","На уровне I-II поясничных позвонков","На уровне III-IV поясничных позвонков","На уровне XII грудного I поясничного позвонков"], c: 1 },
    { q: "Части височной кости", a: ["Pars squamosa, pars tympanica, pars petrosa","Pars squamosa, petrosa, mastoidea","Pars petrosa, pars tympanica","Pars squamosa, pars basilaris"], c: 0 },
    { q: "Откуда отходит a. carotis communis sinistra", a: ["Aorta ascendens","Truncus brachiocephalicus","Arcus aortae","A. subclavia sinister"], c: 2 },
    { q: "Откуда отходит a. subclavia dextra", a: ["Truncus brachiocephalicus","A. carotis communis dextra","Arcus aortae","Aorta descendens"], c: 0 },
    { q: "Откуда отходит a. vertebralis", a: ["A. carotis interna","A. carotis externa","A. intercostalis posterior","A. subclavia"], c: 3 },
    { q: "Откуда отходит a. cerebri posterior", a: ["A. carotis externa","A. carotis interna","A. basilaris","A. subclavia"], c: 2 },
    { q: "Откуда отходит a. subclavia sinistra", a: ["Arcus aortae","A. carotis communis sinister","Aorta ascendens","Aorta descendens"], c: 0 },
    { q: "A. arcuata отходит от", a: ["A. plantaris medialis","A. plantaris lateralis","A. tibialis posterior","A. dorsalis pedis"], c: 3 },
    { q: "A. genus descendens отходит от", a: ["A. femoralis","A. tibialis anterior","A. poplitea","A. tibialis posterior"], c: 0 },
    { q: "Ветви наружной подвздошной артерии", a: ["A. epigastrica superficialis, a. circumflexa ilium profunda","A. epigastrica inferior, a. circumflexa ilium superficialis","A. epigastrica inferior, a. circumflexa ilium profunda","A. epigastrica inferior, a. pudenda externa"], c: 2 },
    { q: "A. peronea отходит от", a: ["A. tibialis posterior","A. tibialis anterior","A. poplitea","A. femoralis"], c: 0 },
    { q: "Ветви внутренней подвздошной артерии", a: ["A. sacralis lateralis, a. sacralis mediana","A. iliolumbalis, a. vesicalis inferior","A. glutea inferior, a. glutea superior","A. glutea superior, a. umbilicalis"], c: 2 },
    { q: "Ветви нижней брыжеечной артерии", a: ["A. ileocolica, a. colica sinistra, a. sigmoidea","A. colica dextra, a. sigmoidea, a. rectalis superior","A. colica media, a. sigmoidea, a. rectalis superior","A. colica sinistra, a. sigmoidea, a. rectalis superior"], c: 3 },
    { q: "Ветви tr. coeliacus", a: ["A. hepatica communis, a. lienalis, a. gastrica sinistra","A. hepatica propria, a. lienalis, a. gastrica dextra","A. hepatica propria, a. lienalis, aa. gastricae breves","A. gastroepiploica dextra, a. gastrica dextra, a. lienalis"], c: 0 },
    { q: "Назовите основные артерии свободной нижней конечности", a: ["A. femoralis, a. poplitea, a. plantaris medialis et lateralis","A. iliaca externa, a. femoralis","A. femoralis, a. tibialis, a. peronea","A. femoralis, a. poplitea, a. tibialis anterior, a. tibialis posterior"], c: 3 },
    { q: "Какие сосуды образуют глубокую ладонную дугу", a: ["A. ulnaris et r. radialis","A. radialis et r. palmaris profundus a. ulnaris","A. ulnaris et r. palmaris profundus a. radialis","A. ulnaris et r. palmaris superficialis a. radialis"], c: 1 },
    { q: "Назовите магистральную артерию плеча", a: ["A. profunda brachii","A. brachialis","A. axillaris","A. subscapularis"], c: 1 },
    { q: "Где расположена внутренняя сонная артерия в полости черепа", a: ["В canalis n. hypoglossi","В cavum tympani","В canalis caroticus, в sulcus caroticus","В sulcus sigmoideus"], c: 2 },
    { q: "Назовите передние ветви наружной сонной артерии", a: ["A. thyroidea superior et inferior, a. lingualis","A. thyroidea superior, a. facialis","A. facialis, a. lingualis, a. occipitalis","A. thyroidea superior, a. lingualis et a. facialis"], c: 3 },
    { q: "Укажите непарные висцеральные ветви брюшной аорты", a: ["Truncus celiacus, a. mesenterica superior, a. mesenterica inferior","Aa. mesenterica superior et inferior, a. rectalis superior","Truncus celiacus, a. mesenterica superior et a. gastrica","Truncus celiacus, a. lienalis, a. hepatica communis"], c: 0 },
    { q: "Укажите париетальные ветви брюшной аорты", a: ["Aa. phrenicae, suprarenales, renales, lumbales","Aa. phrenicae inferiores, lumbales, a. sacralis mediana","Aa. lumbales, a. sacralis mediana et lateralis","Aa. lumbales et intercostales inferiores, a. sacralis"], c: 1 },
    { q: "Укажите париетальные ветви грудной части аорты", a: ["Aa. phrenicae et esophagei","Aa. intercostales posteriores, aa. phrenicae superiores","Aa. intercostales posteriores, bronchiales, esophagei","Aa. intercostales anteriores, diaphragmatis, esophagei"], c: 1 },
    { q: "От слияния каких стволов образуется ductus thoracicus", a: ["Truncus lumbalis dexter et sinister","Truncus subclavia dexter et sinister","Truncus jugularis dexter et sinister","Truncus intestinalis dexter et sinister"], c: 0 },
    { q: "Лимфа от верхней половины живота оттекает", a: ["Nodi lymphatici inguinales","Nodi lymphatici axillares","Nodi lymphatici mesenterici superiores","Nodi lymphatici lumbales"], c: 3 },
    { q: "Лимфа от нижней половины живота оттекает", a: ["Nodi lymphatici mesenterici inferiores","Nodi lymphatici inguinales","Nodi lymphatici axillares","Nodi lymphatici mesenterici superiores"], c: 1 },
    { q: "Лимфатические сосуды вдоль v. saphena magna впадают", a: ["Nodi lymphatici inguinales profundi","Nodi lymphatici popliteales","Nodi lymphatici inguinales superficiales","Nodi lymphatici iliaci externi"], c: 2 },
    { q: "Лимфа из латеральных отделов молочной железы отводится", a: ["Nodi lymphatici axillares","Nodi lymphatici mediastinales anteriores","Nodi lymphatici mediastinales posteriores","Nodi lymphatici parasternales"], c: 0 },
    { q: "От тела языка лимфа оттекает", a: ["Nodi lymphatici parotidei","Nodi lymphatici mastoidei","Nodi lymphatici submandibulares","Nodi lymphatici occipitales"], c: 2 },
    { q: "Из нижней доли левого легкого лимфа оттекает", a: ["Truncus bronchomediastinalis sinister","Truncus jugularis dexter","Truncus bronchomediastinalis dexter","Truncus jugularis sinister"], c: 0 },
    { q: "Из верхней доли легкого лимфа оттекает", a: ["Truncus bronchomediastinalis dexter","Truncus jugularis sinister","Truncus jugularis dexter","Truncus bronchomediastinalis sinister"], c: 0 },
    { q: "Из нижней доли правого легкого лимфа оттекает", a: ["Truncus bronchomediastinalis sinister","Truncus bronchomediastinalis dexter","Truncus jugularis sinister","Truncus jugularis dexter"], c: 1 },
    { q: "Из слепой кишки и червеобразного отростка лимфа отводится", a: ["Nodi lymphatici colici dextri","Nodi lymphatici colici sinistri","Nodi lymphatici colici medii","Nodi lymphatici ileocolici"], c: 3 },
    { q: "Из глотки и небных миндалин лимфа оттекает", a: ["Nodi lymphatici retropharyngei","Nodi lymphatici submandibulares","Nodi lymphatici submentales","Nodi lymphatici faciales"], c: 0 },
    { q: "Из чего развивается сердце", a: ["Мезенхима","Мезодерма","Эктодерма","Энтодерма"], c: 1 },
    { q: "Вес сердца новорожденного", a: ["24 г","15 г","20 г","30 г"], c: 0 },
    { q: "Форма сердца новорожденного", a: ["Конусовидная","Округлая","Цилиндрическая","Овальная"], c: 1 },
    { q: "Из чего развиваются артерии", a: ["Из дорсальной аорты, латеральных и вентральных сегментарных артерий","Из вентральных аорт, жаберных или аортальных дуг","Из вентральных и дорсальных аорт и аортальных дуг","Из дорсальных аорт и дуг"], c: 2 },
    { q: "Что такое иммунитет", a: ["Невосприимчивость к веществам, обладающим чужеродными, антигенными свойствами","Защитная реакция организма","Способность организма участвовать в гемопоэзе","Невосприимчивость к различным заболеваниям"], c: 0 },
    { q: "Какие органы принадлежат к центральным органам иммунной системы", a: ["Лимфатические узлы, вилочковая железа","Селезенка, вилочковая железа, костный мозг","Селезенка, костный мозг, миндалины","Вилочковая железа, костный мозг"], c: 3 },
    { q: "Назовите корни верхней полой вены", a: ["V. brachiocephalica dextra et v. brachiocephalica sinistra","V. jugularis et v. subclavia","Vv. jugularis externa et interna","V. brachiocephalica dextra et v. jugularis"], c: 0 },
    { q: "Назовите основной приток верхней полой вены", a: ["V. hemiazygos et v. accessoria","V. jugularis","V. subclavia","V. azygos"], c: 3 },
    { q: "Назовите основные притоки плечеголовных вен", a: ["V. jugularis interna et v. subclavia","Vv. jugulares externa et interna","V. axillaris et v. subclavia","V. jugularis externa et v. subclavia"], c: 0 },
    { q: "Какие группы притоков выделяют у внутренней яремной вены", a: ["Наружные и внутренние","Передние, средние и задние","Внутричерепные и внечерепные","Черепные и шейные"], c: 2 },
    { q: "Перечислите внечерепные притоки внутренней яремной вены", a: ["Синусы твердой мозговой оболочки, передняя яремная вена","V. retromandibularis, v. facialis, vv. pharyngei, v. lingualis, v. thyroidea sup.","Vv. jugulares externa et anterior","V. maxillaris, v. mandibularis, v. ophthalmica"], c: 1 },
    { q: "Назовите поверхностные вены свободной верхней конечности", a: ["V. axillaris, v. brachialis, v. profunda brachii","V. ulnaris, v. radialis, vv. interdigitales superficiales","Vv. dorsales manus, v. radialis, v. ulnaris, v. interossea","V. basilica, v. cephalica, v. intermedia cubiti"], c: 3 },
    { q: "Артерия надпочечной железы", a: ["A. suprarenalis superior, media et inferior","A. suprarenalis media et anterior","A. suprarenalis superior et posterior","A. suprarenalis media, anterior et inferior"], c: 0 },
    { q: "Правая желудочная артерия отходит", a: ["A. hepatica communis","A. gastroduodenalis","A. hepatica propria","Tr. coeliacus"], c: 2 },
    { q: "Левая желудочная артерия отходит", a: ["Tr. coeliacus","A. gastroduodenalis","A. mesenterica inferior","A. mesenterica superior"], c: 0 },
    { q: "Правая желудочно-сальниковая артерия отходит", a: ["A. mesenterica inferior","A. mesenterica superior","A. gastroduodenalis","A. hepatica communis"], c: 2 },
    { q: "Левая желудочно-сальниковая артерия отходит", a: ["A. lienalis","A. gastroduodenalis","A. mesenterica superior","A. hepatica communis"], c: 0 },
    { q: "Откуда отходит a. vertebralis (повтор)", a: ["A. carotis interna","A. subclavia","A. carotis externa","A. intercostalis posterior"], c: 1 },
    { q: "Граница брюшной аорты", a: ["От XI грудного до II поясничного позвонка","От XII грудного до V поясничного позвонка","От XI грудного до III поясничного позвонка","От XII грудного до IV поясничного позвонка"], c: 3 },
    { q: "Основные ветви a. brachialis", a: ["A. profunda brachii, a. collateralis ulnaris superior et inferior","A. profunda brachii, a. circumflexa humeri anterior et posterior","A. profunda brachii, a. ulnaris et radialis","A. profunda brachii, r. muscularis"], c: 0 },
    { q: "Уровень отхождения truncus coeliacus от аорты", a: ["XI грудной позвонок","I поясничный позвонок","II поясничный позвонок","XII грудной позвонок"], c: 3 },
    { q: "Уровень отхождения нижней брыжеечной артерии", a: ["XII поясничный позвонок","III поясничный позвонок","I поясничный позвонок","II поясничный позвонок"], c: 1 },
    { q: "Уровень отхождения верхней брыжеечной артерии", a: ["XII грудной, I поясничный позвонки","XI-XII грудные позвонки","I поясничный позвонок","II поясничный позвонок"], c: 2 },
    { q: "Ветви a. mesenterica inferior (повтор)", a: ["A. colica media, colica sinistra, a. sigmoidea","A. colica dextra, media, sinistra","A. colica sinistra, sigmoidea, a. rectalis superior","A. colica sinistra et a. sigmoidea"], c: 2 },
    { q: "Назовите корни верхней полой вены (повтор)", a: ["V. jugularis et v. subclavia","V. brachiocephalica dextra et v. brachiocephalica sinistra","Vv. jugularis externa et interna","V. brachiocephalica dextra et v. jugularis"], c: 1 },
    { q: "Назовите глубокие вены руки", a: ["Vv. radiales, ulnares, brachiales","V. profunda brachii, vv. interossei anterior et posterior","V. axillaris, v. subclavia, truncus brachiocephalicus","V. axillaris, v. subscapularis, v. suprascapularis"], c: 0 },
    { q: "От слияния каких вен образуется нижняя полая вена", a: ["V. iliaca communis dextra et v. iliaca communis sinistra","V. iliaca interna et v. iliaca externa","V. iliaca externa et v. sacralis mediana","Vv. gluteae, vv. sacrales laterales, vv. iliolumbales"], c: 0 },
    { q: "Где находится красный костный мозг", a: ["В эпифизах трубчатых костей, в губчатых плоских и коротких костях","В костномозговом канале","В диафизах костей","В губчатых костях"], c: 0 },
    { q: "Где находится желтый костный мозг", a: ["В диафизах коротких трубчатых костей","В трубчатых костях","В плоских губчатых костях","В диафизах длинных трубчатых костей"], c: 3 },
    { q: "Строение селезенки у новорожденного", a: ["Губчатого характера","Дольчатое","Ячеистое","Гладкая, однообразная"], c: 1 },
    { q: "Какова форма лимфатического узла", a: ["Овальная, бобовидная","Бобовидная, плоская","Округлая, треугольная","Бобовидная, треугольная"], c: 0 },
    { q: "Строение селезенки у новорожденного (повтор)", a: ["Губчатого характера","Дольчатое","Ячеистое","Гладкая, однообразная"], c: 1 },
    { q: "Какова форма лимфатического узла (повтор)", a: ["Бобовидная, плоская","Округлая, треугольная","Овальная, бобовидная","Бобовидная, треугольная"], c: 2 },
    { q: "На какие слои делится паренхима лимфатического узла", a: ["Корковый и внутренний","Наружный и внутренний","Фолликулярный и безфолликулярный","Корковый и мозговой"], c: 3 },
    { q: "В каком возрасте вилочковая железа достигает максимума в весе", a: ["Пубертатный период","В раннем детстве","В I детском возрасте","Во II детском возрасте"], c: 0 },
    { q: "Чем образована мозговая часть вилочковой железы", a: ["Тельцами Гассаля","Фолликулами","Т-лимфоцитами","Дольками"], c: 2 },
    { q: "Где расположена селезенка", a: ["В левом подреберье на уровне IX-XII ребер","В левом подреберье на уровне IX-XI ребер","В левом подреберье","В брюшной полости"], c: 1 },
    { q: "Чем образована белая пульпа селезенки", a: ["Фолликулами","Лимфоидными узелками","Лимфоцитами","Макрофагами"], c: 1 },
    { q: "Укажите местоположение сердца", a: ["В верхней части переднего средостения","В верхней части заднего средостения","В нижней части заднего средостения","В нижней части переднего средостения"], c: 3 },
    { q: "Перечислите борозды сердца", a: ["Передняя межжелудочковая, задняя межжелудочковая, венечная","Передняя вертикальная и задняя межжелудочковая","Передняя межпредсердная и задняя межжелудочковая борозды","Венечная и межпредсердная борозды"], c: 0 },
    { q: "Назовите слои стенки сердца", a: ["Эпикард, миокард, эндокард","Серозный, мышечный, слизистый","Мышечный, соединительно-тканный и адвентиция","Внутренний, мышечный и адвентиция"], c: 0 },
    { q: "Перечислите камеры сердца", a: ["Правое предсердие, левое предсердие, желудочек","Правое предсердие, венозный синус, артериальный конус, желудочек","Правое предсердие, левое предсердие, правый желудочек, левый желудочек","Правое предсердие, левое предсердие, правое и левое ушки"], c: 2 },
    { q: "Какие клапаны имеются в сердце", a: ["Продольные и поперечные","Митральный и аортальный","Аортальный и легочного ствола","Предсердно-желудочковые и артериальные"], c: 3 },
    { q: "Где располагается 3-х створчатый клапан", a: ["В левом предсердно-желудочковом отверстии","В луковице аорты","В правом предсердно-желудочковом отверстии","В межпредсердной перегородке"], c: 2 },
    { q: "Где располагается 2-х створчатый клапан", a: ["В левом предсердно-желудочковом отверстии","В начале легочного ствола","В луковице аорты","В межпредсердной перегородке"], c: 0 },
    { q: "Где располагаются полулунные клапаны", a: ["В левом предсердно-желудочковом отверстии","В правом предсердно-желудочковом отверстии","В аорте и легочном стволе","В межпредсердной перегородке"], c: 2 },
    { q: "Укажите верхнюю границу сердца", a: ["Верхний край III реберных хрящей","Верхний край II реберных хрящей","Верхний край грудины","Нижний край II ребра"], c: 0 },
    { q: "Укажите проекцию верхушки сердца", a: ["Слева от грудины, в IV межреберье","В V межреберье слева на 1 см кнутри от средней ключичной линии","Справа от грудины, на 1 см кнутри от сосковой линии в III межреберье","В V межреберье слева по подмышечной линии"], c: 1 },
    { q: "Какие крупные сосуды имеются на основании сердца", a: ["Аорта, непарная и полунепарная вены, желудочная артерия","Легочные вены, легочный ствол, чревный ствол, бронхиальные артерии","Аорта, легочный ствол, верхняя и нижняя полые вены, четыре легочные вены","Верхняя и нижняя полые вены, артериальный и венозный протоки"], c: 2 },
    { q: "Где начинается большой круг кровообращения", a: ["В правом желудочке, легочным стволом","В правом желудочке, аортой","В левом желудочке, аортой","В левом предсердии, аортой"], c: 2 },
    { q: "Где начинается малый круг кровообращения", a: ["В правом желудочке, аортой","В левом желудочке, аортой","В правом предсердии, верхней полой веной","В правом желудочке, легочным стволом"], c: 3 },
    { q: "Какими сосудами и где заканчивается большой круг кровообращения (повтор)", a: ["В левом предсердии, легочными венами","В правом желудочке, верхней и нижней полыми венами","В правом предсердии, легочными венами","В правом предсердии, верхней и нижней полыми венами"], c: 3 },
    { q: "Какими сосудами и где заканчивается малый круг кровообращения", a: ["Легочными венами в правом предсердии","Легочными венами в правом желудочке","Легочными венами в левом предсердии","Полыми венами в правом предсердии"], c: 2 },
    { q: "Укажите артерии входящие в состав горизонтальной подошвенной дуги (повтор)", a: ["A. plantaris lateralis, a. plantaris medialis","A. plantaris lateralis, a. plantaris medialis, a. arcuata","A. plantaris lateralis, a. plantaris medialis, r. plantaris profundus","A. plantaris medialis, r. plantaris profundus"], c: 2 },
    { q: "Ветви плечевой артерии", a: ["A. thoracoacromialis, a. collateralis ulnaris sup.","A. profunda brachii, a. collateralis ulnaris sup.","A. profunda brachii, a. thoracica interna","A. collateralis ulnaris inferior, a. circumflexa humeri anterior"], c: 1 },
    { q: "Ветви лучевой артерии", a: ["A. recurrens radialis, a. collateralis media","A. interossea anterior, a. recurrens radialis","A. recurrens radialis, a. princeps pollicis","A. princeps pollicis, a. collateralis media"], c: 2 },
    { q: "Ветви локтевой артерии", a: ["A. interossea communis, r. palmaris profundus","A. interossea communis, r. palmaris superficialis","A. interossea recurrens, r. palmaris superficialis","A. interossea anterior, r. carpeus palmaris"], c: 0 },
    { q: "Висцеральные ветви грудной аорты", a: ["R. bronchialis, r. intercostalis","R. bronchiales, r. mediastinales","R. esophageales, r. pulmonales","A. pulmonales, r. mediastinalis"], c: 1 },
    { q: "Парные висцеральные ветви брюшной аорты", a: ["A. suprarenalis superior, a. ovarica","A. ovarica, a. suprarenalis inferior","A. renalis, a. ovarica","A. testicularis, a. lumbales"], c: 2 },
    { q: "Какие артерии кровоснабжают диафрагму", a: ["A. phrenica superior et inferior, a. musculophrenica","A. phrenica superior, a. intercostalis posterior, a. thoracica interna","A. phrenica superior, a. phrenica inferior, a. epigastrica superior","A. phrenica superior et anterior, a. lumbales"], c: 2 },
    { q: "Нижняя надпочечная артерия начинается", a: ["A. testicularis","A. phrenica","A. renalis","A. lumbalis"], c: 2 },
    { q: "Ветви общей печеночной артерии", a: ["A. hepatica propria, a. gastrica dextra","A. hepatica propria, a. gastroduodenalis","A. gastroduodenalis, a. gastrica dextra","A. hepatica propria, a. gastroepiploica dextra"], c: 1 },
    { q: "Ветви селезеночной артерии", a: ["A. gastricae breves, r. pancreatici","A. gastroepiploica sinistra, a. gastrica sinistra","A. gastricae breves, a. gastrica dextra","R. pancreatici, a. gastroepiploica dextra"], c: 0 },
    { q: "Артерии малой кривизны желудка", a: ["A. gastrica dextra et gastroepiploica sinistra","A. gastrica dextra et a. gastrica sinistra","A. gastrica sinistra et gastroepiploica dextra","A. gastrica dextra et a. gastricae breves"], c: 1 },
    { q: "Артерии большой кривизны желудка", a: ["A. gastroepiploica dextra et a. gastrica sinistra","A. gastroepiploica sinistra et a. gastrica dextra","A. gastricae breves et a. gastrica sinistra","A. gastroepiploica dextra et sinistra"], c: 3 },
    { q: "Артерии поджелудочной железы", a: ["A. pancreatico-duodenalis superior, r. pancreatici","A. pancreatico-duodenalis superior et inferior, r. pancreatica","A. pancreatico-duodenalis inferior, r. pancreatici","R. pancreatici, a. lienalis"], c: 1 },
    { q: "A. genus descendens отходит от (повтор)", a: ["A. femoralis","A. poplitea","A. tibialis anterior","A. tibialis posterior"], c: 0 },
    { q: "A. arcuata отходит от (повтор)", a: ["A. plantaris medialis","A. dorsalis pedis","A. plantaris lateralis","A. tibialis posterior"], c: 1 },
    { q: "Куда вливаются venae pulmonales (повтор)", a: ["Atrium sinister","Atrium dexter","Vena cava superior","V. azygos"], c: 0 },
    { q: "От какой артерии отходит truncus costocervicalis", a: ["A. axillaris","A. carotis externa","A. subclavia","A. carotis interna"], c: 2 },
    { q: "От какой артерии отходит a. transversa colli", a: ["A. carotis externa","A. carotis interna","A. axillaris","A. subclavia"], c: 3 },
    { q: "От какой артерии отходит a. thoracica superior", a: ["A. axillaris","A. subclavia","Aorta thoracica","A. carotis externa"], c: 0 },
    { q: "От какой артерии отходит a. thoracica lateralis", a: ["A. carotis externa","A. axillaris","A. subclavia","A. brachialis"], c: 1 },
    { q: "От какой артерии отходит a. circumflexa humeri posterior", a: ["A. axillaris","A. brachialis","A. subclavia","A. vertebralis"], c: 0 },
    { q: "От какой артерии отходит a. circumflexa humeri anterior", a: ["A. axillaris","A. subclavia","A. brachialis","A. thoracica lateralis"], c: 0 },
    { q: "От какой артерии отходит a. collateralis ulnaris superior", a: ["A. radialis","A. subclavia","A. brachialis","A. axillaris"], c: 2 },
    { q: "От какой артерии отходит a. collateralis ulnaris inferior", a: ["A. brachialis","A. axillaris","A. subclavia","A. ulnaris"], c: 0 },
    { q: "От какой артерии отходит a. interossea communis", a: ["A. radialis","A. ulnaris","A. brachialis","A. axillaris"], c: 1 },
    { q: "От какой артерии отходит a. intercostales posteriores", a: ["Aorta thoracica","A. thoracica lateralis","A. vertebralis","A. thoracica interna"], c: 0 },
    { q: "От какой артерии отходит a. phrenica superior", a: ["A. thoracica interna","Aorta abdominalis","Aorta thoracica","A. thoracica lateralis"], c: 2 },
    { q: "От какой артерии отходит a. gastrica sinistra", a: ["Truncus coeliacus","A. mesenterica superior","A. lienalis","A. hepatica communis"], c: 0 },
    { q: "От какой артерии отходит a. gastrica dextra", a: ["Truncus coeliacus","A. lienalis","A. hepatica propria","A. mesenterica superior"], c: 2 },
    { q: "От какой артерии отходит a. gastroepiploica dextra", a: ["A. lienalis","Truncus coeliacus","A. mesenterica superior","A. gastroduodenalis"], c: 3 },
    { q: "От какой артерии отходит a. gastroepiploica sinistra", a: ["A. lienalis","A. gastroduodenalis","Truncus coeliacus","A. hepatica communis"], c: 0 },
    { q: "От какой артерии отходит aa. gastricae breves", a: ["A. hepatica propria","Truncus coeliacus","A. hepatica communis","A. lienalis"], c: 3 },
    { q: "От какой артерии отходит a. colica dextra", a: ["A. mesenterica inferior","Truncus coeliacus","A. ileocolica","A. mesenterica superior"], c: 3 },
    { q: "От какой артерии отходит a. colica media", a: ["A. mesenterica superior","A. mesenterica inferior","Truncus coeliacus","A. colica dextra"], c: 0 },
    { q: "От какой артерии отходит a. colica sinistra", a: ["A. colica media","A. mesenterica superior","A. mesenterica inferior","Aorta abdominalis"], c: 2 },
    { q: "От какой артерии отходят aa. sigmoidea", a: ["A. mesenterica inferior","A. colica sinistra","A. mesenterica superior","A. iliaca externa"], c: 0 },
    { q: "От какой артерии отходит a. rectalis superior", a: ["A. iliaca externa","A. mesenterica superior","A. iliaca interna","A. mesenterica inferior"], c: 3 },
    { q: "От какой артерии отходит a. rectalis media", a: ["A. iliaca interna","A. mesenterica inferior","A. iliaca externa","A. sigmoidea"], c: 0 },
    { q: "От какой артерии отходит a. suprarenalis media", a: ["A. phrenica inferior","Aorta abdominalis","A. renalis","A. mesenterica inferior"], c: 1 },
    { q: "От какой артерии отходит a. testicularis", a: ["Aorta abdominalis","A. pudenda interna","A. mesenterica inferior","A. iliaca interna"], c: 0 },
    { q: "От какой артерии отходит a. ovarica", a: ["A. iliaca interna","Aorta abdominalis","A. mesenterica inferior","A. iliaca externa"], c: 1 },
    { q: "От какой артерии отходят aa. lumbales", a: ["A. mesenterica superior","A. iliaca externa","Aorta abdominalis","A. iliaca interna"], c: 2 },
    { q: "От какой артерии отходит a. sacralis mediana", a: ["Aorta abdominalis","A. iliaca interna","A. iliaca externa","A. mesenterica inferior"], c: 0 },
    { q: "От какой артерии отходит a. sacralis lateralis", a: ["A. iliaca externa","Aorta abdominalis","A. iliaca interna","A. mesenterica inferior"], c: 2 },
    { q: "От какой артерии отходит a. obturatoria", a: ["A. iliaca interna","A. glutea inferior","A. iliaca externa","A. sacralis lateralis"], c: 0 },
    { q: "От какой артерии отходит a. rectalis inferior", a: ["A. mesenterica inferior","A. pudenda interna","A. iliaca interna","A. iliaca externa"], c: 1 },
    { q: "От какой артерии отходит a. epigastrica superficialis", a: ["A. femoralis","A. mesenterica inferior","A. iliaca externa","A. iliaca interna"], c: 0 },
    { q: "От какой артерии отходит a. genus descendens (ещё раз)", a: ["A. poplitea","A. femoralis","A. tibialis anterior","A. tibialis posterior"], c: 1 },
    { q: "Где находится chordae tendineae", a: ["Между m. pectinati и клапаном","В полости предсердий","Между m. papillaris и стенкой желудочка","В полости желудочков"], c: 2 },
    { q: "Из каких слоев состоит миокард в предсердиях", a: ["Поверхностного и глубокого","Наружного и внутреннего","Верхнего и нижнего","Переднего, среднего и заднего"], c: 0 },
    { q: "Из каких слоев состоит миокард в желудочках", a: ["Поверхностного и глубокого","Верхнего и нижнего","Поверхностного, среднего, глубокого","Переднего, среднего, заднего"], c: 2 },
    { q: "Что кровоснабжает rr. bronchiales", a: ["Стенку бронхов и прилежащую легочную ткань","Стенки бронхов и трахеи","Стенки бронхов и легкие","Только бронхи"], c: 0 },
    { q: "Из каких вен формируются общие подвздошные вены", a: ["Rr. parietales et viscerales","V. mesenterica inferior et vv. gluteae","Vv. uterinae, rectales, vesicales","V. iliaca externa et v. iliaca interna"], c: 3 },
    { q: "Перечислите поверхностные вены свободной нижней конечности", a: ["V. saphena magna et parva","V. saphena lateralis et medialis","V. saphena anterior et posterior","V. saphena superior et inferior"], c: 0 },
    { q: "Назовите корни воротной вены", a: ["V. gastrica, v. hepatica, v. lienalis","V. lienalis, v. mesenterica superior, v. mesenterica inferior","V. gastrica, v. lienalis, v. pancreatica","V. hepatica, v. mesenterica superior et inferior"], c: 1 },
    { q: "Где располагается воротная вена", a: ["В печеночно-двенадцатиперстной связке","В венечной связке печени","В серповидной связке печени","В печеночно-желудочной связке"], c: 0 }
];

// ============================================================
// ОСНОВНАЯ ЛОГИКА ТЕСТА (полностью сохранена)
// ============================================================
let currentSession = {
    questionsList: [],
    originalQuestions: [],
    wrongQuestions: [],
    currentIndex: 0,
    score: 0,
    timerInterval: null,
    timeLeft: 30,
    active: false,
    userAnswers: [],
    isAnswered: false
};

let lastUsedIndices = JSON.parse(localStorage.getItem('lastQuestionIndicesAnatomy') || '[]');

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function shuffleQuestionOptions(question) {
    const newOptions = [...question.a];
    const correctText = question.a[question.c];
    const shuffledIndices = shuffleArray([0, 1, 2, 3]);
    const newAnswers = shuffledIndices.map(i => newOptions[i]);
    const newCorrectIndex = newAnswers.findIndex(txt => txt === correctText);
    return { text: question.q, answers: newAnswers, correct: newCorrectIndex };
}

function getRandomQuestions(count) {
    const total = ALL_QUESTIONS.length;
    let available = [...Array(total).keys()].filter(i => !lastUsedIndices.includes(i));
    if (available.length < count) available = [...Array(total).keys()];
    const selected = [];
    for (let i = 0; i < count; i++) {
        const rand = Math.floor(Math.random() * available.length);
        selected.push(available[rand]);
        available.splice(rand, 1);
    }
    lastUsedIndices = lastUsedIndices.concat(selected).slice(-60);
    localStorage.setItem('lastQuestionIndicesAnatomy', JSON.stringify(lastUsedIndices));
    return selected.map(idx => ({ ...ALL_QUESTIONS[idx] }));
}

function prepareSessionFromQuestions(originalQuestions) {
    return originalQuestions.map(q => shuffleQuestionOptions(q));
}

const startScreen = document.getElementById('startScreen');
const quizDiv = document.getElementById('quizScreen');
const resultDiv = document.getElementById('resultScreen');
const qText = document.getElementById('qText');
const answersDiv = document.getElementById('answersContainer');
const qNumSpan = document.getElementById('qNum');
const progressFill = document.getElementById('progressFill');
const timerSecondsSpan = document.getElementById('timerSeconds');
const timerCircleFill = document.querySelector('#timerRing .fill');
const exitBtn = document.getElementById('floatingExitBtn');
const exitModal = document.getElementById('exitModal');
const historyBtn = document.getElementById('historyBtn');
const historyModal = document.getElementById('historyModal');
const errorsModal = document.getElementById('errorsModal');
const errorsListDiv = document.getElementById('errorsList');

const circumference = 2 * Math.PI * 30;

function updateTimerUI(seconds) {
    timerSecondsSpan.innerText = seconds;
    const offset = circumference - (seconds / 30) * circumference;
    timerCircleFill.style.strokeDashoffset = offset;
}

function stopTimer() {
    if (currentSession.timerInterval) clearInterval(currentSession.timerInterval);
}

function startTimer() {
    stopTimer();
    currentSession.timeLeft = 30;
    updateTimerUI(30);
    currentSession.timerInterval = setInterval(() => {
        if (!currentSession.active) return;
        if (currentSession.timeLeft <= 1) {
            stopTimer();
            handleTimeout();
        } else {
            currentSession.timeLeft--;
            updateTimerUI(currentSession.timeLeft);
        }
    }, 1000);
}

function handleTimeout() {
    if (!currentSession.active || currentSession.isAnswered) return;
    currentSession.isAnswered = true;
    const originalQ = currentSession.originalQuestions[currentSession.currentIndex];
    currentSession.userAnswers.push({
        correct: false,
        selected: -1,
        questionIndex: currentSession.currentIndex,
        userAnswerText: "⏰ Время вышло",
        correctAnswerText: originalQ.a[originalQ.c],
        questionText: originalQ.q,
        originalQuestion: originalQ
    });
    goToNextQuestion();
}

function renderCurrentQuestion() {
    currentSession.isAnswered = false;
    const q = currentSession.questionsList[currentSession.currentIndex];
    qText.innerText = q.text;
    qNumSpan.innerText = `ВОПРОС ${currentSession.currentIndex + 1}/${currentSession.questionsList.length}`;
    answersDiv.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.answers.forEach((ans, idx) => {
        const btn = document.createElement('div');
        btn.className = 'answer-btn';
        btn.innerHTML = `<div class="letter">${letters[idx]}</div><div>${ans}</div>`;
        btn.onclick = () => handleAnswer(idx, ans);
        answersDiv.appendChild(btn);
    });
    progressFill.style.width = `${(currentSession.currentIndex / currentSession.questionsList.length) * 100}%`;
    startTimer();
}

function handleAnswer(selectedIdx, selectedText) {
    if (!currentSession.active || currentSession.isAnswered) return;
    currentSession.isAnswered = true;
    stopTimer();
    const currentQ = currentSession.questionsList[currentSession.currentIndex];
    const originalQ = currentSession.originalQuestions[currentSession.currentIndex];
    const isCorrect = (selectedIdx === currentQ.correct);
    if (isCorrect) currentSession.score++;
    currentSession.userAnswers.push({
        correct: isCorrect,
        selected: selectedIdx,
        questionIndex: currentSession.currentIndex,
        userAnswerText: selectedText,
        correctAnswerText: originalQ.a[originalQ.c],
        questionText: originalQ.q,
        originalQuestion: originalQ
    });
    const btns = document.querySelectorAll('.answer-btn');
    if (btns[selectedIdx]) btns[selectedIdx].classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect && btns[currentQ.correct]) btns[currentQ.correct].classList.add('correct');
    setTimeout(() => goToNextQuestion(), 800);
}

function goToNextQuestion() {
    if (currentSession.currentIndex + 1 < currentSession.questionsList.length) {
        currentSession.currentIndex++;
        renderCurrentQuestion();
    } else {
        finishTest();
    }
}

function finishTest() {
    currentSession.active = false;
    stopTimer();
    const total = currentSession.questionsList.length;
    const points = currentSession.score;
    const wrongIndices = currentSession.userAnswers.filter(a => !a.correct).map(a => a.questionIndex);
    currentSession.wrongQuestions = wrongIndices.map(idx => currentSession.originalQuestions[idx]);
    showResultScreen(points, total);
    saveToHistory(points, total, currentSession.originalQuestions.map(q => ({ ...q })));
    exitBtn.style.display = 'none';
}

function saveToHistory(score, total, originalQuestionsCopy) {
    const history = JSON.parse(localStorage.getItem('testHistoryAnatomy') || '[]');
    history.unshift({
        date: new Date().toLocaleString(),
        score,
        total,
        questionIndices: originalQuestionsCopy.map(q => ALL_QUESTIONS.findIndex(orig => orig.q === q.q && orig.a[orig.c] === q.a[q.c]))
    });
    if (history.length > 20) history.pop();
    localStorage.setItem('testHistoryAnatomy', JSON.stringify(history));
}

function getMotivationalMessage(score, total) {
    const percent = (score / total) * 100;
    if (percent === 100) return "🌟 Гениально! 25/25 — идеальное знание анатомии! 🌟";
    if (percent >= 90) return "🏆 Блестящий результат! Ты мастер анатомии! 🏆";
    if (percent >= 80) return "🎉 Отлично! Очень хороший результат! 🎉";
    if (percent >= 64) return "👍 Хороший результат! Но есть куда расти. Повтори несколько тем.";
    if (percent >= 50) return "📚 Неплохо, но можно лучше. Сосредоточься на ошибках.";
    if (percent >= 30) return "🤔 Ты старался, но анатомия требует больше внимания.";
    return "💀 GAME OVER 💀 Ты совсем не подготовился. Учи анатомию!";
}

function showResultScreen(score, total) {
    quizDiv.style.display = 'none';
    resultDiv.style.display = 'block';
    const message = getMotivationalMessage(score, total);
    let animClass = '';
    if (score < 12) animClass = 'gameover-burst';
    else if (score >= 20) animClass = 'heaven-glow';
    
    const wrongCount = currentSession.userAnswers.filter(a => !a.correct).length;
    resultDiv.innerHTML = `
        <div class="result-screen">
            <div class="result-score ${animClass}">${score}/${total}</div>
            <div style="margin:20px 0; font-size:1.2rem;">${message}</div>
            <div class="stats-row">
                <div class="stat-pill green"><span class="val">✅ ${score}</span><span class="lbl">ВЕРНО</span></div>
                <div class="stat-pill red"><span class="val">❌ ${total - score}</span><span class="lbl">ОШИБКИ</span></div>
            </div>
            <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn-primary" id="restartNewSession">🎲 Новая сессия</button>
                <button class="btn btn-ghost" id="repeatSameTest">🔄 Повторить этот тест</button>
                ${wrongCount > 0 ? '<button class="btn btn-ghost" id="studyMistakesBtn">📖 Изучить ошибки</button>' : ''}
                <button class="btn btn-ghost" id="showErrorsBtn">❌ Разбор ошибок</button>
            </div>
        </div>
    `;
    document.getElementById('restartNewSession').onclick = () => location.reload();
    document.getElementById('repeatSameTest').onclick = () => {
        const newQuestions = prepareSessionFromQuestions(currentSession.originalQuestions);
        startTestWithQuestions(newQuestions, currentSession.originalQuestions);
    };
    if (wrongCount > 0) {
        document.getElementById('studyMistakesBtn').onclick = () => {
            const wrongOriginal = currentSession.wrongQuestions;
            const wrongShuffled = prepareSessionFromQuestions(wrongOriginal);
            startTestWithQuestions(wrongShuffled, wrongOriginal);
        };
    }
    document.getElementById('showErrorsBtn').onclick = () => showErrorsModal();
}

function showErrorsModal() {
    const errors = currentSession.userAnswers.filter(a => !a.correct);
    if (errors.length === 0) {
        errorsListDiv.innerHTML = '<div style="text-align:center;">🎉 Поздравляю! Нет ошибок 🎉</div>';
    } else {
        errorsListDiv.innerHTML = errors.map((err, idx) => `
            <div class="error-item">
                <div class="error-question">${idx+1}. ${err.questionText}</div>
                <div class="error-detail">❌ Ваш ответ: ${err.userAnswerText}</div>
                <div class="error-detail">✅ Правильный ответ: ${err.correctAnswerText}</div>
            </div>
        `).join('');
    }
    errorsModal.classList.add('active');
}

function startTestWithQuestions(shuffledQuestions, originalQuestions) {
    currentSession = {
        questionsList: shuffledQuestions,
        originalQuestions: originalQuestions,
        wrongQuestions: [],
        currentIndex: 0,
        score: 0,
        active: true,
        userAnswers: [],
        isAnswered: false
    };
    startScreen.style.display = 'none';
    quizDiv.style.display = 'block';
    resultDiv.style.display = 'none';
    exitBtn.style.display = 'flex';
    renderCurrentQuestion();
}

function startNewTest() {
    const originalQuestions = getRandomQuestions(25);
    const shuffledQuestions = prepareSessionFromQuestions(originalQuestions);
    currentSession = {
        questionsList: shuffledQuestions,
        originalQuestions: originalQuestions,
        wrongQuestions: [],
        currentIndex: 0,
        score: 0,
        active: true,
        userAnswers: [],
        isAnswered: false
    };
    startScreen.style.display = 'none';
    quizDiv.style.display = 'block';
    resultDiv.style.display = 'none';
    exitBtn.style.display = 'flex';
    renderCurrentQuestion();
}

document.getElementById('startTestBtn').onclick = startNewTest;

exitBtn.onclick = () => { if (currentSession.active) exitModal.classList.add('active'); };
document.getElementById('cancelExitBtn').onclick = () => exitModal.classList.remove('active');
document.getElementById('confirmExitBtn').onclick = () => { exitModal.classList.remove('active'); location.reload(); };

historyBtn.onclick = () => {
    const hist = JSON.parse(localStorage.getItem('testHistoryAnatomy') || '[]');
    const container = document.getElementById('historyList');
    if (hist.length === 0) container.innerHTML = '<div>Пока нет пройденных тестов.</div>';
    else container.innerHTML = hist.map(h => `<div class="history-item">📅 ${h.date}  —  балл: ${h.score}/${h.total}</div>`).join('');
    historyModal.classList.add('active');
};
document.getElementById('closeHistoryBtn').onclick = () => historyModal.classList.remove('active');
document.getElementById('closeErrorsBtn').onclick = () => errorsModal.classList.remove('active');
window.onclick = (e) => { if (e.target === exitModal) exitModal.classList.remove('active'); if (e.target === historyModal) historyModal.classList.remove('active'); if (e.target === errorsModal) errorsModal.classList.remove('active'); };