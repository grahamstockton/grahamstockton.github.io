const images = [
    "moka.jpg",
    "coffee.jpg",
    "brownie.jpg",
    "websiteWork.jpg",
    "benee.jpg",
    "fri.jpg",
    "lunch.jpg",
    "league.png",
    "work2.jpg",
    "pengu.gif"
];

const blurbs = [
    "The first thing I did before any work was make coffee. I used the moka pot and the coffee that brewed was a really deep brown.",
    "Here is a close up of my coff. I originally planned to share with Kevin or Kieran, but they had already had some so I had an extra tall mug today.",
    "To go with my coffee, I had crownie, which I made last night.",
    "Once I had everything set up, I started work. I worked on this website, as well as some light homework.",
    "While I was working, I listened to this album by Benee a couple times. It's a good vibe <3.",
    "At 4pm, I had a photo shoot for the FRI computational materials group. Chai hasn't sent me that photo yet, so here's an old one of my group.",
    "lonch :3",
    "After lunch, I played some league with jas and lost twice. Was a nice time even though we got stomped",
    "After that I did my cs homework and waited for you to get home from your movie.",
    "That's all I've got! Hope you liked it <3"
];

var position = 0;
var interval;

const createInterval = () => {
    return setInterval(() => {
        position = (position + 1) % images.length; 
        document.getElementById("main-image").src = images[position];
        document.getElementById("main-image-caption").innerText = blurbs[position];
    }, [12000]);
}

const startInterval = () => {
    if (!interval) { interval = createInterval(); }
}

const endInterval = () => {
    clearInterval(interval);
    interval = null;
}

const previous = () => {
    endInterval();
    position = ((position - 1) + images.length) % images.length;
    document.getElementById("main-image").src = images[position];
    document.getElementById("main-image-caption").innerText = blurbs[position];
    startInterval();
}

const next = () => {
    endInterval();
    position = (position + 1) % images.length;
    document.getElementById("main-image").src = images[position];
    document.getElementById("main-image-caption").innerText = blurbs[position];
    startInterval();
}

const windowOnLoad = () => {
    document.getElementById("main-image").src = images[position];
    document.getElementById("main-image-caption").innerText = blurbs[position];
    startInterval();

    // preload images
    var imageHolding = [];
    for (let i in images) {
        var img = new Image();
        img.src = images[i];
        imageHolding.push(img);
    }
}

window.onload = windowOnLoad;