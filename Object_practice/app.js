// Task 1

const student = {
    name: "John",
    surname: "Doe",
    age: 20,
    address: "123 Main St",
    currentCourse: "Web Development",
    willBeGraduated: "2027",

    salamla: function () {
        console.log("Hello " + this.name + " " + this.surname);
    },
    mezun_ili: function () {
        console.log("Graduation year: " + this.willBeGraduated + "\n" + "Current course: " + this.currentCourse + "\n" + "How many years left: " + (this.willBeGraduated - new Date().getFullYear()) + "\n");

    }
};
console.log("----- Task 1 -----\n");
student.salamla();
student.mezun_ili();

// Task 2

//const m?hsullar = {
//    items: [
//        { ad: "Laptop", qiym?t: 1200, kateqoriya: "elektronika", m?vcuddur: true },
//        { ad: "Telefon", qiym?t: 800, kateqoriya: "elektronika", m?vcuddur: false },
//        { ad: "Masa", qiym?t: 300, kateqoriya: "mebel", m?vcuddur: true },
//        { ad: "Kitab", qiym?t: 25, kateqoriya: "t?hsil", m?vcuddur: true },
//        { ad: "Komp?ter", qiym?t: 1500, kateqoriya: "elektronika", m?vcuddur: true }
//    ],

//    AvailableProducts: function () {
//        console.log("Available products:");
//        this.items.forEach(function (product) {
//            if (product.m?vcuddur) {
//                console.log(product.ad + " - " + product.qiym?t + " AZN");
//            }
//        });
//    },
//    ProductsLowerThan500: function () {
//        console.log("Products with price lower than 500 AZN:");
//        this.items.forEach(function (product) {
//            if (product.qiym?t < 500) {
//                console.log(product.ad + " - " + product.qiym?t + " AZN");
//            }
//        });
//    },
//    ElectronicsProducts: function () {
//        console.log("Electronics products:");
//        this.items.forEach(function (product) {
//            if (product.kateqoriya === "elektronika") {
//                console.log(product.ad + " - " + product.qiym?t + " AZN");
//            }
//        });
//    },
//    MostExpensiveProduct: function () {
//        let maxPrice = 0;
//        let expensiveProduct = null;
//        this.items.forEach(function (product) {
//            if (product.qiym?t > maxPrice) {
//                maxPrice = product.qiym?t;
//                expensiveProduct = product;
//            }
//        });
//        if (expensiveProduct) {
//            console.log("Most expensive product: " + expensiveProduct.ad + " - " + expensiveProduct.qiym?t + " AZN");
//        } else {
//            console.log("No products available.");
//        }
//    },
//    ProductsByCategory: function (category) {
//        console.log("Products in category '" + category + "':");
//        this.items.forEach(function (product) {
//            if (product.kateqoriya === category) {
//                console.log(product.ad + " - " + product.qiym?t + " AZN");
//            }
//        });
//    }

//};

//console.log("\n----- Task 2 -----\n");
//m?hsullar.AvailableProducts();
//m?hsullar.ProductsLowerThan500();
//m?hsullar.ElectronicsProducts();
//m?hsullar.MostExpensiveProduct();
//m?hsullar.ProductsByCategory("elektronika");

// Task 3

function Hesab(hesab_n?mr?si, sahib_ad, balans = 0) {
    return {
        hesab_n?mr?si,
        sahib_ad,
        balans,
        ?m?liyyat_tarixi: [],

        ?man?t(m?bl??) {
            if (m?bl?? <= 0) {
                console.log("?man?t m?bl??i m?sb?t olmal?d?r.");
                return;
            }
            this.balans += m?bl??;
            this.?m?liyyat_tarixi.push(`?man?t: ${m?bl??} AZN`);
        },

        ??xar??(m?bl??) {
            if (m?bl?? <= 0) {
                console.log("??xar?? m?bl??i m?sb?t olmal?d?r.");
                return;
            }
            if (m?bl?? > this.balans) {
                console.log("Kifay?t q?d?r balans yoxdur.");
                return;
            }
            this.balans -= m?bl??;
            this.?m?liyyat_tarixi.push(`??xar??: ${m?bl??} AZN`);
        },

        transfer(dig?r_hesab, m?bl??) {
            if (m?bl?? <= 0) {
                console.log("Transfer m?bl??i m?sb?t olmal?d?r.");
                return;
            }
            if (m?bl?? > this.balans) {
                console.log("Transfer ???n kifay?t q?d?r balans yoxdur.");
                return;
            }
            this.balans -= m?bl??;
            dig?r_hesab.balans += m?bl??;
            this.?m?liyyat_tarixi.push(`Transfer: ${dig?r_hesab.sahib_ad} hesab?na ${m?bl??} AZN`);
            dig?r_hesab.?m?liyyat_tarixi.push(`Transfer q?bul: ${this.sahib_ad} hesab?ndan ${m?bl??} AZN`);
        },

        get hesab_m?lumat?() {
            return {
                hesab_n?mr?si: this.hesab_n?mr?si,
                sahib_ad: this.sahib_ad,
                balans: this.balans,
                ?m?liyyat_tarixi: this.?m?liyyat_tarixi
            };
        }
    };
}


