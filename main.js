let body = document.querySelector('body')
function dardMode() {
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
}

function lightMode() {
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";

}

let users = [
    {
        id: 1,
        usernames: 'Ibrohim ',
        userSurname: 'JOnkaev',
        age: 14,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 20,
        quvvat: 2380,
        rank: 'bot'
    },
    {
        id: 2,
        usernames: 'Fri ',
        userSurname: 'Firev',
        age: 15,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '4321',
        ligin: '1234',
        coin: 2023,
        quvvat: 230,
        rank: '-bot'
    },
    {
        id: 3,
        usernames: 'Joha ',
        userSurname: 'kaskatov',
        age: 16,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '23234',
        ligin: '765456',
        coin: 0,
        quvvat: 200,
        rank: '+bot'
    },
    {
        id: 4,
        usernames: 'Muham',
        userSurname: 'Muhamov',
        age: 11,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 2000,
        quvvat: 2,
        rank: 'superbot'
    },
    {
        id: 5,
        usernames: 'Omina',
        userSurname: 'Ominovich',
        age: 69,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 69,
        quvvat: 96,
        rank: 'BOt'
    },
    {
        id: 6,
        usernames: 'Aziza',
        userSurname: 'TamaEVA',
        age: 25,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: 69692,
        ligin: 785795,
        coin: 'fitfilion',
        quvvat: 5,
        rank: 'MegaBot'
    },
    {
        id: 7,
        usernames: 'Iska',
        userSurname: 'Isovich',
        age: 1,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 0,
        quvvat: 100,
        rank: 'ZumkaBot'
    },
    {
        id: 8,
        usernames: 'Ziyo',
        userSurname: 'kol',
        age: 15,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '2346765',
        coin: 510,
        quvvat: 0,
        rank: 'JingaleBot'
    },
    {
        id: 9,
        usernames: 'Jaska',
        userSurname: 'Jaskayovich',
        age: 55,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: -1350,
        quvvat: -100,
        rank: 'GigaBot'
    },
    {
        id: 10,
        usernames: 'ertan',
        userSurname: 'Emirhan',
        age: 55,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '234124',
        ligin: '1254124',
        coin: 2200,
        quvvat: 10,
        rank: 'Old BOT'
    },
    {
        id: 11,
        usernames: 'OtashBT',
        userSurname: 'chatGPT',
        age: 55,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 100,
        quvvat: 0,
        rank: 'CHat Bot'
    },
    {
        id: 12,
        usernames: 'ChocoPay',
        userSurname: 'SinChoPay',
        age: 99,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '12345',
        coin: 100,
        quvvat: 0,
        rank: 'vonka Bot'
    },

    {
        id: 14,
        usernames: 'Abu',
        userSurname: 'Uba',
        age: 0,
        group: 'F2-2495',
        teacherName: 'Emirhan Ertan',
        password: '12345',
        ligin: '23456',
        coin: 1,
        quvvat: 0,
        rank: 'abu Bot'
    },
    {
        id: 14,
        usernames: 'EMir',
        userSurname: 'Senyor',
        age: 1000,
        group: 'F2-2495',
        teacherName: 'Students',
        password: '3321',
        ligin: '66544',
        coin: 1158,
        quvvat: 0,
        rank: 'CHeburashka bot'
    },
]


let tastiq = document.querySelector('.submit-btn').addEventListener('click', (e) => {
    e.preventDefault()

    let loginID = document.querySelector('.loginId')
    let Pasword = document.querySelector('.Paswrod')

    let valueID = loginID.value
    let valuePasword = Pasword.value

    let findUser = users.find(e => Number(e.ligin) === Number(valueID) && Number(e.password) === Number(valuePasword))

    if (findUser) {

        window.location.href = './about.html'
    } else {

    }

    let local = localStorage.setItem('studets', JSON.stringify(findUser))





})

