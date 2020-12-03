import { v4 as uuidv4 } from 'uuid';

function chillHop(){
    return[
        {
            name: "Slim Bobby",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            artist: "Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10448",
            color: ["#F2CFEC", "#60709D"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Paved Paths",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            artist: "Leavv",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9919",
            color: ["#355546", "#778574"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Wildlife",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            artist: "Philanthrope, chromonicci",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10263",
            color: ["#6A433B", "#1B1313"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Faces",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/c50f86fb7696e5c5747e0fa2ada4fcbc2501fea7-1024x1024.jpg",
            artist: "Knowmadic",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8554",
            color: ["#554753", "#969A86"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Embers in the Dark",
            cover: "https://chillhop.com/wp-content/uploads/2020/06/52bd092974ccce9aa610c33f03575fc2d7f9c7d2-1024x1024.jpg",
            artist: "Osvaldo, Garot Michael Conklin",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8192",
            color: ["#557C86", "#919984"],
            id: uuidv4(),
            active: false
        },
        {
            name: "One Last Call",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            artist: "Nymano, Kanisan, Mau",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10134",
            color: ["#5B518A", "#8E6A8F"],
            id: uuidv4(),
            active: false
        }
    ]
}

export default chillHop;