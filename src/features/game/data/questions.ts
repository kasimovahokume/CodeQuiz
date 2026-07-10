import { Question } from "../types";

// ASAN SUALLAR
export const easyQuestions: Question[] = [
  {
    id: 1,
    question: 'React Native nə üçün istifadə olunur?',
    options: ['Web sayt', 'Mobil tətbiq', 'Oyun serveri', 'Verilənlər bazası'],
    correctAnswer: 'Mobil tətbiq',
  },
  {
    id: 2,
    question: 'JSX nədir?',
    options: ['CSS növü', 'JavaScript sintaksisi', 'Verilənlər bazası', 'Server dili'],
    correctAnswer: 'JavaScript sintaksisi',
  },
  {
    id: 3,
    question: 'React Native hansı dildə yazılır?',
    options: ['Python', 'Java', 'JavaScript', 'Swift'],
    correctAnswer: 'JavaScript',
  },
  {
    id: 4,
    question: 'View komponenti nəyə bənzəyir?',
    options: ['<span>', '<div>', '<p>', '<a>'],
    correctAnswer: '<div>',
  },
  {
    id: 5,
    question: 'Text komponenti nə üçündür?',
    options: ['Şəkil göstərmək', 'Mətn göstərmək', 'Video oynatmaq', 'Səs çalmaq'],
    correctAnswer: 'Mətn göstərmək',
  },
  {
    id: 6,
    question: 'useState hansı hook-dur?',
    options: ['State hook', 'Effect hook', 'Ref hook', 'Context hook'],
    correctAnswer: 'State hook',
  },
  {
    id: 7,
    question: 'StyleSheet nə üçündür?',
    options: ['Naviqasiya', 'Stil yaratmaq', 'API çağırışı', 'Animasiya'],
    correctAnswer: 'Stil yaratmaq',
  },
  {
    id: 8,
    question: 'TouchableOpacity nə edir?',
    options: ['Şəkil göstərir', 'Klikləmə imkanı verir', 'Mətn yazır', 'Video oynadır'],
    correctAnswer: 'Klikləmə imkanı verir',
  },
  {
    id: 9,
    question: 'TextInput nə üçündür?',
    options: ['Mətn göstərmək', 'Mətn daxil etmək', 'Şəkil göstərmək', 'Səs yazmaq'],
    correctAnswer: 'Mətn daxil etmək',
  },
  {
    id: 10,
    question: 'React Native-i kim yaradıb?',
    options: ['Google', 'Facebook (Meta)', 'Microsoft', 'Apple'],
    correctAnswer: 'Facebook (Meta)',
  },
];