const hesab1 = Hesab("123456789", "?brahim");
const hesab2 = Hesab("987654321", "Elvin");


hesab1.?man?t(1000);
hesab1.??xar??(200);
hesab1.transfer(hesab2, 300);



console.log(hesab1.hesab_m?lumat?);
console.log(hesab2.hesab_m?lumat?);

// Task 4

const Library = {
    books: [],

    addBook: function (title, author, year) {
        const book = { title, author, year };
        this.books.push(book);
        console.log(`Book added: ${title} by ${author} (${year})`);
    },

    FindByAuthor: function (author) {
        const foundBooks = this.books.filter(book => book.author === author);
        console.log(`Books by ${author}:`);
        if (foundBooks.length > 0) {
            foundBooks.forEach(book => console.log(`${book.title} (${book.year})`));
        } else {
            console.log("No books found by this author.");
        }
    },

    YearMinMax: function (minYear, maxYear) {
        const filteredBooks = this.books.filter(book => book.year >= minYear && book.year <= maxYear);
        console.log(`Books published between ${minYear} and ${maxYear}:`);
        if (filteredBooks.length > 0) {
            filteredBooks.forEach(book => console.log(`${book.title} by ${book.author} (${book.year})`));
        } else {
            console.log("No books found in this year range.");
        }
    },

    Statistics: function () {
        const totalBooks = this.books.length;

        if (totalBooks === 0) {
            console.log("No books in the library.");
            return;
        }

        const oldestBook = this.books.reduce((oldest, book) => {
            return book.year < oldest.year ? book : oldest;
        });

        const newestBook = this.books.reduce((newest, book) => {
            return book.year > newest.year ? book : newest;
        });

        console.log(`Total books: ${totalBooks}`);
        console.log(`Oldest book: ${oldestBook.title} by ${oldestBook.author} (${oldestBook.year})`);
        console.log(`Newest book: ${newestBook.title} by ${newestBook.author} (${newestBook.year})`);
    }
};

// ---- Test ----
console.log("\n----- Task 4 -----\n");
Library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
Library.addBook("To Kill a Mockingbird", "Harper Lee", 1960);
Library.addBook("1984", "George Orwell", 1949);

Library.Statistics();

// Task 5

const al??_s?b?ti = {
    m?hsullar: [{ ad: "Apple iPhone", qiym?t: 1000, miqdar: 1, vergi_faizi: 18 },
    { ad: "Samsung TV", qiym?t: 800, miqdar: 2, vergi_faizi: 18 },
        { ad: "Kitab", qiym?t: 20, miqdar: 3, vergi_faizi: 0 }],
    TotalPrice: function (product) {
        let Tax = product.qiym?t *  (product.vergi_faizi / 100)
        console.log("TotalPrice: " + (product.qiym?t + Tax));
    },
    OnlyTax: function (product) {
        let Tax = product.qiym?t * (product.vergi_faizi / 100);
        console.log("Only Tax: " + Tax);
    },
    AddProduct: function (product) {
        this.m?hsullar.push(product);
        console.log("Product added: " + product.ad);
    },
    DeleteProduct: function (productName) {
        this.m?hsullar = this.m?hsullar.filter(product => product.ad !== productName);
        console.log(`Product "${productName}" has been deleted.`);
    },
    CleanCart: function () {
        this.m?hsullar = [];
        console.log("Cart has been cleaned.");
    }
};

console.log("\n----- Task 5 -----\n");
al??_s?b?ti.TotalPrice(al??_s?b?ti.m?hsullar[0])
al??_s?b?ti.OnlyTax(al??_s?b?ti.m?hsullar[0]);
al??_s?b?ti.AddProduct({ ad: "Laptop", qiym?t: 1200, miqdar: 1, vergi_faizi: 18 });


// Task 6

