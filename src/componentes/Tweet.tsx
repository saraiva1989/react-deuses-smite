
type TweetProps = {
    texto: string;
}

export function Tweet(props: TweetProps) {
    return (
        <div>
            <p>{props.texto}</p>
        </div>
    );
}