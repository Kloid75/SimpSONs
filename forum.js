let messages = [
    {
        sender: "mr customer",
        date: "2010-05-10",
        title: "looking for someone",
        body: "Hi, I'm looking for someone I used to know in high school. I'm wondering if I could find him here?"
    },
    {
        sender: "Moe",
        date: "2010-05-10",
        title: "re: looking for someone",
        body: "Let's ask around. What's his name?"
    },
    {
        sender: "mr customer",
        date: "2010-05-10",
        title: "re: looking for someone",
        body: "Yeah, his name is Seymore Butz."
    },
    {
        sender: "Moe",
        date: "2010-05-10",
        title: "re: looking for someone",
        body: "Is there a Butz here? Everybody! I wanna Seymore Butz!"
    },
    {
        sender: "Barney",
        date: "2010-05-10",
        title: "re: looking for someone",
        body: "LOL"
    },
    {
        sender: "Moe",
        date: "2010-05-10",
        title: "re: looking for someone",
        body: "Oh, wait a minute. Listen you little scum-sucking pus bucket. When I get my hands on you, I'm gonna pull out your eyeballs with a corkscrew!"
    },
    {
        sender: "mr customer",
        date: "2010-05-10",
        title: "re: looking for someone",
        body: "😂😂😂😂😂😂😂😂😂😂😂",
    }
]
function add(e) {
    e.preventDefault()
    var n = document.getElementById("name").value
    var t = document.getElementById("title").value
    var m = document.getElementById("maintext").value
    var aika = new Date();
    var p = aika.toLocaleDateString()
    var newmsg = {
        sender: n,
        date: p,
        title: t,
        body: m,
    }
    messages.push(newmsg)
    luoteksti()
}
var tekstit = document.getElementById("tekstit")
function luoteksti() {
    tekstit.innerHTML = ""
    for (var message of messages) {
        var teksti = document.createElement('tr')
        var lähettäjä = document.createElement('td')
        lähettäjä.innerHTML = message.sender
        teksti.append(lähettäjä)
        var määrä = document.createElement('td')
        määrä.innerHTML = message.date
        teksti.append(määrä)
        var otsikko = document.createElement('td')
        otsikko.innerHTML = message.title
        teksti.append(otsikko)
        var pääteksti = document.createElement('td')
        pääteksti.innerHTML = message.body
        teksti.append(pääteksti)
        tekstit.append(teksti)
    }
}
luoteksti()