const istifad??il?r = {
    users: [
        { ad: "?li", ya?: 25, ??h?r: "Bak?", maa?: 1500 },
        { ad: "Leyla", ya?: 30, ??h?r: "G?nc?", maa?: 1800 },
        { ad: "R??ad", ya?: 28, ??h?r: "Bak?", maa?: 2000 },
        { ad: "Nigar", ya?: 35, ??h?r: "Sumqay?t", maa?: 2200 }
    ],
    SortByCity: function (city) {
        console.log(`Users in ${city}:`);
        this.users.forEach(user => {
            if (user.??h?r === city) {
                console.log(`${user.ad}, Ya?: ${user.ya?}, Maa?: ${user.maa?}`);
            }
        });
    },
    HighestSalary: function () {

        HighestSalaryPerson = users.reduce((highest, user) => {
            return user.maa? > highest.maa? ? user : highest
        });
        console.log(`Highest salary: ${HighestSalaryPerson.ad}, Salary: ${HighestSalaryPerson.maa?}`);
    },
    FilterUnder30: function () {
        this.users.forEach(user => {
            if (user.ya? < 30) {
                console.log(`${user.ad}, Ya?: ${user.ya?}, ??h?r: ${user.??h?r}, Maa?: ${user.maa?}`);
            }
        });
    },
    GetHighEarners: function (minMaa?) {
        return this.users
            .filter(user => user.maa? > minMaa?)
            .map(user => user.ad);
    } 
};



console.log("\n----- Task 6 -----\n");
istifad??il?r.SortByCity("Bak?");


// Task 7
// Task 7 was hard that's why i do it with someone's help, someone who is really good at it :).
const configuration = {

    defaultSettings: {
        language: "az",
        theme: "light",
        notifications: true,
        autoSave: 10,
        fontSize: 14
    },


    userSettings: {},


    changeSetting(key, value) {
        this.userSettings[key] = value;
    },

    getSetting(key) {
        return this.userSettings.hasOwnProperty(key)
            ? this.userSettings[key]
            : this.defaultSettings[key];
    },


    resetSettings() {
        this.userSettings = {};
    },


    getAllSettings() {
        return {
            ...this.defaultSettings,
            ...this.userSettings
        };
    },


    exportSettings() {
        return JSON.stringify(this.getAllSettings());
    },


    importSettings(jsonString) {
        try {
            const imported = JSON.parse(jsonString);
            this.userSettings = { ...imported };
        } catch (error) {
            console.error("Invalid JSON format:", error.message);
        }
    }
};

configuration.changeSetting("theme", "dark");
configuration.changeSetting("fontSize", 16);

console.log(configuration.getSetting("theme")); // "dark"
console.log(configuration.getAllSettings());

const json = configuration.exportSettings();
console.log(json);

configuration.resetSettings();
console.log(configuration.getAllSettings());

configuration.importSettings(json);
console.log(configuration.getAllSettings());

// task 8

const textAnalyzer = {
    text: "",

    changeText(newText) {
        this.text = newText;
        return this;
    },


    letterCount() {
        return this.text.replace(/\s/g, "").length;
    },


    wordCount() {
        const words = this.text.trim().split(/\s+/);
        return this.text.trim() ? words.length : 0;
    },


    sentenceCount() {
        const matches = this.text.match(/[.!?](?=\s|$)/g);
        return matches ? matches.length : 0;
    },


    longestWord() {
        const words = this.text.trim().split(/\s+/);
        return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
    },


    wordFrequency() {
        const words = this.text.toLowerCase().match(/\b\w+\b/g) || [];
        const freq = {};
        words.forEach(word => {
            freq[word] = (freq[word] || 0) + 1;
        });
        return freq;
    },


    mostFrequentWord() {
        const freq = this.wordFrequency();
        let maxWord = "";
        let maxCount = 0;
        for (let word in freq) {
            if (freq[word] > maxCount) {
                maxWord = word;
                maxCount = freq[word];
            }
        }
        return maxWord;
    },

    averageWordLength() {
        const words = this.text.trim().split(/\s+/);
        if (words.length === 0 || !this.text.trim()) return 0;
        const totalLength = words.reduce((sum, word) => sum + word.length, 0);
        return totalLength / words.length;
    },


    statistics() {
        return {
            letterCount: this.letterCount(),
            wordCount: this.wordCount(),
            sentenceCount: this.sentenceCount(),
            longestWord: this.longestWord(),
            wordFrequency: this.wordFrequency(),
            mostFrequentWord: this.mostFrequentWord(),
            averageWordLength: this.averageWordLength().toFixed(2)
        };
    }
};

textAnalyzer.changeText("Hello world! This is a test. This test is great.");
console.log(textAnalyzer.statistics());

