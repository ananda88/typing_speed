let score = 0;
let timeCounter = 60
const scoreList = []
function setTimer(timer) {
    setTimeout(() => {
        document.getElementById("result_holder").style.display = 'block'
        document.getElementById("reset-button").style.display = 'block'
        document.getElementById("button-holder").style.display = 'none'
        document.getElementById("result_text_container").innerHTML = `<p>Your speed was <span style="color: green;">${score / (timer / 60000)}</span> WPM</p>`
        scoreList.push(score / (timer / 60000))
        clearInterval(inval)
    }, timer)
    timeCounter = timer / 1000
    const inval = setInterval(() => {
        timeCounter -= 1
        document.getElementById("timer").textContent = (Math.trunc(timeCounter / 60)).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) + ":" + (timeCounter % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
    }, 1000)
    document.getElementById("result_holder").style.display = 'none'
}
function closeModal(){
    document.getElementById("result_holder").style.display = 'none'
}

function resetTest(){
    document.getElementById("button-holder").style.display = 'block'
    document.getElementById("result_text_container").style.display = 'none'
    document.getElementById("reset-button").style.display = 'none'
    score = 0
    // location.reload()
    startup()
}


const text1 = "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[10] It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM). The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O. JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js. Although Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design."
const text2 = `The ECMAScript specification is a standardized specification of a scripting language developed by Brendan Eich of Netscape; initially named Mocha, then LiveScript, and finally JavaScript.[4] In December 1995, Sun Microsystems and Netscape announced JavaScript in a press release.[5] In November 1996, Netscape announced a meeting of the Ecma International standards organization to advance the standardization of JavaScript.[6] The first edition of ECMA-262 was adopted by the Ecma General Assembly in June 1997. Several editions of the language standard have been published since then. The name "ECMAScript" was a compromise between the organizations involved in standardizing the language, especially Netscape and Microsoft, whose disputes dominated the early standards sessions. Eich commented that "ECMAScript was always an unwanted trade name that sounds like a skin disease."[7] ECMAScript has been formalized through operational semantics by work at Stanford University and the Department of Computing, Imperial College London for security analysis and standardization.[8] "ECMA" stood for "European Computer Manufacturers Association" until 1994. `
const text3 = `Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA),[17] meaning that compiled Java code can run on all platforms that support Java without the need to recompile.[18] Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub,[citation not found][19][20] particularly for client–server web applications, with a reported 9 million developers.[21]. Java was originally developed by James Gosling at Sun Microsystems. It was released in May 1995 as a core component of Sun Microsystems' Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed most of its Java technologies under the GPL-2.0-only license. Oracle offers its own HotSpot Java Virtual Machine, however the official reference implementation is the OpenJDK JVM which is free open-source software and used by most developers and is the default JVM for almost all Linux distributions.As of March 2023, Java 20 is the latest version, while Java 17, 11 and 8 are the current long-term support (LTS) versions.`
const text4 = `Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different computers).[9][10][11] Git was originally authored by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development.[12] Since 2005, Junio Hamano has been the core maintainer. As with most other distributed version control systems, and unlike most client–server systems, every Git directory on every computer is a full-fledged repository with complete history and full version-tracking abilities, independent of network access or a central server.[13] Git is free and open-source software shared under the GPL-2.0-only license.`
const text5 = `Life is full of ups and downs. It is full of moments of joy and sorrow, triumph and defeat, hope and despair. Everyone is on a journey of self-discovery and discovery of the world around them. Life is a precious gift and we should make the most of it and live it to the fullest. Life is not always perfect, but we can learn from our mistakes and strive to be better people. We must be open to change and be willing to take risks in order to reach our potential. Life is a learning process and it is important to remember that we are all on this journey together. We should be supportive of each other and help lift each other up during difficult times. Life is about relationships, both with ourselves and with others. We should always strive to build strong relationships with those around us and nurture our relationships with ourselves. Life is about making meaningful connections and having meaningful conversations. It is about seeking out new experiences and exploring new ideas. Life is about courage, resilience, and strength. We should never be afraid to take risks, follow our dreams, and be bold in the face of adversity. Life is about creating your own path and embracing who you are. It’s about living with purpose, passion, and love. Ultimately, life is an adventure, a journey of self-reflection, growth, and discovery.`
const textList = [text1, text2, text3, text4, text5]
function startup() {
    // create graph
    for(let s of scoreList){
        let bar = document.createElement('div')
        bar.style.height = 3*s+"px"
        bar.style.width = '23px'
        // bar.style.textAlign = 'center'
        bar.style.padding = '10px';
        bar.style.color = 'white'
        bar.style.marginLeft = '20px'
        bar.style.display = 'inline'
        bar.style.backgroundColor = 'blue'
        bar.textContent = s
        document.getElementById('axis').innerHTML = ""
        document.getElementById('axis').appendChild(bar)
    }
    // complete creating graph
    const contentHolder = document.getElementById("holder");
    contentHolder.focus()
    contentHolder.innerHTML = ''
    const idx = Math.floor(Math.random()*5)
    console.log(idx)
    const textSplit = textList[idx].split("")
    let counter = 0;
    for (const char of textSplit) {
        const tempEle = document.createElement("span");
        tempEle.setAttribute("id", counter);
        tempEle.textContent = char;

        tempEle.style.display = 'inline-block'
        if (char == ' ') {
            tempEle.style.paddingRight = '10px'
        } else {
            tempEle.style.paddingRight = '4px'
        }

        tempEle.style.paddingTop = '30px'
        contentHolder.appendChild(tempEle);
        counter += 1;
    }
   document.getElementById("0").style.borderBottom = '2px solid blueviolet'
    let newCounter = 0
    let spaceCount = 10
    let spaceMultiplier = 1
    window.addEventListener("keydown", (event) => {
        if (event.key == "Shift") {

        } else {
            if (event.key == textSplit[newCounter]) {
                if (event.keyCode == 32) {
                    if (spaceCount != 0) {
                        spaceCount -= 1
                        event.preventDefault()
                    } else {
                        document.getElementById("holder").scroll(0, spaceMultiplier * 60)
                        spaceCount = 10
                        spaceMultiplier += 1
                    }
                }
                let selEle = document.getElementById(newCounter)
                selEle.style.color = "green"
                selEle.style.borderBottom = 'none'
                newCounter += 1
                if (event.code == 'Space') {
                    score += 1
                }
                selEle = document.getElementById(newCounter)
                selEle.style.color = "blue"
                selEle.style.borderBottom = '2px solid blueviolet'
            } else {
                let selEle = document.getElementById(newCounter)
                selEle.style.color = "red"
            }

        }
    })

}