// ORTA SUALLAR
export const mediumQuestions: Question[] = [
  {
    id: 1,
    question: 'useEffect nə vaxt işləyir?',
    options: ['Render zamanı', 'Render-dən sonra', 'Render-dən əvvəl', 'Heç vaxt'],
    correctAnswer: 'Render-dən sonra',
  },
  {
    id: 2,
    question: 'Props nədir?',
    options: ['Komponentə göndərilən data', 'Stil', 'Funksiya', 'Dəyişən'],
    correctAnswer: 'Komponentə göndərilən data',
  },
  {
    id: 3,
    question: 'Flexbox-da justifyContent nəyi idarə edir?',
    options: ['Şaquli düzülüş', 'Üfüqi düzülüş', 'Rəng', 'Ölçü'],
    correctAnswer: 'Üfüqi düzülüş',
  },
  {
    id: 4,
    question: 'KeyboardAvoidingView nə edir?',
    options: ['Klaviaturanı gizlədir', 'Klaviaturanın örtməsinin qarşısını alır', 'Klaviatura açır', 'Heç nə'],
    correctAnswer: 'Klaviaturanın örtməsinin qarşısını alır',
  },
  {
    id: 5,
    question: 'FlatList nə üçün daha yaxşıdır?',
    options: ['Kiçik siyahılar', 'Böyük siyahılar', 'Şəkillər', 'Videolar'],
    correctAnswer: 'Böyük siyahılar',
  },
  {
    id: 6,
    question: 'Platform.OS nə qaytarır?',
    options: ['Cihazın adı', 'ios və ya android', 'Versiya', 'Model'],
    correctAnswer: 'ios və ya android',
  },
  {
    id: 7,
    question: 'useRef nə üçündür?',
    options: ['State üçün', 'Referansı saxlamaq üçün', 'Stil üçün', 'API üçün'],
    correctAnswer: 'Referansı saxlamaq üçün',
  },
  {
    id: 8,
    question: 'Modal komponenti nə göstərir?',
    options: ['Adi pəncərə', 'Pop-up pəncərə', 'Video', 'Şəkil'],
    correctAnswer: 'Pop-up pəncərə',
  },
  {
    id: 9,
    question: 'SafeAreaView nə üçündür?',
    options: ['Təhlükəsizlik', 'Ekranın təhlükəsiz sahəsi', 'Şifrə', 'Backup'],
    correctAnswer: 'Ekranın təhlükəsiz sahəsi',
  },
  {
    id: 10,
    question: 'ScrollView nə edir?',
    options: ['Yeniləyir', 'Sürüşdürməyə imkan verir', 'Silir', 'Yükləyir'],
    correctAnswer: 'Sürüşdürməyə imkan verir',
  },
];

// ÇƏTİN SUALLAR
export const hardQuestions: Question[] = [
  {
    id: 1,
    question: 'Hermes nədir?',
    options: ['Kitabxana', 'JavaScript engine', 'Framework', 'Database'],
    correctAnswer: 'JavaScript engine',
  },
  {
    id: 2,
    question: 'useMemo nə üçündür?',
    options: ['Yaddaşı təmizləmək', 'Dəyəri yadda saxlamaq (memoize)', 'API çağırmaq', 'Rendering'],
    correctAnswer: 'Dəyəri yadda saxlamaq (memoize)',
  },
  {
    id: 3,
    question: 'useCallback nəyi memoize edir?',
    options: ['Dəyəri', 'Funksiyanı', 'Komponenti', 'State-i'],
    correctAnswer: 'Funksiyanı',
  },
  {
    id: 4,
    question: 'React Native Bridge nədir?',
    options: ['Körpü', 'JS və Native arasında əlaqə', 'Kitabxana', 'API'],
    correctAnswer: 'JS və Native arasında əlaqə',
  },
  {
    id: 5,
    question: 'Redux nə üçün istifadə olunur?',
    options: ['Stil', 'Global state management', 'Naviqasiya', 'API'],
    correctAnswer: 'Global state management',
  },
  {
    id: 6,
    question: 'Context API nə həll edir?',
    options: ['API çağırışı', 'Prop drilling problemi', 'Stil problemi', 'Naviqasiya'],
    correctAnswer: 'Prop drilling problemi',
  },
  {
    id: 7,
    question: 'Animated API nə üçündür?',
    options: ['Şəkil', 'Animasiyalar', 'Video', 'Səs'],
    correctAnswer: 'Animasiyalar',
  },
  {
    id: 8,
    question: 'VirtualizedList əsasən nə üçündür?',
    options: ['Kiçik data', 'Performans üçün böyük siyahılar', 'Şəkillər', 'Formalar'],
    correctAnswer: 'Performans üçün böyük siyahılar',
  },
  {
    id: 9,
    question: 'New Architecture-də Fabric nədir?',
    options: ['Kitabxana', 'Yeni rendering sistemi', 'Database', 'API'],
    correctAnswer: 'Yeni rendering sistemi',
  },
  {
    id: 10,
    question: 'TusMoRundules nə üçündür?',
    options: ['Stil', 'Native modulları daha sürətli yükləmək', 'Animasiya', 'State'],
    correctAnswer: 'Native modulları daha sürətli yükləmək',
  },
];