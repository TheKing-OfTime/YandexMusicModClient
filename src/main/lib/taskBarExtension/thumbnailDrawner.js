const sharp = requireIfExists("sharp");

async function drawThumbnail(width, height, previousTrack, currentTrack, nextTrack, isPlaying = true) {
    if (!sharp || !currentTrack || width <= 0 || height <= 0) {
        return null;
    }

    const background = sharp({
        create: {
            width,
            height,
            channels: 4,
            background: { r: 0, g: 0, b: 0, alpha: 0.0 }
        }
    });

    const smallSize = Math.floor(height * 0.9);
    const gap = Math.floor(height * 0.15);

    const currImg = await sharp(currentTrack).resize(isPlaying ? height : smallSize, isPlaying ? height : smallSize, {fit: "inside"}).toBuffer();
    const prevImg = previousTrack
        ? await sharp(previousTrack).resize(smallSize).toBuffer()
        : null;
    const nextImg = nextTrack
        ? await sharp(nextTrack).resize(smallSize).toBuffer()
        : null;

    const layers = [];
    if (prevImg)
        layers.push({
            input: prevImg,
            top: Math.floor(height / 2) - Math.floor(smallSize / 2),
            left: Math.floor(width / 2) - Math.floor(height / 2) - smallSize - gap
        });
    if (currImg)
        layers.push({
            input: currImg,
            top: isPlaying ? 0 : Math.floor(height / 2) - Math.floor(smallSize / 2),
            left: Math.floor((width) / 2) - Math.floor((isPlaying ? height : smallSize) / 2)
        });
    if (nextImg)
        layers.push({
            input: nextImg,
            top: Math.floor(height / 2) - Math.floor(smallSize / 2),
            left: Math.floor(width / 2) + Math.floor(height / 2) + gap
        });

    return await background.composite(layers).png().toBuffer();
}

module.exports = { drawThumbnail };
