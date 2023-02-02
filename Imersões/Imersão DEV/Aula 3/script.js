let listaFilmes = ["https://th.bing.com/th/id/OIF.VojdKXFdZGIGAIvgC2LfFg?pid=ImgDet&rs=1.jpg",
    "https://th.bing.com/th/id/OIP.pBdOuLW3zkj5DjYslbKg7QHaEK?pid=ImgDet&rs=1.jpg",
    "https://s2.glbimg.com/Sq8KjckAM1LQ4gwRXF5blVdfO5s=/e.glbimg.com/og/ed/f/original/2019/09/17/0c7c7ac6-1b3e-4e14-b36a-85fb92de2af6_lordoftherings.jpg",
    "https://th.bing.com/th/id/R.1ca7760613ba627a921da0d8330ffab5?rik=fMzuyjkKj7Yt9g&pid=ImgRaw&r=0.jpg",];

let nomeFilmes = ["The last of us", "Star Wars", "Lord of the Rings", "Harry Potter"]

for (let i = 0; i < listaFilmes.length; i++) {

    image = document.write("<img src=" + listaFilmes[i] + ">");
    title = document.write("<p>" + nomeFilmes[i] + "</p>");
    if (listaFilmes[i].includes('.jpg')) {
    } else {
        console.log("Erro")
    }
}