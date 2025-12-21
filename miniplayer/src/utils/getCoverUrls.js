export default function getCoverUrls(coverUri) {
    if (!coverUri) return null;

    const base = 'https://' + coverUri;
    return {
        src: base.replace('%%', '400x400'),
        srcSet: [
            `${base.replace('%%', '400x400')} 400w`,
            `${base.replace('%%', '800x800')} 800w`,
            `${base.replace('%%', '1000x1000')} 1000w`,
        ].join(', '),
    };
}
