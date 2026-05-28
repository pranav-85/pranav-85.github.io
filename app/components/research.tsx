import { Section } from "./section";

const PUBLICATIONS = [
  {
    authors: "Roy Chaudhuri, S., Madupu, S.P., Sai, K.T.G., Jamwal, V.",
    year: 2026,
    title: "LoopMatcher: Proof-of-Concept for AI-Assisted Music Loop Search",
    conference: "EvoMUSART 2026",
    series: "Lecture Notes in Computer Science, vol 16523",
    publisher: "Springer, Cham",
    doi: "https://doi.org/10.1007/978-3-032-24350-8_26",
  },
];

export function Research() {
  return (
    <Section id="research" title="📚 Research and Publications">
      <div className="space-y-6">
        {PUBLICATIONS.map((publication, index) => {
          // Parse authors and highlight "Madupu, S.P."
          const authorsArray = publication.authors.split(", ");
          const highlightedAuthors = authorsArray.map((author, i) => {
            if (author.includes("Madupu, S.P.")) {
              return (
                <span key={i}>
                  <span className="font-semibold text-foreground">
                    {author}
                  </span>
                  <a
                    href={publication.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-accent hover:underline"
                  >
                    🔗
                  </a>
                </span>
              );
            }
            return <span key={i}>{author}</span>;
          });

          return (
            <div key={index} className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">
                {publication.title}
              </h3>
              <p className="text-base text-muted-foreground">
                {authorsArray.length > 0 &&
                  authorsArray.map((author, i) => (
                    <span key={i}>
                      {author.includes("Madupu, S.P.") ? (
                        <>
                          <span className="font-semibold text-foreground">
                            {author}
                          </span>
                          <a
                            href={publication.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 text-accent hover:underline"
                          >
                            🔗
                          </a>
                        </>
                      ) : (
                        author
                      )}
                      {i < authorsArray.length - 1 && ", "}
                    </span>
                  ))}
                {" "}
                ({publication.year})
              </p>
              <p className="text-base text-muted-foreground">
                <span className="font-medium text-foreground">
                  {publication.conference}
                </span>
                . {publication.series}. {publication.publisher}.{" "}
                <a
                  href={publication.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Springer →
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
