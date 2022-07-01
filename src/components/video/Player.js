export default function Player({ link, title }) {
    return (
        <iframe
            width="100%"
            className="aspect-video"
            src={link}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}
