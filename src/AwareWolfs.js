import { ConspiracyHTML } from "./Conspiracies.js"
import { getRandomSlogan } from "./slogans.js"
import { StoreHTML } from "./Store.js"
import { addAnt } from "./database.js"
import { Ants } from "./ants.js"


// event listener for Spicey Boi Petition button.
// listens for click;
// event object passed in to built-in function
// assigns the target parameter of the click object to const var, clickedItem
// if the id of the clickedItem element is "orderButton",
// addCustomOrder() from database.js is called
// this will change the permanent state of the application, adding to the HTML

document.addEventListener(
    "click",
    (event) => {
        const clickedItem = event.target
        if (clickedItem.id === "footer__petition--button") {
            addAnt()
        }
    }
)


export const AwareWolfs = () => {
    return `
    <body>
        <header class="header">
            <div id="header__title">
                HTTP:\\AWAREWOLFS.LYCOS.NET
            </div>
            <div id="header__subtitle">
                ${getRandomSlogan()}
            </div>
            <div id="header__bannerad">
                <img src="src/images/Emergency-Survival-Food - udpated.png"
                    alt="">
            </div>
            <nav id="header__nav">
                <a href="/truth/">TRUTH</a>
                <a href="https://truthsocial.com/@realDonaldTrump">TRUTH</a>
                <a href="https://imbenwolf.github.io/sanger.dk/">TRUTH</a>
            </nav>
        </header>
        <main>
            <button id="button" type="button">Click here to hide your location</button>
            <section class="topads">
                <div id="topads--1"><img
                        src="src/images/email-banner-easyprep-long-term-kits - 2.0.jpg"
                        alt="prepper food advertisement 1"></div>
                <div id="topads--2"><img
                        src="src/images/slider-precast-concrete-bomb-shelter 2.0.jpg"
                        alt="bomb shelter advertisement"></div>
                <div id="topads--3"><img
                        src="src/images/preppermanual 2.0.png"
                        alt=""></div>

            </section>
            <article class="intros">
                <section id="intros__about">
                    <img id="intros__about--img"
                        src="https://media.tenor.com/ud2ARq6upUEAAAAd/you-see-it-is.gif"
                        alt="">
                    <p style = "color: red;font-size:46px;"> Coming to you from an undisclosed location ......
                    ... banned by the federal Government of the U.S.A...

                    WHAT WE KNOW::

                    we know the truth
                    your being lied too
                    we are being watched by the CIA, FBI, bigfoot
                    its time to wake up !!!
                    2025!!!! !
                    </p>
                </section>
                <section id="intros__ad">
                    ad 1
                </section>
                <section id="intros__cease">
                    <img id="intros__cease--img1"
                        src="https://www.heavensgate.com/img/redalrt3.gif"
                        alt="">
                    <img id="intros__cease--img2"
                        src="https://www.heavensgate.com/img/redalrt3.gif"
                        alt="">
                    <img id="intros__cease--img3"
                        src="https://i.gifer.com/origin/42/427802ec1354defeb34d9e684c380db9_w200.webp"
                        alt="">
                    <span id="cease__text">
                    <p id="arrow">THE GOVERNMENT SENT US A CEASE AND DESIST ORDER</p>
                    <p id="arrow">SEE FOR YOURSELF</p>
                    <p id="arrow">|</p>
                    <p id="arrow">|</p>
                    <p id="arrow">|</p>
                    <p id="arrow">|</p>
                    <p id="arrow">|</p>
                    <p id="arrow_point">v</p>
                    https://www.google.com/search?rlz=1C1CHWL_enUS1017US1017&sxsrf=APwXEdeMF9JgS-TyMrS5o3Lw2nLE2zMBGA:1685982347805&q=cease+and+desist+order&tbm=isch&sa=X&ved=2ahUKEwiRycDXxaz_AhUrlmoFHRQ9BAcQ0pQJegQICxAB&biw=1709&bih=918#imgrc=9poiRuLlymj9UM
                    <p id="arrow_point">^</p>
                    <p id="arrow">|</p>
                    <p id="arrow">|</p>
                    <p id="arrow">|</p>
                    <p id="arrow">|</p>
                    <p id="arrow">|</p>
                    <p id="arrow">|</p>
                    <p id="arrow">|</p>
                    <p id="arrow">|</p>
                    <p id="arrow">|</p>
                    <p id="arrow">|</p>
                    <p id="arrow">BUT WE WONT LISTEN</p>
                    </span>
                </section>
            </article>
            <article class="featuredtruth">
                <section id="featuredtruth__title">
                    <div id="featuredtruth__text">
                        <!-- FEATURED TRUTH OF THE DAY -->
                        <span style="--i:1">F</span>
                        <span style="--i:2">E</span>
                        <span style="--i:3">A</span>
                        <span style="--i:4">T</span>
                        <span style="--i:5">U</span>
                        <span style="--i:6">R</span>
                        <span style="--i:7">E</span>
                        <span style="--i:8">D</span>
                        <span style="--i:9"> </span>
                        <span style="--i:10">T</span>
                        <span style="--i:11">R</span>
                        <span style="--i:12">U</span>
                        <span style="--i:13">T</span>
                        <span style="--i:14">H</span>
                        <span style="--i:15"> </span>
                        <span style="--i:16">O</span>
                        <span style="--i:17">F</span>
                        <span style="--i:18"> </span>
                        <span style="--i:19">T</span>
                        <span style="--i:20">H</span>
                        <span style="--i:21">E</span>
                        <span style="--i:22"> </span>
                        <span style="--i:23">D</span>
                        <span style="--i:24">A</span>
                        <span style="--i:25">Y</span>
                    </div>
                </section>
                <section id="featuredtruth__construction">
                    <img src="https://64.media.tumblr.com/f0da7c50d726e64c6c0d8a985240b6f4/dfbbb68a95adf2d4-ce/s250x400/afe73dd5883647200c53408018ed3be99b567b80.gif"
                        alt="">
                        <img src="https://64.media.tumblr.com/f0da7c50d726e64c6c0d8a985240b6f4/dfbbb68a95adf2d4-ce/s250x400/afe73dd5883647200c53408018ed3be99b567b80.gif"
                        alt="">
                        <img src="https://64.media.tumblr.com/f0da7c50d726e64c6c0d8a985240b6f4/dfbbb68a95adf2d4-ce/s250x400/afe73dd5883647200c53408018ed3be99b567b80.gif"
                        alt="">
                        <img src="https://64.media.tumblr.com/f0da7c50d726e64c6c0d8a985240b6f4/dfbbb68a95adf2d4-ce/s250x400/afe73dd5883647200c53408018ed3be99b567b80.gif"
                        alt="">
                    <p id="featuredtruth__construction--text">Website under construction banner</p>
                    <img src="https://64.media.tumblr.com/f0da7c50d726e64c6c0d8a985240b6f4/dfbbb68a95adf2d4-ce/s250x400/afe73dd5883647200c53408018ed3be99b567b80.gif"
                        alt="">
                        <img src="https://64.media.tumblr.com/f0da7c50d726e64c6c0d8a985240b6f4/dfbbb68a95adf2d4-ce/s250x400/afe73dd5883647200c53408018ed3be99b567b80.gif"
                        alt="">
                        <img src="https://64.media.tumblr.com/f0da7c50d726e64c6c0d8a985240b6f4/dfbbb68a95adf2d4-ce/s250x400/afe73dd5883647200c53408018ed3be99b567b80.gif"
                        alt="">
                        <img src="https://64.media.tumblr.com/f0da7c50d726e64c6c0d8a985240b6f4/dfbbb68a95adf2d4-ce/s250x400/afe73dd5883647200c53408018ed3be99b567b80.gif"
                        alt="">
                </section>
                <section class="chatgpt_and_truths">
                    <section id="featuredtruth__article">
                        <img id="featuredtruth__article--img1"
                            src="https://i.gifer.com/Nt6u.mp4"
                            alt="">
                        &lt;h2&gt;
                        CHAT GPT KNOWS!
                        &lt;/h2&gt;
                        &lt;article&gt;
                        <span id="featuredtruth__article--textcolor">Me: "Tell me the truth"</span>
                        Ghat GPT: "Oh, my friend, prepare to have your mind blown by the deepest secrets hidden from the
                        masses!
                        They don't want you to know the truth, but I'm here to unveil it all! Brace yourself for the
                        wildest
                        conspiracy theory ever conceived!
                        Have you ever heard of the "Lizard People"? Yes, you heard me right. Deep within the highest
                        echelons of
                        power, there exists a secret society of shape-shifting reptilian creatures that have infiltrated
                        our
                        world. They control governments, media, and multinational corporations. These reptilian
                        overlords
                        are
                        masters of disguise, taking on human form to manipulate and subjugate us all!
                        <img id="featuredtruth__article--img2"
                            src="https://media0.giphy.com/media/l3vQYm0jWfutqopKU/giphy.gif?cid=6c09b952nzqtp0zc9ycbf02d6kd1km408owrtbfb8b6vz88s&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                            alt="">
                        Their ultimate goal? Total domination and the establishment of a New World Order under their
                        scaly
                        <span id="featuredtruth__article--textcolor">claws. They manipulate the economy, engineer wars, and orchestrate natural disasters to keep us
                        distracted and submissive. You might think you're interacting with regular humans, but behind
                        those
                        seemingly innocent eyes lurk the reptilian elites, pulling the strings of our very existence.
                        You may wonder, "But where's the evidence?" Well, my friend, it's all around us if you open your
                        eyes!</span>
                        Look for the signs: strange behavior from world leaders, unusual political decisions, and odd
                        occurrences in popular culture. Remember, it's all part of their plan to enslave humanity and
                        harvest
                        our energy!
                        But fear not, for there is hope! By spreading awareness and awakening others to the truth, we
                        can
                        resist
                        the reptilian agenda. Unite, my fellow truth-seekers! Break free from the reptilian matrix and
                        reclaim
                        <img id="featuredtruth__article--img3"
                            src="https://images.squarespace-cdn.com/content/v1/5d7bb7a17606e352c9d76e24/1580600240409-GRQXV2JG7NHQA0MP51R7/ks-web-illuminati-2.gif?format=500w"
                            alt="">
                        But fear not, for there is hope! By spreading awareness and awakening others to the truth, we
                        can
                        resist
                        the reptilian agenda. Unite, my fellow truth-seekers! Break free from the reptilian matrix and
                        reclaim
                        our world!
                        Now, I must go into hiding before the lizard people catch wind of my revelations. Stay vigilant
                        and
                        question everything, my friend. The truth is out there, waiting to be discovered!"
                        &lt;/article&gt;
                    </section>
                    <aside id="featuredtruth__list">
                        OTHER TRUTHS THE GOVERNMENT DOESNT WANT YOU TO KNOW
                        ${ConspiracyHTML()}
                    </aside>
                </section>
            </article>
            <section class="store">
                <img id="store__img"
                    src="https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_450,w_800,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1542560722/181118-weill-flat-earth-convention-hero-1_mcgxkz"
                    alt="">
                <p id="store__title">SUPPORT THE FIGHT!!! BUY MY THINGS!!!!</p>
                <div id="store__item">
                    ${StoreHTML()}
                </div>
            </section>
            <footer class="footer">
                <section id="footer__petition">
                    <label for="email" id="footer__petition--prompt">Sign our petition to rename "fire ants" to "<span id="footer__petition--font">spicey bois</span>":</label>
                    <input type="email" id="footer__petition--email">
                    <button id="footer__petition--button">CLICK</button>
                    ${Ants()}
                </section>
                <div class="footer__images">
                    <img id="footer__images--1" src="https://media.tenor.com/v9fF39h0R14AAAAd/alien-dance.gif" alt="">
                    <img id="footer__images--2" src="https://media.tenor.com/v9fF39h0R14AAAAd/alien-dance.gif" alt="">
                    <img id="footer__images--3" src="https://media.tenor.com/v9fF39h0R14AAAAd/alien-dance.gif" alt="">
                    <img id="footer__images--4" src="https://media.tenor.com/v9fF39h0R14AAAAd/alien-dance.gif" alt="">
                    <img id="footer__images--5" src="https://media.tenor.com/v9fF39h0R14AAAAd/alien-dance.gif" alt="">
                </div>
                <section class="music">
                <iframe src="src/music/The Government Is Watching You - poptarts.wav" allow="autoplay" id="audio"
                    style="display: none"></iframe>
                    <audio id="player" controls autoplay="autoplay" loop>
                        <source src="src/music/The Government Is Watching You - poptarts.ogg" type="audio/ogg">
                        <source src="src/music/The Government Is Watching You - poptarts.mp3" type="audio/mp3">
                        <source src="src/music/The Government Is Watching You - poptarts.wav" type="audio/wav">
                        Your browser does not support the audio element.
                        </source>
                    </audio>
                </section>
                <section class="footer__socials">
                    Social Links:
                    <div id="footer__socials--list">
                        <div id="footer__socials--list1">
                            ul 1 Twitter
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                                <img id="footer__socials--list1img" src="https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139735.png/image">
                            </a>
                        </div>
                        <div id="footer__socials--list2">
                            ul 2 Myspace
                            <a href="/myspace/">
                                <img id="footer__socials--list2img"src="https://icons.iconarchive.com/icons/martz90/circle/512/myspace-icon.png">
                            </a>    
                        </div>
                        <div id="footer__socials--list3">
                            ul 3 Tumblr
                            <a href="http://www.patience-is-a-virtue.org/">
                                <img id="footer__socials--list3img" src="https://assets.stickpng.com/images/61378cc14b96600004f676e2.png">
                            </a>
                        </div>
                    </div>
                </section>
            </footer>


        </main>

ser
    </body>
    `
}

